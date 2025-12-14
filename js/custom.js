
(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

  // CUSTOM LINK
  $('.custom-link').click(function () {
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped, header_height);
    return false;

    function scrollToDiv(element, navheight) {
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop - navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

  // =============================================
  // PROJECTS DATA - Easy to add/edit projects here
  // =============================================
  const projectsData = [
    {
      tag: "Website & Apps",
      title: "MY Bengkel",
      description: "A comprehensive auto workshop management system that streamlines vehicle service tracking, inventory management, customer appointments, and billing operations for modern automotive repair businesses.",
      technologies: ["Golang", "Gin", "Postgresql", "React Native","Expo"],
      image: "images/projects/mybengkel.png"
    },
    {
      tag: "Website & Apps",
      title: "JualKirim",
      description: "An intelligent shipping aggregator platform that consolidates multiple courier services (J&T, JNE, etc.) into a unified dashboard for real-time transaction monitoring, shipment tracking, and logistics analytics.",
      technologies: ["Golang", "Gin", "Postgresql", "React JS"],
      image: "images/projects/jualkirim.png"
    },
    {
      tag: "Website & Apps",
      title: "WM.DENTME",
      description: "A modern dental clinic management system enabling patients to book appointments, view doctor schedules, manage medical records, and receive automated reminders for a seamless healthcare experience.",
      technologies: ["PHP", "MySQL", "CSS", "Jquery"],
      image: "images/projects/dentme.png"
    },
    {
      tag: "Website",
      title: "Kumabear",
      description: "A fully-featured e-commerce platform for Kumabear products, complete with product catalog, shopping cart functionality, secure checkout process, order management, and customer account dashboard.",
      technologies: ["CI3", "MySQL", "Jquery"],
      image: "images/projects/kumabear.jpg"
    },
    {
      tag: "Website & Apps",
      title: "YYDS Indonesia",
      description: "A feature-rich travel agency platform showcasing curated tour packages, destination guides, and an intuitive booking system with integrated payment gateway for hassle-free travel arrangements.",
      technologies: ["PHP", "MySQL", "CSS", "React"],
      image: "images/projects/yyds.png"
    },
    {
      tag: "Apps",
      title: "Selaras",
      description: "An integrated kitchen management application designed for monitoring inventory, tracking orders, managing recipes, scheduling staff, and generating real-time reports to streamline restaurant operations.",
      technologies: ["CI3", "MySQL", "Jquery"],
      image: "images/projects/selaras-1.jpg"
    },
    {
      tag: "Website & Apps",
      title: "Amora Travel Tour",
      description: "A dynamic travel and tourism platform offering seamless trip planning, tour package browsing, hotel reservations, and secure online booking with personalized itinerary management for travelers.",
      technologies: ["PHP", "MySQL", "CSS", "React"],
      image: "images/projects/amora.png"
    },
    {
      tag: "Website",
      title: "PPDB Alazhar",
      description: "A comprehensive student admission portal for Al-Azhar School featuring online registration, document upload, payment integration, and real-time application status tracking for prospective students.",
      technologies: ["PHP", "MySQL", "CSS", "JavaScript"],
      image: "images/projects/alazhar.jpg"
    },
    // Add more projects here by copying the object structure above
  ];

  // Function to render projects
  function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let html = '<div class="row">';

    projectsData.forEach(function (project) {
      // Generate tech tags HTML
      const techTagsHtml = project.technologies
        .map(function (tech) {
          return '<span class="tech-tag">' + tech + '</span>';
        })
        .join('');

      // Generate project card HTML
      html += `
          <div class="col-lg-4 col-md-6 col-12">
            <div class="projects-thumb">
              <div class="projects-info">
                <small class="projects-tag">${project.tag}</small>
                <h3 class="projects-title">${project.title}</h3>
                <p class="projects-description">${project.description}</p>
                <div class="projects-tech-tags">
                  ${techTagsHtml}
                </div>
              </div>
              <a href="${project.image}" class="popup-image">
                <img src="${project.image}" class="project-image img-fluid" alt="${project.title}">
              </a>
            </div>
          </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;

    // Re-initialize Magnific Popup for dynamically added elements
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  // Render projects when DOM is ready
  $(document).ready(function () {
    renderProjects();
  });

})(window.jQuery);


