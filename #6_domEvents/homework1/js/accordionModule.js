function accordion() {
    var list  = document.querySelector('.accordion__list');
    var items = document.querySelectorAll('.accordion__item');
    list.addEventListener('click', function(e) {
        e.preventDefault();
        var target = event.target;
        var childrenContainer = target.parentNode
        var contains = childrenContainer.classList.contains('active');
        if (!childrenContainer) {
            return;
        } // no children
        else {
            for (let i = 0; i < items.length; i++) {
                items[i].classList.remove('active');
            }
            if (!contains) {
                childrenContainer.classList.remove('active');
                childrenContainer.classList.add('active');
            } else {
                childrenContainer.classList.remove('active');
            }
        }
    });
}

module.exports = accordion;