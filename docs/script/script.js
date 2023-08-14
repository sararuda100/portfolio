window.addEventListener('load', function(){


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

    //gettint canvas element
    let check = document.querySelector('#myChart');

    //check to see if element exists, to get rid of errors on other pages
    if(check){
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
    }

    const randomFactsContainer = document.querySelector('.random-facts');

    //check to get rid of site error when element doesn't exist
    if(randomFactsContainer){
        
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


    }

    // Get the element that needs the hover image change
    const imgContainer = document.querySelector('.img-container');

    
    // Preload the hover image
    const hoverImageUrl = 'https://github.com/sararuda100/portfolio/blob/main/docs/images/IMG_5408.JPG?raw=true';
    const hoverImage = new Image();
    hoverImage.src = hoverImageUrl;

    if(imgContainer){
        
        // Adding hover event listener
        imgContainer.addEventListener('mouseover', () => {
            imgContainer.style.backgroundImage = `url(${hoverImageUrl})`;
            imgContainer.style.borderRadius = '7px';
        });

        // Resetting the background image on mouseout
        imgContainer.addEventListener('mouseout', () => {
            imgContainer.style.backgroundImage = '';
        });


    }

    /*
    
    * FOR DISPLAYING PROJECT DETAILS
    
    */
    // Get the project details container
// const projectDetailsContainer = document.querySelector('.project-details');

// // Get all card elements with the class "card-link"
// const cardLinks = document.querySelectorAll('.card-link');

// // Add event listeners to each card
// cardLinks.forEach(cardLink => {
//   cardLink.addEventListener('click', event => {
//     event.preventDefault();

//     // Get details from the clicked card
//     const title = cardLink.querySelector('.kort-titel').textContent;
//     const imageSrc = cardLink.querySelector('img').src;
//     const description = cardLink.querySelector('.description').textContent;
//     const date = cardLink.querySelector('.date').textContent;

//     // Update the content of the project details container
//     projectDetailsContainer.innerHTML = `
//       <div class="project-details-content container-fluid">
//         <h2 class="sub-heading">${title}</h2>
//         <img src="${imageSrc}" alt="${title}" class="project-details-image" style="width: 100%;">
//         <p>${description}</p>
//         <p>${date}</p>
//         <button class="close-button">Close</button>
//       </div>
//     `;

//     const btnClose = projectDetailsContainer.querySelector('.close-button');

//     projectDetailsContainer.classList.add('singleView');

//     btnClose.addEventListener('click', closeSingleView);

//     function closeSingleView() {
//       projectDetailsContainer.classList.remove('singleView');
//       projectDetailsContainer.innerHTML = '';
//     }
//   });
// });

const projectDetailsContainer = document.querySelector('.project-details');
const cardLinks = document.querySelectorAll('.card-link');

cardLinks.forEach(cardLink => {
  cardLink.addEventListener('click', event => {
    // console.log(event);
    // event.preventDefault();
    const details = cardLink.querySelector('.details-info');
    const title = cardLink.querySelector('.kort-titel').textContent;
    const imageSrc = cardLink.querySelector('img').src;
    const description = cardLink.querySelector('.description').textContent;
    const date = cardLink.querySelector('.date').textContent;
    const hasProjectLink = cardLink.querySelector('.project-link') !== null;
    // Update the content of the project details container
   
    const link = cardLink.querySelector('.project-link');
const href = link ? link.getAttribute('href') : ''; // Get the href attribute or an empty string if link doesn't exist

// Update the content of the project details container
projectDetailsContainer.innerHTML = `
  <div class="project-details-content container-fluid">
    <h2 class="sub-heading">${title} - ${date}</h2>
    <img src="${imageSrc}" alt="${title}" class="project-details-image">
    <p class="description-element m-auto">${description}</p>
    <br>
    ${link ? `<a href="${href}" target="_blank" class="project-link">Visit Website</a>` : ''}
    <br>
    <button class="close-button">close</button>
  </div>
`;

    projectDetailsContainer.classList.add('singleView');

    let btn = document.querySelector('.close-button');
    btn.addEventListener('click', closeSingleView);
    projectDetailsContainer.addEventListener('click', handleClickOutside);

    function closeSingleView() {
      projectDetailsContainer.classList.remove('singleView');
      projectDetailsContainer.innerHTML = '';
    }

    function handleClickOutside(event) {
      if (!projectDetailsContainer.contains(event.target)) {
        closeSingleView();
        projectDetailsContainer.removeEventListener('click', handleClickOutside);
      }
    }
  });
});

});






