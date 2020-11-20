import Election from "./model";

const getDate = ({ candidate, date }) =>
  new Promise((resolve, reject) =>
    Election.findOne({ candidate, date }, "-__v -__id -_id")
      .lean()
      .exec((err, results) => (err ? reject(err) : resolve(results)))
  );

export default getDate;
