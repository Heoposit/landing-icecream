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