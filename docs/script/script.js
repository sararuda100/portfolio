window.addEventListener('load', function(){
    console.log('test');
    
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
    var xValues = ["Designer", "Coder", "Eating"];
    var yValues = [20, 50, 30];
    var barColors = [
        "rgb(6, 205, 139)",
        "#ccd6f6",
        "#2b5760"
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
        display: true,
        text: "Part designer part coder"
        }
    }
    });
});