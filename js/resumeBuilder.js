//Quiz:Format Data, Build a Resume
var data
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
///////////////////////////////////////////


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
        $(".skills-entry:last").append(HTMLskills.replace("%data%", bio.skills[i] + " "));
    }
    // for(skill in bio.skills){
    //   $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill] + " "));
    // }
}
///////////////////////////////////////////
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedHTMLworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[job].workDate);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].workDescription);
        //.work-entry is a class
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedWorkDate);
        $(".work-entry:last").append(formattedHTMLworkLocation);
        $(".work-entry:last").append(formattedWorkDescription);

    }
}
displayWork();
///////////////////////////////////////////
//encapsulating functions
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

//JSON
education.display = function() {
    for (school in education.school) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.school[school].name) +
            HTMLschoolDegree.replace("%data%", education.school[school].degree)

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.school[school].years));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.school[school].location));

        if (education.school[school].major) $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.school[school].major));
    }
}
education.display()
    ////////////////////////////////////////////
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};
///////////////////////////////////////////////////////
//internationalizeButton

// $("#main").append(internationalizeButton);
//
// function inName(fName, lName) {
//     fName = fName.slice(0, 1).firstLetterFname.toUpperCase() + fName.slice(1);
//     lName.toUpperCase();
//     var name = fName + ' ' + lName;
// }
//////////////////////////////////////////////////////
$("#mapDiv").append(googleMap);

$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
