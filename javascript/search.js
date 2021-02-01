var allCareers = [  [["Entry level web developer", "PHP", "HTML", "CSS", "Databases", "SQL", "JavaScript", "JS"], ["£45,000", "00001", ["Demonstrable software/web development and programming skills (relevant qualifications, certifications, commercial experience or personal projects)", "Solid understanding of HTML and CSS", "Relational databases/SQL", "JavaScript and JavaScript libraries (e.g. jQuery)"], ["Develop and maintain software for client websites and other digital platforms", "Contribute to the deployment of code to test, staging and live environments", "Produce technical specifications and documentation", "Participate in project work and quality assurance processes", "Work collaboratively with colleagues and share knowledge and skills"],"An exciting position has become available for a full-time Entry-level Web/Software Developer to join a friendly team. The successful candidate will earn a competitive salary. the role will be to work as part of a team to produce and deploy software which complies with best practice and delivers excellent performance and user experience. The role is suitable for a less experienced Developer, at an early stage in their web development career journey."]],
                    [["Ux Designer"], ["£20,000"]],
                    [["Frontend Programmer", "HTML", "CSS"], ["£40,000"]]
];

var a = 5

function searchCareers(){
    var ToFind  = document.getElementById("SearchBox").value
    var ToShow = []
    console.log(ToFind);
    if (ToFind.length > 0){
        for( var i = 0, len = allCareers.length; i < len; i++ ) {
            for(var index = 0, length = allCareers[i][0].length; index < length; index++ ){
                if(allCareers[i][0][index].toLowerCase().includes(ToFind.toLowerCase()) || ToFind.toLowerCase() == allCareers[i][0][index].toLowerCase() ){         
                    ToShow.splice(0, 0, allCareers[i][0][0]);
                    break;
                }
            }
        }
    }
    document.getElementById("SearchForm").submit();
};