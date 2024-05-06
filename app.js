// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("body"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "body" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("body", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
// });




// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();







gsap.registerPlugin(ScrollTrigger);
var slide1h1 = document.querySelectorAll(".slide1-of-h1 h1")
slide1h1.forEach(function (elem) {
    gsap.to(elem, {
        transform: "translateX(-100%)",
        duration: 4,
        scrollTrigger: {
            trigger: "#slide",
            scroller: "body",
            scrub: 3
        }
    })
})
gsap.registerPlugin(ScrollTrigger);
var slide1h1 = document.querySelectorAll(".slide1-of-h1 h1")
slide1h1.forEach(function (elem) {
    gsap.to(elem, {
        transform: "translateX(-100%)",
        duration: 4,
        scrollTrigger: {
            trigger: "#page4slide",
            scroller: "body",
            scrub: 3,
            // markers:"true"
        }
    })
})

gsap.registerPlugin("ScrollTrigger")
gsap.to("#page2 img", {
    scale: 1,
    scrollTrigger: {
        trigger: "#page2 img", // Trigger element for animation
        scroller: "body",
        start: "top 80%", // Start animation when top of trigger hits center of viewport
        end: "top 0%", // End animation when bottom of trigger hits center of viewport
        // markers: true, // Add markers for visualization (optional)
        scrub: 3,   //scroll krny pr slow slow animate hoga
        
    }
})
gsap.from("#icons img",{
        y:30,
        rotateX:0,
        duration:1,
        opacity:0,
        scrollTrigger:{
            scroller:"body",
            trigger: "#icons img", 
            start: "top 70%",
            end: "top 50%",
            scrub:2
        }
    })
gsap.from("#designing img",{
        y:30,
        rotateX:0,
        duration:1,
        opacity:0,
        scrollTrigger:{
            scroller:"body",
            trigger: "#designing img", 
            start: "top 90%",
            end: "top 50%",
            scrub:2
        }
    })
    gsap.from("#page3 #left",{
        opacity:0,
        delay:1,
        x:-30,
        duration:1,
        scrollTrigger:{
            scroller:"body",
            trigger:"#page3",
            start: "top 90%",
            end: "top 50%",
            // scrub:2
        }
    })
    gsap.from("#page3 #right",{
        opacity:0,
        delay:1,
        x:30,
        duration:1,
        scrollTrigger:{
            scroller:"body",
            trigger:"#page3",
            start: "top 90%",
            end: "top 90%",
            // scrub:1,
            // markers:"true"
        }
    })

    ///////Nav color change krny ka code hy different pages k lya////////////
    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('#page6');
        const nav = document.querySelector('.nav');
        
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
        
        const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              nav.style.backgroundColor = entry.target.getAttribute('data-nav-color');
            }
          });
        }, options);
        
        sections.forEach(section => {
          observer.observe(section);
        });
      });
      


    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('#page1,#page5,#page2,#page3');
        const nav = document.querySelector('.nav');
        
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
        
        const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              nav.style.backgroundColor = entry.target.getAttribute('data-nav-color');
            }
          });
        }, options);
        
        sections.forEach(section => {
          observer.observe(section);
        });
      });
      


    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('#page4');
        const nav = document.querySelector('.nav');
        
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.5
        };
        
        const observer = new IntersectionObserver(function(entries, observer) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              nav.style.backgroundColor = entry.target.getAttribute('data-nav-color');
            }
          });
        }, options);
        
        sections.forEach(section => {
          observer.observe(section);
        });
      });
      