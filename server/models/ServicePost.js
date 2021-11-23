const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: Number,
    required: true,
  },
  hourly_rate: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    required: [true, 'User phone number required']
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const ServicePost = model('ServicePost', serviceSchema);

module.exports = ServicePost;
