//----------------------------------------- Start  show nav ------------------------------------------//
let icon = document.querySelector('.header .container nav .searsh .show');
let Ul = document.querySelector(' .header .container nav ul');

let count = 0;

icon.addEventListener('click', () => {
  if (count % 2 == 0) {
    Ul.style.visibility = 'visible';
    Ul.style.opacity = '1';
  } else {
    Ul.style.visibility = 'hidden';
    Ul.style.opacity = '0';
  }
  count++;
});

// start scroll nav fixed
let Elment_Nav = document.querySelector('.header .container');
window.addEventListener('scroll', () => {
  if (scrollY >= 200) {
    Elment_Nav.classList.add('fixed');
  } else {
    Elment_Nav.classList.remove('fixed');
  }
});

// End scroll nav fixed

//----------------------------------------- end  show nav ------------------------------------------
//----------------------------------------- Start  Scroll top---------------------------------------

let ele = document.querySelector('.scroll');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  ele.style.width = `${(window.scrollY / height) * 100}%`;
});

//----------------------------------------- End  Scroll top-----------------------------------------

//-------------------------------- Start Obsirve element add animation slid -------------------------
let aboutImage = document.querySelector('.about .container .content .image');
let textSkillsLeft = document.querySelector('.skills .container .content-all .left-select .info-text');
let textSkillsRight = document.querySelector('.skills .container .content-all .right-select .info-text');
let progs = document.querySelectorAll('.skills .container .content-all .right-select .content-skills .prog-holder');
let preson_info = document.querySelectorAll('.skills .container .content-all .left-select .content .person-info');
let designImageRotate = document.querySelector('.design .content .image');

let elementsToObserve = document.querySelectorAll('*');

textSkillsRight.classList.forEach((calssItem) => {
  if (calssItem === 'animation_right') {
  }
});

let observe = new IntersectionObserver(
  (entries) => {
    entries.forEach((ele) => {
      if (ele.isIntersecting) {
        ele.target.classList.forEach((calssItem) => {
          if (calssItem === 'animation_right') {
            ele.target.classList.toggle('slide_right');
          } else if (calssItem === 'animation_left') {
            ele.target.classList.toggle('slide');
          } else if (calssItem === 'animation_bottom') {
            ele.target.classList.toggle('slide_bottom');
          } else if (calssItem === 'animation_top') {
            ele.target.classList.toggle('slide_top');
          } else if (calssItem === 'animation_rotate') {
            ele.target.classList.add('slide_rotate');
          }
        });

        observe.unobserve(ele.target);
      }
    });
  },
  {
    rootMargin: '-150px',
  }
);
elementsToObserve.forEach((ele) => {
  observe.observe(ele);
});
observe.observe(aboutImage);
observe.observe(designImageRotate);

observe.observe(textSkillsLeft);
preson_info.forEach((person) => {
  observe.observe(person);
});
observe.observe(textSkillsRight);
progs.forEach((prog) => {
  observe.observe(prog);
});

//----------------------------------------- End Obsirve element add animation slid ------------------------------------------//
// --------------------------------------- start width span ----------------------------------------
let progHolder = document.querySelectorAll('.skills .container .content-all .right-select .content-skills .prog-holder');
let skillsSpanWidth = document.querySelectorAll('.skills .container .content-all .right-select .content-skills .prog-holder .prog span');

progHolder.forEach((holder) => {
  holder.addEventListener('animationend', (event) => {
    if (getComputedStyle(event.target).opacity === '1') {
      // console.log(event.target.children[1].children[0]);
      let span = event.target.children[1].children[0];
      let widthSpan = span.getAttribute('data-progress');
      span.style.width = widthSpan;
    }
  });
});

// --------------------------------------- End width span ------------------------------------------
