document.addEventListener('DOMContentLoaded', ()=>{

    const titleSkillsCategory = document.getElementById('title-skills-category').getElementsByTagName('button');
    const containerSkills = document.getElementsByClassName('container-skills');
    const blueAzure = getComputedStyle(document.querySelector(':root')).getPropertyValue('--blue-azure');

var indexButton = 0
titleSkillsCategory[indexButton].classList.toggle('button-skills', true);
for (let index = 0; index < titleSkillsCategory.length; index++) {
    titleSkillsCategory[index].addEventListener('click', ()=>{
        titleSkillsCategory[index].classList.toggle('button-skills', true);
        containerSkills[index].style.display = 'contents';

        if (indexButton!=index) {
            titleSkillsCategory[indexButton].classList.toggle('button-skills', false);
            containerSkills[indexButton].style.display = 'none'; 
            indexButton = index;  
        }
        /*
        containerSkills[index].style.display = 'contents';
        titleSkillsCategory[index].style.backgroundColor = blueAzure;
        
        containerSkills[indexButton].style.display = 'none';
        titleSkillsCategory[indexButton].style.backgroundColor = "White";
        */
    });
}

});