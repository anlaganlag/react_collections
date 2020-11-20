import mongoose from "mongoose";
import ElectionMethods from "./Election";
import SearchMethods from "./Search";

mongoose.connect(process.env.MONGODB_URI, {
  w: "majority",
  retryWrites: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: false,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

export default { Election: ElectionMethods, Search: SearchMethods };
