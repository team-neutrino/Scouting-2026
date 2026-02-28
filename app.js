const pointList = [1, 4, 3]

let extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'alliance pick']
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var climbList = ["", false, "", false]; //['auton climb', auton backside, 'endgame climb', endgame backside]
var comments = ""; //Comments Box
var blue1 = [1, 2];
var blue2 = [3, 4];
var blue3 = [5, 6];
var red1 = [7, 8];
var red2 = [9, 10];
var red3 = [11, 12];
var ipadID = localStorage.getItem("iPadId");
var incmatchnumber = "1";
var matchnum = 1;
var team = "";
var match = "";
var savescout = sessionStorage.getItem("scoutInitials");
var score = 0;

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

  console.log(finished)
  console.log(lastPosition)

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

  if (!(climbList[climbIndex] === "")) {
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
}

function getData() {
  score = parseInt(sessionStorage.getItem("score"), 10);
  compressedList = getList("compressedList");
  extraData = getList("extraData");
  climbList = getList("climbList");
  console.log(compressedList);
  console.log(extraData);
  console.log(climbList);
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
  if (document.getElementById('comment') !== null && extraData[3] !== undefined) {
    document.getElementById('comment').value = extraData[3];
  }
}

function updateLog() {
  // var logText = actionList.slice().reverse().join("\n");
  // document.getElementById("teamLog1").value = logText;

  logText = ""

  console.log(compressedList.length)

  for (let i = compressedList.length - 1; i >= 0; i--) {
    period = compressedList[i];

    if (period[3] || Date.now() - lastUpdatedTimestamp > TIMEOUT) { // if period finished
      if (period[0] === 1 || period[0] === 3) {
        logText = logText + "-- Passed " + period[1] + " fuel. --"
      } else {
        logText = logText + "-- Scored " + period[1] + " fuel. --"
      }

      if (period[0] < 2) {
        logText = logText + " (A)"
      } else {
        logText = logText + " (T)"
      }

      logText = logText + "\n"
    }

    score = period[1]

    for (let i = period[2].length - 1; i >= 0; i--) {
      amt = period[2][i]
      if (period[0] === 1 || period[0] === 3) {
        logText = logText + "Passed " + amt + " Fuel (" + score + " total)"
      } else {
        logText = logText + amt + " Fuel (" + score + " total)"
      }

      if (period[0] < 2) {
        logText = logText + " (A)"
      } else {
        logText = logText + " (T)"
      }

      logText = logText + "\n"

      score -= amt
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

function UndoAll() {
  lastPosition = compressedList.pop()

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
  saveData();
  window.location.href = `./${windowLocation}.html`;
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
    insertQuote.innerHTML += "<br><br><strong>" + author + "</strong>";
    insertQuote.innerHTML += "<button onclick='window.location.href = `./index.html`' class='continuieButton' id='contineButton'>Continue</button>";
    insertQuote.innerHTML += "<strong>Score: " + score + "</strong>";
    var sums = Array(4).fill(0); //Compress List
    for (const period of compressedList) {
      sums[period[0]] += period[1];
    }
    localStorage.setItem("oldCompList" + extraData[1], sums);
    localStorage.setItem("oldExtraData" + extraData[1], extraData);
  }, 20 * repeat);
}