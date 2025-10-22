import WaterProductModel from "../models/waterProduct.modul.js";

const createWaterProduct = async (req, res) => {
  try {
    const product = await WaterProductModel.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    next(err)
  }
};

const getWaterProducts = async (req, res) => {
  try {
    const products = await WaterProductModel.find();
    res.status(200).json(products);
  } catch (err) {
    next(err)
  }
};

const getWaterProductById = async (req, res) => {
  try {
    const product = await WaterProductModel.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    next(err)
  }
};

const updateWaterProduct = async (req, res) => {
  try {
    const product = await WaterProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    next(err)
  }
};

const deleteWaterProduct = async (req, res) => {
  try {
    const product = await WaterProductModel.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    next(err)
  }
};

export{createWaterProduct,deleteWaterProduct,updateWaterProduct,getWaterProductById,getWaterProducts}
