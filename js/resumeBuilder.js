/* OBJECTS needed to fill in bio, work, 
education, and projects */

var bio = {
 	"name" : "Rachel L. Williams", 
 	"role" : "PhD Student, Teacher", 
 	"contacts" : {
    	"mobile": "+33 00 00 00 00 00",
    	"email": "RachelinFrance at gmail dot com" ,
    	"github": "RachelwasHere",
    	"twitter": "RLW_44" ,
    	"location": "Nantes, France" } , 
    "welcomeMessage": "Hello! I'm a PhD student and English teacher who takes frequent breaks from researching visual culture to pet my rescued Griffon mutt, TyLoup . I've helped hundreds of French students improve their spoken English and made significant inroads towards ending the epidemic of 'I am agree' which plagues many Francophone students of English. This year, I will be teaching art students the English they'll need to charm critics the world over. When I'm isn't busy planning engaging lessons or pondering cultural theory, I'm learning to code." , 
    "skills": ["research", "writing", "planning", 
    			"organisation", "HTML5/CSS3"], 
    "biopic": "images/me.jpg", 
    "display" : function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(formattedRole); 
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
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



        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMSG);

        if (bio["skills"].length > 0) {
            $("#header").append(HTMLskillsStart);
    
            for (var i in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkills);
            }; 
        };
    }
};


var work = {
 	"jobs": [{
         "employer": "Ecole Supérieure des Métiers Artistiques", 
         "title": "English Teacher", 
         "location": "Nantes, France", 
         "dates": "September 2015 - ", 
         "description": "Teaching English to first year students in BTS and MANAA programs" 
        },
        {
         "employer": "Epigone", 
         "title": "English Teacher", 
         "location": "Nantes, France", 
         "dates": "February 2015 - ", 
         "description": "Individual English lessons"
        }, 
        {
         "employer": "EMULI", 
         "title": "English Teacher", 
         "location": "Nantes, France", 
         "dates": "September 2014 - June 2015", 
         "description": "Leading English immersion activities for kids ages 5 - 12."
        },
        {
         "employer": "Université de Nantes", 
         "title": "English Vacataire", 
         "location": "Nantes, France", 
         "dates": "September - December 2015", 
         "description": "Oral comprehension and business English and translation courses."
        },
    	{
         "employer": "Université de Nantes", 
         "title": "English Lectrice", 
         "location": "Nantes, France", 
         "dates": "September 2012 - August 2014", 
         "description": "English oral expression classes" 
    	},
        {
         "employer": "Araxi Formations", 
         "title": "English Teacher", 
         "location": "Nantes, France", 
         "dates": "June 2012 - December 2012", 
         "description": "Individual English lessons for working adults" 
        },
        {
         "employer": "Les Petits Bilingues", 
         "title": "English Teacher", 
         "location": "Nantes, France", 
         "dates": "June 2012", 
         "description": "Led a one week immersion day camp for kids" 
        },
        {
         "employer": "Academie de Nantes", 
         "title": "English Teaching Assistant", 
         "location": "Nantes, France", 
         "dates": "October 2011 - May 2012", 
         "description": "Taught English lessons in primary schools" 
        }
        ],
    "display": function()  {
            for (job in work.jobs) {
                $('#workExperience').append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
                var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
                var formattedEmployerTitle = formattedEmployer + " " + formattedTitle
                $('.work-entry:last').append(formattedEmployerTitle);

                var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
                $('.work-entry:last').append(formattedLocation);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                $('.work-entry:last').append(formattedDates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $('.work-entry:last').append(formattedDescription);
            };
    }
};

var education = {
	"schools" : [{
         "name": "Université Rennes 2",
         "location": "Rennes, France",
         "degree": "PhD",
         "majors": ["Irish Studies"],
         "dates": "2014 - ",
         "url": "http://www.univ-rennes2.fr/crbc/cei"},
         {
         "name": "Université Rennes 2",
         "location": "Rennes, France",
         "degree": "M2",
         "majors": ["Irish Studies"],
         "dates": "2014",
         "url": "http://www.univ-rennes2.fr/crbc/cei"},
         {
         "name": "Université de Poitiers",
         "location": "Poitiers, France",
         "degree": "Diplôme Universitaire d'Etudes Françaises",
         "majors": ["Niveau C1"],
         "dates": "2011",
         "url": "http://cfle.univ-poitiers.fr/le-cfle-de-poitiers/"},
         {
         "name": "University of Arkansas",
         "location": "Fayetteville, AR, USA",
         "degree": "18h graduate credit",
         "majors": ["French literature and foreign language pedagogy"],
         "dates": "2008 - 2009",
         "url": "http://fulbright.uark.edu/departments/world-languages/"},
         {
         "name": "University of Arkansas",
         "location": "Fayetteville, AR, USA",
         "degree": "Bachelor of Arts, magna cum laude",
         "majors": ["International Relations, European Studies, French"],
         "dates": "2004 - 2008",
         "url": "http://ir.uark.edu/"},
         {
         "name": "Union High School",
         "location": "Tulsa, OK, USA",
         "degree": "High School Diploma",
         "majors": ["General Education"],
         "dates": "2000 - 2004",
         "url": "http://www.unionps.org/"}
         ],

    "onlineCourses": [{
         "title": "Marketing 101",
         "school": "Coursera and the Wharton School of Business",
         "date": "2015",
         "url": "https://class.coursera.org/whartonmarketing-003",
         "description" : "A 4 week introductory course"},
         {
         "title": "Intro to jQuery",
         "school": "Udacity",
         "date": "2015",
         "url": "https://www.udacity.com/course/intro-to-jquery--ud245",
         "description" : "Explanation of jQuery and how to use it to manipulate the DOM"},
        {
         "title": "Javascript Basics",
         "school": "Udacity",
         "date": "2015",
         "url": "https://www.udacity.com/course/javascript-basics--ud804",
         "description" : "Introduction to syntax including loops and objects. This resume is the final project!"},
         {
         "title": "Web Integration Certificate",
         "school": "OpenClassrooms",
         "date": "2015",
         "url": "https://openclassrooms.com/learning-paths/integrateur-web",
         "description" : "Completion of courses in HTML5/CSS3, Bootstrap, Git and Github, and Understanding the Web"}],
    "studyAbroad" : [
        {
        "school" : "Tibetans in Exile Today, University of Arkansas",
        "location" : "New Dehli, Mundgod, Dharamsala, and Goa, India",
        "dates" : "June 2008",
        "subjects" : "Documenting oral histories of Tibetans living in exile in India",
        "url" : "http://textprogram.uark.edu/"
        },
        {
        "school" : "Université du Maine, Direct Exchange Program",
        "location" : "Le Mans, France",
        "dates" : "2006 - 2007",
        "subjects" : "Courses in geography, French literature, and translation",
        "url" : "http://textprogram.uark.edu/"
        },   
        {
        "school" : "Rome Center, University of Arkansas",
        "location" : "Rome, Italy",
        "dates" : "September - December 2005",
        "subjects" : "Art, architecture, literature, and Italian courses",
        "url" : "http://www.uarkrome.it/"
    }],
    "display": function () {
        for (var uni in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchool = HTMLschoolName.replace("%data%", education.schools[uni].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[uni].degree);
            $(".education-entry:last").append(formattedSchool + formattedDegree);

            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[uni].dates);
            $(".education-entry:last").append(formattedDates);

            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[uni].location);
            $(".education-entry:last").append(formattedLocation);

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[uni].majors);
            $(".education-entry:last").append(formattedMajor);
        };
        if (education.studyAbroad.length > 0) {
            $("#education").append(HTMLstudyAbroad);};

        for (var abroad in education.studyAbroad) {
            $("#education").append(HTMLschoolStart);

            var formattedSchool = HTMLabroadSchool.replace("%data%", education.studyAbroad[abroad].school).replace("#", education.studyAbroad[abroad].url);
            $(".education-entry:last").append(formattedSchool);
            var formattedDates = HTMLschoolDates.replace("%data%",education.studyAbroad[abroad].dates );
            $(".education-entry:last").append(formattedDates);
            var formattedDescription = HTMLschoolMajor.replace("%data%", education.studyAbroad[abroad].subjects );
            $(".education-entry:last").append(formattedDescription);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.studyAbroad[abroad].location );
            $(".education-entry:last").append(formattedLocation);


        };

        if ( education.onlineCourses.length > 0 ) {
            $("#education").append(HTMLonlineClasses);
        };
        
        for ( var course in education.onlineCourses) { 
            $("#education").append(HTMLschoolStart);
            
            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).replace("#", education.onlineCourses[course].url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            $(".education-entry:last").append(formattedTitle + formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
            $(".education-entry:last").append(formattedDates);
            var formattedOnlineDescription = HTMLonlineDescription.replace("%data%", education.onlineCourses[course].description);
            $(".education-entry:last").append(formattedOnlineDescription);

           };

        

    }
};

var projects = {
		"projects" : [{
          "title": "Learning to Code", 
          "dates": "2015 - ",
          "description": "Using MOOCs and eBooks to learn HTML, CSS, JS, PHP, and Python.",
          "images": ["images/openClass.png"]
           }],
    "display": function(){
        for (var eachProj in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[eachProj].title);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[eachProj].dates);
        $('.project-entry:last').append(formattedDates);
        };
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[eachProj].description);
        $('.project-entry:last').append(formattedDescription);
        if (projects.projects[eachProj].images.length > 0) {
            for (var eachImg in projects.projects[eachProj].images) {

              var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[eachProj].images[eachImg]);
                $('.project-entry:last').append(formattedImage); 
            };
        };
        
    }
}; 

bio.display();
work.display();
projects.display();
education.display();






$(document).click(function(loc) {
   var x = loc.pageX;
   var y = loc.pageY;
   logClicks(x,y);
});


$("#main").append(internationalizeButton);

function inName() {
    var nameArray = bio.name.trim().split(" ");
    var lastName = nameArray.pop();
    lastName = lastName.toUpperCase();
    nameArray.push(lastName);
    strName = nameArray.join(" ");
    return strName;
}

$("#mapDiv").append(googleMap);