const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let activeStep = 1;

next.addEventListener('click', () => {
  activeStep++;
  if (activeStep > circles.length) {
    activeStep = circles.length
  }
  updateStep();
})

prev.addEventListener('click', () => {
  activeStep--;
  if (activeStep < 1) {
    activeStep = 1
  }
  updateStep();
})

function updateStep() {
  circles.forEach((circle, index) => {
    if (index < activeStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');

  actives.length > 0 ? 
  progress.style.width = `${((activeStep - 1) / (circles.length -1)) * 100}%` : 
  progress.style.width = '0%';

  activeStep === 1 ? 
    prev.disabled = true :
    prev.disabled = false;

  activeStep === circles.length ?
    next.disabled = true :
    next.disabled = false;
}
