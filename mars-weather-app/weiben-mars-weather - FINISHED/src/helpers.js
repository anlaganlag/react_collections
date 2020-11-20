export const formatDate = (date) =>
  date.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });

export const formatTemperature = (temperature, isMetric) => {
  if (isNaN(temperature)){
    return 
  }
  let returnTemp = temperature;
  if (!isMetric) {
    returnTemp = (temperature - 32) * (5 / 9);
  }
  return Math.round(returnTemp);
};
