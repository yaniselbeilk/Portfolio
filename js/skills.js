let titleSkills = ["Software Development", "Web Development", "Mobile Development", "System Administration", "Design & Editing"];
const titleSkillsCategory = document.getElementById('title-skills-category').getElementsByTagName('span');
const containerSkills = document.getElementsByClassName('container-skills');
const chevronUpCircle = document.getElementById('chevron-up-circle');
const chevronDownCircle = document.getElementById('chevron-down-circle');

var indexTitleSkillsTop = titleSkills.length-1;
var indexTitleSkillsCenter = 0;
var indexTitleSkillsBottom = 1;

if (window.screen.width > 1000) {
    titleSkillsCategory[0].innerText = titleSkills[indexTitleSkillsTop];
    titleSkillsCategory[1].innerText = titleSkills[indexTitleSkillsCenter];
    titleSkillsCategory[2].innerText = titleSkills[indexTitleSkillsBottom];
    containerSkills[indexTitleSkillsCenter].classList.toggle('skills-visible', true);
    let skillsElements = containerSkills[indexTitleSkillsCenter].getElementsByTagName('a');
    for (let index = 0; index < skillsElements.length; index++) {
        skillsElements[index].classList.toggle('slide-from-bottom', true);
        skillsElements[index].classList.toggle('slide-from-top', false);
    }
}
chevronDownCircle.addEventListener('click', () => {
    if (indexTitleSkillsTop == titleSkills.length - 1) {
        indexTitleSkillsTop = 0;
        indexTitleSkillsCenter++;
        indexTitleSkillsBottom++;
    } else if (indexTitleSkillsCenter == titleSkills.length - 1) {
        indexTitleSkillsTop++;
        indexTitleSkillsCenter = 0;
        indexTitleSkillsBottom++;
    } else if (indexTitleSkillsBottom == titleSkills.length - 1) {
        indexTitleSkillsTop++;
        indexTitleSkillsCenter++;
        indexTitleSkillsBottom = 0;;
    } else {
        indexTitleSkillsTop++;
        indexTitleSkillsCenter++;
        indexTitleSkillsBottom++;
    }
    titleSkillsCategory[0].innerText = titleSkills[indexTitleSkillsTop];
    titleSkillsCategory[1].innerText = titleSkills[indexTitleSkillsCenter];
    titleSkillsCategory[2].innerText = titleSkills[indexTitleSkillsBottom];
    containerSkills[indexTitleSkillsCenter].classList.toggle('skills-visible', true);
    skillsElements = containerSkills[indexTitleSkillsCenter].getElementsByTagName('a');

    for (let index = 0; index < titleSkills.length; index++) {
        if (index!=indexTitleSkillsCenter) {
            containerSkills[index].classList.toggle('skills-visible', false);
        }
    }
    for (let index = 0; index < skillsElements.length; index++) {
        skillsElements[index].classList.toggle('slide-from-bottom', true);
        skillsElements[index].classList.toggle('slide-from-top', false);
    }
});

chevronUpCircle.addEventListener('click', () => {
    if (indexTitleSkillsTop == 0) {
        indexTitleSkillsTop = titleSkills.length - 1;
        indexTitleSkillsCenter--;
        indexTitleSkillsBottom--;
    } else if (indexTitleSkillsCenter == 0) {
        indexTitleSkillsTop--;
        indexTitleSkillsCenter = titleSkills.length - 1;
        indexTitleSkillsBottom--;
    } else if (indexTitleSkillsBottom == 0) {
        indexTitleSkillsTop--;
        indexTitleSkillsCenter--;
        indexTitleSkillsBottom = titleSkills.length - 1;
    } else {
        indexTitleSkillsTop--;
        indexTitleSkillsCenter--;
        indexTitleSkillsBottom--;
    }
    titleSkillsCategory[0].innerText = titleSkills[indexTitleSkillsTop];
    titleSkillsCategory[1].innerText = titleSkills[indexTitleSkillsCenter];
    titleSkillsCategory[2].innerText = titleSkills[indexTitleSkillsBottom];
    containerSkills[indexTitleSkillsCenter].classList.toggle('skills-visible', true);
    skillsElements = containerSkills[indexTitleSkillsCenter].getElementsByTagName('a');

    for (let index = 0; index < titleSkills.length; index++) {
        if (index != indexTitleSkillsCenter) {
            containerSkills[index].classList.toggle('skills-visible', false);
        }
    }
    for (let index = 0; index < skillsElements.length; index++) {
        skillsElements[index].classList.toggle('slide-from-top', true);
        skillsElements[index].classList.toggle('slide-from-bottom', false);
    }
});

window.addEventListener('resize', () => {
    if (window.screen.width <= 1000) {
        for (let index = 0; index < containerSkills.length; index++) {
            containerSkills[index].classList.toggle('skills-visible', false);
        }
    } else {
        titleSkillsCategory[0].innerText = titleSkills[indexTitleSkillsTop];
        titleSkillsCategory[1].innerText = titleSkills[indexTitleSkillsCenter];
        titleSkillsCategory[2].innerText = titleSkills[indexTitleSkillsBottom];
        containerSkills[indexTitleSkillsCenter].classList.toggle('skills-visible', true);
    }
});