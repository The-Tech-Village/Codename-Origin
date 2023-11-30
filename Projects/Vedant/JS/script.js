document.addEventListener("DOMContentLoaded", function () {
    // Fetch and load projects from JSON
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const projectsContainer = document.getElementById('projects-container');

            // Iterate through each project and create HTML elements
            projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.classList.add('col-md-4', 'mb-4');

                projectCard.innerHTML = `
                    <div class="card">
                        <img src="${project.image}" class="card-img-top" alt="${project.title}">
                        <div class="card-body">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                            <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                        </div>
                    </div>
                `;

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
});
