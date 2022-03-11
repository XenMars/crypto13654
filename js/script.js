const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Cards style
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.getElementsByClassName('offer__block-img');
    if (entry.isIntersecting) {
      for (let i = 0; i < square.length; ++i)
        square[i].classList.add('bubble-reveal');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; ++i)
      square[i].classList.remove('bubble-reveal');
  });
});

if (document.querySelector('.offer__blocks'))
  observer.observe(document.querySelector('.offer__blocks'));

// Cards style
const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.getElementsByClassName('offer__block-odd');
    if (entry.isIntersecting) {
      for (let i = 0; i < square.length; ++i)
        square[i].classList.add('offer__block-odd-ani');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; ++i)
      square[i].classList.remove('offer__block-odd-ani');
  });
});
if (document.querySelector('.offer__blocks'))
  observer2.observe(document.querySelector('.offer__blocks'));

// Cards style
const observer3 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.getElementsByClassName('offer__block-even');
    if (entry.isIntersecting) {

      for (let i = 0; i < square.length; ++i)
        square[i].classList.add('offer__block-even-ani');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; ++i)
      square[i].classList.remove('offer__block-even-ani');
  });
});
if (document.querySelector('.faq'))
  observer3.observe(document.querySelector('.faq'));
if (document.querySelector('.offer__blocks'))
  observer3.observe(document.querySelector('.offer__blocks'));


// Cards style
const observer4 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.getElementsByClassName('faq-round-img');
    if (entry.isIntersecting) {
      for (let i = 0; i < square.length; ++i)
        square[i].classList.add('faq-round-img-ani');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; ++i)
      square[i].classList.remove('faq-round-img-ani');
  });
});

if (document.querySelector('.faq-round-img'))
  observer4.observe(document.querySelector('.faq-round-img'));

// Cards style
const observer5 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.getElementsByClassName('deposit__inner-img');
    if (entry.isIntersecting) {
      for (let i = 0; i < square.length; ++i)
        square[i].classList.add('deposit__inner-img-ani');
      return; // if we added the class, exit the function
    }
    // We're not intersecting, so remove the class!
    for (let i = 0; i < square.length; ++i)
      square[i].classList.remove('deposit__inner-img-ani');
  });
});
if (document.querySelector('.deposit__inner-img-box'))
  observer5.observe(document.querySelector('.deposit__inner-img-box'));


  // const observer6 = new IntersectionObserver(entries => {

  //   entries.forEach(
  //     entry => {
  //       const come = entry.isIntersecting ? true : false;
  //       if (come){
  //         const target = entry.target;
  //         const chiledren = target.querySelectorAll('.advantages__block');


  //         let delay = 0;
  //         for (const child of chiledren){
            
  //           child.animate([
  //             {opacity: 0},
  //             {opacity: 1},
  //           ],{
  //             fill:'forwards',
  //             delay: delay ,
  //             duration: 1400,
  //           })
  //           delay += 500;
  //           anText()
  //         }
            
  //       }
  //       else
  //       {
  //         const target = entry.target;
  //         const chiledren = target.querySelectorAll('.advantages__block');

  //         for (const child of chiledren){
         
  //           child.animate([
  //             {opacity: 1},
  //             {opacity: 0},
  //           ],{
  //             fill:"forwards",
  //             delay: 0 ,
  //             duration: 0,
  //           })
  //         }
  //         }
  //       }
          
    
 
  // );
  //     });

  // if (document.querySelector('.advantages__blocks'))
  // observer6.observe(document.querySelector('.advantages__blocks'));



// reveal
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("show");
    } else {
      reveals[i].classList.remove("show");
    }
  }
}

window.addEventListener("scroll", reveal);

// reveal by letters
// function anText(){
//   $.fn.animate_Text = function() {
//    var string = this.text();
//    return this.each(function(){
//     var $this = $(this);
//     $this.html(string.replace(/./g, '<span class="new">$&</span>'));
//     $this.find('span.new').each(function(i, el){
//      setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
//     });
//    });
//   };
//   $('.advantages__block-subtitle--reveal01').show();
//   $('.advantages__block-subtitle--reveal01').animate_Text();
//   $('.advantages__block-subtitle--reveal02').show();
//   $('.advantages__block-subtitle--reveal02').animate_Text();
//   $('.advantages__block-subtitle--reveal03').show();
//   $('.advantages__block-subtitle--reveal03').animate_Text();
//   $('.advantages__block-subtitle--reveal04').show();
//   $('.advantages__block-subtitle--reveal04').animate_Text();
//   $('.advantages__block-subtitle--reveal05').show();
//   $('.advantages__block-subtitle--reveal05').animate_Text();
//  }