let num = 1;
let timeoutId; // Declare timeoutId
let blurr;

const taskTitle = document.querySelector(".task-title");
const stepTitle = document.querySelector(".practice-step-info");

// const radioButtons = document.querySelectorAll('input[name="navigation"]');
const buttonBox = document.querySelector(".practice-step-button");
function displayDiv(ele) {
  const taskScreen = document.querySelectorAll(".task-screen");
  taskScreen.forEach((task) => {
    task.classList.add("hide");
  });

  if (ele.classList.contains("tool-objective")) {
    document.querySelector(".objective").classList.remove("hide");
    taskTitle.textContent = "Objective";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementById("instructions").style.display = "none";
  }

  if (ele.classList.contains("tool-apparatus")) {
    document.querySelector(".apparatus").classList.remove("hide");
    taskTitle.textContent = "Apparatus";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
    document.getElementById("instructions").style.display = "none";
  }

  if (ele.classList.contains("tool-help")) {
    taskTitle.textContent = "Help";
    // document.getElementById("Results").style.display = "none";
    document.getElementById("variables").style.display = "none";
  }

  if (ele.classList.contains("tool-practice")) {
    document.querySelector(".practice").classList.remove("hide");
    taskTitle.textContent = "Experiment";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("variables").style.display = "block";
  }
}
function Refresh() {
  window.location = window.location.href;
}

function blurring() {
  if (blurr == true) {
    // document.getElementById("mainsimulation").style.filter = "blur(3px)";
    // document.getElementsByClassName(
    //   "task-screen practice"
    // )[0].style.backgroundColor = "rgba(0, 0, 0, 0.5);";

    // document.getElementById("resonatorImage").style.filter = "blur(3px)";
    document.getElementById("mainsimulation").style.display = "none";
    document.getElementById("resonatorImage").style.display = "none";
  } else if (blurr == false) {
    document.getElementById("mainsimulation").style.display = "block";
    document.getElementById("resonatorImage").style.display = "block";
    // document.getElementById("mainsimulation").style.filter = "blur(0px)";
    // document.getElementById("resonatorImage").style.filter = "blur(0px)";
  }
}

function help() {
  document.getElementById("instructions").style.display = "block";
  // document.getElementById('blocker').style.display = 'block';
  // document.getElementById("Results").style.display = "none";
  document.getElementById("variables").style.display = "none";
  document.getElementById("observation").style.display = "none";
  document.getElementById("graph-wrapper").style.display = "none";
}

function getValue() {
  var inp;
  inp = document.getElementById("slider");
  document.getElementById("fill1").innerHTML = inp.value;
}
function Fill() {
  var pic;
  pic = "images/img2.jpg";
  document.getElementById("resonatorImage").src = pic;
  // document.getElementById('resonatorImage').style.transform = "scale(1)";
  document.getElementById("strt").disabled = false;
  document.getElementById("att").disabled = false;
  document.getElementById("obsvtns").disabled = false;
  // document.getElementById('shwrslt').disabled=false;
}

function closeins() {
  document.getElementById("instructions").style.display = "none";
  blurr = false;
  // document.getElementById('blocker').style.display = 'none';
}
function obs() {
  document.getElementById("observation").style.display = "block";
  document.getElementById("resonatorImage").style.display = "none";
  blurr == true;
  // document.getElementById('blocker').style.display = 'block';
}
function closeobs() {
  document.getElementById("observation").style.display = "none";
  document.getElementById("resonatorImage").style.display = "block";
  blurr == false;
  // document.getElementById('blocker').style.display = 'none';
}

var counter = 0;
var images = [
  "images/imgA.jpg",
  "images/imgB 1.jpg",
  "images/imgB 2.jpg",
  "images/imgB 3.jpg",
  "images/imgB 4.jpg",
  "images/imgC 1.jpg",
  "images/imgC 2.jpg",
  "images/imgC 3.jpg",
  "images/imgC 4.jpg",
  "images/imgD 1.jpg",
  "images/imgD 2.jpg",
  "images/imgD 3.jpg",
  "images/imgD 4.jpg",
  "images/imgE 1.jpg",
  "images/imgE 2.jpg",
  "images/imgE 3.jpg",
  "images/imgF.jpg",
];

function startAnimation() {
  var image = document.getElementById("resonatorImage");
  image.src = images[counter];
  if (counter === 16) {
    clearTimeout(timeoutId);
    return;
  }
  counter = (counter + 1) % 17;
  setTimeout(startAnimation, 700);
  document.getElementById("att").disabled = false;
  document.getElementById("obsvtns").disabled = false;
  //  document.getElementById('shwrslt').disabled=false;
}
function addtable() {
  var table = document.getElementById("obstable");
  var row = table.insertRow(num);
  var freq = row.insertCell(0);
  var vol = row.insertCell(1);
  var frqinp = document.getElementById("slider").value;
  freq.innerHTML = frqinp;
  vol.innerHTML = (16550815.348 / (frqinp * frqinp)).toFixed(2);
  num = num + 1;
  document.getElementById("add").style.display = "block";
  setTimeout(timer, 2000);
}
function timer() {
  document.getElementById("add").style.display = "none";
}
function clearing() {
  var num1 = num;
  for (let j = 1; j < num1; ) {
    document.getElementById("obstable").deleteRow(j);
    num = num - 1;
  }
}
function reset() {
  location.reload();
}

// Get references to the button and the canvas element
const graphBtn = document.getElementById("graphButton");
const canvas = document.getElementById("myChart");

// Define a function to generate the graph
function generateGraph() {
  // Show the canvas element and hide the button
  canvas.style.display = "block";
  document.getElementById("observation").style.display = "none";
  document.getElementById("graph-wrapper").style.display = "block";
  blurr = true;
  document.getElementById("grph").style.display = "block";
  document.getElementById("clear").style.display = "none";
  document.getElementById("att").disabled = true;
  // Get the data from the table
  const table = document.getElementById("obstable");
  const freqs = [];
  const vols = [];
  for (let i = 1; i < table.rows.length; i++) {
    freqs.push(parseFloat(table.rows[i].cells[0].innerText));
    vols.push(parseFloat(table.rows[i].cells[1].innerText));
  }

  // Create the chart using Chart.js
  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Volume of Air Column vs 1/Frequency^2",
          data: vols.map((vol, i) => ({
            x: 1 / (freqs[i] * freqs[i]),
            y: vol,
          })),
          pointRadius: 5,
          pointHoverRadius: 7,
          pointBackgroundColor: "blue",
        },
      ],
    },
    options: {
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom",
            scaleLabel: {
              display: true,
              labelString: "1/Frequency^2",
            },
          },
        ],
        yAxes: [
          {
            type: "linear",
            scaleLabel: {
              display: true,
              labelString: "Volume of Air Column (cc)",
            },
          },
        ],
      },
    },
  });
}
function closegrph() {
  document.getElementById("grph").style.display = "none";
  document.getElementById("graph-wrapper").style.display = "none";
  document.getElementById("observation").style.display = "block";
  blurr = true;
  document.getElementById("graphButton").style.display = "none";
  document.getElementById("graphplotted").style.display = "block";
}

function plotted() {
  document.getElementById("grph").style.display = "block";
  document.getElementById("graph-wrapper").style.display = "block";
  document.getElementById("observation").style.display = "none";
  blurr = false;
}
