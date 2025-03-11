
document.addEventListener("DOMContentLoaded", () => {

  const controller = new ScrollMagic.Controller();

    
    // Query DOM elements

    // Texts
    const heroTitle = document.querySelector(".hero-title");
    const earthText = document.querySelector(".earth-text");
    const jupiterText = document.querySelector(".jupiter-text");
    const saturnText = document.querySelector(".saturn-text");
    const saturnText1 = document.querySelector(".saturn-text-1");
    const saturnText2 = document.querySelector(".saturn-text-2");
    const saturnText3 = document.querySelector(".saturn-text-3");
    const saturnText4 = document.querySelector(".saturn-text-4");
    const uranusText = document.querySelector(".uranus-text");
    const neptuneText = document.querySelector(".neptune-text");
    const neptuneText1 = document.querySelector(".neptune-text-1");
    const installerspaceText = document.querySelector(".installer-space-text");
    const installerspaceText1 = document.querySelector(".installer-space-text-1");
    const installerspaceText2 = document.querySelector(".installer-space-text-2");
    const installerspaceText3 = document.querySelector(".installer-space-text-3");
    const goldenrecordText = document.querySelector(".golden-record-text");
    const goldenrecordText1 = document.querySelector(".golden-record-text-1");
    const goldenrecordText2 = document.querySelector(".golden-record-text-2");
    const goldenrecordText3 = document.querySelector(".golden-record-text-3");
    const goldenrecordText4 = document.querySelector(".golden-record-text-4");
    const goldenrecordText5 = document.querySelector(".golden-record-text-5");
  

     // Numbers
     const number1 = document.querySelector(".number-1-container");
     const number2 = document.querySelector(".number-2-container");
     const number3 = document.querySelector(".number-3-container");
     const number4 = document.querySelector(".number-4-container");
     const number5 = document.querySelector(".number-5-container");
  
     

    // Stars and objests
    const planetEarth = document.querySelector(".planet-earth");
    const voyagers = document.querySelector(".voyager-container");
    const stars = document.querySelector(".svg-container");
    const scrollContainer = document.querySelector(".scroll-container");
    const arrow = document.querySelector(".arrow");
    const planetJupiter = document.querySelector(".planet-jupiter");
    const planetSaturn = document.querySelector(".planet-saturn");
    const planetUranus = document.querySelector(".planet-uranus");
    const planetNeptune = document.querySelector(".planet-neptune");
    const goldenRecord = document.querySelector(".golden-record");
    const goldenRecord1 = document.querySelector(".golden-record-1");
    

 
// Voyagers lines
    const frontpath1 = document.querySelector(".front-path-1");
    const backpath1 = document.querySelector(".back-path-1");

    const frontpath2 = document.querySelector(".front-path-2");
    const backpath2 = document.querySelector(".back-path-2");

    const frontpath3 = document.querySelector(".front-path-3");
    const backpath3 = document.querySelector(".back-path-3");

    const frontpath4 = document.querySelector(".front-path-4");
    const backpath4 = document.querySelector(".back-path-4");

    const frontpath5 = document.querySelector(".front-path-5");
    const backpath5 = document.querySelector(".back-path-5");
    
    const frontpath6 = document.querySelector(".front-path-6");
    const backpath6 = document.querySelector(".back-path-6");


    const frontpath7 = document.querySelector(".front-path-7");
    const backpath7 = document.querySelector(".back-path-7");

    const backpath8 = document.querySelector(".back-path-8");

    const path = document.querySelector(".path");

    [frontpath1, backpath1, frontpath2, backpath2, frontpath3, backpath3, frontpath4, backpath4, frontpath5, backpath5, frontpath6, backpath6, frontpath7, backpath7, backpath8, path].forEach((path) => {
      const length = path.getTotalLength();
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        visibility: "hidden", 
      });
    });

    let rects = Array.from(document.querySelectorAll("#jupiter-color rect"));
    rects.sort((a, b) => parseFloat(a.getAttribute("y") || 0) - parseFloat(b.getAttribute("y") || 0));

    const paths = document.querySelectorAll("#saturn-color");

    paths.forEach((path, index) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    });
   
    let uranusrects = Array.from(document.querySelectorAll("#uranus-color rect"));
    uranusrects.sort((a, b) => parseFloat(a.getAttribute("y") || 0) - parseFloat(b.getAttribute("y") || 0));

   
  
      const mainTimeline = gsap.timeline({overwrite: "auto"});
      mainTimeline
        //Hero
        .to(heroTitle, { opacity: 0, y: 50, scale: 1.2, duration:3, ease: "power3.out"})
        .to(stars, { opacity: 0, y: 50, scale: 1.2, duration:3, ease: "power3.out" })
        .to(scrollContainer, { opacity: 0, scale: 1, duration:1.5, ease: "power3.out" , delay: 2} ,"<" )
        .to(arrow, { opacity: 0, scale: 1, duration:1.5, ease: "power3.out" },"<" )

        //Earth
        .to(voyagers, { opacity: 1, scale: 1, duration:1.5, ease: "power3.out" },"<")
        .to(planetEarth, { opacity: 1,x:-325, y: -1260, scale: 1, duration: 1.5, ease: "power3.out" })
        .to(number1, { opacity: 0, y: 40, scale: 1, duration:1.5, ease: "power1.out" })
        .to(number1, { opacity: 1, y: 0, scale: 1, duration:1.5, ease: "power1.out" })
        .to(earthText, { opacity: 0, y: 100, scale: 1, duration: 1.5, ease: "power3.out"},"<")
        .to(earthText, { opacity: 1, y: -150, scale: 1, duration: 1.5, ease: "power3.out"},"<")
        .to(backpath7, { visibility: "visible", strokeDashoffset: 0, duration:1.5, ease: "power1.inOut"})
        .to(frontpath7, { visibility: "visible", strokeDashoffset: 0, duration:1.5, ease: "power1.inOut" })
        .to(backpath8, { visibility: "visible", strokeDashoffset: 0, duration:1.5, ease: "power1.inOut" },"<")
        .to("#EarthTagline", { opacity: 0, duration: 1.5, ease: "power2.out" })
        .to(backpath7, { strokeDashoffset: -400, duration:1.5, ease: "power1.inOut"})
        .to(frontpath7, { strokeDashoffset: -135, duration:1.5, ease: "power1.inOut" })
        .to(backpath8, { strokeDashoffset: -500, duration:1.5, ease: "power1.inOut" })
        .to(planetEarth, { opacity: 1,x:-350, y: -1595, scale: 0.18, duration: 1.5, ease: "power2.out" })
        .to(earthText, { opacity: 0, y: -150, scale: 1.2, duration: 1.5, ease: "power2.out" })
        .to(number1, { opacity: 0, y: -40, scale: 1, duration:1.5, ease: "power2.out" })
        .to("#earth-color", { opacity: 1,stroke:"#989898",strokeWidth:8, duration: 1.5, ease: "power2.out" })
        .to("#EarthTagline", { opacity: 0, fill:"#989898", fontSize: "65px", y: -170, x: 250, duration: 1.5, ease: "power2.out" })
        .to("#EarthTagline", { opacity: 1, fontSize: "65px", y: -170, x: 250, duration: 1.5, ease: "power2.out" })

        // Jupiter
        .to(planetJupiter, { opacity: 1, y: -1090, scale: 1, duration: 1.5, ease: "power3.out" })

       .add(() => {
        const rects = document.querySelectorAll("#jupiter-color rect");
        const jupiterTimeline = gsap.timeline({ repeat: 5, repeatDelay: 0.5 });

        jupiterTimeline
        .to(rects, {
        y: "+=15",
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut",
        })
       .to(rects, {
        y: "-=15",
        duration: 1,
        stagger: 0.2,
        ease: "power1.inOut",
        });


      jupiterTimeline.play();
 
      timeline.data = { jupiterTimeline };
      }, "<") 

      .to(number2, { opacity: 0, y: 40, scale: 1, duration:1.5, ease: "power1.out" })
      .to(number2, { opacity: 1, y: 0, scale: 1, duration:1.5, ease: "power1.out" })

      .to(jupiterText, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out" },"<")
      .to(jupiterText, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out"})

        .to(backpath1, { visibility: "visible", strokeDashoffset: 0, duration:1.5, ease: "power1.inOut"},"<")
        .to(frontpath1, { visibility: "visible", strokeDashoffset: 0, duration:1.5, ease: "power1.inOut" })

        .to(backpath2, { visibility: "visible", strokeDashoffset: 0, duration:1.5, ease: "power1.inOut" })
        .to(frontpath2, { visibility: "visible", strokeDashoffset: 0, duration:1.5, ease: "power1.inOut" })

        .to(planetEarth, { opacity: 1, y: -1675,scale: 0.18, duration: 1.5, ease: "power2.out" })
        .to("#JupiterTagline", { opacity: 0, duration: 1.5, ease: "power2.out" })

        .to(backpath1, { strokeDashoffset: -400, duration:1.5, ease: "power1.inOut" })
        .to(frontpath1, { strokeDashoffset: -452, duration:1.5, ease: "power1.inOut" })

        .to(backpath2, { strokeDashoffset: -540, duration:1.5, ease: "power1.inOut" })
        .to(frontpath2, { opacity:0,strokeDashoffset: -566, duration:1.5, ease: "power1.inOut" })

          
      .add(() => {
        console.log("Resuming rects animations on scroll back");
       if (timeline.data?.jupiterTimeline) {
       timeline.data.jupiterTimeline.restart();
      }
      }, "<") 
        
      .to(planetJupiter, { opacity: 1,x:-840, y: -1565, scale: 0.18, duration: 1.5, ease: "power2.out" })

      .add(() => {
        console.log("Pausing rects animations");
        if (timeline.data?.jupiterTimeline) {
         timeline.data.jupiterTimeline.pause();
        }})
        
        .to(jupiterText, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out" })
        .to(number2, { opacity: 0, y: -40, scale: 1, duration:1.5, ease: "power1.out" })
        .to("#jupiter-color rect", { opacity: 1,fill:"#959595", duration: 1.5, ease: "power2.out" })
        .to("#JupiterTagline", { opacity: 0,fill:"#989898",fontSize: "52px", y: -140, x: 265, duration: 1.5, ease: "power2.out" })
        .to("#JupiterTagline", { opacity: 1, fill:"#989898",fontSize: "52px", y: -140, x: 265, duration: 1.5, ease: "power2.out" })
        // Jupiter-end


        // Saturn
        .to(number3, { opacity: 0, y: 40, scale: 1, duration:1.5, ease: "power1.out" })
        .to(number3, { opacity: 1, y: 0, scale: 1, duration:1.5, ease: "power1.out" })
        .to(planetSaturn, { opacity: 1, y: -1210, scale: 1, duration: 1.5, ease: "power2.out" })

        .to(paths, {strokeDashoffset: 0, duration: 6, ease: "power2.out",stagger: 0.8 }) 

        .to(saturnText, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out"})
        .to(saturnText, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out" })
        .to(saturnText, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out" })

        .to(backpath3, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut"},"<")
        .to(frontpath3, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut" })

        .to(saturnText1, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out" })
        .to(saturnText1, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out" })
        .to(saturnText1, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out"})

        .to(backpath4, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut" })
        .to(frontpath4, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut" }) 

        .to(saturnText2, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out" })
        .to(saturnText2, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out"})
        .to(saturnText2, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out"})

        .to(saturnText3, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out"})
        .to(saturnText3, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out"})
        .to(saturnText3, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out"})

        .to(saturnText4, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 },"<")
        .to(saturnText4, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
       
        .to(planetJupiter, { opacity: 1, y: -1780, scale: 0.18, duration: 1.5, ease: "power2.out" })
        .to("#SaturnTagline", { opacity: 0, duration: 1.5, ease: "power2.out" })

        .to(backpath3, { strokeDashoffset: -310, duration:1.5, ease: "power1.inOut" })
        .to(frontpath3, { opacity:0,strokeDashoffset: -428, duration:1.5, ease: "power1.inOut" })
       
        .to(backpath4, { strokeDashoffset: -600, duration:1.5, ease: "power1.inOut" })
        .to(frontpath4, { opacity:0,strokeDashoffset: -587, duration:1.5, ease: "power1.inOut" })

        .to(saturnText4, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })

        .to(number3, { opacity: 0, y: -40, scale: 1, duration:1.5, ease: "power1.out" })

        .to(planetSaturn, { opacity: 1,x:-1135, y: -1750, scale: 0.18, duration: 1.5, ease: "power2.out" })  
        .to("#saturn-color", { opacity: 1,stroke:"#989898", duration: 1.5, ease: "power2.out" },"<")
        .to("#saturn-fill", { opacity: 1,fill:"#989898", duration: 1.5, ease: "power2.out" },"<")
        .to("#SaturnTagline", { opacity: 0,fill:"#989898", fontSize: "58px", y: -140, x: 260, duration: 1.5, ease: "power2.out" })
        .to("#SaturnTagline", { opacity: 1,fill:"#989898", fontSize: "58px", y: -140, x: 260, duration: 1.5, ease: "power2.out" })
        // Saturn-End

        // Uranus
        .to(number4, { opacity: 0, y: 40, scale: 1, duration:1.5, ease: "power1.out" })
        .to(number4, { opacity: 1, y: 0, scale: 1, duration:1.5, ease: "power1.out" })

        .to(planetUranus, { opacity: 1, y: -1150, duration: 1.5, ease: "power2.out" })

        .add(() => {
          const uranusrects = document.querySelectorAll("#uranus-color rect");
          const uranusTimeline = gsap.timeline({ repeat: 5, repeatDelay: 0.5 });
  
          uranusTimeline
          .to(uranusrects, {
          y: "+=15",
          duration: 1,
          stagger: 0.2,
          ease: "power1.inOut",
          })
         .to(uranusrects, {
          y: "-=15",
          duration: 1,
          stagger: 0.2,
          ease: "power1.inOut",
          });
  
       
          uranusTimeline.play();
  
          timeline.data.uranusTimeline = uranusTimeline;
        }, "<")

        .to(uranusText, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out" },"<")
        .to(uranusText, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out"})

        .to(backpath5, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut" },"<")
        .to(frontpath5, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut" })

        .to(uranusText, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out"})

        .to("#UranusTagline", { opacity: 0, duration: 1.5, ease: "power2.out" })

        .to(backpath5, { strokeDashoffset:-514, duration:1.5, ease: "power1.inOut" })
        .to(frontpath5, { strokeDashoffset:-418, duration:1.5, ease: "power1.inOut" })

        .add(() => {
          console.log("Resuming rects animations on scroll back");
         if (timeline.data?.uranusTimeline) {
         timeline.data.uranusTimeline.restart();
        }
        }, "<") // Align with the current timeline position

        .to(number4, { opacity: 0, y: -40, scale: 1, duration:1.5, ease: "power1.out" })
        .to(planetSaturn, { opacity: 1, y: -1855, scale: 0.18, duration: 1.5, ease: "power2.out" })
        .to(planetUranus, { opacity: 1,x:-735, y: -1625, scale: 0.18, duration: 1.5, ease: "power2.out" },"<")

        .add(() => {
          console.log("Pausing rects animations");
          if (timeline.data?.uranusTimeline) {
           timeline.data.uranusTimeline.pause();
          }})

        .to("#uranus-color rect", { opacity: 1,fill:"#989898", duration: 1.5, ease: "power2.out" },"<")
        .to("#UranusTagline", { opacity: 0,fill:"#989898", fontSize: "52px", y: -130, x: 260, duration: 1.5, ease: "power2.out" })
        .to("#UranusTagline", { opacity: 1,fill:"#989898", fontSize: "52px", y: -130, x: 260, duration: 1.5, ease: "power2.out" })
        // Uranus-end

        // Neptune
        .to(number5, { opacity: 0, y: 40, scale: 1, duration:1.5, ease: "power1.out" })
        .to(number5, { opacity: 1, y: 0, scale: 1, duration:1.5, ease: "power1.out" })
        .to(planetNeptune, { opacity: 1, y: -1150, scale: 1, duration: 1.5, ease: "power2.out", delay: 2 })
       

        .add(() => {
          const neptunerects = document.querySelectorAll("#neptune-color rect");
          const neptuneTimeline = gsap.timeline({ repeat: 5, repeatDelay: 0.5 });
  
          neptuneTimeline
          .to(neptunerects, {
          y: "+=10",
          duration: 1,
          stagger: 0.2,
          ease: "power1.inOut",
          })
         .to(neptunerects, {
          y: "-=10",
          duration: 1,
          stagger: 0.2,
          ease: "power1.inOut",
          });
  
       
          neptuneTimeline.play();
  
          timeline.data.neptuneTimeline = neptuneTimeline; // Store the timeline in the main timeline's data
        }, "<")


        .to(neptuneText, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out"},"<")
        .to(neptuneText, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out" })

        .to(backpath6, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut" },"<")
        .to(frontpath6, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut" })

        .to(neptuneText, { opacity: 0, y: 320, scale: 1.2, duration: 2, ease: "power3.out"})

        .to(neptuneText1, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
        .to(neptuneText1, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out" , delay: 2})
 

        .to("#NeptuneTagline", { opacity: 0, duration: 1.5, ease: "power2.out" })

        .to(backpath6, { strokeDashoffset:-514, duration:2, ease: "power1.inOut" })
        .to(frontpath6, { strokeDashoffset:-418, duration:2, ease: "power1.inOut" })

        .to(neptuneText1, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })

       .add(() => {
          console.log("Resuming rects animations on scroll back");
         if (timeline.data?.neptuneTimeline) {
         timeline.data.neptuneTimeline.restart();
        }
        }, "<")

        .to(number5, { opacity: 0, y: -40, scale: 1, duration:1.5, ease: "power1.out" })
        .to(planetUranus, { opacity: 1, y: -1700, scale: 0.18, duration: 1.5, ease: "power2.out" })
        .to(planetNeptune, { opacity: 1,x:-925, y: -1625, scale: 0.18, duration: 1.5, ease: "power2.out" },"<")

        .add(() => {
          console.log("Pausing rects animations");
          if (timeline.data?.neptuneTimeline) {
           timeline.data.neptuneTimeline.pause();
          }})

        .to("#neptune-color rect", { opacity: 1,fill:"#989898", duration: 1.5, ease: "power2.out" },"<")
        .to("#NeptuneTagline", { opacity: 0,fill:"#989898", fontSize: "52px", y: -140, x: 280, duration: 1.5, ease: "power2.out" })
        .to("#NeptuneTagline", { opacity: 1,fill:"#989898", fontSize: "52px", y: -140, x: 280, duration: 1.5, ease: "power2.out" })
        // Neptune-end


         // Space-installer
        .fromTo("#inner-path",{ opacity: 0, y:0, x:-50 }, { opacity: 1, y: 0, x:40, duration: 1.5, ease: "power2.out" })
        .fromTo("#middle-path",{ opacity: 0, y:0, x:-50 }, { opacity: 1, y: 0, x:20, duration: 1.5, ease: "power2.out" })
        .fromTo("#outer-path",{ opacity: 0, y:0, x:-50 }, { opacity: 1, y: 0, x:10, duration: 1.5, ease: "power2.out" })
        .to("#HeliopauseTagline", { opacity: 1, duration: 2, ease: "power2.out" })
        
        .to(path, {visibility: "visible", strokeDashoffset:0, duration:1.5, ease: "power1.inOut" , delay: 2})

        .to(installerspaceText, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out" , delay: 2})
        .to(installerspaceText, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
        .to(installerspaceText, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })
        
        .to(installerspaceText1, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
        .to(installerspaceText1, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out" , delay: 2})
        .to(installerspaceText1, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })

        .to(installerspaceText2, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
        .to(installerspaceText2, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
        .to(installerspaceText2, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })

        .to(installerspaceText3, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
        .to(installerspaceText3, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out" , delay: 2})
        .to(installerspaceText3, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out" , delay: 2})
 
        .to(path, { strokeDashoffset:-800, duration:1.5, ease: "power4.out"})

        .to("#HeliopauseTagline", { opacity: 0, duration: 1.5, ease: "power2.out" },"<")
        .to("#outer-path", { opacity: 0, x: 100, duration: 1.5, ease: "power3.out" })
        .to("#middle-path", { opacity: 0, x: 100, duration: 1.5, ease: "power3.out" })
        .to("#inner-path", { opacity: 0, x: 100, duration: 1.5, ease: "power3.out" })
        .to(planetNeptune, { opacity: 1,x:-925, y: -1710, scale: 0.18, duration: 1.5, ease: "power2.out" })
        // Space-installer-end
      
        // Golden-records
         .to(goldenRecord, { opacity: 1, x:-700, duration: 1.5, ease: "power4.out" },"<")
         .to(goldenRecord1, { opacity: 1, x:700, duration: 1.5, ease: "power4.out" },"<")
         .to("#recordTagline",{ opacity: 1, duration: 1.5, ease: "power2.out" })
         
         .to(goldenrecordText, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })
  
         .to(goldenrecordText1, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText1, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out" , delay: 2})
         .to(goldenrecordText1, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })
  
         .to(goldenrecordText2, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText2, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText2, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })
  
         .to(goldenrecordText3, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText3, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText3, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out", delay: 2 })

         .to(goldenrecordText4, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText4, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out" , delay: 2})
         .to(goldenrecordText4, { opacity: 0, y: 320, scale: 1.2, duration: 1.5, ease: "power3.out" , delay: 2})

         .to(goldenrecordText5, { opacity: 0, y: 370, scale: 1, duration: 1.5, ease: "power3.out", delay: 2 })
         .to(goldenrecordText5, { opacity: 1, y: 320, scale: 1, duration: 1.5, ease: "power3.out", delay: 2})

         // Golden-records-end
    
   
      new ScrollMagic.Scene({
      triggerElement: ".master-section",
      duration: "2700%",
      triggerHook: 0,
      scrub: 1,
    })
      .setTween(mainTimeline) 
      .setPin(".master-section") 
      .addTo(controller);
}); 

  

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 160,
        density: { enable: true, value_area: 800 },
      },
      color: { value: "#424242" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 9 },
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
      },
      line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "bubble" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  }); 

  const backToTopButton = document.getElementById('backtotop');

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {  // Adjust threshold as needed
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'block';
    }
  });

  // Scroll smoothly back to top when the button is clicked
  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });