const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: function() {
      return this.category === 'Form or Checklist' || this.category === 'Document';
    }
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: function() {
      return this.category === 'Form or Checklist' || this.category === 'Document';
    }
  },
  dueDate: {
    type: Date,
    required: true
  },
  title: {
    type: String
  },
  details: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  attachments: [
    {
      type: String
    }
  ],
  pdfPath: {
    type: String  // Add this line to include pdfPath in the schema
  },
  vessel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vessel',
    required: true
  },
  role: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
