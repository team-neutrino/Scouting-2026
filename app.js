const pointList = [1, 4, 3]

let extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'alliance pick']
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var defenseChecklist = ["", ""];
var autonComments = "";
var teleopComments = "";
var defenseComments = "";
var blue1 = [7457,
  3637,
  8158,
  9140,
  2481,
  7039,
  2630,
  287,
  4499,
  5462,
  2846,
  70,
  1671,
  10950,
  4907,
  10604,
  9140,
  2905,
  7763,
  3245,
  6002,
  3277,
  11065,
  3928,
  4905,
  7457,
  2481,
  4270,
  4089,
  4362,
  8020,
  5985,
  6238,
  68,
  343,
  7717,
  9644,
  2200,
  4122,
  4362,
  5462,
  2811,
  3075,
  1678,
  8808,
  68,
  694,
  6989,
  3277,
  359,
  1671,
  287,
  8873,
  2601,
  8808,
  3075,
  7426,
  4481,
  3419,
  6989,
  2333,
  10101,
  10604,
  11065,
  263,
  2811,
  10950,
  1678,
  4915,
  68,
  7457,
  6002,
  4122,
  10101,
  343,
  263,
  3492,
  8158,];
var blue2 = [2905,
  1671,
  10950,
  1640,
  7717,
  343,
  10633,
  4795,
  6002,
  4481,
  6090,
  3419,
  8020,
  4122,
  2630,
  4795,
  8429,
  4481,
  353,
  6925,
  6090,
  1771,
  8808,
  201,
  9635,
  2403,
  4795,
  8158,
  9140,
  2122,
  3419,
  3928,
  6002,
  353,
  686,
  3492,
  70,
  3245,
  4907,
  5985,
  2122,
  8873,
  3928,
  4905,
  2846,
  7763,
  2333,
  8158,
  6925,
  70,
  2481,
  2122,
  7594,
  3928,
  9140,
  10633,
  7250,
  6238,
  4476,
  6925,
  2846,
  7717,
  8808,
  9140,
  3075,
  6238,
  10633,
  5985,
  4421,
  694,
  7039,
  2169,
  5462,
  2200,
  287,
  3707,
  201,
  10604,];
var blue3 = [6925,
  10101,
  4089,
  2200,
  2122,
  1678,
  2403,
  7250,
  5985,
  2811,
  6238,
  4421,
  8873,
  694,
  7039,
  7426,
  686,
  4089,
  4915,
  2811,
  343,
  3637,
  6238,
  4499,
  7890,
  10604,
  2200,
  2974,
  2630,
  3245,
  11065,
  7594,
  1640,
  8873,
  2905,
  10633,
  2601,
  7890,
  11065,
  7250,
  3637,
  10101,
  686,
  3492,
  2601,
  3707,
  263,
  7039,
  9644,
  4795,
  201,
  8429,
  1678,
  7763,
  4905,
  3707,
  4122,
  4270,
  3277,
  6090,
  1771,
  7594,
  201,
  8158,
  2481,
  2122,
  3419,
  4476,
  2333,
  8429,
  7717,
  6989,
  7890,
  2974,
  8873,
  4476,
  70,
  1671,];
var red1 = [2601,
  6989,
  7426,
  4476,
  2974,
  4122,
  4270,
  3277,
  8429,
  359,
  11065,
  4905,
  9635,
  8158,
  3492,
  2481,
  3707,
  287,
  1678,
  5462,
  3419,
  5985,
  7594,
  4421,
  10633,
  10950,
  8429,
  10101,
  6090,
  4915,
  1678,
  2846,
  4499,
  2333,
  4421,
  1771,
  694,
  9140,
  2630,
  287,
  4499,
  201,
  353,
  2169,
  2403,
  2905,
  10633,
  7457,
  7717,
  8020,
  686,
  343,
  2200,
  6002,
  263,
  2169,
  1640,
  10950,
  7890,
  68,
  9644,
  9635,
  3637,
  4499,
  8873,
  3928,
  3707,
  70,
  6925,
  4481,
  4907,
  8020,
  686,
  3245,
  2601,
  3637,
  2122,
  3419,];
var red2 = [3075,
  353,
  686,
  68,
  694,
  3707,
  4362,
  3928,
  3245,
  9644,
  263,
  1771,
  2122,
  4476,
  7890,
  7457,
  10101,
  2200,
  2601,
  7250,
  4362,
  8873,
  70,
  6989,
  9644,
  4476,
  1671,
  263,
  7763,
  3075,
  287,
  201,
  3637,
  2811,
  8808,
  7426,
  3277,
  2481,
  2974,
  1671,
  4270,
  4795,
  7594,
  8429,
  1640,
  4915,
  4421,
  9635,
  3419,
  3637,
  4499,
  2811,
  2403,
  5462,
  10604,
  8158,
  2905,
  8020,
  4089,
  7039,
  2974,
  4362,
  7763,
  343,
  359,
  7426,
  7250,
  2630,
  3492,
  9635,
  4905,
  4089,
  1771,
  6090,
  6238,
  7594,
  9140,
  2846,];
var red3 = [7890,
  4907,
  3492,
  8020,
  7763,
  10604,
  201,
  2333,
  8808,
  7594,
  4915,
  2169,
  2974,
  3075,
  1640,
  4270,
  2403,
  7717,
  359,
  263,
  2169,
  2846,
  2333,
  68,
  4122,
  4481,
  3707,
  359,
  7250,
  4907,
  5462,
  6925,
  4905,
  2169,
  9635,
  6989,
  7039,
  10950,
  4481,
  359,
  6090,
  6002,
  343,
  4476,
  4089,
  1771,
  10604,
  6238,
  7426,
  3245,
  11065,
  2630,
  4907,
  3492,
  353,
  5985,
  694,
  4421,
  4915,
  70,
  7457,
  2601,
  287,
  4795,
  1640,
  2403,
  353,
  2905,
  1671,
  2846,
  4270,
  9644,
  4362,
  3277,
  10950,
  7426,
  3075,
  2905,];
var ipadID = localStorage.getItem("iPadId");
var incmatchnumber = "1";
var matchnum = 1;
var team = "";
var match = "";
var savescout = sessionStorage.getItem("scoutInitials");
let score = 0;
var hopperCapacity = 0;


const TIMEOUT = 1000 // time before fuel scoring period times out, measured in ms

/* Function List
--- Direct Button Functions ---
addAction: Called everytime a button is pushed.
Undo: Pops items off of all the lists.
--- Indirect Functions ---
init: Initialize everything
updateLog: Updates the human list of actions done.
updateAvail: This was created to enable/disable (validation) scoring buttons based on how many game pieces the robot has.
*/

function addAction(action, number) { //Used for buttons that have a data validation script
  // compressedList.push(number); //Add it (NOT!) to the compressedList (QR Code)
  if (document.getElementById('teamLog1') !== null) {
    updateLog(); //Update what the scouter sees on the app
    updateScore();
  }
  saveData();
  console.log(compressedList);
}

function addDefenseCheckbox(slot, action) {
  if (defenseChecklist[slot] === "") {
    defenseChecklist[slot] = action;
  } else {
    defenseChecklist[slot] = "";
  }
}

function addComments(id) {
  if (id == "autonComments") {
    autonComments = document.getElementById("autonComments").value;
  }
  else if (id == "teleopComments") {
    teleopComments = document.getElementById("teleopComments").value;
  }
  else {
    defenseComments = document.getElementById("defenseComments").value;
  }
}

function addHopperCapacity() {
  hopperCapacity = document.getElementById("hopperCapacityBox").value || 0;
}

lastUpdatedTimestamp = 0

function addFuel(type, amt) {
  lastPosition = compressedList[compressedList.length - 1];

  if (!lastPosition) {
    compressedList.push([type, amt, [amt], false]);
    lastUpdatedTimestamp = Date.now();
    updateLog();
    return;
  };

  lastType = lastPosition[0];
  lastScore = lastPosition[1];
  lastScoreTypes = lastPosition[2];

  if (Date.now() - lastUpdatedTimestamp > TIMEOUT) {
    lastPosition[3] = true;
  }

  if (type != lastType) {
    lastPosition[3] = true;
  }

  finished = lastPosition[3];

  if (!finished) {
    compressedList[compressedList.length - 1][1] += amt;
    compressedList[compressedList.length - 1][2].push(amt);
  } else {
    compressedList.push([type, amt, [amt], false]);
  }

  lastUpdatedTimestamp = Date.now();
  updateLog();
  updateScore();
}

function updateScore() {
  var currentScore = 0
  for (i = 0; i < compressedList.length; i++) {
    if (compressedList[i][0] === 0 || compressedList[i][0] === 2) {
      currentScore += compressedList[i][1];
    }
  }
  score = currentScore;
  document.getElementById("teamLog2").value = score;
  console.log(score);
}

function updateScoreNoEditScreen() {
  var currentScore = 0
  for (i = 0; i < compressedList.length; i++) {
    if (compressedList[i][0] === 0 || compressedList[i][0] === 2) {
      currentScore += compressedList[i][1];
    }
  }
  score = currentScore;
  console.log(score);
}

function alliancePick(alliance) {
  extraData[4] = alliance;
  console.log(extraData);
}

function GO(iPadID, matchsaver, scoutsaver, page) {
  getBoxData();
  var allClear = true;
  var team = document.getElementById("teamNum");
  var match = document.getElementById("matchNum");
  var scout = document.getElementById("scout");
  if (extraData[0] === "" || extraData[1] === "" || extraData[2] === "") {
    if (extraData[0] === "") {
      team.style.border = "5px solid red";
    }
    if (extraData[1] === "") {
      match.style.border = "5px solid red";
    }
    if (extraData[2] === "") {
      scout.style.border = "5px solid red";
    }
    allClear = false;
  }
  localStorage.setItem("iPadId", iPadID)
  sessionStorage.setItem("scoutInitials", scoutsaver)
  sessionStorage.setItem("matchNum", matchsaver)
  saveData();
  if (allClear) {
    window.location.href = "../" + page + ".html";
  }
}

function getBoxData() {
  extraData[0] = document.getElementById('teamNum').value;
  extraData[1] = document.getElementById('matchNum').value;
  extraData[2] = document.getElementById('scout').value;
  saveData();
}

function saveData() {
  sessionStorage.setItem("compressedList", JSON.stringify(compressedList));
  sessionStorage.setItem("extraData", JSON.stringify(extraData));
  sessionStorage.setItem("score", score.toString());
  sessionStorage.setItem("defenseChecklist", JSON.stringify(defenseChecklist));
  sessionStorage.setItem("hopperCapacity", hopperCapacity.toString());
  sessionStorage.setItem("autonComments", autonComments);
  sessionStorage.setItem("teleopComments", teleopComments);
  sessionStorage.setItem("defenseComments", defenseComments);
}

function getData() {
  score = parseInt(sessionStorage.getItem("score"), 10);
  compressedList = getList("compressedList");
  extraData = getList("extraData");
  defenseChecklist = getList("defenseChecklist");
  hopperCapacity = parseInt(sessionStorage.getItem("hopperCapacity"), 10);
  autonComments = sessionStorage.getItem("autonComments");
  teleopComments = sessionStorage.getItem("teleopComments");
  defenseComments = sessionStorage.getItem("defenseComments");
  console.log(compressedList);
  console.log(extraData);
  console.log(defenseChecklist);
  console.log(hopperCapacity);
  console.log(autonComments);
  console.log(teleopComments);
  console.log(defenseComments);
  if (document.getElementById('teamLog1') !== null) {
    updateLog();
  }
  if (document.getElementById('teamLog2') !== null) {
    updateScore();
  }
}

function getList(name) {
  return JSON.parse(sessionStorage.getItem(name));
}

function loadPage(page) {
  getData();
  displayBoxData();
  if (document.getElementById("teamLog2") !== null) {
    document.getElementById("teamLog2").value = score;
  }
}

function displayBoxData() {
  if (extraData[0] !== undefined) {
    document.getElementById('teamNumberBox').value = extraData[0];
  }
  if (extraData[1] !== undefined) {
    document.getElementById('matchNumberBox').value = extraData[1];
  }
  if (document.getElementById('defenseBot') !== null) {
    for (var i = 0; i < defenseChecklist.length; i++) {
      if (defenseChecklist[i] !== "") {
        document.getElementById(defenseChecklist[i]).checked = true;
      }
    }
  }
  if (document.getElementById('hopperCapacityBox') !== null) {
    document.getElementById('hopperCapacityBox').value = hopperCapacity;
  }
  if (document.getElementById('autonComments') !== null) {
    document.getElementById('autonComments').value = autonComments;
  }
  if (document.getElementById('teleopComments') !== null) {
    document.getElementById('teleopComments').value = teleopComments;
  }
  if (document.getElementById('defenseComments') !== null) {
    document.getElementById('defenseComments').value = defenseComments;
  }
}

function format(str, ...values) {
  return str.replace(/{(\d+)}/g, function (match, index) {
    return typeof values[index] !== 'undefined' ? values[index] : match;
  });
} // I like lua why can't js just have this by default : (

idToLogText = {
  0: "Scored {0} Fuel ({1} total) (A)",
  1: "Passed {0} Fuel ({1} total) (A)",
  2: "Scored {0} Fuel ({1} total) (T)",
  3: "Passed {0} Fuel ({1} total) (T)",
  4: "Scored {0}% of Hopper (A)",
  5: "Passed {0}% of Hopper (A)",
  6: "Scored {0}% of Hopper (T)",
  7: "Passed {0}% of Hopper (T)",
}

function updateLog() {
  // var logText = actionList.slice().reverse().join("\n");
  // document.getElementById("teamLog1").value = logText;

  if (document.getElementById("teamLog1") == null) {
    return
  }

  logText = ""

  // console.log(compressedList.length)

  for (let i = compressedList.length - 1; i >= 0; i--) {
    period = compressedList[i];

    if (period[3] || Date.now() - lastUpdatedTimestamp > TIMEOUT) { // if period finished
      if (period[0] < 4) {
        if (period[0] === 1 || period[0] === 3) {
          logText = logText + "-- Passed " + period[1] + " fuel. --"
        } else {
          logText = logText + "-- Scored " + period[1] + " fuel. --"
        }
      } else {
        if (period[0] === 5 || period[0] === 7) {
          logText = logText + "-- Passed " + period[1] + " hoppers. --"
        } else {
          logText = logText + "-- Scored " + period[1] + " hoppers. --"
        }
      }

      if (period[0] < 4) {
        if (period[0] < 2) {
          logText = logText + " (A)"
        } else {
          logText = logText + " (T)"
        }
      } else {
        if (period[0] < 6) {
          logText = logText + " (A)"
        } else {
          logText = logText + " (T)"
        }
      }

      logText = logText + "\n";
    }

    score = period[1];

    for (let i = period[2].length - 1; i >= 0; i--) {
      amt = period[2][i];
      if (period[0] < 4) {
        logText = logText + format(idToLogText[period[0]], amt, score) + "\n";
      } else {
        logText = logText + format(idToLogText[period[0]], amt * 100) + "\n";
      }
      score -= amt;
    }
  }

  document.getElementById("teamLog1").value = logText;
}

function commentEdit(comment) {
  extraData[3] = comment;
  saveData();
}

setInterval(updateLog, 1);

// function Undo() {
//   var lastAction = actionList.pop();

//   if (lastAction) {
//     document.getElementById('teamLog1').style.border = '3px solid red';
//     setTimeout(() => {
//       document.getElementById('teamLog1').style.border = '3px solid white';
//       document.getElementById('teamLog1').style.transition = 'border 1s ease-in-out';
//     }, 100);
//     setTimeout(() => {
//       document.getElementById('teamLog1').removeAttribute('style');
//     }, 1100);
//     compressedList.pop();
//     updateLog();
//     updateScore();
//   } else {
//     console.log("Nothing to undo");
//   }
// }

function Undo() {
  lastPosition = compressedList[compressedList.length - 1];

  if (lastPosition[2].length == 0) {
    compressedList.pop();
    Undo();
    return;
  }

  if (lastPosition) {
    lastScored = lastPosition[2].pop();
    lastPosition[1] -= lastScored;
  }

  updateLog();
  updateScore();
}

function pullIPadID() {
  document.getElementById("iPadIDarea").value = localStorage.getItem("iPadId");
  savescout = sessionStorage.getItem("scoutInitials");
  if (sessionStorage.getItem('matchNumber') !== null) {
    incmatchnumber = sessionStorage.getItem('matchNumber');
  }
  document.getElementById("matchNum").value = incmatchnumber;
  document.getElementById("scout").value = savescout;
}

function setTeam(matchnumb, ipadID) {
  if (sessionStorage.getItem('matchNumber') !== null) {
    matchnum = sessionStorage.getItem('matchNumber');
  }
  matchnum = parseInt(matchnumb);
  if (ipadID == 1) {
    document.getElementById("teamNum").value = blue1[matchnum - 1];
  }
  else if (ipadID == 2) {
    document.getElementById("teamNum").value = blue2[matchnum - 1];
  }
  else if (ipadID == 3) {
    document.getElementById("teamNum").value = blue3[matchnum - 1];
  }
  else if (ipadID == 4) {
    document.getElementById("teamNum").value = red1[matchnum - 1];
  }
  else if (ipadID == 5) {
    document.getElementById("teamNum").value = red2[matchnum - 1];
  }
  else if (ipadID == 6) {
    document.getElementById("teamNum").value = red3[matchnum - 1];
  }
}

let zoom = false;
let regenOpen = false;
let resetMenuVisible = false;

function reset(action) {
  let resetQr = document.getElementById('resetQr');
  let qrHtml = '<div class="qr-holder" id="qrArea"  onclick="qrZoom()" style="opacity:0;transform:scale(1.1, 1.1) rotate(3deg)"> \n </div>';
  let resetHTML = '<div class="reset-pop-up" id="resetPopUp" style="opacity:0;transform:scale(0.9, 0.9) rotate(-3deg)"> \n <div class="reset-pop-up-top"> \n <h2>Do You Really Want To Reset?</h2> \n </div> \n <div class="reset-pop-up-bottom"> \n <button class="reset-pop-up-button color1" onclick="toQuotes()" id="yesButton">Yes</button> \n<button class="reset-pop-up-button color2" onclick="reset(\'no\')" id="noButton">No</button> \n </div> \n </div>';
  if (regenOpen) {
    regenQR();
  }
  if (action == 'reset') {
    resetMenuVisible = true;
    let qrArea = document.getElementById('qrArea');
    qrArea.style.transition = 'transform 0.4s ease-out, opacity 0.25s ease-out';
    qrArea.style.opacity = 0;
    qrArea.style.transform = 'scale(1.1, 1.1) rotate(3deg)';
    setTimeout(() => {
      resetQr.innerHTML = "";
      resetQr.innerHTML = resetHTML;
    }, 260);
    setTimeout(() => {
      document.getElementById("resetPopUp").style.removeProperty("opacity");
      document.getElementById("resetPopUp").style.removeProperty("transform");
    }, 300);
  }
  if (action == 'no') {
    resetMenuVisible = false;
    let resetPopUp = document.getElementById("resetPopUp");
    resetPopUp.style.opacity = 0;
    resetPopUp.style.transform = 'scale(0.9, 0.9) rotate(-3deg)';
    setTimeout(() => {
      resetQr.innerHTML = "";
      resetQr.innerHTML = qrHtml;
      initQRCode();
    }, 260);
    setTimeout(() => {
      document.getElementById("qrArea").style.removeProperty("opacity");
      document.getElementById("qrArea").style.removeProperty("transform");
    }, 300);
  }
}

function load(windowLocation) {
  if (windowLocation == "teleop" && window.location.pathname === `/auton.html`) {
    console.log("fun");
  }

  saveData();

  if (windowLocation === "backQual") {
    robotType = sessionStorage.getItem("robotType")

    if (robotType === "dumper") {
      window.location.href = `./teleop-dumper.html`;
    } else {
      window.location.href = `./teleop.html`;
    }
    return
  }
  window.location.href = `./${windowLocation}.html`;
}

function qualLoad(windowLocation) {
  autonBox = document.getElementById("autonComments");
  teleopBox = document.getElementById("teleopComments");
  defenseBox = document.getElementById("defenseComments");
  if (teleopBox.value !== "") {
    load(windowLocation);
  } else {
    if (teleopBox.value === "") {
      borderColorChange(teleopBox, 1);
    }
  }
}

function borderColorChange(element, speed) {
  intialWidth = parseInt(window.getComputedStyle(element).getPropertyValue('border-left-width'), 10);
  element.style.borderColor = "rgb(255,0,0)"
  element.style.borderWidth = String(intialWidth * 2) + "px";
  length = 15;
  setTimeout(() => {
    for (let i = 0; i < length; i++) {
      setTimeout(() => {
        element.style.borderColor = `rgb(${255}, ${i * (255 / length)}, ${i * (255 / length)})`;
        element.style.borderWidth = String(((intialWidth * 2) - (intialWidth / length) * i)) + "px";
      }, i * 50 * speed);
    }
  }, 750 * speed);
}

function qrZoom() {
  let qr = document.getElementById('qrArea');
  if (zoom) {
    qr.style.transform = "scale(1, 1)";
    zoom = false;
    qr.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    return;
  }
  if (!zoom) {
    qr.style.transform = "scale(1.25, 1.25)";
    qr.style.backgroundColor = "white";
    zoom = true;
    return;
  }
}

function toQuotes() {
  document.getElementById("yesButton").style.transform = "scale(1.2, 1.2)";
  document.getElementById('changeStyle').innerHTML = "";
  extraData[1] = parseInt(extraData[1])
  sessionStorage.setItem('matchNumber', extraData[1] + 1);
  let takeout = getQuote();
  let quote = takeout[0];
  let author = takeout[1];

  document.getElementById('body').innerHTML = '<div class="quoteDiv" id="insertQuote"></div>';
  let insertQuote = document.getElementById('insertQuote');
  let repeat = quote.length;
  for (let i = 0; i < repeat; i++) {

    setTimeout(() => {
      insertQuote.innerHTML += quote[i];
    }, 15 * i);

  }
  setTimeout(() => {
    updateScoreNoEditScreen();
    insertQuote.innerHTML += "<br><br><strong>" + author + "</strong>";
    insertQuote.innerHTML += "<button onclick='loadIndex()' class='continuieButton' id='contineButton'>Continue</button>";
    insertQuote.innerHTML += "<strong>Score: " + score + "</strong>";
    var sums = Array(4).fill(0); //Compress List
    for (const period of compressedList) {
      sums[period[0]] += period[1];
    }
    localStorage.setItem("oldCompList" + extraData[1], sums);
    localStorage.setItem("oldExtraData" + extraData[1], extraData);
  }, 20 * repeat);
}

function loadIndex() {
  // const number = Math.random();
    window.location.href = `./index.html`;
}