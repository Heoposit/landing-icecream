    // Custom Scripts
    // Мобильное меню бургер
    function burgerMenu() {
        const burger = document.querySelector('.burger')
        const menu = document.querySelector('.menu')
        const body = document.querySelector('body')
        const button = document.querySelector('.button')
        burger.addEventListener('click', () => {
            if (!menu.classList.contains('active')) {
                menu.classList.add('active')
                burger.classList.add('active-burger')
                body.classList.add('locked')
                button.classList.add('active')
            } else {
                menu.classList.remove('active')
                burger.classList.remove('active-burger')
                body.classList.remove('locked')
                button.classList.remove('active')
            }
        })
        // Вот тут мы ставим брейкпоинт навбара
        window.addEventListener('resize', () => {
            if(window.innerWidth > 767.98) {
                menu.classList.remove('active')
                burger.classList.remove('active-burger')
                body.classList.remove('locked')
                button.classList.remove('active')
            }    
        })
    }
    burgerMenu();

    const swiper = new Swiper('.swiper', {

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigations: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-buttom-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    
        //  // Responsive breakpoints
        //  breakpoints: {
        //  // when window width is >= 320px
        // 320 {
        // slidesPerView: 3,
        // spaceBetween: 20
        // },
        //  // when window width is >= 480px
        // 480: {
        // slidesPerView: 3,
        // spaceBetween: 30
        //  },
        // }
    })