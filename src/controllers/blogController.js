import { Blog } from "../model/blogSchema.js";
import { User } from "../model/userSchema.js";

export const createBlog = async (req, res, next) => {
  const { title, content, tags, status } = req.body;
  const author = req.user._id;
  if (!title || !content || !tags) {
    return res.status(400).json({
      message: "Fill all the fields",
    });
  }
  const userExists = await User.findById(author);
  if (!userExists) {
    return res.status(400).json({ message: "author not found" });
  }

  const blog = await Blog({
    title: title,
    content: content,
    author,
    tags,
    status: status || "draft",
  }).save();

  userExists.blogs.push(blog._id);
  await userExists.save();
  if (blog.status === "published") {
    res.status(201).json({
      message: "Blog Is Created successfully",
      blog,
    });
  } else {
    res.status(201).json({
      message: "Draft Save successfully",
      blog,
    });
  }
};

export const deleteBlog = async (req, res, next) => {
  try {
    const blogId = req.params.id;

    if (!blogId) {
      return res.status(400).json({
        message: "Blog ID is required",
      });
    }

    const blogToDelete = await Blog.findById(blogId);
    if (!blogToDelete) {
      return res.status(400).json({
        message: "Blog post not found",
      });
    }

    const userId = req.user._id;
    if (blogToDelete.author.toString() !== userId.toString()) {
      return res.status(400).json({
        message: "Unauthorized: You are not the author of this blog post",
      });
    }

    try {
      await Blog.deleteOne({ _id: blogId }); // Use deleteOne
    } catch (error) {
      return res.status(400).json({ error });
    }

    try {
      await User.findByIdAndUpdate(userId, { $pull: { blogs: blogId } });
    } catch (error) {
      return res.status(400).json({ error });
    }
    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const getUserBlogs = async (req, res, next) => {
  const author = req.user._id;
  const { status } = req.body;
  console.log(status);

  const query = { author };
  if (status) {
    query.status = status; // Add status to the query if provided
  }
  const blogs = await Blog.find(query);

  if (!blogs) {
    return res.status(400).json({
      message: "no blog found",
    });
  }
  res.status(200).json({
    blogs,
  });
};

export const getUserBlog = async (req, res, next) => {
  const blogId = req.params.id;

  if (!blogId) {
    return res.status(400).json({
      message: "Blog ID is required",
    });
  }
  const blog = await Blog.findById(blogId);
  if (!blog) {
    return res.status(400).json({
      message: "Blog post not found",
    });
  }
  res.status(200).json({
    blog,
  });
};
