var copymail= document.getElementById("email");
var copybtn= document.querySelector(".copy");

copybtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(copymail.innerText);
    copybtn.innerHTML="Copied";
});

let tl= gsap.timeline({duraction:1});
tl.from(".left-menu",{
    y:-100,
})
tl.from(".right-menu",{
    y:-100,
})
tl.fromTo(".profile-pic",{
    opacity:0,
},{
    opacity:1,
    duraction:2,
})
tl.fromTo(".heading",{
    opacity:0,
},{
    y:0,
    opacity:1,
    duraction:2,
})
tl.fromTo("#latest",{
    opacity:0,
},{
    y:0,
    opacity:1,
    duraction:2,
})

gsap.from(".brands img",{
    scale:0,
    delay:1,
    opacity:0,
    duraction:2,
    scrollTrigger:{
        trigger:".brands",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        // end:"top 30%",
        scrub:2,
        // pin:true,
    }
})

gsap.from(".result-work h1",{
    delay:1,
    opacity:0,
    scrollTrigger:{
        trigger:".result-work",
        scroller:"body",
        start:"top 70%",
        scrub:1,
    }
})
gsap.from(".service button",{
    delay:1,
    rotation: 0,    
    scrollTrigger:{
        trigger:".service button",
        scroller:"body",
        start:"top 70%",
        scrub:1,
    }
})
gsap.fromTo(".sake-hand",{
    scale:0,
},{ 
    scale:1.3,
    duraction:2,  
    scrollTrigger:{
        trigger:".sake-hand",
        scroller:"body",
        start:"top 70%",
        scrub:1,
    }
})
gsap.fromTo(".contact h1",{
    opacity:0,
},{ 
    opacity:1,
    duraction:2,  
    scrollTrigger:{
        trigger:".contact h1",
        scroller:"body",
        start:"top 70%",
        end:"top 70%",
        scrub:1,
    }
})



