const mongoose = require("mongoose");
const Blog = require("../model/index");

const fetchListOfBlogs = async (req, res) => {
  let blogList;

  try {
    blogList = Blog.find();
  } catch (e) {
    console.log(e);
  }
  if (!blogList) {
    return res.status(404).json({ message: "no blog found" });
  }

  return res.status(200).json({ blogList });
};

const addNewBlog = async (req, res) => {
  const { title, description } = req.body;
  const currentDate = new Date()

  const newlycreatedblog = new Blog({
    title,
    description,
    date: currentDate
  });

  try {
    await newlycreatedblog.save();
  } catch (e) {
    console.log(e);
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlycreatedblog.save(session);
    session.commitTransaction();
  } catch (e) {
    return res.status(500).json({ message: e });
  }

  return res.status(200).json({ newlycreatedblog });
};

const deletBlog = async (req, res) => {
  const id = req.params.id;

  try {
    const findCurrentBlog = await Blog.findByIdAndDelete(id);
    if (!findCurrentBlog) {
      return res.status(404).json({ message: "no blog found" });
    }

    return res.status(200).json({ findCurrentBlog });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "unable to delete" });
  }
};

const updateBlog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  let currentBlog;

  try {
     currentBlog = await Blog.findByIdAndUpdate(id , {title,description});
  } catch (e) {
    console.log(e);
  }

  return res.status(200).json({ currentBlog });
};


module.exports = {fetchListOfBlogs,addNewBlog,deletBlog,updateBlog};