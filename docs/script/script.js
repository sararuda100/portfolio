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

    const darkModeButton = document.getElementById('darkMode');
    darkModeButton.addEventListener('click', () => {
        console.log('clicked');
        document.body.classList.toggle('dark-mode');
    });

    //pie chart
    var xValues = ["Designer", "Coder"];
    var yValues = [35, 65];
 // Access CSS custom properties dynamically
const barColors = [
  getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim(),
  getComputedStyle(document.documentElement).getPropertyValue('--light-grey').trim(),
];


   const ctx = document.getElementById('myChart');
  if (ctx) {
    chartInstance = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ["Designer", "Coder"],
        datasets: [{
          backgroundColor: barColors,
          data: [35, 65],
        }],
      },
      options: {
        title: {
          display: false,
          text: "Part designer part coder",
        },
      },
    });
  } else {
    console.error("Canvas element not found for pie chart");
  }


    // const randomFactsContainer = document.querySelector('.random-facts');

    // //check to get rid of site error when element doesn't exist
    // if(randomFactsContainer){
        
    // const observer = new IntersectionObserver(entries => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('hover-3'); // Add the class "hover-3" to trigger the animation
    //             console.log('inne i view');
    //             entry.target.classList.remove('opac');
    //         } else {
    //             entry.target.classList.remove('hover-3');
    //         }
    //     });
    // }, {
    //     rootMargin: '-200px 0px 0px 0px' //asjust height when triggered
    // });

    // observer.observe(randomFactsContainer);


    // }
const randomFactsContainer = document.querySelector('.random-facts');

if (randomFactsContainer) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('hover-3');
        console.log('Element in view, hover-3 added');
      } else {
        entry.target.classList.remove('hover-3');
        console.log('Element out of view, hover-3 removed');
      }
    });
  }, {
    rootMargin: '0px 0px -50px 0px', // Adjust trigger threshold
  });

  observer.observe(randomFactsContainer);
} else {
  console.error('random-facts container not found');
}



    /**
     * 
     * REMOVED 1/10-2024, testing new loading 17:24
     * 
     */
    // // Get the element that needs the hover image change
    // const imgContainer = document.querySelector('.img-container');

    
    // // Preload the hover image
    // const hoverImageUrl = 'https://github.com/sararuda100/portfolio/blob/main/docs/images/IMG_5408.JPG?raw=true';
    // const hoverImage = new Image();
    // hoverImage.src = hoverImageUrl;

    // if(imgContainer){
        
    //     // Adding hover event listener
    //     imgContainer.addEventListener('mouseover', () => {
    //         imgContainer.style.backgroundImage = `url(${hoverImageUrl})`;
    //         imgContainer.style.borderRadius = '7px';
    //     });

    //     // Resetting the background image on mouseout
    //     imgContainer.addEventListener('mouseout', () => {
    //         imgContainer.style.backgroundImage = '';
    //     });


    // }

    // Preload the hover image
    const hoverImageUrl = 'https://github.com/sararuda100/portfolio/blob/main/docs/images/IMG_5408.JPG?raw=true';
    const hoverImage = new Image();
    hoverImage.src = hoverImageUrl;


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
const projectContent = document.querySelector('.project-details-content');
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
    // projectDetailsContainer.addEventListener('click', handleClickOutside);

    function closeSingleView() {
      projectDetailsContainer.classList.remove('singleView');
      projectDetailsContainer.innerHTML = '';
    }

    // function handleClickOutside(event) {
    //     if (projectContent == event.target) {
    //         closeSingleView();
    //         projectContent.removeEventListener('click', handleClickOutside);
    //     }
    // }
  });
});

});






