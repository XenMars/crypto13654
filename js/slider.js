$("#slider").roundSlider({
  sliderType: "min-range",
  handleShape: "round",
  width: 22, 
  radius: 138,
  value: 0,
  showTooltip: false,
  editableTooltip: false,
  keyboardAction: false,
  mouseScrollAction: false,
  max: "100",
  min: "0",
  startAngle: 90,
});

let sliderIsLaunch = false;
let slidersSteps = 0;
function sliderStartGreat768() {

  setTimeout(() => {
    $(`#currencies__item_${slidersSteps++}_id`).css("opacity", 1);
    $("#slider").roundSlider({
      animation: true,
      value: 100,
    });
  }, 300)

}
let scrollAccess = false;
let numberOfScroll = 0;
let maxNumberOfScroll = 2;
$("#currencies__items").scroll((event) => {
  if (scrollAccess) {
    const step = $(window).width() >= 485 ? 476 : $(window).width() - 4;
    maxNumberOfScroll = $("#currencies__items").length - 1;
    let interval;
    console.log(event.target.scrollLeft, interval, numberOfScroll, );
    if (numberOfScroll >= maxNumberOfScroll) {
      interval = setInterval(() => {
        event.target.scrollLeft -= (step / 50);
        if (event.target.scrollLeft < (step / 50)) {
          numberOfScroll = 0;
          event.target.scrollLeft = 0;
          // console.log(event.target.scrollLeft, numberOfScroll);
          clearInterval(interval);
        }
      }, 4);

      // event.target.scrollLeft = 0;
      // numberOfScroll = 0;
      // console.log(event.target.scrollLeft, interval, numberOfScroll);
    }
    else {
      let currentScroll = event.target.scrollLeft + step;
      interval = setInterval(() => {
        event.target.scrollLeft += 5;
        if (event.target.scrollLeft >= (currentScroll - 8)) {
          numberOfScroll++;
          // console.log(event.target.scrollLeft, currentScroll, numberOfScroll);
          clearInterval(interval);
        }
      }, 4);
    }
    scrollAccess = false;
  }
});

function triggerScroll() {
  scrollAccess = false;
  $("#currencies__items").trigger("scroll");
}
function sliderStartLess768() {
  if (sliderIsLaunch) return;
  setTimeout(() => {
    sliderIsLaunch = true;
    $("#slider").roundSlider({
      value: 20,
      animation: true,
    });

    triggerScroll();
  }, 0);
  setTimeout(() => {
    $("#slider").roundSlider("option", "value", 40);

    triggerScroll();
  }, 3000);
  setTimeout(() => {
    $("#slider").roundSlider("option", "value", 60);

    triggerScroll();
  }, 4500);
  setTimeout(() => {
    $("#slider").roundSlider("option", "value", 80);

    triggerScroll();
  }, 6000);
  setTimeout(() => {
    $("#slider").roundSlider("option", "value", 100);

    triggerScroll();
  }, 7500);
  setTimeout(() => {
    sliderIsLaunch = false;
    $("#slider").roundSlider({
      animation: false,
      value: 0,
    });
  }, 9000);
}

const sliderObserver = new IntersectionObserver((entries) => {
  entries.forEach((ent) => {
    if (ent.isIntersecting && !sliderIsLaunch && $(window).width() > "768") {
      sliderStartGreat768();
      const itnterval = setInterval(
        () =>{
          $("#slider").roundSlider({
            animation: false,
            value: 0,
          });
          sliderStartGreat768();
          if (slidersSteps === 4) clearInterval(itnterval);
        },3000
      )
   
    } else if (
      ent.isIntersecting &&
      !sliderIsLaunch &&
      $(window).width() <= "768"
    ) {
      sliderStartLess768();
      setInterval(() => {
        sliderStartLess768();
      }, 8000);
    }
  });
});
sliderObserver.observe(document.querySelector(".currencies__inner"));