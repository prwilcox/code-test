// resources
// https://repl.it/@mtf/Basic-Vanilla-JS-dropdown-menu
// https://css-tricks.com/swapping-out-text-five-different-ways/
// http://jsfiddle.net/alistairjcbrown/wJTgA/
//https://codepen.io/tylerama/pen/nLFHt



const getEventTarget = e => {
    e = e || window.event;
    return e.target || e.srcElement;
};
const navBar = document.querySelector('.navbar');
const dropDown = document.querySelectorAll('.dropdown');
const dropBtn = document.querySelectorAll('.dropbtn');
const dropMenu = document.querySelectorAll('.dropdown-content');

//perform change of data state, button text, and toggle class (called on mouse leave and when script is first executed)
const noState = () => {
    dropBtn.forEach(el => {
        el.setAttribute('data-state', 'closed');
        el.innerHTML = el.getAttribute("data-text-original");
    });
    dropMenu.forEach(el => {
        el.setAttribute('data-state', 'closed');
        el.classList.remove('slide-down');
        el.classList.add('slide-up');
    });
}

//perform change of data state, button text, and toggle class (called on click) 
const dropDownMenu = (e) => {
    let $this = getEventTarget(e);
    if ($this.className === 'dropbtn') {
        let $that = $this.nextElementSibling;
        $that.setAttribute('data-state', $that.getAttribute('data-state') === 'open' ?
            'closed' : 'open'
        );

        if ($that.getAttribute('data-state') === 'open') {
            $this.innerHTML = $this.getAttribute("data-text-swap");
            $that.classList.add('slide-down');
            $that.classList.remove('slide-up');
        } else {
            $this.innerHTML = $this.getAttribute("data-text-original");
            $that.classList.remove('slide-down');
            $that.classList.add('slide-up');
        }[$that.getAttribute('data-state')];

    }
}
//listen for click and mouse leave
navBar.addEventListener('click', dropDownMenu);
dropDown.forEach(el => { el.addEventListener('mouseleave', noState); });
dropMenu.forEach(el => { el.addEventListener('click', noState); });
//call no state function
noState();