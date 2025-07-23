const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// to connect to MongoDB local
mongoose.connect('mongodb://localhost:27017/alshakoe',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// to define a Review schema
const Review = mongoose.model('Review', {
    name: String,
    review: String,
});

//Middleware
app.use(cors());
app.use(express.json());

//Post: add a review
app.post('/api/reviews', async(req, res) =>{
    const review = new Review(req.body);
    await review.save();
    res.json(review);
});

//get: get all reviews
app.get('/api/reviews', async(req, res) =>{
    const reviews = await Review.find();
    res.json(reviews);
});

//start server
app.listen(3000, ()=> console.log('Server running on https://localhost:3000'));



// idk what this all means, and haven't connected to frontend