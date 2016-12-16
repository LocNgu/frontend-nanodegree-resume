//Quiz:Format Data, Build a Resume
var name = "Nguyen Dang Duc Loc";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
///////////////////////////////////////////
var bio = {
    "name": "Nguyen Dang Duc Loc",
    "age": 22,
    "role": "Web Developer Rookie",
    "contacts": {
        "location": "Dresden",
        "email": "nguyendangduc.loc@gmail.com",
        "mobile": "0160-995 271 09",
        "github": "LocNgu",
        "twitter": "blub",
        "bioPic": "./images/fry.jpg"
    },
    "welcomeMsg": "Welcome to my Page",
    "skills": ["programming", "awesomeness", "copy&pasting", "procastinating"]
};

//$("#main").prepend(HTMLheaderName.replace("%data%", name));
//$("#main").prepend(HTMLheaderRole.replace("%data%", role));

$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));
$("#header").append(HTMLbioPic.replace("%data%", bio.contacts.bioPic));

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i] + " "));
    }
    // for(skill in bio.skills){
    //   $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill] + " "));
    // }
}

///////////////////////////////////////////
var work = {
    "jobs": [{
        "title": "internship",
        "employer": "Jungpioniere",
        "workDate": "dd.mm.yyyy-dd.mm.yyyy",
        "workDescription": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
    }, {
        "title": "super great job",
        "employer": "next big thing",
        "workDate": "dd.mm.yyyy-dd.mm.yyyy",
        "workDescription": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invimy eirmod tempor invidunt "

    }, {
        "title": "bla",
        "employer": "blub",
        "workDate": "dd.mm.yyyy-dd.mm.yyyy",
        "workDescription": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seabore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
    }]
}

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].workDate);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);
        //.work-entry is a class
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDate);
        $(".work-entry:last").append(formattedWorkDescription);

    }
}

displayWork();

///////////////////////////////////////////
var projects = {
    "projects": [{
        "name": "Uncanny Valley Landing Page",
        "date": "dd-mm-yyyy",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
        "image": "./images/197x148.gif"
    }, {
        "name": "SWT Internship",
        "date": "dd-mm-yyyy",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
        "image": "./images/197x148.gif"

    }, {
        "name": "Robolab",
        "date": "dd-mm-yyyy",
        "description": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ",
        "image": "./images/197x148.gif"

    }]
};

projects.display = function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].name));
            $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].date));
            $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].image));
        }
    }
    //
projects.display();
/////////////////////////////////////////////////
// work.position equal to work["position"]
// bracket notation
var education = {};
education["name"] = "TU Dresden";
education["years"] = "2013-2016";
education["city"] = "Dresden";
education["degree"] = "BA";
education["computer Science"]
    //JSON

$("#education").append(HTMLschoolStart);
$("#education").append(education.name);
/*
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work["employer"]));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work["position"]));

$("#education").append(HTMLschoolName.replace("%data%", education.name));
*/
////////////////////////////////////////////
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
///////////////////////////////////////////////////////
//internationalizeButton

$("#main").append(internationalizeButton);

function inName(fName, lName) {
    fName = fName.slice(0, 1).firstLetterFname.toUpperCase() + fName.slice(1);
    lName.toUpperCase();
    var name = fName + ' ' + lName;
}
