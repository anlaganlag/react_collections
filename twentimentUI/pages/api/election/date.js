import sanitized from "sanitized";
import db from "../../../db";

export default (req, res) =>
  req.method === "GET"
    ? db.Election.getDate({
        candidate: sanitized(req.query.candidate),
        date: sanitized(req.query.date),
      })
        .then((data) => res.json(data))
        .catch((err) => res.status(500).send(err))
    : res.status(405).send("Request method not supported.");
