import { db } from "../../config/db.js";
import PredioModel from "../models/predio.model.js";

export const getPredios = async (req, res) => {
  try {
    const results = await PredioModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al listar los predios",
    });
    console.log(error);
  }
};

export const getPredioById = async (req, res) => {
  try {
    const { id } = req.params;
    const results = await PredioModel.findById(id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `fError al listar el predio ${req.params.id}`,
    });
    console.log(error);
  }
};

export const createPredio = async (req, res) => {
  try {
    const { identificacion } = req.body;
    const existePredio = await PredioModel.findById(identificacion);
    console.log(existePredio);
    if (existePredio.length > 0) {
      return res.status(400).json({
        msg: "Ya existe un predio con esa identificacion",
        success: false,
      });
    }

    const results = await PredioModel.create(req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "Error al crear el predio",
    });
    console.log(error);
  }
};

export const updatePredio = async (req, res) => {
  try {
    const { id } = req.params;

    const existePredio = await PredioModel.findById(id);
    if (existePredio.length <= 0) {
      return res.status(400).json({
        msg: "Ese predio no existe",
        success: false,
      });
    }

    const results = await PredioModel.update(req.body, id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al actualiar el predio: ${req.params.id} ${error}`,
    });
    console.log(error);
  }
};

export const deletePredio = async (req, res) => {
  try {
    const { id } = req.params;

    const existePredio = await PredioModel.findById(id);
    if (existePredio.length <= 0) {
      return res.status(400).json({
        msg: "Ese predio no existe",
        success: false,
      });
    }

    
    const results = await PredioModel.delete(id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: `Error al elimina  el predio ${req.params.id}`,
    });
    console.log(error);
  }
};
