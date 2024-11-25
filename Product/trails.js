import mongoose from 'mongoose';

const trailSchema = new mongoose.Schema({
  location: String,
  names: [
    {
      name: String,
      elevation: Number,
      terrain: String,
      difficulty: String,
      duration: String,
      length: Number,
      nearWater: Boolean,
      userRating: Number,
      image: String,
    }
  ]
});

const Trail = mongoose.model('Trail', trailSchema);
export default Trail;


