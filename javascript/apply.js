function loadFile(event){
    var image = document.getElementById('ProfilePic');
	image.src = URL.createObjectURL(event.target.files[0]);
}

function addExperiance(){
    const mainDiv = document.createElement('div');
    document.getElementById("experiance").appendChild(mainDiv);
    mainDiv.id = "experianceBlock";

    const titleDiv = document.createElement('div');
    mainDiv.appendChild(titleDiv);
    const titleP = document.createElement('p');
    titleP.innerHTML = "Title"
    titleDiv.appendChild(titleP);

    const companyDiv = document.createElement('div');
    mainDiv.appendChild(companyDiv);

    const descriptionDiv = document.createElement('div');
    mainDiv.appendChild(descriptionDiv);
    descriptionDiv.style.gridColumn ="1/3";

    const fromDiv = document.createElement('div');
    mainDiv.appendChild(fromDiv);

    const toDiv = document.createElement('div');
    mainDiv.appendChild(toDiv);

    const cancelDiv = document.createElement('div');
    mainDiv.appendChild(cancelDiv);

    
    
}

function cancelExperiance(){

}

function addEducation(){
    
}

function cancelEducation(){

}