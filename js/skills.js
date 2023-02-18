document.addEventListener('DOMContentLoaded', ()=>{

    const titleSkillsCategory = document.getElementById('title-skills-category').getElementsByTagName('button');
    const containerSkills = document.getElementsByClassName('container-skills')

var indexButton = 0

if (window.screen.width >= 1000) {
    titleSkillsCategory[indexButton].classList.toggle('button-skills', true);
    containerSkills[indexButton].classList.toggle('skills-visible', true);
}

for (let index = 0; index < titleSkillsCategory.length; index++) {
    titleSkillsCategory[index].addEventListener('click', ()=>{
        titleSkillsCategory[index].classList.toggle('button-skills', true);
        containerSkills[index].classList.toggle('skills-visible', true);

        if (indexButton!=index) {
            titleSkillsCategory[indexButton].classList.toggle('button-skills', false);
            containerSkills[indexButton].classList.toggle('skills-visible', false);
            indexButton = index;  
        }
    });
}

window.addEventListener('resize', () => {
    if (window.screen.width < 1000) {
        for (let index = 0; index < containerSkills.length; index++) {
            containerSkills[index].classList.toggle('skills-visible', false);   
        }
    } else {
        titleSkillsCategory[indexButton].classList.toggle('button-skills', true);
        containerSkills[indexButton].classList.toggle('skills-visible', true);
    }
});

});