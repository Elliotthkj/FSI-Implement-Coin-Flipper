// TODO: Declare any global variables we need
let headsCount = 0;
let headsPercent = "0%";
let tailsCount = 0;
let tailsPercent = "0%";
let totalCount = 0;

document.addEventListener("DOMContentLoaded", function () {
  // TODO: Add event listener and handler for flip and clear buttons
  document.querySelector("#flip").addEventListener("click", function () {
    if (Math.random() > 0.499999999) {
      //heads
      document.querySelector("#penny-image").src =
        "assets/images/penny-heads.jpg";
      document.querySelector("#message").innerHTML = "You Flipped Heads!";
      headsCount++;
      totalCount++;
      headsPercent = Math.round((headsCount / totalCount) * 100);
      tailsPercent = Math.round((tailsCount / totalCount) * 100);
      document.querySelector("#heads").innerHTML = headsCount;
      document.querySelector("#heads-percent").innerHTML = headsPercent + '%';
      document.querySelector("#tails").innerHTML = tailsCount;
      document.querySelector("#tails-percent").innerHTML = tailsPercent + '%';
    } else {
      //tails
      document.querySelector("#penny-image").src =
        "assets/images/penny-tails.jpg";
      document.querySelector("#message").innerHTML = "You Flipped Tails!";
      tailsCount++;
      totalCount++;
      headsPercent = Math.round((headsCount / totalCount) * 100);
      tailsPercent = Math.round((tailsCount / totalCount) * 100);
      document.querySelector("#heads").innerHTML = headsCount;
      document.querySelector("#heads-percent").innerHTML = headsPercent + '%';
      document.querySelector("#tails").innerHTML = tailsCount;
      document.querySelector("#tails-percent").innerHTML = tailsPercent + '%';
    }
    // TODO: Determine flip outcome
    // TODO: Update image and status message in the DOM
    // Update the scorboard
    // TODO: Calculate the total number of rolls/flips
    // Make variables to track the percentages of heads and tails
    // TODO: Use the calculated total to calculate the percentages
    // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
    // TODO: Update the display of each table cell
  });
  document.querySelector("#clear").addEventListener("click", function () {
    // Clear Button Click Handler
    let headsCount = 0;
    let headsPercent = "0%";
    let tailsCount = 0;
    let tailsPercent = "0%";
    let totalCount = 0;
    document.querySelector("#message").innerHTML = "Lets get Flipping!";
    document.querySelector("#penny-image").src =
      "assets/images/penny-heads.jpg";
      document.querySelector("#heads").innerHTML = headsCount;
      document.querySelector("#heads-percent").innerHTML = headsPercent;
      document.querySelector("#tails").innerHTML = tailsCount;
      document.querySelector("#tails-percent").innerHTML = tailsPercent;
    // TODO: Update the scoreboard (same logic as in flip button click handler)
  });
});
