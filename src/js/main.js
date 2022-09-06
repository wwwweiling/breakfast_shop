document.addEventListener("scroll",function(event){
    if(window.scrollY>50){
        document.getElementById("nav_wrap").classList.add("nav_wrap2");
        document.getElementById("nav").classList.add("fixed");
        document.getElementById("logo").classList.add("logo2");
    }
    else{
        document.getElementById("nav_wrap").classList.remove("nav_wrap2");
        document.getElementById("nav").classList.remove("fixed");
        document.getElementById("logo").classList.remove("logo2");

    }

  })