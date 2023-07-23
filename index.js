let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0

// Home Score Counter
function increaseHomeBy1() {
  countHome += 1
  homeScore.textContent = countHome  
}

function increaseHomeBy2() {
  countHome += 2
  homeScore.textContent = countHome  
}

function increaseHomeBy3() {
  countHome += 3
  homeScore.textContent = countHome  
}


// Guest Score Counter
function increaseGuestBy1() {
  countGuest += 1
  guestScore.textContent = countGuest  
}

function increaseGuestBy2() {
  countGuest += 2
  guestScore.textContent = countGuest  
}

function increaseGuestBy3() {
  countGuest += 3
  guestScore.textContent = countGuest 
}


// End game
function endGame() {
  countHome = 0
  countGuest = 0
  homeScore.textContent = countHome
  guestScore.textContent = countGuest
}