//
//
// REVERB CALCULATOR
//
//

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

//
//
// DELAY CALCULATOR
//
//

// 1/1 CONVERSION

let notes11 = document.getElementById("notes11");
let dotted11 = document.getElementById("dotted11");
let triplets11 = document.getElementById("triplets11");

let notes = 240000;
let dotted = 360000;
let triplets = 160000;

// 1/2 CONVERSION

let notes12 = document.getElementById("notes12");
let dotted12 = document.getElementById("dotted12");
let triplets12 = document.getElementById("triplets12");

// 1/4 CONVERSION

let notes14 = document.getElementById("notes14");
let dotted14 = document.getElementById("dotted14");
let triplets14 = document.getElementById("triplets14");

// 1/8 CONVERSION

let notes18 = document.getElementById("notes18");
let dotted18 = document.getElementById("dotted18");
let triplets18 = document.getElementById("triplets18");

// 1/16 CONVERSION

let notes116 = document.getElementById("notes116");
let dotted116 = document.getElementById("dotted116");
let triplets116 = document.getElementById("triplets116");

// 1/32 CONVERSION

let notes132 = document.getElementById("notes132");
let dotted132 = document.getElementById("dotted132");
let triplets132 = document.getElementById("triplets132");

// 1/64 CONVERSION

let notes164 = document.getElementById("notes164");
let dotted164 = document.getElementById("dotted164");
let triplets164 = document.getElementById("triplets164");

// 1/128 CONVERSION

let notes1128 = document.getElementById("notes1128");
let dotted1128 = document.getElementById("dotted1128");
let triplets1128 = document.getElementById("triplets1128");

function calculateDelay() {
  if (bpmReverb.value > 0) {
    notes11.innerHTML = `${(notes / bpmReverb.value).toFixed(2)} ms`;
    dotted11.innerHTML = `${(dotted / bpmReverb.value).toFixed(2)} ms`;
    triplets11.innerHTML = `${(triplets / bpmReverb.value).toFixed(2)} ms`;

    notes12.innerHTML = `${(notes / bpmReverb.value / 2).toFixed(2)} ms`;
    dotted12.innerHTML = `${(dotted / bpmReverb.value / 2).toFixed(2)} ms`;
    triplets12.innerHTML = `${(triplets / bpmReverb.value / 2).toFixed(2)} ms`;

    notes14.innerHTML = `${(notes / bpmReverb.value / 4).toFixed(2)} ms`;
    dotted14.innerHTML = `${(dotted / bpmReverb.value / 4).toFixed(2)} ms`;
    triplets14.innerHTML = `${(triplets / bpmReverb.value / 4).toFixed(2)} ms`;

    notes18.innerHTML = `${(notes / bpmReverb.value / 8).toFixed(2)} ms`;
    dotted18.innerHTML = `${(dotted / bpmReverb.value / 8).toFixed(2)} ms`;
    triplets18.innerHTML = `${(triplets / bpmReverb.value / 8).toFixed(2)} ms`;

    notes116.innerHTML = `${(notes / bpmReverb.value / 16).toFixed(2)} ms`;
    dotted116.innerHTML = `${(dotted / bpmReverb.value / 16).toFixed(2)} ms`;
    triplets116.innerHTML = `${(triplets / bpmReverb.value / 16).toFixed(
      2
    )} ms`;

    notes132.innerHTML = `${(notes / bpmReverb.value / 32).toFixed(2)} ms`;
    dotted132.innerHTML = `${(dotted / bpmReverb.value / 32).toFixed(2)} ms`;
    triplets132.innerHTML = `${(triplets / bpmReverb.value / 32).toFixed(
      2
    )} ms`;

    notes164.innerHTML = `${(notes / bpmReverb.value / 64).toFixed(2)} ms`;
    dotted164.innerHTML = `${(dotted / bpmReverb.value / 64).toFixed(2)} ms`;
    triplets164.innerHTML = `${(triplets / bpmReverb.value / 64).toFixed(
      2
    )} ms`;

    notes1128.innerHTML = `${(notes / bpmReverb.value / 128).toFixed(2)} ms`;
    dotted1128.innerHTML = `${(dotted / bpmReverb.value / 128).toFixed(2)} ms`;
    triplets1128.innerHTML = `${(triplets / bpmReverb.value / 128).toFixed(
      2
    )} ms`;
  }
}
