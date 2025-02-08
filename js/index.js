const showBtn = document.querySelectorAll('.directors__box_btn');
const directorBox = document.querySelectorAll('.directors__box');
const directorsShowed = document.querySelectorAll('.directors__showed_box');
const directorsHide = document.querySelectorAll('.directors__hide_box');

const toggleMap = new Map();

for (let i = 0; i < showBtn.length; i++) {
    toggleMap.set(i, [i, i, false])
}

showBtn.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.defaultPrevented;
        const toggle = toggleMap.get(index);
        if(toggle[2] === true) {
            toggleMap.set(index, [index, index, false])
        } else if(toggle[2] === false){            
            toggleMap.set(index, [index, index, true])
        }
        const toggle1 = toggleMap.get(index);
        
        if(toggle1[2] === true) {            
            e.target.classList.add('directors__box_btn_hover')
            directorsShowed.forEach((element, index) => {
                if(toggle[0] === index) {
                    element.classList.add('showed_box_hide')
                }
            })
            directorsHide.forEach((element, index) => {
                if(toggle[0] === index) {
                    element.classList.add('hidden_to_show')
                }
            })
        } else if(toggle1[2] === false) {
            e.target.classList.remove('directors__box_btn_hover')
            e.target.classList.add('directors__box_btn')
            directorsShowed.forEach((element, index) => {
                if(toggle[0] === index) {
                    element.classList.remove('showed_box_hide')
                }
            })
            directorsHide.forEach((element, index) => {
                if(toggle[0] === index) {
                    element.classList.remove('hidden_to_show')
                }
            })
        }

    })
})


// burger brn
const home__header__burger = document.querySelector('.home__header__burger');
const home__header_burger_btn = document.querySelector('.home__header_burger_btn');

home__header_burger_btn.addEventListener('click', () => {
    home__header_burger_btn.classList.toggle('home__header_burger_btn_click');
    home__header__burger.classList.toggle('home__header__burger_on_click');
});
