function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {

}

    // ПЕРВЫЙ аргумент - класс всего нашего хедера табов
    // ВТОРОЙ аргумент - класс конктрентного элемента, при клике на который будет переключаться таб
    // ТРЕТИЙ аргумент - класс того блока, который будет переключаться
    // ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавляться для таба, который сейчас активен
tabs( '.tabs__header', '.tabs__header-item', 'tabs__content-item', 'active')