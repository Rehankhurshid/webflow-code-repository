!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("about",[],t):"object"==typeof exports?exports.about=t():e.about=t()}(this,(()=>(()=>{let e,t,o,i;function r(){window.innerWidth>767&&!e?e=new Swiper(".swiper1",{direction:"horizontal",slidesPerView:2,slidesPerGroup:1,spaceBetween:16,loop:!1,centeredSlides:!1,mousewheel:{forceToAxis:!0},speed:300,breakpoints:{992:{slidesPerView:3}},pagination:{el:".hero-slider-pagination",clickable:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0}}):window.innerWidth<=767&&e&&(e.destroy(!0,!0),e=null)}function n(){window.innerWidth>480?t||(t=new Swiper(".swiper2",{slidesPerView:3,slidesPerGroup:1,grabCursor:!0,a11y:!1,spaceBetween:8,allowTouchMove:!0,centeredSlides:!0,centeredSlidesBounds:!0,navigation:{nextEl:"[data-swiper-button='next']",prevEl:"[data-swiper-button='prev']"},breakpoints:{481:{slidesPerView:1.1,slidesPerGroup:1,spaceBetween:8},767:{slidesPerView:2.5,slidesPerGroup:1,spaceBetween:8},992:{slidesPerView:3.5,slidesPerGroup:1,spaceBetween:8}}})):t&&(t.destroy(!0,!0),t=null),o||(o=new Swiper(".swiper3",{slidesPerView:1.1,slidesPerGroup:1,grabCursor:!0,a11y:!1,spaceBetween:8,allowTouchMove:!0,navigation:{nextEl:"[data-swiper-button='next']",prevEl:"[data-swiper-button='prev']"},breakpoints:{481:{slidesPerView:1,slidesPerGroup:1,spaceBetween:8},767:{slidesPerView:2.5,slidesPerGroup:1,spaceBetween:8},992:{slidesPerView:2.5,slidesPerGroup:1,spaceBetween:8}}}))}function s(e,t,o={}){const i={triggerStart:"top 70%",duration:1,yPercent:60,stagger:.15,ease:"power2.out",...o};gsap.from(t,{scrollTrigger:{trigger:e,start:i.triggerStart,toggleActions:"play none none none"},duration:i.duration,yPercent:i.yPercent,opacity:0,stagger:i.stagger,ease:i.ease})}function a(){const e=document.querySelector(".is--move-top");e&&e.addEventListener("click",(t=>{t.preventDefault(),gsap.to(e,{scale:1.2,duration:.2,ease:"power2.out",onComplete:()=>{window.scrollTo({top:0,behavior:"smooth"}),gsap.to(e,{scale:1,duration:.2,ease:"power2.in",delay:.3})}})}))}function l(){i=new SplitType("[data-split-text]",{types:"lines, words, chars",tagName:"span"})}gsap.registerPlugin(ScrollTrigger),window.addEventListener("DOMContentLoaded",(e=>{new SplitType("[text-split]",{types:"words, chars",tagName:"span"}),$("[scrub-each-word]").each((function(e){const t=gsap.timeline({scrollTrigger:{trigger:$(this),start:"top 80%",end:"bottom 80%",scrub:.5}});t.from($(this).find(".word"),{opacity:.2,fontWeight:400,duration:.4,ease:"power1.out",stagger:{each:.4}}),t.to($(this).find(".word"),{opacity:1,fontWeight:500,duration:.4,ease:"power1.out",stagger:{each:.4}},"<")})),gsap.set("[text-split]",{opacity:1,fontWeight:400})})),gsap.registerPlugin(ScrollTrigger),window.addEventListener("load",(()=>{gsap.timeline({defaults:{duration:.8,ease:"power2.out"}}).to("[hero-element='component']",{opacity:1}).from("[hero-element='heading'] .word",{yPercent:60,opacity:0,rotate:3,stagger:.05,ease:"power4.out"},.25).to("[hero-element='image']",{scale:1,duration:1},0).from("[hero-element='component'] .button",{yPercent:100,opacity:0,stagger:.05,duration:.5},"0.5"),gsap.timeline({defaults:{duration:.8,ease:"power2.out"}}).to(".pageload_logo",{opacity:0}).to(".pageload_bar",{height:"0%",ease:"power1.inOut",stagger:{amount:.3}},0).to(".pageload_component",{autoAlpha:0}),gsap.utils.toArray(".kits_list").forEach((e=>{gsap.timeline({scrollTrigger:{trigger:e,start:"top 70%",end:"bottom center",toggleActions:"play none none none"}}).from(e.querySelectorAll(".kits_item-box"),{scale:.8,opacity:0,stagger:.1,duration:.5,ease:"power2.out"})})),gsap.to(".community_bg-image",{scale:1.15,ease:"power2.out",scrollTrigger:{trigger:".section_community",start:"top bottom",end:"bottom top",scrub:1,anticipatePin:1,fastScrollEnd:!0,smoothTouch:!0,onUpdate:e=>{e.progress%.05==0&&gsap.set(".community_bg-image",{force3D:!0})}}}),gsap.timeline({scrollTrigger:{trigger:".section_location",start:"top 70%",toggleActions:"play none none none"}}).from("[data-stagger]",{duration:1,yPercent:60,opacity:0,stagger:.15,ease:"power2.out"}).from(".is--location",{duration:1,opacity:0,scale:.95,stagger:.1,ease:"power2.out"},"<0.5")})),r(),window.addEventListener("resize",r),n(),window.addEventListener("resize",n),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".section_opinion").forEach((function(e){new Swiper(e.querySelector(".swiper"),{speed:500,loop:!1,direction:"horizontal",autoHeight:!0,centeredSlides:!1,followFinger:!1,freeMode:!1,slideToClickedSlide:!1,slidesPerView:1,spaceBetween:"4%",rewind:!1,mousewheel:{forceToAxis:!0},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{480:{slidesPerView:1,spaceBetween:"4%",direction:"vertical"},768:{slidesPerView:1,spaceBetween:"4%",direction:"vertical"},992:{slidesPerView:1,spaceBetween:"2%",direction:"vertical"}},pagination:{el:e.querySelector(".swiper-bullet-wrapper"),bulletActiveClass:"is-active",bulletClass:"swiper-bullet",bulletElement:"button",clickable:!0},navigation:{nextEl:e.querySelector(".swiper-next"),prevEl:e.querySelector(".swiper-prev"),disabledClass:"is-disabled"},scrollbar:{el:e.querySelector(".swiper-drag-wrapper"),draggable:!0,dragClass:"swiper-drag",snapOnRelease:!0},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})}))})),$(document).ready((function(){s(".section_ame"),s(".section_other"),s(".section_products"),s(".section_marquee"),s(".section_explore")})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".section_opinion").forEach((function(e){new Swiper(e.querySelector(".swiper"),{speed:500,loop:!1,direction:"horizontal",autoHeight:!0,slidesPerView:1,spaceBetween:"4%",autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{480:{slidesPerView:1,spaceBetween:"4%",direction:"vertical"},768:{slidesPerView:1,spaceBetween:"4%",direction:"vertical"},992:{slidesPerView:1,spaceBetween:"2%",direction:"vertical"}},pagination:{el:e.querySelector(".opinion_pagination"),bulletActiveClass:"is-active",bulletClass:"swiper-bullet",bulletElement:"button",clickable:!0},slideActiveClass:"is-active",slideDuplicateActiveClass:"is-active"})}))})),document.addEventListener("DOMContentLoaded",a),document.addEventListener("DOMContentLoaded",a),new Splide(".amenities",{type:"loop",autoWidth:!0,height:"auto",drag:"free",arrows:!1,pagination:!1,label:"Image Slider",reduceMotion:{speed:0,rewindSpeed:0,autoplay:"pause"},autoScroll:{speed:.6},breakpoints:{991:{autoScroll:{speed:.6}},767:{autoScroll:{speed:.6}}}}).mount(window.splide.Extensions),document.querySelectorAll("[stagger-link]").forEach((e=>{const t=e.querySelectorAll(".char");e.addEventListener("mouseenter",(function(){gsap.to(t,{yPercent:-100,duration:.5,ease:"power4.inOut",stagger:{each:.03,from:"start"},overwrite:!0})})),e.addEventListener("mouseleave",(function(){gsap.to(t,{yPercent:0,duration:.4,ease:"power4.inOut",stagger:{each:.03,from:"random"}})}))})),l();let d=window.innerWidth;return window.addEventListener("resize",(function(){d!==window.innerWidth&&(d=window.innerWidth,i&&i.revert(),l())})),{}})()));