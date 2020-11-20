import * as dvUtils from "./DataVisualizerUtils";

export const DataVisualizerTweet = ({ tweet }) => {
  const trays = dvUtils.getTokenTrays({
    tokens: tweet.sentiment.tokenizedPhrase,
  });

  let innerHTML = tweet.tweet;

  const trayKeys = Object.keys(trays);

  for (var i = trayKeys.length - 1; i >= 0; i--) {
    let tray = [...new Set(trays[trayKeys[i]])];
    for (var j = tray.length - 1; j >= 0; j--) {
      if (/^[a-z0-9]+$/i.test(tray[j])) {
        innerHTML = innerHTML.replace(
          RegExp("\\b" + tray[j] + "\\b", "gi"),
          (token) => `<span class="${trayKeys[i]}">` + token + "</span>"
        );
      }
    }
  }

  return <div dangerouslySetInnerHTML={{ __html: innerHTML }} />;
};

export default DataVisualizerTweet;
