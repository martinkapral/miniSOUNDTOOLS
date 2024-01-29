//
//
// REVERB CALCULATOR
//
//

let bpmReverb = document.getElementById("bpm-reverb");
let bpmDelay = document.getElementById("bpm-delay");
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
  if (bpmDelay.value > 0) {
    notes11.innerHTML = `${(notes / bpmDelay.value).toFixed(2)} ms`;
    dotted11.innerHTML = `${(dotted / bpmDelay.value).toFixed(2)} ms`;
    triplets11.innerHTML = `${(triplets / bpmDelay.value).toFixed(2)} ms`;

    notes12.innerHTML = `${(notes / bpmDelay.value / 2).toFixed(2)} ms`;
    dotted12.innerHTML = `${(dotted / bpmDelay.value / 2).toFixed(2)} ms`;
    triplets12.innerHTML = `${(triplets / bpmDelay.value / 2).toFixed(2)} ms`;

    notes14.innerHTML = `${(notes / bpmDelay.value / 4).toFixed(2)} ms`;
    dotted14.innerHTML = `${(dotted / bpmDelay.value / 4).toFixed(2)} ms`;
    triplets14.innerHTML = `${(triplets / bpmDelay.value / 4).toFixed(2)} ms`;

    notes18.innerHTML = `${(notes / bpmDelay.value / 8).toFixed(2)} ms`;
    dotted18.innerHTML = `${(dotted / bpmDelay.value / 8).toFixed(2)} ms`;
    triplets18.innerHTML = `${(triplets / bpmDelay.value / 8).toFixed(2)} ms`;

    notes116.innerHTML = `${(notes / bpmDelay.value / 16).toFixed(2)} ms`;
    dotted116.innerHTML = `${(dotted / bpmDelay.value / 16).toFixed(2)} ms`;
    triplets116.innerHTML = `${(triplets / bpmDelay.value / 16).toFixed(2)} ms`;

    notes132.innerHTML = `${(notes / bpmDelay.value / 32).toFixed(2)} ms`;
    dotted132.innerHTML = `${(dotted / bpmDelay.value / 32).toFixed(2)} ms`;
    triplets132.innerHTML = `${(triplets / bpmDelay.value / 32).toFixed(2)} ms`;

    notes164.innerHTML = `${(notes / bpmDelay.value / 64).toFixed(2)} ms`;
    dotted164.innerHTML = `${(dotted / bpmDelay.value / 64).toFixed(2)} ms`;
    triplets164.innerHTML = `${(triplets / bpmDelay.value / 64).toFixed(2)} ms`;

    notes1128.innerHTML = `${(notes / bpmDelay.value / 128).toFixed(2)} ms`;
    dotted1128.innerHTML = `${(dotted / bpmDelay.value / 128).toFixed(2)} ms`;
    triplets1128.innerHTML = `${(triplets / bpmDelay.value / 128).toFixed(
      2
    )} ms`;
  }
}

//
//
// SCALES
//
//

// CHANGING SELECTION
let selection = document.getElementById("scale-select");
let resultScale = document.getElementById("result-scale");

selection.addEventListener("change", () => {
  // resultScale.innerText = selection.options[selection.selectedIndex].text;
  restartScale();
  if (selection.value === "minorNatural") {
    resultScale.innerHTML = `<div class="minor-scale" id="minor-scale">
          
    <button class="normal" id="minor-a" onclick="minorA()">A</button>
    <button class="sharp" id="minor-asharp" onclick="minorAsharp()">A#</button>
    <button class="normal" id="minor-b" onclick="minorB()">B</button>
    <button class="normal" id="minor-c" onclick="minorC()">C</button>
    <button class="sharp" id="minor-csharp" onclick="minorCsharp()">C#</button>
    <button class="normal" id="minor-d" onclick="minorD()">D</button>
    <button class="sharp" id="minor-dsharp" onclick="minorDsharp()">D#</button>
    <button class="normal" id="minor-e" onclick="minorE()">E</button>
    <button class="normal" id="minor-f" onclick="minorF()">F</button>
    <button class="sharp" id="minor-fsharp" onclick="minorFsharp()">F#</button>
    <button class="normal" id="minor-g" onclick="minorG()">G</button>
    <button class="sharp" id="minor-gsharp" onclick="minorGsharp()">G#</button>
  </div>`;
  }

  if (selection.value === "minorHarmonic") {
    resultScale.innerHTML = `<div class="minor-scale" id="minor-scale">
          
    <button class="normal" id="minor-a" onclick="minorHarmonicA()">A</button>
    <button class="sharp" id="minor-asharp" onclick="minorHarmonicAsharp()">A#</button>
    <button class="normal" id="minor-b" onclick="minorHarmonicB()">B</button>
    <button class="normal" id="minor-c" onclick="minorHarmonicC()">C</button>
    <button class="sharp" id="minor-csharp" onclick="minorHarmonicCsharp()">C#</button>
    <button class="normal" id="minor-d" onclick="minorHarmonicD()">D</button>
    <button class="sharp" id="minor-dsharp" onclick="minorHarmonicDsharp()">D#</button>
    <button class="normal" id="minor-e" onclick="minorHarmonicE()">E</button>
    <button class="normal" id="minor-f" onclick="minorHarmonicF()">F</button>
    <button class="sharp" id="minor-fsharp" onclick="minorHarmonicFsharp()">F#</button>
    <button class="normal" id="minor-g" onclick="minorHarmonicG()">G</button>
    <button class="sharp" id="minor-gsharp" onclick="minorHarmonicGsharp()">G#</button>
  </div>`;
  }

  if (selection.value === "major") {
    resultScale.innerHTML = `<div class="minor-scale" id="minor-scale">
          
    <button class="normal" id="minor-a" onclick="majorA()">A</button>
    <button class="sharp" id="minor-asharp" onclick="majorAsharp()">A#</button>
    <button class="normal" id="minor-b" onclick="majorB()">B</button>
    <button class="normal" id="minor-c" onclick="majorC()">C</button>
    <button class="sharp" id="minor-csharp" onclick="majorCsharp()">C#</button>
    <button class="normal" id="minor-d" onclick="majorD()">D</button>
    <button class="sharp" id="minor-dsharp" onclick="majorDsharp()">D#</button>
    <button class="normal" id="minor-e" onclick="majorE()">E</button>
    <button class="normal" id="minor-f" onclick="majorF()">F</button>
    <button class="sharp" id="minor-fsharp" onclick="majorFsharp()">F#</button>
    <button class="normal" id="minor-g" onclick="majorG()">G</button>
    <button class="sharp" id="minor-gsharp" onclick="majorGsharp()">G#</button>
  </div>`;
  }
});

//
//
//
//

let keyA = document.getElementById("key-a");
let keyAsharp = document.getElementById("key-asharp");
let keyB = document.getElementById("key-b");
let keyC = document.getElementById("key-c");
let keyCsharp = document.getElementById("key-csharp");
let keyD = document.getElementById("key-d");
let keyDsharp = document.getElementById("key-dsharp");
let keyE = document.getElementById("key-e");
let keyF = document.getElementById("key-f");
let keyFsharp = document.getElementById("key-fsharp");
let keyG = document.getElementById("key-g");
let keyGsharp = document.getElementById("key-gsharp");

let keyA2 = document.getElementById("key-a2");
let keyAsharp2 = document.getElementById("key-asharp2");
let keyB2 = document.getElementById("key-b2");
let keyC2 = document.getElementById("key-c2");
let keyCsharp2 = document.getElementById("key-csharp2");
let keyD2 = document.getElementById("key-d2");
let keyDsharp2 = document.getElementById("key-dsharp2");
let keyE2 = document.getElementById("key-e2");
let keyF2 = document.getElementById("key-f2");
let keyFsharp2 = document.getElementById("key-fsharp2");
let keyG2 = document.getElementById("key-g2");
let keyGsharp2 = document.getElementById("key-gsharp2");

function restartScale() {
  keyA.classList.remove("colored-key");
  keyAsharp.classList.remove("colored-key");
  keyB.classList.remove("colored-key");
  keyC.classList.remove("colored-key");
  keyCsharp.classList.remove("colored-key");
  keyD.classList.remove("colored-key");
  keyDsharp.classList.remove("colored-key");
  keyE.classList.remove("colored-key");
  keyF.classList.remove("colored-key");
  keyFsharp.classList.remove("colored-key");
  keyG.classList.remove("colored-key");
  keyGsharp.classList.remove("colored-key");

  keyA2.classList.remove("colored-key");
  keyAsharp2.classList.remove("colored-key");
  keyB2.classList.remove("colored-key");
  keyC2.classList.remove("colored-key");
  keyCsharp2.classList.remove("colored-key");
  keyD2.classList.remove("colored-key");
  keyDsharp2.classList.remove("colored-key");
  keyE2.classList.remove("colored-key");
  keyF2.classList.remove("colored-key");
  keyFsharp2.classList.remove("colored-key");
  keyG2.classList.remove("colored-key");
  keyGsharp2.classList.remove("colored-key");
}

//
// NATURAL MINOR SCALE
//

function minorA() {
  restartScale();
  // IN SCALE
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
  keyA2.classList.add("colored-key");
}

function minorAsharp() {
  restartScale();
  // IN SCALE
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyGsharp2.classList.add("colored-key");
  keyAsharp2.classList.add("colored-key");
}

function minorB() {
  restartScale();
  // IN SCALE
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
  keyA2.classList.add("colored-key");
  keyB2.classList.add("colored-key");
}

function minorC() {
  restartScale();
  // IN SCALE
  keyC.classList.add("colored-key");
  keyD.classList.add("colored-key");
  keyDsharp.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
}

function minorCsharp() {
  restartScale();
  // IN SCALE
  keyCsharp.classList.add("colored-key");
  keyDsharp.classList.add("colored-key");
  keyE.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
}

function minorD() {
  restartScale();
  // IN SCALE
  keyD.classList.add("colored-key");
  keyE.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
}

function minorDsharp() {
  restartScale();
  // IN SCALE
  keyDsharp.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
}

function minorE() {
  restartScale();
  // IN SCALE
  keyE.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
}

function minorF() {
  restartScale();
  // IN SCALE
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
}

function minorFsharp() {
  restartScale();
  // IN SCALE
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
}

function minorG() {
  restartScale();
  // IN SCALE
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
}

function minorGsharp() {
  restartScale();
  // IN SCALE
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyGsharp2.classList.add("colored-key");
}

//
// HARMONIC MINOR SCALE
//

function minorHarmonicA() {
  restartScale();
  // IN SCALE
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyGsharp2.classList.add("colored-key");
  keyA2.classList.add("colored-key");
}

function minorHarmonicAsharp() {
  restartScale();
  // IN SCALE
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyA2.classList.add("colored-key");
  keyAsharp2.classList.add("colored-key");
}

function minorHarmonicB() {
  restartScale();
  // IN SCALE
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
  keyAsharp2.classList.add("colored-key");
  keyB2.classList.add("colored-key");
}

function minorHarmonicC() {
  restartScale();
  // IN SCALE
  keyC.classList.add("colored-key");
  keyD.classList.add("colored-key");
  keyDsharp.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyC2.classList.add("colored-key");
}

function minorHarmonicCsharp() {
  restartScale();
  // IN SCALE
  keyCsharp.classList.add("colored-key");
  keyDsharp.classList.add("colored-key");
  keyE.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
}

function minorHarmonicD() {
  restartScale();
  // IN SCALE
  keyD.classList.add("colored-key");
  keyE.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
}

function minorHarmonicDsharp() {
  restartScale();
  // IN SCALE
  keyDsharp.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
}

function minorHarmonicE() {
  restartScale();
  // IN SCALE
  keyE.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
}

function minorHarmonicF() {
  restartScale();
  // IN SCALE
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
}

function minorHarmonicFsharp() {
  restartScale();
  // IN SCALE
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
}

function minorHarmonicG() {
  restartScale();
  // IN SCALE
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
}

function minorHarmonicGsharp() {
  restartScale();
  // IN SCALE
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
  keyGsharp2.classList.add("colored-key");
}

//
// MAJOR SCALE
//

function majorA() {
  restartScale();
  // IN SCALE
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyGsharp2.classList.add("colored-key");
  keyA2.classList.add("colored-key");
}

function majorAsharp() {
  restartScale();
  // IN SCALE
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
  keyA2.classList.add("colored-key");
  keyAsharp2.classList.add("colored-key");
}

function majorB() {
  restartScale();
  // IN SCALE
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyGsharp2.classList.add("colored-key");
  keyAsharp2.classList.add("colored-key");
  keyB2.classList.add("colored-key");
}

function majorC() {
  restartScale();
  // IN SCALE
  keyC.classList.add("colored-key");
  keyD.classList.add("colored-key");
  keyE.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyC2.classList.add("colored-key");
}

function majorCsharp() {
  restartScale();
  // IN SCALE
  keyCsharp.classList.add("colored-key");
  keyDsharp.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
}

function majorD() {
  restartScale();
  // IN SCALE
  keyD.classList.add("colored-key");
  keyE.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
}

function majorDsharp() {
  restartScale();
  // IN SCALE
  keyDsharp.classList.add("colored-key");
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
}

function majorE() {
  restartScale();
  // IN SCALE
  keyE.classList.add("colored-key");
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
}

function majorF() {
  restartScale();
  // IN SCALE
  keyF.classList.add("colored-key");
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
}

function majorFsharp() {
  restartScale();
  // IN SCALE
  keyFsharp.classList.add("colored-key");
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
}

function majorG() {
  restartScale();
  // IN SCALE
  keyG.classList.add("colored-key");
  keyA.classList.add("colored-key");
  keyB.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyD2.classList.add("colored-key");
  keyE2.classList.add("colored-key");
  keyFsharp2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
}

function majorGsharp() {
  restartScale();
  // IN SCALE
  keyGsharp.classList.add("colored-key");
  keyAsharp.classList.add("colored-key");
  keyC2.classList.add("colored-key");
  keyCsharp2.classList.add("colored-key");
  keyDsharp2.classList.add("colored-key");
  keyF2.classList.add("colored-key");
  keyG2.classList.add("colored-key");
  keyGsharp2.classList.add("colored-key");
}

//
//
// HAMBURGER MENU
//
//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

//
//
// SCROLLING
//
//

// REFRESH = THE TOP OF THE PAGE
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
