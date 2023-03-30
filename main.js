// Drop down profile
let subMenu=document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}


// Movies poster slider
 
const productContainers = [...document.querySelectorAll('.row_posters')];
const nxtBtn = [...document.querySelectorAll('.fa-chevron-right')];
const preBtn = [...document.querySelectorAll('.fa-chevron-left')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

