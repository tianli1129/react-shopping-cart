const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyParser);

mongoose.connect(
  //replace with your mongodb url
  "mongodb+srv://crimsonlaolao:19931129@cluster0.omdenku.mongodb.net/merng?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    description: String,
    image: String,
    price: String,
    availableSize: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deledProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deledProduct);
});

const port = process.env.PORT || 5001;

app.listen(port, () => console.log("serve at http://localhost:5000"));
