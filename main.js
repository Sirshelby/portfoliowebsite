// Modal functionality for portfolio items
document.addEventListener('DOMContentLoaded', function() {
    // Project data
    const projects = {
        1: {
            title: "AI Image Classifier",
            description: "A machine learning model that classifies images into different categories with 92% accuracy. Built using TensorFlow and Python.",
            link: "project-details.html?project=1",
            technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
            features: ["Transfer learning with ResNet50", "Custom dataset collection", "Web interface for predictions"]
        },
        2: {
            title: "Accessible Website Redesign",
            description: "Redesigned a local business website to meet WCAG 2.1 AA standards, improving accessibility for all users.",
            link: "project-details.html?project=2",
            technologies: ["HTML5", "CSS3", "JavaScript", "ARIA"],
            features: ["Keyboard navigation", "Screen reader compatibility", "Color contrast optimization"]
        },
        3: {
            title: "Data Visualization Tool",
            description: "An interactive dashboard for visualizing complex datasets with multiple chart types and filtering options.",
            link: "project-details.html?project=3",
            technologies: ["D3.js", "React", "Node.js", "MongoDB"],
            features: ["Real-time data updates", "Customizable charts", "Export functionality"]
        }
    };
    
    // Set up modal for portfolio page
    if (document.querySelector('.project-grid')) {
        const modal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-description');
        const modalLink = document.getElementById('modal-link');
        const closeBtn = document.querySelector('.close-modal');
        
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const projectId = this.parentElement.getAttribute('data-project');
                const project = projects[projectId];
                
                modalTitle.textContent = project.title;
                modalDesc.textContent = project.description;
                modalLink.href = project.link;
                
                modal.style.display = 'block';
            });
        });
        
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    
    // Load project details if on that page
    if (document.querySelector('.project-details')) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('project');
        
        if (projectId && projects[projectId]) {
            const project = projects[projectId];
            
            document.getElementById('project-title').textContent = project.title;
            document.getElementById('project-image').src = `images/project${projectId}-placeholder.jpg`;
            document.getElementById('project-image').alt = project.title;
            document.getElementById('project-overview').textContent = project.description;
            
            const techList = document.getElementById('technologies-list');
            project.technologies.forEach(tech => {
                const li = document.createElement('li');
                li.textContent = tech;
                techList.appendChild(li);
            });
            
            const featuresList = document.getElementById('features-list');
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
        }
    }
});