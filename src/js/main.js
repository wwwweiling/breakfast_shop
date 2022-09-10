document.addEventListener("scroll",function(event){
    if(window.scrollY>50 && window.innerWidth >768){
        document.getElementById("nav_wrap").classList.add("nav_wrap2");
        document.getElementById("nav").classList.add("fixed");
        document.getElementById("logo").classList.add("logo2");
    }
    else if(window.scrollY<50 && window.innerWidth >768){
        document.getElementById("nav_wrap").classList.remove("nav_wrap2");
        document.getElementById("nav").classList.remove("fixed");
        document.getElementById("logo").classList.remove("logo2");

    }
    else{
        document.getElementById("nav_wrap").classList.remove("nav_wrap2");

    }

  });

//   function feedIn(){
//     document.getElementById("right").style.transform = "translateX(0%)";
//   }

//   document.addEventListener("click",feedIn()){

//   }

let check = document.getElementsByClassName("nav_mobile");
check.addEventListener("click",right());
function right() {
    document.getElementById("right").style.transform = "translateX(0%)";
}