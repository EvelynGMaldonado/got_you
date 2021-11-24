const { AuthenticationError } = require("apollo-server-express");
const { User, ServicePost } = require('../models');
const { signToken } = require("../utils/auth");


//functions for queries in typeDef.js
const resolvers = {
  Query: {
    //when we add context to the query, then i can retrieve the logged in user without have to specififally look for it.
    me: async (parent, args, context) => {
      //if context has an 'user property' then it means that the user excecuting this query has a valid JWT and is already logged in
      if(context.user) {
        const userData = await User.findOne({
          _id:context.user._id
        })
        .select("-__v -password").populate("ServicePost");
        return userData;
      }
      throw new AuthenticationError("User is not logged in")
    },
    findServicePost: async (parent, { location }) => {
      //if context has an 'user property' then it means that the user excecuting this query has a valid JWT and is already logged i
      const params = location ? { location } : {};
      return ServicePost.find(params).populate("User");
    }
  },
  Mutation: {
    //creates a single user an a jwt token for that user
    addUser: async (parent, args) => {
      try {
        //create a new user first
        const user = await User.create(args);
        //sign a JSON web token and log in the user after it is created
        const token = signToken(user);
        //we need to return an 'auth' object that contains the signed token and user's info
        return { token, user };
      } catch (err) {
        console.log(err);
      }
    },
    addServicePost: async (parent, args) => {
      try {
        //create a new user first
        const post = await ServicePost.create(args);
        return post;
      } catch (err) {
        console.log(err);
      }
    },
    //login mutation to find a specific user by email in the db
    login: async (parent, { email, password }) => {
      //look for the user by the email which has to be unique
      const user = await User.findOne({ email });
      //if there is no user with that email address then i need to return a authentication error
      if (!user) {
        throw new AuthenticationError("No user was found");
      }
      //if the user was found, then we need to excecute the 'isCorrectPassword' instance method and check if the password is correct
      const correctPw = await user.isCorrectPassword(password);
      //if the password is not correct then return authentication error
      if(!correctPw) {
        throw new AuthenticationError("Incorrect password");
      }
      //if email and password are correct, then sign the yser into the app with a jwt
      const token = signToken(user);
      return { token, user };
    },
    savedServicePost: async (parent, args, context) => {
      //if context has an 'user property' then it means that the user excecuting this query has a valid JWT and is already logged in
      if(context.user) {
        const updateUser = await User.findOneAndUpdate({
          _id:context.user._id
        },
        //push the book to an array of books associated with this user
        { $addToSet: { ServicePost: args._id } },
        { new: true,
        runValidators: true }
        );
        return updateUser;
      }
      //if usert attempts to execute this update mutation and it is not logged in, then I need to throw an error
      throw new AuthenticationError("User is not logged in");
    },
    //when we add context to the query, then i can retrieve the logged in user without have to specififally look for it.
    removeServicePost: async (parent, args, context) => {
      //if context has an 'user property' then it means that the user excecuting this query has a valid JWT and is already logged in
      if(context.user) {
        const updateUser = await User.findOneAndUpdate({
          _id:context.user._id
        },
        //delete the book based on the book ID from the db
        { $pull: { savedServicePost: { _id: args._id } } },
        { new: true }
        );
        return updateUser;
      }
      //if usert attempts to execute this update mutation and it is not logged in, then I need to throw an error
      throw new AuthenticationError("User is not logged in");
    },
  },
  //when we add context to the query, then i can retrieve the logged in user without have to specififally look for it.
  

};

module.exports = resolvers;
