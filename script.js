let isPaused = false;
let intervalid = null;

function updateClock() {
  if (isPaused) return;
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;

}
function startClock() {
  if (intervalid) return; 
  intervalid = setInterval(updateClock, 1000);
  updateClock(); 

}
function togglePause() {
  isPaused = true;
}
function toggleResume() {
  isPaused = false;
  updateClock(); 
  
}
function toggleTheme() {
  document.body.classList.toggle('light');
}

startClock();