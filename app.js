const pointList = [1, 4, 3]

let extraData = []; //['teamNum', 'matchNum', 'scout', 'comment', 'alliance pick']
var compressedList = []; //This is the list that collects all the IDs for the QR Code.
var climbList = ["0", false, "0", false]; //['auton climb', auton backside, 'endgame climb', endgame backside]
var autonChecklist = ["", "", "", "", "", ""];
var defenseChecklist = ["", "", ""];
var teleopComments = "";
var defenseComments = "";
var comments = ""; //Comments Box
var blue1 = [967,
  6420,
  2290,
  525,
  3090,
  5339,
  5541,
  2531,
  3090,
  7858,
  167,
  2358,
  5847,
  2667,
  4663,
  7858,
  5541,
  5914,
  2667,
  3055,
  4174,
  2987,
  2220,
  7850,
  7858,
  3928,
  4646,
  2508,
  7858,
  4065,
  5822,
  3928,
  4663,
  2508,
  4143,
  9082,
  2530,
  525,
  7858,
  2220,
  2667,
  2977,
  111,
  7531,
  2667,
  4143,
  6419,
  695,
  4663,
  111,
  5847,
  3206,
  4646,
  4065,
  6419,
  5914,
  111,
  5541,
  167,
  5339,
  2977,
  2530,
  5914,
  2358,
  5847,
  5339,
  967,
  11246,
  9082,
  4174,
  3206,
  3055,
  2549,
  6420,
  4859,
  4174];
var blue2 = [2531,
  695,
  3055,
  3284,
  111,
  3928,
  5822,
  5576,
  4143,
  9082,
  4174,
  4859,
  5541,
  2220,
  3090,
  695,
  3206,
  4065,
  5822,
  112,
  7531,
  167,
  5914,
  2549,
  5822,
  2977,
  2530,
  4174,
  3061,
  112,
  7531,
  2220,
  4646,
  3284,
  4859,
  5914,
  11246,
  4065,
  2508,
  2987,
  112,
  2549,
  4663,
  3055,
  2987,
  2290,
  6420,
  2358,
  2977,
  5541,
  5576,
  3061,
  7850,
  167,
  2667,
  11246,
  4646,
  7850,
  3061,
  967,
  2531,
  3928,
  6419,
  167,
  2549,
  2290,
  2508,
  2987,
  3928,
  4065,
  7850,
  967,
  2290,
  2530,
  2531,
  7858];
var blue3 = [3206,
  5576,
  11246,
  7850,
  2358,
  167,
  3061,
  112,
  6419,
  2290,
  5822,
  2508,
  5339,
  9082,
  5576,
  525,
  2987,
  3284,
  11246,
  2977,
  5847,
  525,
  3061,
  112,
  5847,
  6420,
  2667,
  2549,
  2531,
  2290,
  3090,
  695,
  3206,
  5541,
  7531,
  2549,
  5576,
  5339,
  4663,
  7850,
  3284,
  5339,
  4859,
  5541,
  3928,
  4646,
  7858,
  4174,
  5914,
  2530,
  967,
  695,
  2531,
  3090,
  525,
  7531,
  3055,
  9082,
  4143,
  4859,
  3090,
  2508,
  111,
  4663,
  4143,
  3284,
  2977,
  6420,
  3061,
  4663,
  6419,
  2667,
  5576,
  4143,
  2987,
  111];
var red1 = [2530,
  2987,
  7531,
  2977,
  4143,
  4646,
  5914,
  3284,
  4663,
  3928,
  7850,
  695,
  3061,
  2531,
  7850,
  7531,
  967,
  2530,
  3061,
  6419,
  2358,
  2531,
  3090,
  4143,
  2358,
  4859,
  11246,
  5576,
  7850,
  2987,
  167,
  11246,
  5576,
  5339,
  2290,
  111,
  2977,
  3090,
  3061,
  5541,
  3928,
  3206,
  11246,
  525,
  5847,
  3284,
  2508,
  112,
  2987,
  2290,
  9082,
  5822,
  2549,
  2508,
  6420,
  3284,
  5822,
  4065,
  5576,
  2549,
  695,
  112,
  4065,
  4859,
  9082,
  7531,
  2220,
  3055,
  112,
  3284,
  7531,
  167,
  112,
  3061,
  5822,
  695];
var red2 = [112,
  4663,
  2549,
  5847,
  7858,
  2508,
  4174,
  7531,
  525,
  3206,
  2977,
  5914,
  111,
  3055,
  3928,
  2290,
  111,
  2220,
  5339,
  4646,
  6420,
  111,
  3206,
  3055,
  5339,
  9082,
  5541,
  525,
  4143,
  2358,
  9082,
  6419,
  2667,
  6420,
  4174,
  5847,
  3206,
  967,
  4859,
  4646,
  6419,
  2530,
  2531,
  5914,
  3061,
  967,
  5576,
  167,
  5339,
  4859,
  11246,
  3284,
  2358,
  4143,
  2220,
  4663,
  2358,
  7858,
  6419,
  6420,
  5847,
  2987,
  5576,
  525,
  695,
  2667,
  5541,
  3090,
  525,
  5847,
  2508,
  7858,
  3090,
  2977,
  5339,
  4663];
var red3 = [6419,
  9082,
  4065,
  4859,
  2667,
  2220,
  967,
  6420,
  2530,
  11246,
  4065,
  4646,
  2987,
  2549,
  4174,
  167,
  4143,
  2549,
  2508,
  4859,
  967,
  3284,
  2290,
  4663,
  6419,
  4065,
  695,
  111,
  5914,
  5847,
  2530,
  967,
  2977,
  3055,
  2531,
  167,
  2358,
  695,
  3055,
  6420,
  5822,
  4174,
  4065,
  3090,
  7850,
  9082,
  5822,
  2220,
  7531,
  3928,
  525,
  3055,
  7858,
  112,
  4174,
  3928,
  2530,
  3206,
  2220,
  2667,
  2290,
  4174,
  4646,
  3206,
  5822,
  7850,
  2531,
  7858,
  2358,
  4646,
  111,
  5914,
  5541,
  11246,
  2220,
  7531];
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

function addAutonCheckbox(slot, action) {
  if (autonChecklist[slot] === "") {
    autonChecklist[slot] = action;
  } else {
    autonChecklist[slot] = "";
  }
}

function addDefenseCheckbox(slot, action) {
  if (defenseChecklist[slot] === "") {
    defenseChecklist[slot] = action;
  } else {
    defenseChecklist[slot] = "";
  }
}

function addComments(id) {
  if (id == "teleopComments") {
    teleopComments = document.getElementById("teleopComments").value;
  } else {
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
  sessionStorage.setItem("autonChecklist", JSON.stringify(autonChecklist));
  sessionStorage.setItem("defenseChecklist", JSON.stringify(defenseChecklist));
  sessionStorage.setItem("teleopComments", teleopComments);
  sessionStorage.setItem("defenseComments", defenseComments);
}

function getData() {
  score = parseInt(sessionStorage.getItem("score"), 10);
  compressedList = getList("compressedList");
  extraData = getList("extraData");
  climbList = getList("climbList");
  autonChecklist = getList("autonChecklist");
  defenseChecklist = getList("defenseChecklist");
  teleopComments = sessionStorage.getItem("teleopComments");
  defenseComments = sessionStorage.getItem("defenseComments");
  console.log(compressedList);
  console.log(extraData);
  console.log(climbList);
  console.log(autonChecklist);
  console.log(defenseChecklist);
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
  if (document.getElementById('Nothing') !== null) {
    for (var i = 0; i < autonChecklist.length; i++) {
      if (autonChecklist[i] !== "") {
        document.getElementById(autonChecklist[i]).checked = true;
      }
    }
  }
  if (document.getElementById('Played Defense') !== null) {
    for (var i = 0; i < defenseChecklist.length; i++) {
      if (defenseChecklist[i] !== "") {
        document.getElementById(defenseChecklist[i]).checked = true;
      }
    }
  }
  if (document.getElementById('teleopComments') !== null) {
    document.getElementById('teleopComments').value = teleopComments;
  }
  if (document.getElementById('defenseComments') !== null) {
    document.getElementById('defenseComments').value = defenseComments;
  }
}

function updateLog() {
  // var logText = actionList.slice().reverse().join("\n");
  // document.getElementById("teamLog1").value = logText;

  if (document.getElementById("teamLog1") == null) {
    return
  }

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
  window.location.href = `./${windowLocation}.html`;
}

function qualLoad(windowLocation) {
  teleopBox = document.getElementById("teleopComments");
  defenseBox = document.getElementById("defenseComments");
  if(teleopBox.value !== "" && defenseBox.value !== ""){
    load(windowLocation);
  } else {
    if (teleopBox.value === ""){
      borderColorChange(teleopBox,1);
    }
    if (defenseBox.value === ""){
      borderColorChange(defenseBox,1);
    }
  }
}

function borderColorChange(element,speed){
  intialWidth = parseInt(window.getComputedStyle(element).getPropertyValue('border-left-width'),10);
  element.style.borderColor = "rgb(255,0,0)"
  element.style.borderWidth = String(intialWidth*2) + "px";
  length = 15;
  setTimeout(() => {
    for(let i = 0; i < length; i++){
      setTimeout(() => {
        element.style.borderColor = `rgb(${255}, ${i*(255/length)}, ${i*(255/length)})`;
        element.style.borderWidth = String(((intialWidth*2)-(intialWidth/length)*i)) + "px";
      }, i*50*speed);
    }
  },750*speed);
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