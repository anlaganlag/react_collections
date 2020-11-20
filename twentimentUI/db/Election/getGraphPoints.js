import Election from "./model";

const getGraphPoints = ({ year }) =>
  new Promise((resolve, reject) =>
    Election.find(
      { date: { $gte: new Date(year), $lt: new Date(`${+year + 1}`) } },
      "candidate date cumulative.score"
    )
      .lean()
      .exec((err, results) =>
        err
          ? reject(err)
          : (() => {
              const candidates = [...new Set(results.map((i) => i.candidate))];
              const payload = candidates.map((candidate) => ({
                label: candidate,
                data: results
                  .filter((result) => result.candidate === candidate)
                  .map((i) => ({
                    x: i.date,
                    y: (i.cumulative && i.cumulative.score) || 0,
                  })),
              }));
              resolve(payload);
            })()
      )
  );

export default getGraphPoints;
