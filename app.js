const pointList = [1, 4, 3]

let extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'alliance pick']
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var climbList = ["0", false, "0", false]; //['auton climb', auton backside, 'endgame climb', endgame backside]
var defenseChecklist = ["", ""];
var hopperCapacity = 0;
var autonComments = "";
var teleopComments = "";
var defenseComments = "";
var comments = ""; //Comments Box
var blue1 = [8770,
  3055,
  5557,
  9092,
  2654,
  167,
  10439,
  59,
  967,
  7257,
  7531,
  1997,
  525,
  9570,
  9543,
  5935,
  9092,
  9061,
  11219,
  648,
  525,
  5935,
  3723,
  9061,
  9092,
  5557,
  5809,
  4728,
  8821,
  5837,
  10476,
  3298,
  2227,
  11219,
  5576,
  11210,
  3928,
  5275,
  5041,
  11241,
  2227,
  5914,
  4646,
  10439,
  6455,
  3723,
  8737,
  6147,
  2654,
  167,
  6420,
  8821,
  9570,
  525,
  11219,
  6419,
  8737,
  5141,
  4260,
  4646,
  2227,
  2847,
  8822,
  5275,
  1108,
  4646,
  10439,
  7038,
  3267,
  10476,
  1108];
var blue2 = [5837,
  6419,
  4260,
  3298,
  8822,
  4728,
  1997,
  4646,
  10476,
  1108,
  4260,
  7848,
  8821,
  11219,
  5041,
  5442,
  3723,
  11312,
  6147,
  967,
  5141,
  7257,
  7038,
  1997,
  3267,
  11241,
  9579,
  8822,
  8737,
  5935,
  3723,
  8770,
  648,
  2654,
  6805,
  1108,
  5935,
  9543,
  5809,
  9579,
  7531,
  8766,
  11210,
  2847,
  11312,
  967,
  9092,
  648,
  9061,
  10476,
  5442,
  5275,
  5041,
  6455,
  5914,
  11210,
  8766,
  5275,
  11312,
  7848,
  59,
  3928,
  5576,
  9579,
  6419,
  5442,
  3055,
  6455,
  11241,
  9570,
  2847];
var blue3 = [6420,
  11241,
  5442,
  6805,
  7848,
  6147,
  5141,
  5576,
  9061,
  5557,
  6420,
  6419,
  648,
  8770,
  8737,
  5809,
  59,
  8766,
  1108,
  3928,
  8770,
  5275,
  7531,
  4260,
  2654,
  11210,
  6455,
  10439,
  7038,
  167,
  5141,
  6455,
  5041,
  967,
  11241,
  7038,
  3723,
  525,
  4728,
  967,
  8737,
  3055,
  9570,
  4260,
  8822,
  525,
  5914,
  11210,
  6805,
  5809,
  3928,
  2847,
  1108,
  3055,
  5809,
  5935,
  9579,
  167,
  5837,
  3267,
  7257,
  9092,
  5557,
  3298,
  2654,
  7257,
  2227,
  5041,
  9543,
  7848,
  59];
var red1 = [648,
  7531,
  967,
  11312,
  6455,
  3267,
  5935,
  5914,
  9570,
  3928,
  6455,
  6147,
  3298,
  5914,
  9579,
  7038,
  5576,
  11210,
  6420,
  4728,
  8822,
  3055,
  167,
  5576,
  5442,
  7848,
  2847,
  7531,
  6420,
  1108,
  5557,
  6419,
  59,
  8766,
  9579,
  2847,
  6147,
  7848,
  5837,
  59,
  5141,
  6805,
  648,
  7257,
  3267,
  11241,
  7038,
  9579,
  9543,
  4260,
  3298,
  8766,
  7257,
  9543,
  10476,
  4728,
  8822,
  5442,
  11241,
  967,
  1997,
  5041,
  6420,
  5837,
  3723,
  11312,
  8770,
  8766,
  5809,
  6805,
  9061];
var red2 = [8766,
  11219,
  9543,
  5809,
  3928,
  8737,
  7038,
  11210,
  2227,
  11241,
  6805,
  2847,
  2654,
  5141,
  4646,
  8822,
  3055,
  167,
  8821,
  8737,
  5041,
  5809,
  59,
  5914,
  5837,
  2227,
  525,
  5275,
  7257,
  9543,
  3928,
  9061,
  7848,
  9092,
  3267,
  10476,
  6455,
  6420,
  5557,
  2654,
  5576,
  6419,
  167,
  3298,
  59,
  5935,
  5557,
  3055,
  4728,
  8770,
  4646,
  3267,
  10439,
  9061,
  7531,
  6420,
  3723,
  5576,
  9570,
  10439,
  6805,
  8770,
  648,
  7531,
  4260,
  525,
  167,
  6147,
  1997,
  8821,
  5141];
var red3 = [3723,
  5041,
  2847,
  1108,
  7257,
  525,
  9579,
  8821,
  5275,
  8766,
  3267,
  5837,
  10439,
  4728,
  10476,
  2227,
  5275,
  10439,
  9570,
  6419,
  6805,
  4646,
  9543,
  11312,
  10476,
  3298,
  9570,
  6147,
  3055,
  5914,
  11312,
  4646,
  4260,
  1997,
  5442,
  8822,
  9061,
  11312,
  8821,
  8770,
  9092,
  5442,
  1997,
  11219,
  5837,
  7531,
  7848,
  5141,
  11219,
  6419,
  1997,
  2227,
  5576,
  5557,
  648,
  9092,
  3298,
  2654,
  7038,
  1108,
  6147,
  8821,
  11219,
  5914,
  8737,
  4728,
  3928,
  967,
  11210,
  5935,
  6420];
var ipadID = localStorage.getItem("iPadId");
var incmatchnumber = "1";
var matchnum = 1;
var team = "";
var match = "";
var savescout = sessionStorage.getItem("scoutInitials");
let score = 0;

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

function selectBackside(boxId, page) {
  var backsideIndex = 3;
  if (page === "autonClimb") {
    backsideIndex = 1;
  }
  climbList[backsideIndex] = !climbList[backsideIndex]
  if (climbList[backsideIndex]) {
    document.getElementById(boxId).style.backgroundColor = "rgb(159, 221, 67)";
  } else {
    document.getElementById(boxId).style.backgroundColor = "rgb(227, 137, 20)";
  }
}

function updateClimb(name, page) {
  var climbIndex = 2;
  if (page === "autonClimb") {
    climbIndex = 0;
  }

  if (!(climbList[climbIndex] === "0")) {
    document.getElementById(climbList[climbIndex]).style.backgroundColor = "#8ac3d5"; // get rid of old style
  }
  climbList[climbIndex] = name;
  document.getElementById(climbList[climbIndex]).style.backgroundColor = "rgb(159, 221, 67)"; // add new style
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
  sessionStorage.setItem("climbList", JSON.stringify(climbList));
  sessionStorage.setItem("defenseChecklist", JSON.stringify(defenseChecklist));
  sessionStorage.setItem("autonComments", autonComments);
  sessionStorage.setItem("teleopComments", teleopComments);
  sessionStorage.setItem("defenseComments", defenseComments);
}

function getData() {
  score = parseInt(sessionStorage.getItem("score"), 10);
  compressedList = getList("compressedList");
  extraData = getList("extraData");
  climbList = getList("climbList");
  defenseChecklist = getList("defenseChecklist");
  autonComments = sessionStorage.getItem("autonComments");
  teleopComments = sessionStorage.getItem("teleopComments");
  defenseComments = sessionStorage.getItem("defenseComments");
  console.log(compressedList);
  console.log(extraData);
  console.log(climbList);
  console.log(defenseChecklist);
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
  if (page === 'autonClimb' || page === 'endgameClimb') {
    loadClimb(page)
  }
}

function loadClimb(page) {
  var climbModifier = 2;
  if (page === 'autonClimb') {
    climbModifier = 0;
  }
  updateClimb(climbList[climbModifier], page);
  if (climbList[1 + climbModifier] == true) {
    document.getElementById("backsideButton").style.backgroundColor = "rgb(159, 221, 67)";
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
    climbList[0] = "noTry";
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
  const number = Math.random();

  if (number < 0.1) {
    window.location.href = `./loading-animation.html`;
  } else {
    window.location.href = `./index.html`;
  }
}