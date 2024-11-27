window.addEventListener('load', function(){

    const bubble = document.querySelector('.first-paragraph svg');
    console.log(bubble);
    if(bubble) {
        bubble.classList.add('spin');
    }

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

    // const savedTheme = localStorage.getItem("theme");

    // if (savedTheme === "light") {
    //     document.body.classList.remove("dark-mode"); // Light mode
    // } else {
    //     document.body.classList.add("dark-mode"); // Default to dark mode
    // }

    // // Add event listener to toggle button
    // const themeToggle = document.getElementById("darkMode");
    // themeToggle.addEventListener("click", () => {
    //     const isDarkMode = document.body.classList.toggle("dark-mode");
    //     // Save theme preference
    //     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // });
    // Select all toggle buttons
    // const themeToggles = document.querySelectorAll(".darkMode");

    // // Check saved theme from localStorage and apply it
    // const savedTheme = localStorage.getItem("theme");
    // if (savedTheme) {
    // document.body.classList.toggle("dark-mode", savedTheme === "dark");
    // } else {
    // document.body.classList.add("dark-mode"); // Default to dark mode
    // }

    // // Add event listeners to all toggle buttons
    // themeToggles.forEach(btn => {
    // btn.addEventListener("click", () => {
    //     // Toggle dark mode class on body
    //     const isDarkMode = document.body.classList.toggle("dark-mode");
        
    //     // Save the current theme to localStorage
    //     localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    // });
    // });
//     const themeToggles = document.querySelectorAll(".darkMode");

//     // Check saved theme from localStorage and apply it
//     const savedTheme = localStorage.getItem("theme");

// // Add event listeners to all toggle buttons
// themeToggles.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         const isLightMode = document.body.classList.toggle("light-mode"); // Toggle light mode class
//         localStorage.setItem("theme", isLightMode ? "light" : "dark"); // Save the current theme
//     });
// });


// if (savedTheme === "light") {
//     document.body.classList.add("light-mode"); // Apply light mode if saved
// } else {
//     document.body.classList.remove("light-mode"); // Default to dark mode
//     localStorage.setItem("theme", "dark"); // Save default as dark mode
// }
const themeToggles = document.querySelectorAll(".darkMode");

// Check saved theme from localStorage and apply it
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode"); // Apply light mode if saved
} else {
    document.body.classList.remove("light-mode"); // Default to dark mode
    localStorage.setItem("theme", "dark"); // Save default as dark mode
}

// Remove the "theme-init" class after theme is applied
document.body.classList.remove("theme-init");

// Add event listeners to all toggle buttons
themeToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
        const isLightMode = document.body.classList.toggle("light-mode"); // Toggle light mode class
        localStorage.setItem("theme", isLightMode ? "light" : "dark"); // Save the current theme
    });
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

// const projectDetailsContainer = document.querySelector('.project-details');

// const cardLinks = document.querySelectorAll('.card-link');

// cardLinks.forEach(cardLink => {
//   cardLink.addEventListener('click', event => {
//     // console.log(event);
//     // event.preventDefault();
//     const details = cardLink.querySelector('.details-info');
//     const title = cardLink.querySelector('.kort-titel').textContent;
//     const imageSrc = cardLink.querySelector('img').src;
//     const description = cardLink.querySelector('.description').textContent;
//     const date = cardLink.querySelector('.date').textContent;
//     const hasProjectLink = cardLink.querySelector('.project-link') !== null;
//     // Update the content of the project details container
   
//     const link = cardLink.querySelector('.project-link');
// const href = link ? link.getAttribute('href') : ''; // Get the href attribute or an empty string if link doesn't exist

// // Update the content of the project details container
// projectDetailsContainer.innerHTML = `
//   <div class="project-details-content container-fluid">
//     <h2 class="sub-heading">${title} - ${date}</h2>
//     <img src="${imageSrc}" alt="${title}" class="project-details-image">
//     <p class="description-element m-auto">${description}</p>
//     <br>
//     ${link ? `<a href="${href}" target="_blank" class="project-link">Visit Website</a>` : ''}
//     <br>
//     <button class="close-button">close</button>
//   </div>
// `;

//     projectDetailsContainer.classList.add('singleView');

//     let btn = document.querySelector('.close-button');
//     btn.addEventListener('click', closeSingleView);
//     // projectDetailsContainer.addEventListener('click', handleClickOutside);

//     function closeSingleView() {
//       projectDetailsContainer.classList.remove('singleView');
//       projectDetailsContainer.innerHTML = '';
//     }

//     // function handleClickOutside(event) {
//     //     if (projectContent == event.target) {
//     //         closeSingleView();
//     //         projectContent.removeEventListener('click', handleClickOutside);
//     //     }
//     // }
//   });


/**
 * 
 * VERSION TWO PROJECT CARDS
 * 
 */

//const imagePath = `images/${project.image}`;

// const projectDetailsContainer = document.querySelector('.project-details');
// const cards = document.querySelectorAll('.card');

// cards.forEach(card => {
//   card.addEventListener('click', event => {
//     // console.log(event);
//     // event.preventDefault();
    
//     const title = card.querySelector('.card__title').textContent;
//     const imageSrc = card.querySelector('img').src;
//     const description = card.querySelector('.card__description').textContent;
//     const language = card.querySelector('.card__lang').textContent;
//     const date = card.querySelector('.date').textContent;
//     // const hasProjectLink = card.querySelector('.project-link') !== null;
//     // Update the content of the project details container
   
//     const link = card.querySelector('.project-link');
//     const href = link ? link.getAttribute('href') : ''; // Get the href attribute or an empty string if link doesn't exist

// // Update the content of the project details container
// projectDetailsContainer.innerHTML = `
//   <div class="project-details-content container-fluid">
//     <h2 class="sub-heading">${title} - ${date}</h2>
//     <img src="${imageSrc}" alt="${title}" class="project-details-image">
//     <span class="description-element m-auto">${language}</span>
//     <p class="description-element m-auto">${description}</p>
//     <br>
//     ${link ? `<a href="${href}" target="_blank" class="project-link">Visit Website</a>` : ''}
//     <br>
//     <button class="close-button">close</button>
//   </div>
// `;

//     projectDetailsContainer.classList.add('singleView');

//     // let btn = document.querySelector('.close-button');
//     // btn.addEventListener('click', closeSingleView);
//     // // projectDetailsContainer.addEventListener('click', handleClickOutside);

//     // function closeSingleView() {
//     //   projectDetailsContainer.classList.remove('singleView');
//     //   projectDetailsContainer.innerHTML = '';
//     // }

//     // function handleClickOutside(event) {
//     //     if (projectContent == event.target) {
//     //         closeSingleView();
//     //         projectContent.removeEventListener('click', handleClickOutside);
//     //     }
//     // }
//   });
// });

// Ladda projektdata och rendera dem
fetch("projects.json")
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector(".cards");
    const filterButtons = document.querySelectorAll(".filter-button");
    const modal = document.getElementById("projectModal");
    const modalClose = document.querySelector(".modal-close");

    // Funktion för att skapa projektkort
    const renderProjects = (projects) => {
      container.innerHTML = ""; // Rensa befintliga kort
      projects.forEach(project => {
        // Dynamically choose the icon based on project type
        const thumbnailIcon = project.type.includes("Design") 
          ? '<i class="fa-solid fa-palette"></i>' 
          : '<i class="fa-solid fa-code"></i>';

        const projectHTML = `
          <li>
            <div id="${project.id}" class="card" data-id="${project.id}">
              <img src="images/${project.image}" class="card__image" alt="${project.title}" />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
                  <div class="card__thumb">${thumbnailIcon}</div>
                  <div class="card__header-text">
                    <h3 class="card__title">${project.title}</h3>
                    <p class="card__date">${project.year}</p>            
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                <span class="card__type">${project.type}</span>
                ${project.link ? `<a href="${project.link}" class="project-link mb-2" target="_blank">Go to website<i class="ml-1 fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}
                </div>
                <p class="card__lang">${project.languages}</p>
                <p class="card__description d-none">${project.description}</p>
              </div>
            </div>      
          </li>
        `;
        container.innerHTML += projectHTML;
      });

      // Add event listeners to cards for modal
      document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
          const projectId = parseInt(card.dataset.id);
          const project = projects.find(p => p.id === projectId);
          openModal(project);
          this.document.querySelector('#projectModal').classList.remove('d-none');
        });
      });
    };

    // Open modal with project details
    const openModal = (project) => {
      document.getElementById("modalImage").src = `images/${project.image}`;
      document.getElementById("modalTitle").innerText = project.title;
      document.getElementById("modalType").innerText = project.type;
      document.getElementById("modalYear").innerText = project.year;
      document.getElementById("modalDescription").innerText = project.description;
      document.getElementById("modalLanguages").innerText = project.languages;
    
      const modalLink = document.getElementById("modalLink");
      if (project.link) {
        modalLink.href = project.link;
        modalLink.style.display = "inline-block";
      } else {
        modalLink.style.display = "none";
      }
      modal.style.display = "block";
    };

    // Close modal
    modalClose.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Initial rendering av alla projekt
    renderProjects(data);

    // Filtreringsfunktion
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const type = button.getAttribute("data-type");
        if (type === "All") {
          renderProjects(data); // Visa alla projekt
        } else {
          const filteredProjects = data.filter(project => project.type === type);
          renderProjects(filteredProjects); // Visa filtrerade projekt
        }
      });
    });
  })
  .catch(error => console.error("Error loading projects:", error));

});






