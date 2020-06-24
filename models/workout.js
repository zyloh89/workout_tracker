const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise: {
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    distance: Number
  },
  totalDuration: {
    type: Number
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
