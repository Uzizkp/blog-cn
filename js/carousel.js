"use strict";var slideIndex=1;function plusSlides(){showSlides(slideIndex+=1)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var n,t=document.getElementsByClassName("carousel-box"),l=document.getElementsByClassName("carousel-dot");for(e>t.length&&(slideIndex=1),e<1&&(slideIndex=t.length),n=0;n<t.length;n++)t[n].style.display="none";for(n=0;n<l.length;n++)l[n].className=l[n].className.replace(" active","");t[slideIndex-1].style.display="block",l[slideIndex-1].className+=" active"}showSlides(slideIndex);var h=1.2*window.innerHeight;document.getElementById("sketchfab-model").style.height=h+"px";var iframe=document.getElementById("sketchfab-model"),uid="25e0e77ab56140be9fa6cb65cb4de96f",client=null;(client=new Sketchfab(iframe)).init(uid,{preload:1,annotation_tooltip_visible:0,success:function(e){var n=document.getElementById("show-index-info"),t=document.getElementById("site-name"),l=document.getElementById("pined-pages"),s=document.getElementById("carousel");console.log("Success"),e.load(),document.getElementById("carousel").addEventListener("click",function(){window.console.log(slideIndex),2==slideIndex?e.setCameraLookAt([-69.34712355741655,2.2439526969192185,7.88222197159061],[.04293225738905686,-1.658814372918229,10.535251036030234]):3==slideIndex?e.setCameraLookAt([10.42710558402664,218.77945883525692,60.6031613490485],[-.2812965427458305,-2.5744075927023267,11.870230319595267]):1==slideIndex?e.setCameraLookAt([-37.20336656745149,-38.62964075194737,.6871622589092077],[-1.7741291165991424,-4.108950727105709,10.800401312387038]):e.setCameraLookAt([-.07100943658257979,-2.838193770610532,273.2725839414465],[-.14979741551783443,1.2632613866959885,12.139146858457272])}),document.getElementById("site-name").addEventListener("click",function(){t.style.display="none",l.style.display="none",s.style.display="none",n.style.display="block"}),document.getElementById("show-index-info").addEventListener("click",function(){t.style.display="block",l.style.display="block",s.style.display="block",n.style.display="none"}),e.start(),e.addEventListener("viewerready",function(){console.log("Viewer is ready"),e.setFov(10,function(e,n){}),e.getCameraLookAt(function(e,n){}),e.setCameraLookAt([50,-50,2],[0,-2.5,11],function(e){})})},error:function(e){console.log(this.error)}});