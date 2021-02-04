var allCareers = [  [["Entry level web developer", "PHP", "HTML", "CSS", "Databases", "SQL", "JavaScript", "JS"], ["£45,000 per year", "00001", ["Demonstrable software/web development and programming skills (relevant qualifications, certifications, commercial experience or personal projects)", "Solid understanding of HTML and CSS", "Relational databases/SQL", "JavaScript and JavaScript libraries (e.g. jQuery)"], ["Develop and maintain software for client websites and other digital platforms", "Contribute to the deployment of code to test, staging and live environments", "Produce technical specifications and documentation", "Participate in project work and quality assurance processes", "Work collaboratively with colleagues and share knowledge and skills"],"An exciting position has become available for a full-time Entry-level Web/Software Developer to join a friendly team. The successful candidate will earn a competitive salary. the role will be to work as part of a team to produce and deploy software which complies with best practice and delivers excellent performance and user experience. The role is suitable for a less experienced Developer, at an early stage in their web development career journey."], ["Competitive salaries and annual bonuses","Ample paid time off as needed we are about getting things done, not face time","Paid parental leave","Flexible work and time-off schedules to encourage work-family balance and holidays","Delicious catered lunch daily plus lots of snacks and beverages","Great location: short walking distance to Caltrain and downtown Mountain View.","Awesome team events, on-sites and off-sites, company parties and BBQs, and weekly board game nights","A fun, high-caliber team that trusts you and gives you the freedom to be brilliant"]],
                    [["Ux Designer"], ["£20,000 per year"]],
                    [["Frontend Programmer", "HTML", "CSS"], ["£40,000 per year"]]
];

function loadCareerInfo(){
    var index = 0;

    var Career = document.cookie.split(";")[0].split("=")[1];

    for (var i = 1, len = allCareers.length; i < len; i++){
        if (allCareers[i][0][0] == Career){
            index = i;
        }
    }
    console.log(allCareers[index][1]);
    document.getElementById("JobTitle").innerHTML = Career;
    document.getElementById("JobDescription").innerHTML = allCareers[index][1][3];
    document.getElementById("JobRequirements").innterHTML = allCareers[index][1][2]

    for (var i = 1, len = allCareers[index][1][2].length; i < len; i++){
        const li = document.createElement('li');
        li.innerHTML = allCareers[index][1][2][i];
        document.getElementById("JobRequirements").append(li);
    }

    for (var i = 1, len = allCareers[index][1][3].length; i < len; i++){
        const li = document.createElement('li');
        li.innerHTML = allCareers[index][1][3][i];
        document.getElementById("JobPerks").append(li);
    }

}


function searchCareers(){
    var ToFind  = document.getElementById("SearchBox").value
    var ToShow = []
    if (ToFind.length > 0){
        for( var i = 0, len = allCareers.length; i < len; i++ ) {
            for(var index = 0, length = allCareers[i][0].length; index < length; index++ ){
                if(allCareers[i][0][index].toLowerCase().includes(ToFind.toLowerCase()) || ToFind.toLowerCase() == allCareers[i][0][index].toLowerCase() ){         
                    ToShow.splice(0, 0, allCareers[i]);
                    break;
                }
            }
        }
    }
    
    if (ToShow.length > 0){
        document.getElementById("mainHome").remove();
        document.getElementById("mainImg").remove();
        document.getElementById("content").style.gridTemplateColumns = "0.25fr 0.25fr 0.25fr 0.25fr";
        document.getElementById("content").style.gridTemplateRows= "repeat(auto, 1fr)";
        document.getElementById("content").style.gridGap = "20px";

        for (var i = 0, len = ToShow.length; i < len; i ++){
            
            const button = document.createElement('button');
            const img = document.createElement('img');
            const title = document.createElement('h4');
            const pay = document.createElement('h4');
            
            const titleText = document.createTextNode(ToShow[i][0][0]);
            const jobTitle = ToShow[i][0][0]
            title.appendChild(titleText);

            const payText = document.createTextNode(ToShow[i][1][0]);
            pay.appendChild(payText);
            
            img.src = "../Assets/Logo.svg"

            button.onclick = function() {
                document.cookie = "text=" + jobTitle + "; path=/";
                self.location = "careerInfo.html";
            }

            document.querySelector('.content').append(button);
            button.append(img);
            button.append(title);
            button.append(pay);

            if (i%2 == 0){ // Every other one
                button.className = "careerCardL"
            }else{
                button.className = "careerCardR"
            }
        }
        return true;
    }else{
        // Show something along the lines of no items mached your search
        return false;
    }
    
};