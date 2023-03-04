const projectsPresentation = document.getElementsByClassName('projects-presentation');
const projectsInformation = document.getElementsByClassName('projects-information');
const projectsDescription = document.getElementsByClassName('projects-description');

for (let index = 0; index < projectsPresentation.length; index++) {
    console.log(projectsInformation[index]);
    if (index%2==1) {
        projectsPresentation[index].classList.toggle('projects-presentation-alt', true);
        projectsInformation[index].classList.toggle('projects-information-alt', true);
        projectsDescription[index].classList.toggle('projects-description-alt', true);
    }
}