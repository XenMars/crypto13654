$('.faq__question').click((event)=>{
  let target = event.target;
    console.log(target.classList.contains('faq__question'));
  while (!target.classList.contains('faq__question')) {
      target = target.parentNode;
      console.log(target.classList.contains('faq__question'));
  }
  target.classList.toggle('accordion_open');
})