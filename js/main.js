const shaer = document.querySelector(".shaer");
const drop = document.querySelector(".drop")
;

shaer.addEventListener("click", function (){
    if (drop.classList.contains("show")){
        drop.classList.remove("show");
    }
    else {
        drop.classList.add("show");
    }
})
