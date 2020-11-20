import { getCompleteToken } from "./getCompleteToken";

export function getTokenTrays({ tokens = [], limit }) {
  const tray = { positive: [], negative: [] };

  for (var i = tokens.length - 1; i >= 0; i--) {
    tokens[i].score < 0
      ? tray.negative.push(getCompleteToken(i, tokens))
      : tokens[i].score > 0
      ? tray.positive.push(getCompleteToken(i, tokens))
      : null;
  }

  const getCount = (trayKey, word) =>
    tray[trayKey].filter((i) => i === word).length;

  limit &&
    Object.keys(tray).forEach((trayKey) => {
      tray[trayKey].sort((a, b) => getCount(trayKey, b) - getCount(trayKey, a));
      tray[trayKey] = [...new Set(tray[trayKey])].slice(0, limit);
    });

  return tray;
}
