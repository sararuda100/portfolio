window.addEventListener('load', function(){
    
   // Get the element that needs the hover image change
    const imgContainer = document.querySelector('.img-container');

    // Preload the hover image
    const hoverImageUrl = 'https://github.com/sararuda100/portfolio/blob/main/docs/images/IMG_5408.JPG?raw=true';
    const hoverImage = new Image();
    hoverImage.src = hoverImageUrl;

    // Adding hover event listener
    imgContainer.addEventListener('mouseover', () => {
        imgContainer.style.backgroundImage = `url(${hoverImageUrl})`;
        imgContainer.style.borderRadius = '7px';
    });

    // Resetting the background image on mouseout
    imgContainer.addEventListener('mouseout', () => {
        imgContainer.style.backgroundImage = '';
    });


    // Get the current page URL
    const currentPageUrl = window.location.href;

    // Get all the navbar links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each link and check if its href matches the current page URL
    navLinks.forEach(link => {
    if (link.href === currentPageUrl) {
        link.classList.add('active'); // Add the active class to the matching link
    }
    else if (link.href !== currentPageUrl){
        link.classList.remove('active');
    }
    });

    //pie chart
    var xValues = ["Designer", "Coder"];
    var yValues = [35, 65];
    var barColors = [
        "rgb(6, 205, 139)",
        "#ccd6f6"
    ];

    new Chart("myChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            title: {
            display: false,
            text: "Part designer part coder"
            }
        }
    });

    const randomFactsContainer = document.querySelector('.random-facts');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('hover-3'); // Add the class "hover-3" to trigger the animation
                console.log('inne i view');
                entry.target.classList.remove('opac');
            } else {
                entry.target.classList.remove('hover-3');
            }
        });
    }, {
        rootMargin: '-200px 0px 0px 0px' //asjust height when triggered
    });

    observer.observe(randomFactsContainer);

});


