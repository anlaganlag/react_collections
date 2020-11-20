import sanitized from "sanitized";
import { isValidSearch as validateSearch } from "../../lib";
import db from "../../db";
import twentiment from "twentiment";

let concurrentRequests = 0;

export default (req, res) =>
  req.method === "GET"
    ? (() => {
        const requestQuery = sanitized(req.query);

        const isValidSearch = validateSearch(requestQuery.search);

        function updateConcurrentRequests(update) {
          concurrentRequests = concurrentRequests + update;
          const indicator = update === 1 ? "➕" : "➖";
          console.log(
            `${indicator} CONCURRENT REQUESTS: ${concurrentRequests}.`
          );
        }

        function getTwentimentResults() {
          requestQuery.from && (requestQuery.since = requestQuery.from);
          delete requestQuery.from;
          updateConcurrentRequests(1);
          return twentiment(requestQuery);
        }

        function sendTwentimentResults(twentimentResults) {
          updateConcurrentRequests(-1);
          res.json(twentimentResults);
        }

        function sendTwentimentError(twentimentError) {
          updateConcurrentRequests(-1);
          res.status(500).send(twentimentError);
        }

        isValidSearch
          ? db.Search.save(requestQuery.search)
              .then(getTwentimentResults)
              .then(sendTwentimentResults)
              .catch(sendTwentimentError)
          : res.status(400).send("Invalid search.");
      })()
    : res.status(405).send("Request method not supported.");
