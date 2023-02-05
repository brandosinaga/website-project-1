
let container_child = document.querySelector(".container-child");

container_child.classList.add("active-container-child")

let tab = document.querySelector(".tab");

tab.classList.add("active-tab")

let windowx = document.querySelector(".window");

windowx.classList.add("active-window")










window.addEventListener("mousemove", (e) => {

    let position = e.clientY
    let big_containers = document.querySelector(".tab").children
    let menu_items = document.querySelector(".con-menu").children
    

    if( e.clientY <  300 ){

        big_containers[2].classList.add("con-card-active")
        // big_containers[3].classList.add("profile-active")
        big_containers[3].children[0].classList.add("profile-main-active")
        big_containers[3].children[1].classList.add("skills-main-active")
        menu_items[0].classList.add("active-menu")
        menu_items[1].classList.add("profile-active");
        menu_items[2].classList.add("skills-active");
        menu_items[3].classList.add("ethique-active")

        



   

      


    } else {
        big_containers[2].classList.remove("con-card-active")
        // big_containers[3].classList.remove("profile-active")
        big_containers[3].children[0].classList.remove("profile-main-active")
        big_containers[3].children[1].classList.remove("skills-main-active")
        menu_items[0].classList.remove("active-menu")
        menu_items[1].classList.remove("profile-active");
        menu_items[2].classList.remove("skills-active")
        menu_items[3].classList.remove("ethique-active")

        

 

      
    }


 

})











function writeBigHeader(obj, arrText, newObj, timePerSecond){


    

    for(let i = 0; i < arrText.length; i ++){


        setTimeout(() =>{
        let text = document.createTextNode(arrText[i]);
        newObj.appendChild(text);
        obj.appendChild(text)
    }, timePerSecond * i)


}
}


writeBigHeader(document.querySelector(".title-box").children[0],"Welcome into the Galaxy of Creativity".split(""),document.createElement("span"), 100)







let big_container2 = document.querySelector(".big-container2");


window.addEventListener("scroll",() => {

    let img_con = document.querySelector(".gambar-icon").children;
    let size = 80

 if(big_container2.getBoundingClientRect().y < window.innerHeight - 300){

    big_container2.children[1].classList.add("gambar-box")
    for(let i = 0; i < img_con.length; i++){

        img_con[i].style =  `opacity: 1;transform:translateX(${size - (10 * i)}vw);transition:all ease 2s;transition-delay: 2s;`
}


 } else {
    big_container2.children[1].classList.remove("gambar-box")


    for(let i = 0; i < img_con.length; i++){

        img_con[i].style =  `opacity: 0`
}
 }


})







