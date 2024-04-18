const express = require("express");
const blogRouter = express.Router();

const {
  fetchListOfBlogs,
  addNewBlog,
  deletBlog,
  updateBlog,
} = require("../controller/index");

blogRouter.get("/", fetchListOfBlogs);
blogRouter.post("/add", addNewBlog);
blogRouter.delete("/delete/:id", deletBlog);
blogRouter.put("/update/:id", updateBlog);

module.exports = blogRouter;
