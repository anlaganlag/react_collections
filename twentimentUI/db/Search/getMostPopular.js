import Search from "./model";
import levenshtein from "fast-levenshtein";

const getMostPopular = () =>
  new Promise((resolve, reject) =>
    Search.find()
      .select("string -_id")
      .lean()
      .exec((err, results) =>
        err
          ? reject(err)
          : (() => {
              // set temp store
              let variationGroups = [];

              // group searches based on equality or similarity
              for (var i = results.length - 1; i >= 0; i--) {
                const { string } = results[i];
                const variationIndex = variationGroups.findIndex(
                  (variationGroup) =>
                    variationGroup.findIndex(
                      (variation) =>
                        string === variation ||
                        (string.length >= 4 &&
                          (string.includes(variation) ||
                            variation.includes(string))) ||
                        levenshtein.get(string, variation, {
                          useCollator: true,
                        }) < 3
                    ) !== -1
                );
                variationIndex !== -1
                  ? variationGroups[variationIndex].push(string)
                  : variationGroups.push([string]);
              }

              // sort by most popular groups
              variationGroups.sort((a, b) => b.length - a.length);

              // slice to only use 7 most popular groups
              variationGroups = variationGroups.slice(0, 6);

              // get most popular variation in group
              for (var i = variationGroups.length - 1; i >= 0; i--) {
                variationGroups[i] = variationGroups[i].reduce(
                  (a, b, i, arr) =>
                    arr.filter((v) => v === a).length >=
                    arr.filter((v) => v === b).length
                      ? a
                      : b,
                  variationGroups[i][0]
                );
              }

              // return results
              resolve(variationGroups);
            })()
      )
  );

export default getMostPopular;
