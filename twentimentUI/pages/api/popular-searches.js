import db from "../../db";

export default (req, res) =>
  req.method === "GET"
    ? db.Search.getMostPopular()
        .then((mostPopularSearches) => res.json(mostPopularSearches))
        .catch((err) => res.status(500).send(err))
    : res.status(405).send("Request method not supported.");
