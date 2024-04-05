const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const newsletterSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensures email addresses are unique in the collection
    validate: {
      validator: function(v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  date: {
    type: Date,
    default: Date.now // Automatically set to current date and time
  }
});

// Create Model
const Newsletter = mongoose.model('Newsletter', newsletterSchema);

// Export the model
module.exports = Newsletter;
