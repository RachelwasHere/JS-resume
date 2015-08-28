/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Rachel L. Williams";
 var formattedName = HTMLheaderName.replace("%data%", name);

 var role = "PhD Student and English Teacher";
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 $("#header").prepend(formattedRole); 
 $("#header").prepend(formattedName);



 var bio = {
 	"name" : "Rachel L. Williams", 
 	"role" : "PhD Student, Teacher", 
 	"contacts" : {
    	"mobile": "+33 00 00 00 00 00",
    	"email": "RachelinFrance at gmail dot com" ,
    	"github": "RachelwasHere",
    	"twitter": "RLW_44" ,
    	"location": "Nantes, France" } , 
    "welcomeMessage": "Hello! I'm a PhD student and English teacher with interests in marketing and coding!" , 
    "skills": ["research", "writing", "planning", 
    			"organisation", "HTML5/CSS3"], 
    "biopic": "images/fry.jpg", 
    "display" : "display()"
	};


var work = {
 	"jobs": [{
         "employer": "Epigone", 
         "title": "English Teacher", 
         "location": "Nantes, France", 
         "dates": "2015 - ", 
         "description": "Individual English lessons"}, 
    	{
         "employer": "Université de Nantes", 
         "title": "English Lectrice", 
         "location": "Nantes, France", 
         "dates": "2012 - 2014", 
         "description": "English oral expression classes" 
    	}],
    "display": "display()"
    }
 };

var education = {
	"schools" : [{
         "name": "Université Rennes 2",
         "location": "Rennes, France",
         "degree": "M2",
         "majors": {"Irish Studies"},
         "dates": "2014",
         "url": "http://www.univ-rennes2.fr/crbc/cei"}],
    "onlineCourses": {
         "title": "Marketing 101",
         "school": "Coursera and the Wharton School of Business",
         "date": "2015",
         "url": "https://class.coursera.org/whartonmarketing-003"},
    "display": "display()"
};

var projects = {
		"projects" : [{
          "title": "Learning to Code" 
          "dates": "2015 - "
          "description": "Using MOOCs and eBooks to learn HTML, CSS, JS, PHP, and Python."
          "images": ["https://openclassrooms.com/learning-path-certificates/36890593"],
           }],
    "display": "display()"
};

 $("#header").append(bio);
 $("#header").append(work[position]);
 $("#header").append(education(name));

 /*var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
 var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

 $("#topContacts").append(formattedMobile);
 $("#footerContacts").append(formattedMobile);

 $("#topContacts").append(formattedEmail);
 $("#footerContacts").append(formattedEmail);

 $("#topContacts").append(formattedGithub);
 $("#footerContacts").append(formattedGithub);

 $("#topContacts").append(formattedTwitter);
 $("#footerContacts").append(formattedTwitter);

 $("#topContacts").append(formattedLocation);
 $("#footerContacts").append(formattedLocation);

var formattedWelcomeMSG = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

 $("#header").append(formattedWelcomeMSG);


var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
 $("#header").append(formattedBioPic);

$("#header").append(HTMLskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
 	$("#header").append(formattedSkills);

var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
 $("#header").append(formattedSkills);


var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
 $("#header").append(formattedSkills);


var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
 $("#header").append(formattedSkills);
t

var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
 $("#header").append(formattedSkills);*/

