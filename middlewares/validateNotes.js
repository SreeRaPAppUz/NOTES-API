const validateNotes = (req, res, next) => {
  const { title, content } = req.body;

  const errors = [];

  if (!title || title.trim() === "") {
      errors.push("Title is required");
  } else if (title.length < 3) {
      errors.push("Title must be at least 3 characters long");
  }

  if (!content || content.trim() === "") {
      errors.push("Content is required");
  } else if (content.length < 5) {
      errors.push("Content must be at least 5 characters long");
  }

  if (errors.length > 0) {
      return res.status(400).json({ errors });
  }

  next();
};

module.exports = validateNotes;