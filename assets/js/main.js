import {Project} from "./project.js";
const projectContainer = document.querySelector(".main-card");
const taskContainer = document.querySelector(".task-kanban-list");

const projects = [];

const createProject = (name, description) => {;
    projects.push(new Project(name, description));
}

const createTask = (projectID, name, description, status, deadline) => {
    projects[projectID].addTask(name, description, status, deadline);
}

const projectCard = (project) => {
    let card = document.createElement("div");
    card.classList.add("card");
    
    let title = document.createElement("h3");
    title.appendChild(document.createTextNode(project.name));

    let desc = document.createElement("p");
    desc.classList.add("card-desc");
    desc.appendChild(document.createTextNode(project.description));

    card.appendChild(title);
    card.appendChild(desc);
}

const displayProjects = () => {
    if (!(projectContainer.children.length === 0)){
        projectContainer.innerHTML = "";
    }
    projects.forEach((project) => {
       projectContainer.appendChild(projectCard(project));
    });
}