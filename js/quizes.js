//var name = "Nguyen Dang Duc Loc";
//var role = "Web Developer";
////jQuery append - anhängen
//$("#main").append(name);

//var awesomeThoughts = "This is awesome!";
////output on console
//console.log(awesomeThoughts);
////replace string1 with string2
//var funThoughts = awesomeThoughts.replace("awesome", "fun");

//$("#main").append(funThoughts);
/////////////////////////////////////////////
/*var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);*/
////////////////////////////////////////////
/*
var s = "audacity";

var udacityizer = function(s) {
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!

    //s = s.replace("audacity", "Udacity");
    s = s[1].toUpperCase() + s.slice(2);

    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));
*/
//////////////////////////////////////////////
//Arrays
/*var skills = ["awesome", "programming", "procastinating"];
$("#main").append(skills);
$("#main").append(skills[0]);
$("#main").append(skills.length);
*/
//Array Manipulation
/*var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.

    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];

    // Your code goes in here!,
    newArray = _array;
   var popped = newArray.pop();
    newArray.push(popped+1);
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));*/
//////////////////////////////////////////////////////
//string manipulation 2
/*
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var arrayOfString = finalName.split(" ");
    arrayOfString[0] = arrayOfString[0].slice(0,1).toUpperCase() + arrayOfString[0].slice(1).toLowerCase();
    arrayOfString[1] = arrayOfString[1].toUpperCase();
    // Don't delete this line!
    finalName = arrayOfString.join(" ");
    return finalName;
}


// Did your code work? The line below will tell you!
console.log(nameChanger(name));*/
/////////////////////////////////////////////////////////
//Bio Quiz

/////////////////////////////////////////////////////////
//replaces <>
// var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
//
// var charEscape = function(_html) {
//     var newHTML = _html;
//
//     newHTML = _html.replace(/</g, "&lt;");
//     newHTML = newHTML.replace(/>/g, "&gt;");
//
//     return newHTML;
// };
