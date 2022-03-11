document.addEventListener("DOMContentLoaded", () => {
    // dropdwon
    function fadeIn(el, display) {
        el.style.opacity = 0;
        el.style.display = display || 'block';
        (function fade() {
            var val = parseFloat(el.style.opacity);
            if (!((val += .05) > 1)) {
                el.style.opacity = val;
                requestAnimationFrame(fade);
            }
        })();
    }


    function fadeOut(el) {
        el.style.opacity = 1;
        (function fade() {
            if ((el.style.opacity -= .05) < 0) {
                el.style.display = 'none';
            } else {
                requestAnimationFrame(fade);
            }
        })();
    };

    // lang
    const lang = document.querySelectorAll('.lang');
    if (lang) {
        lang.forEach(elem => {
            let main = elem.querySelector('.lang__main');
            let droplist = elem.querySelector('.lang__list');

            main.addEventListener('click', () => {
                if (main.classList.contains('active')) {
                    main.classList.remove('active');
                    fadeOut(droplist);
                } else {
                    main.classList.add('active');
                    fadeIn(droplist);
                }
            });

            document.addEventListener('click', (e) => {
                let target = e.target;
                if (target != main) {
                    fadeOut(droplist);
                    main.classList.remove('active');
                }
            })
        });


    }

    // open categories

    let slideUp = (target, duration = 500) => {

        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout(() => {
            target.style.display = 'none';
            target.style.removeProperty('height');
            target.style.removeProperty('padding-top');
            target.style.removeProperty('padding-bottom');
            target.style.removeProperty('margin-top');
            target.style.removeProperty('margin-bottom');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }

    let slideDown = (target, duration = 500) => {

        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout(() => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }


    const categories = document.querySelector('.categories');
    const openCategories = document.querySelector('.categories-btn');

    if (categories && openCategories) {
        openCategories.addEventListener('click', () => {
            if (openCategories.classList.contains('active')) {
                openCategories.classList.remove('active');
                slideUp(categories);
            } else {
                openCategories.classList.add('active');
                slideDown(categories)
            }
        })
    }

    // open comment
    const openComment = document.querySelector('.open-comment');
    if (openComment) {
        const formComment = document.querySelector('.form--comment');
        openComment.addEventListener('click', () => {
            if (openComment.classList.contains('active')) {
                openComment.classList.remove('active');
                fadeOut(formComment);
            } else {
                openComment.classList.add('active');
                fadeIn(formComment);
            }
        });
    }

    const like = document.querySelector('.like');
    const dislike = document.querySelector('.dislike');

    if (like && dislike) {
        like.addEventListener('click', () => {
            like.classList.toggle('active');
            dislike.classList.remove('active');
        })
        dislike.addEventListener('click', () => {
            dislike.classList.toggle('active');
            like.classList.remove('active');
        })
    }

    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (burger && mobileMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            const target = e.target;
            if (target != burger) {
                burger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        })
    }



});