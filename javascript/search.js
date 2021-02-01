var allCareers = [  [["Entry level web developer", "PHP", "HTML", "CSS", "Databases", "SQL", "JavaScript", "JS"], ["£45,000", "00001", ["Demonstrable software/web development and programming skills (relevant qualifications, certifications, commercial experience or personal projects)", "Solid understanding of HTML and CSS", "Relational databases/SQL", "JavaScript and JavaScript libraries (e.g. jQuery)"], ["Develop and maintain software for client websites and other digital platforms", "Contribute to the deployment of code to test, staging and live environments", "Produce technical specifications and documentation", "Participate in project work and quality assurance processes", "Work collaboratively with colleagues and share knowledge and skills"],"An exciting position has become available for a full-time Entry-level Web/Software Developer to join a friendly team. The successful candidate will earn a competitive salary. the role will be to work as part of a team to produce and deploy software which complies with best practice and delivers excellent performance and user experience. The role is suitable for a less experienced Developer, at an early stage in their web development career journey."]],
                    [["Ux Designer"], ["£20,000"]],
                    [["Frontend Programmer", "HTML", "CSS"], ["£40,000"]]
];

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
            console.log(ToShow[i]);
            
            const a = document.createElement('a');
            const img = document.createElement('img');
            const title = document.createElement('h4');
            const pay = document.createElement('h4');
            
            const titleText = document.createTextNode(ToShow[i][0][0]);
            title.appendChild(titleText);

            const payText = document.createTextNode(ToShow[i][1][0]);
            pay.appendChild(payText);
            
            img.src = "../Assets/Logo.svg"

            document.querySelector('.content').append(a);
            a.append(img);
            a.append(title);
            a.append(pay);

            if (i%2 == 0){ // Every other one
                a.className = "careerCardL"
            }else{
                a.className = "careerCardR"
            }

            console.log("DONE")
        }
        return true;
    }else{
        // Show something along the lines of no items mached your search
        return false;
    }
    
};