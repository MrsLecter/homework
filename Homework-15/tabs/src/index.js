let nav = document.querySelector(".nav");
let tabContent = document.querySelector(".tab-content");
let tabPane = document.querySelector(".tab-pane");
//---------------------------------------------------------------------------------------------------
nav.addEventListener('click', toShowTab);
//--------------------------------------------------------------------------------------------------- 
function toShowTab(){
    let li = [];
    let tabItem = [];

    nav.childNodes.forEach(item => {
        if(item.classList != undefined){
            //console.log(item.childNodes);
            item.childNodes.forEach(itemLi => {
                if(itemLi.classList != undefined){
                    itemLi.classList.remove("active");
                    li.push(itemLi);
                }
            });
        }
    });

    tabContent.childNodes.forEach(function(item){
        if(item.classList != undefined){
            item.classList.remove("show");
            item.classList.remove("active");
            tabItem.push(item);
        }
    });

    let target = event.target;
    tabItem.forEach(function(item, iter){
        if(((target.id).split("-")[0]) == item.id){
            item.classList.add("show");
            item.classList.add("active");
           li[iter].classList.add("active");
        }
    });

}