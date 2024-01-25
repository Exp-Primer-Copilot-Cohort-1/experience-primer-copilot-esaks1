// Create web browser
// http://localhost:3000/comments
// http://localhost:3000/comments/new
// http://localhost:3000/comments/1
// http://localhost:3000/comments/1/edit

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');
const User = require('../models/user');
const Post = require('../models/post');

// Create web browser
// http://localhost:3000/comments
router.get('/', (req, res) => {
  Comment.find({}, (err, comments) => {
    if (err) return console.log(err);
    res.render('comments/index', {comments});
  });
});

// Create web browser
// http://localhost:3000/comments/new
router.get('/new', (req, res) => {
  res.render('comments/new');
});

// Create web browser
// http://localhost:3000/comments/1
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
    if (err) return console.log(err);
    res.render('comments/show', {comment});
  });
});

// Create web browser
// http://localhost:3000/comments/1/edit
router.get('/:id/edit', (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
    if (err) return console.log(err);
    res.render('comments/edit', {comment});
  });
});



