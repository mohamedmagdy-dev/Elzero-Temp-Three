// Fill Progress
let skills = document.querySelectorAll("#our-skills .skill span");
let funcStat = false;

function fillProg(el) {
  let width = el.dataset.prg;
  el.style.cssText = `width: ${width}`;
}
// Fill Progress

// Our Awesome Stats CountUp
let stats = document.querySelectorAll(".stats .box .number");
let statsOfUp = false;
function up(el) {
  let goal = el.dataset.goal;
  let handel = setInterval(() => {
    el.textContent++;
    if (el.textContent === goal) {
      clearInterval(handel);
    }
  }, 2000 /goal);
}

// Our Awesome Stats CountUp

window.onscroll = (_) => {
  //  Our Awesome Stats CountUp
  if (window.scrollY >= 13900) {
    if (!statsOfUp) {
      stats.forEach((el) => up(el));
    }
    statsOfUp = true;
  }
  //  Our Awesome Stats CountUp

  // Fill Progress

  if (scrollY >= 9115) {
    if (!funcStat) {
      skills.forEach((el) => fillProg(el));
    }
    funcStat = true;
  }
  // Fill Progress
};
