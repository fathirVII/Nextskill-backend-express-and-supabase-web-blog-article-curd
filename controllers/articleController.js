const express = require("express");
const db = require("../utils/db");

const getArticle = async (req, res) => {
  try {
    const article = await db.from("articles").select();
    res.status(200).json({ article });
  } catch (error) {
    res.status(500).json({ message: "server error!" });
  }
};
const addArticle = async (req, res) => {
  try {
    const { title, content, author, category } = req.body;

    // Validasi kategori
    const allowedCategories = ["DIY", "Tutorial", "Recipes", "News"];
    if (!allowedCategories.includes(category)) {
      return res.status(400).json({
        message:
          "Kategori tidak valid pilih salah satu dari: DIY, Tutorial, Recipes, News",
      });
    }

    const newArticle = await db
      .from("articles")
      .insert({ title, content, author, category });
    res.status(201).json({ message: "Data Berhasil di tambahkan!" });
  } catch (error) {
    res.status(500).json({ message: "Data gagal di tambahkan!" });
  }
};
const updateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author, category } = req.body;

    // Validasi kategori
    const allowedCategories = ["DIY", "Tutorial", "Recipes", "News"];
    if (!allowedCategories.includes(category)) {
      return res.status(400).json({
        message:
          "Kategori tidak valid pilih salah satu dari: DIY, Tutorial, Recipes, News",
      });
    }

    const { data, error } = await db
      .from("articles")
      .update({ title, content, author, category })
      .eq("id", id)
      .select();
    if (error) throw error;

    if (data.length === 0) {
      return res.status(404).json({ message: "Article tidak ditemukan." });
    }
    res.status(200).json({ message: "Article berhasil diperbarui." });
  } catch (error) {
    console.log(err);
    res.status(500).json({ message: "Server error!" });
  }
};
const removeArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await db
      .from("articles")
      .delete()
      .eq("id", id)
      .select();

    if (error) throw error;
    if (data.length === 0) {
      return res.status(404).json({ message: "Article tidak ditemukan." });
    }
    res.status(200).json({ message: "Article berhasil dihapus." });
  } catch (error) {
    res.status(500).json({ message: "Server error!" });
  }
};

module.exports = { getArticle, addArticle, updateArticle, removeArticle };
