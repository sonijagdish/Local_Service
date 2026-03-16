const Review = require("../models/ReviewModel");

const createReview = async (req, res) => {
  const review = await Review.create(req.body);
  res.json(review);
};

const getAllReviews = async (req, res) => {
  const reviews = await Review.find()
    .populate("userId")
    .populate("providerId");

  res.json(reviews);
};

const getReviewById = async (req, res) => {
  const review = await Review.findById(req.params.id);
  res.json(review);
};

const updateReview = async (req, res) => {
  const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(review);
};

const deleteReview = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: "Review deleted" });
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
