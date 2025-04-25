let homeMark = document.getElementById("home-marks");
let guestMark = document.getElementById("guest-marks");
let hScore = 0
let gScore = 0

function plus1() {
 hScore += 1
  homeMark.innerText = hScore
}

function plus2() {
 hScore += 2
  homeMark.innerText = hScore 
}

function plus3() {
 hScore += 3
  homeMark.innerText = hScore
}

function plus1Guest() {
 gScore += 1
  guestMark.innerText = gScore
}

function plus2Guest() {
 gScore += 2
  guestMark.innerText = gScore
}

function plus3Guest() {
 gScore += 3
  guestMark.innerText = gScore
}