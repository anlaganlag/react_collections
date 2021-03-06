document.querySelector("#msg").innerText = document.querySelector(
  "[name='msg']"
).value

document.querySelector("[name='msg']").addEventListener("input", (el) => {
  document.querySelector("#msg").innerText = el.target.value;
});
