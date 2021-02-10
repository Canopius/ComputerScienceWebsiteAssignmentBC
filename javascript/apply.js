function loadFile(event){
    var image = document.getElementById('ProfilePic');
	image.src = URL.createObjectURL(event.target.files[0]);
}

function addExperiance(){
    console.log("Start")
    const mainDiv = document.createElement('div');
    document.getElementById("experiance").appendChild(mainDiv);
    mainDiv.id = "experianceBlock";

    const titleDiv = document.createElement('div');
    mainDiv.appendChild(titleDiv);
    const titleP = document.createElement('p');
    titleP.innerHTML = "Title"
    titleDiv.appendChild(titleP);
    const titleI = document.createElement('input');
    titleI.className = 'short';
    titleI.type = 'text';
    titleI.placeholder = 'Junior Web Developer';
    titleDiv.appendChild(titleI);

    const companyDiv = document.createElement('div');
    mainDiv.appendChild(companyDiv);
    const companyP = document.createElement('p');
    companyP.innerHTML = "Company"
    companyDiv.appendChild(companyP);
    const companyI = document.createElement('input');
    companyI.className = 'short';
    companyI.type = 'text';
    companyI.placeholder = 'Company';
    companyDiv.appendChild(companyI);

    const descriptionDiv = document.createElement('div');
    mainDiv.appendChild(descriptionDiv);
    descriptionDiv.style.gridColumn ="1/3";
    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = "Description"
    descriptionDiv.appendChild(descriptionP);
    const descriptionI = document.createElement('textarea');
    descriptionI.className = 'long';
    descriptionI.type = 'text';
    descriptionI.placeholder = 'Every day I did XYZ, this helped to develop X.';
    descriptionDiv.appendChild(descriptionI);

    const fromDiv = document.createElement('div');
    mainDiv.appendChild(fromDiv);
    const fromP = document.createElement('p');
    fromP.innerHTML = "From"
    fromDiv.appendChild(fromP);
    const fromI = document.createElement('input');
    fromI.className = 'short';
    fromI.type = 'date';
    fromDiv.appendChild(fromI);

    const toDiv = document.createElement('div');
    mainDiv.appendChild(toDiv);
    const toP = document.createElement('p');
    toP.innerHTML = "To"
    toDiv.appendChild(toP);
    const toI = document.createElement('input');
    toI.className = 'short';
    toI.type = 'date';
    toDiv.appendChild(toI);

    const cancelDiv = document.createElement('div');
    mainDiv.appendChild(cancelDiv);
    const cancelI = document.createElement('button');
    cancelI.id = 'smallCallToAction';
    cancelI.type = 'button';
    cancelI.onclick = function() {cancelExperiance(event)};
    cancelI.innerHTML = 'Cancel';
    cancelDiv.appendChild(cancelI);
}

function cancelExperiance(e){
    e.srcElement.parentElement.parentElement.remove();
}

function addEducation(){
    const mainDiv = document.createElement('div');
    document.getElementById("education").appendChild(mainDiv);
    mainDiv.id = "educationBlock";

    const titleDiv = document.createElement('div');
    mainDiv.appendChild(titleDiv);
    const titleP = document.createElement('p');
    titleP.innerHTML = "Institution"
    titleDiv.appendChild(titleP);
    const titleI = document.createElement('input');
    titleI.className = 'short';
    titleI.type = 'text';
    titleI.placeholder = 'Oxford University';
    titleDiv.appendChild(titleI);

    const companyDiv = document.createElement('div');
    mainDiv.appendChild(companyDiv);
    const companyP = document.createElement('p');
    companyP.innerHTML = "Course"
    companyDiv.appendChild(companyP);
    const companyI = document.createElement('input');
    companyI.className = 'short';
    companyI.type = 'text';
    companyI.placeholder = 'Software Engineering';
    companyDiv.appendChild(companyI);

    const descriptionDiv = document.createElement('div');
    mainDiv.appendChild(descriptionDiv);
    descriptionDiv.style.gridColumn ="1/3";
    const descriptionP = document.createElement('p');
    descriptionP.innerHTML = "Description"
    descriptionDiv.appendChild(descriptionP);
    const descriptionI = document.createElement('textarea');
    descriptionI.className = 'long';
    descriptionI.type = 'text';
    descriptionI.placeholder = 'This is what I did on the course.';
    descriptionDiv.appendChild(descriptionI);

    const fromDiv = document.createElement('div');
    mainDiv.appendChild(fromDiv);
    const fromP = document.createElement('p');
    fromP.innerHTML = "From"
    fromDiv.appendChild(fromP);
    const fromI = document.createElement('input');
    fromI.className = 'short';
    fromI.type = 'date';
    fromDiv.appendChild(fromI);

    const toDiv = document.createElement('div');
    mainDiv.appendChild(toDiv);
    const toP = document.createElement('p');
    toP.innerHTML = "To"
    toDiv.appendChild(toP);
    const toI = document.createElement('input');
    toI.className = 'short';
    toI.type = 'date';
    toDiv.appendChild(toI);

    const cancelDiv = document.createElement('div');
    mainDiv.appendChild(cancelDiv);
    const cancelI = document.createElement('button');
    cancelI.id = 'smallCallToAction';
    cancelI.type = 'button';
    cancelI.onclick = function() {cancelEducation(event)};
    cancelI.innerHTML = 'Cancel';
    cancelDiv.appendChild(cancelI);
}

function cancelEducation(e){
    e.srcElement.parentElement.parentElement.remove();
}