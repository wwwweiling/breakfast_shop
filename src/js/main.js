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

    })

    let check = document.getElementById("check");
    let right = document.getElementById("right");
    
    check.addEventListener("click", function(){
      right.classList.toggle("right2");  
    })
