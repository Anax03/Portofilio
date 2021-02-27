
// Logo Location 
document.querySelector('.logo').addEventListener('click', () => {
    location.href = '/';
})


// handle burger menu
const burgerMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('#navMenu');


// width screen + add burger menu or not
if (document.body.clientWidth > 650) {

    burgerMenu.style.display = 'none';
    navMenu.style.display = 'flex';

}

else {
    burgerMenu.style.display = 'block';
    navMenu.style.display = 'none';
}


// On change width screen 
window.addEventListener("resize", (event) => {

    if (document.body.clientWidth > 650) {
        burgerMenu.style.display = 'none';
        navMenu.style.display = 'flex';
        responsiveMenu.classList.add('toggleHide');
        if (document.body.clientWidth >= 750) {




            for (let i = 0; i < 3; i++) {



                tasks[i].children[0].className = data()[i].icon;
                tasks[i].children[1].textContent = data()[i].title;
                tasks[i].children[2].textContent = data()[i].paragraph;
            }


        }



    }


    else {

        burgerMenu.style.display = 'block';
        navMenu.style.display = 'none';
    }
})


/// click burger menu

const responsiveMenu = document.querySelector('#menuReposnive');
responsiveMenu.classList.toggle('toggleHide')

burgerMenu.addEventListener('click', () => {
    responsiveMenu.classList.toggle('toggleHide')


})



// Tasks : 
const tasks = document.querySelectorAll('.task');

// recover data json file
function data() {

    return services;
}

// data to html



for (let i = 0; i < 3; i++) {



    tasks[i].children[0].className = data()[i].icon;
    tasks[i].children[1].textContent = data()[i].title;
    tasks[i].children[2].textContent = data()[i].paragraph;
}


/// previous , next 


const arrowLeft = document.querySelector('#arrowLeft');
const arrowRight = document.querySelector('#arrowRight');


arrowRight.addEventListener('click', () => {


    if (document.body.clientWidth <= 750) {

        let variable;


        if (data()[data().length - 1].title !== tasks[0].children[1].textContent) {
            for (let i = 0; i < data().length - 1; i++) {


                if (data()[i].title === tasks[0].children[1].textContent) {

                    variable = i;
                    break;
                }
            }






            tasks[0].children[0].className = data()[variable + 1].icon;
            tasks[0].children[1].textContent = data()[variable + 1].title;
            tasks[0].children[2].textContent = data()[variable + 1].paragraph;


        }

    }

    else {
        if (data()[data().length - 1].title !== tasks[2].children[1].textContent) {


            let variable;

            for (let i = 0; i < data().length - 1; i++) {

                if (data()[i].title === tasks[0].children[1].textContent) {
                    variable = i;
                    break;
                }
            }

            for (let i = 0; i < 3; i++) {


                variable++;
                tasks[i].children[0].className = data()[variable].icon;
                tasks[i].children[1].textContent = data()[variable].title;
                tasks[i].children[2].textContent = data()[variable].paragraph;
            }

        }

    }


})

arrowLeft.addEventListener('click', () => {

    if (document.body.clientWidth <= 750) {

        let variable;

        if (data()[0].title !== tasks[0].children[1].textContent) {
            for (let i = 0; i < data().length; i++) {

                if (data()[i].title === tasks[0].children[1].textContent) {
                    variable = i;
                    break;
                }
            }





            tasks[0].children[0].className = data()[variable - 1].icon;
            tasks[0].children[1].textContent = data()[variable - 1].title;
            tasks[0].children[2].textContent = data()[variable - 1].paragraph;


        }

    }

    else {
        if (data()[0].title !== tasks[0].children[1].textContent) {


            let variable;

            for (let i = 0; i < data().length; i++) {

                if (data()[i].title === tasks[2].children[1].textContent) {
                    variable = i;
                    break;
                }
            }

            for (let i = 2; i >= 0; i--) {


                variable--;
                tasks[i].children[0].className = data()[variable].icon;
                tasks[i].children[1].textContent = data()[variable].title;
                tasks[i].children[2].textContent = data()[variable].paragraph;
            }

        }

    }

})


/// Hover image projets

const containerImage = document.querySelectorAll('.containerImage');



containerImage.forEach((item) => {
    item.addEventListener('mouseover', () => {



        item.children[0].style.display = 'none'
        item.children[1].style.display = 'flex'

    })

    item.addEventListener('mouseout', () => {

        item.children[0].style.display = 'block'
        item.children[1].style.display = 'none'

    })
})


// close modal

const modal = document.querySelector('.containerMore');
const modalContainer = document.querySelector('.moreImages');
const close = document.querySelector('.fa-times');


close.addEventListener('click', () => {

    modal.style.display = 'none'
    document.body.style.overflow = 'scroll';
})


/// Button learn more

/// and return name of website so we can handle images preview 
let nameWebsite;

const btnLearn = document.querySelectorAll('.learnMore');

btnLearn.forEach((item) => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // handle images preview
        nameWebsite = item.parentElement.children[0].textContent;
        imageChange.src = item.parentElement.parentElement.children[0].src;



    })
})

/// Pictures array


/// previous next image

let i = 0;
function prev() {

    if (i <= 0) i = arrayPics[TheName()[0]].length;
    i--;
    setImg(TheName()[1], arrayPics[TheName()[0]][i]);


}

function next() {

    if (i >= arrayPics[TheName()[0]].length - 1) i = -1;
    i++;
    setImg(TheName()[1], arrayPics[TheName()[0]][i]);


}

// change Image

const imageChange = document.querySelector('#imagePreview')

function setImg(item, nameImage) {

    imageChange.src = `./screenshots/${item}/${nameImage}`;
}

// Name website to index Array 
function TheName() {

    let name;
    switch (nameWebsite) {
        case 'Business Theme':
            name = [0, 'business theme'];
            break;
        case 'SuperCoach':
            name = [1, 'coachingTheme'];
            break;
        case 'Ecommerce website':
            name = [2, 'store'];
            break;
        case 'Api sauces':
            name = [3, 'sauces'];
            break;
        case 'Anime website':
            name = [4, 'anime'];
            break;
        case 'RedexCompany':
            name = [5, 'redexcompany'];
            break;
        case 'Chouette agence':
            name = [6, 'lachouetteagence'];
            break;
        case 'Social network':
            name = [7, 'social network'];
            break;
        case 'SKY company':
            name = [8, 'skycompany'];
            break;
        case 'Regex Signup':
            name = [9, 'signupuser'];
            break;




    }

    return name;

}


// button next previous

const btnPrevious = document.querySelector('.fa-chevron-left');
const btnNext = document.querySelector('.fa-chevron-right');

btnPrevious.addEventListener('click', () => {

    prev();
});

btnNext.addEventListener('click', () => {

    next();
});

//End