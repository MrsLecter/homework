
//--------------------------------------------------------------------------------
let carousel = document.querySelector(".carousel");
let slides = document.querySelector(".carousel-inner");
let slidesIndicator = document.querySelector(".carousel-indicators");
//---------------------------------------------------------------------------------
carousel.addEventListener('click', toClick);
//---------------------------------------------------------------------------------
/**
 * Автоматическая смена слайдов
 */

setInterval(function(){
    toChangeSlide("next");
}, 1500);

//---------------------------------------------------------------------------------
//Индекс слайда
let index = 0;

//Массив слайдов
let slidesArr = []; 

//Все элементы, которые содержит блок slides
let elem = slides.childNodes;
//Создание массива слайдов
elem.forEach((item) =>{
    if(item.classList !==undefined){
       slidesArr.push(item);
    }
});

//Максимальный индекс слайда
let maxIndex = slidesArr.length;

//Увеличивает индекс слайда с учетом допустимых значений
function incrementIndex(){
    index++;
    if(index == 3 ){
        index = 0;
    }
    return index;
}

//Уменьшает индекс слайда с учетом допустимых значений
function decrementIndex(){
    --index;
    if(index == (-1)){
        index = 2;
    }
    return index;
}

//Обрабатывает клик по кнопке смены слайдов
function toClick(){
    let target = event.target;
    if(target.classList.value.includes("prev")){
        toChangeSlide("prev");

    }else if(target.classList.value.includes("next")){
        toChangeSlide("next");
    }
}

/**
 * Смена слайдов
 * @param {String} direction направление смены слайдов (вперед "next"/назад "prev")
 */
function toChangeSlide(direction){
        
        let indicators = slidesIndicator.childNodes;
        let indicatorsArr = [];
        
        indicators.forEach((item) =>{
            if(item.classList !==undefined){
                indicatorsArr.push(item);
            }
        });

        slidesArr.forEach(function(item, iter){
            if(item.classList.contains("active")){
                index = iter;
            }
            
        });

        slidesArr[index].classList.remove("active");
        indicatorsArr[index].classList.remove("active");
        if(direction === "prev"){
            slidesArr[decrementIndex()].classList.add("active");
            indicatorsArr[index].classList.add("active");
        }else if(direction === "next"){
            slidesArr[incrementIndex()].classList.add("active");
            indicatorsArr[index].classList.add("active");
        }
    }

//добавить затемнение
carousel.classList.add("carousel-fade");