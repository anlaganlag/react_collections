export function formatRange(min, max) {
  if (min === max) {
    return min;
  }

  return `${min} - ${max}`;
}

//太长就不显示扩展包部分..
export function formatChosenTitle(title,maxLength=40) {
  if (title.length > maxLength ) {
    return title.slice(0,maxLength)+"..."
  }
  return title;
}
export function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}
