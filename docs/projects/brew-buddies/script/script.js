'use strict';

window.addEventListener('load', function () {
     window.addEventListener('activate.bs.scrollspy', function (event) {
        //hämtar id av aktiv section
        let activeSectionId = event.relatedTarget.getAttribute('href');
        //hämtar elementet som är aktivt
        let activeSection = document.querySelector(activeSectionId);


        //om "about" är aktiv, sätt animeringsklass
         if(activeSection.getAttribute('id') == 'about'){
            let h2 = activeSection.querySelector('h2');
            let img = activeSection.querySelector('img');
            //sätt klass på bild
            img.classList.add('anim-bottom');
            h2.classList.add('anim-left');
        }

        //om "history" är aktiv, sätt animeringsklass
        if(activeSection.getAttribute('id') == 'history'){
            activeSection.classList.add('anim-bottom');
        }
       
        //sätter klass på aktiv länk
        let activeLink = document.querySelector('a[href="' + activeSectionId + '"]');
        activeLink.classList.add('active-link');
        
        //tar bort "active"-class på alla inaktiva
        let links = document.querySelectorAll('.nav-link');
        links.forEach((link) => {
            if (link.getAttribute('href') !== activeSectionId) {
            link.classList.remove('active-link');
            }
        });
});

   /**
    * 
    * 
    * NAVBAR ANIMERING
    * 
    */

    //sparar scrollpositions-värde i en variabel + hämtar navbar-elementet
    let prev = window.pageYOffset;
    const navbar = document.querySelector('#navbar');
    
    window.addEventListener('scroll', function() {
        // variabel för nya scrollpositions-värdet
        const current = window.pageYOffset;

        //större skärm än 992px
        var x = window.matchMedia("(min-width: 992px)");
        myFunction(x);

        function myFunction(x) {
            if (x.matches) { // om större skärm
                //låt navbar sitta vid toppen
                navbar.style.top = '0';
            } else {  //vid mindre skärm 
                //jämför föregående scrollPos med det nya
                if (prev > current) {
                    //om användaren scrollar upp, visas navbar igen
                    navbar.style.top = '0';
                } else {
                    //om user scrollar ned, döljs navbaren
                    navbar.style.top = '-9rem';
                }
                //uppdaterar föregående scrollPosition
                prev = current;
            }
        }
    });
});