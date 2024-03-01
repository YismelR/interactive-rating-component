let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let selected = form.querySelector('input[name="rating"]:checked');
  if (!selected) {
    return;
  }

  let thankyou = document.querySelector(".thank-you");
  thankyou.style.display = "grid";
  let ratingState = document.querySelector(".rating-state");
  ratingState.style.display = "none";

  let rating = document.querySelector(".rating");
  if (selected) rating.textContent = selected.value;
});
