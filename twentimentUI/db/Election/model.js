import mongoose, { Schema } from "mongoose";

const electionSchema = new Schema({
  candidate: String,
  date: Date,
  tweets: Array,
  cumulative: Object,
});

const ElectionModel =
  mongoose.models.Election || mongoose.model("Election", electionSchema);

export default ElectionModel;
