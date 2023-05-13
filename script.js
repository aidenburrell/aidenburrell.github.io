
printPyramid(5);

function printPyramid(height) {
  for (let row = 0; row < height; row++) {
    let bricks = "";
    let spaces = "";
    for (let col = 0; col < height - row - 1; col++) {
      spaces += " ";
    }
    for (let col = 0; col < row + 1; col++) {
      bricks += "#";
    }
    console.log(spaces + bricks);
  }
}
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

 
const container = document.getElementById("pyramid");
const rowElement = document.createElement("p");
rowElement.innerText = rowStr;
container.appendChild(rowElement);

const notice = document.getElementById("notice");
notice.remove();

}
const pyramidButton = document.getElementById("pyramidButton");

pyramidButton.addEventListener("click", function() {
  const height = document.getElementById("height").value;
  determineHeightAndThenDrawPyramid(height);
});

function drawPyramid(height) {

  document.getElementById("pyramid").innerHTML = "";

}