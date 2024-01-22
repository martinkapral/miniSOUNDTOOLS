let bpmReverb = document.getElementById("bpm-reverb");
const convertBtn = document.getElementById("convert-btn");

// HALL CONVERSION

let preHallNumber = document.getElementById("pre-hall");
let decayHallNumber = document.getElementById("decay-hall");
let totalHallNumber = document.getElementById("total-hall");

let preHall = 7500;
let decayHall = 472500;
let totalHall = 480000;

// LARGE ROOM CONVERSION

let preLRnumber = document.getElementById("pre-LR");
let decayLRnumber = document.getElementById("decay-LR");
let totalLRnumber = document.getElementById("total-LR");

let preLR = preHall / 2;
let decayLR = decayHall / 2;
let totalLR = totalHall / 2;

// SMALL ROOM CONVERSION

let preSRnumber = document.getElementById("pre-SR");
let decaySRnumber = document.getElementById("decay-SR");
let totalSRnumber = document.getElementById("total-SR");

let preSR = preLR / 2;
let decaySR = decayLR / 2;
let totalSR = totalLR / 2;

// TIGHT AMBIENCE CONVERSION

let preTAnumber = document.getElementById("pre-TA");
let decayTAnumber = document.getElementById("decay-TA");
let totalTAnumber = document.getElementById("total-TA");

let preTA = preSR / 2;
let decayTA = decaySR / 2;
let totalTA = totalSR / 2;

function calculateReverb() {
  if (bpmReverb.value > 0) {
    preHallNumber.innerHTML = `${(preHall / bpmReverb.value).toFixed(2)} ms`;
    decayHallNumber.innerHTML = `${(decayHall / bpmReverb.value).toFixed(
      2
    )} ms`;
    totalHallNumber.innerHTML = `${(totalHall / bpmReverb.value).toFixed(
      2
    )} ms`;

    preLRnumber.innerHTML = `${(preLR / bpmReverb.value).toFixed(2)} ms`;
    decayLRnumber.innerHTML = `${(decayLR / bpmReverb.value).toFixed(2)} ms`;
    totalLRnumber.innerHTML = `${(totalLR / bpmReverb.value).toFixed(2)} ms`;

    preSRnumber.innerHTML = `${(preSR / bpmReverb.value).toFixed(2)} ms`;
    decaySRnumber.innerHTML = `${(decaySR / bpmReverb.value).toFixed(2)} ms`;
    totalSRnumber.innerHTML = `${(totalSR / bpmReverb.value).toFixed(2)} ms`;

    preTAnumber.innerHTML = `${(preTA / bpmReverb.value).toFixed(2)} ms`;
    decayTAnumber.innerHTML = `${(decayTA / bpmReverb.value).toFixed(2)} ms`;
    totalTAnumber.innerHTML = `${(totalTA / bpmReverb.value).toFixed(2)} ms`;
  }
}
