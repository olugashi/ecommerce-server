const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  images: [{ type: String }],
  description: String,
  tags: [{ type: String }]
});

ProductSchema.set("toJSON", { virtuals: true });

// Export the model
module.exports = mongoose.model("Product", ProductSchema);
