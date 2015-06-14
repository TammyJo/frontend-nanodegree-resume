// BIO OBJECT
var bio = {
  "name": "TammyJo Wehmeir",
  "role": "Salesforce Apex Developer",
  "welcomeMsg": "My welcome message goes here!",
  "photo": "http://l.thumbs.canstockphoto.com/canstock2727251.jpg",
  "contacts": {
    "email": "twehmeir@gmail.com",
    "linkedIn": "Tamara Wehmeir",
    "mobile": "703.867.0790",
    "location" : "Alexandria, VA",
    "github" : "TammyJo"
  },
  "skills": [
    "Java",
    "Salesforce.com",
    "Apex",
    "VIsualforce",
    "HTML 5",
    "CSS 3",
    "Bootstrap",
    "Git & Github",
    "JavaScript"
  ]
}

// WORK OBJECT
var work = {
  "jobs": [
    {
      "employer" : "Accenture Federal Services",
      "title" : "Apex Salesforce Developer Consultant",
      "location" : "Washington, D.C.",
      "dates" : "Mar 2015 - present",
      "description" : "Description of my current job goes here."
    },
    {
      "employer" : "Computer Technologies Consultants, Inc.",
      "title" : "Java & Salesforce Developer",
      "location" : "Washington, D.C.",
      "dates" : "Jun 2014 - Feb 2015",
      "description" : "Description of my job goes here."
    },
    {
      "employer" : "International Center for Language Studies, Inc.",
      "title" : "Program Manager, Instructional Technolgies",
      "location" : "Washington, D.C.",
      "dates" : "Sept 2011 - May 2014",
      "description" : "Description of my job goes here."
    },
    {
      "employer" : "Center for Advanced Study of Language",
      "title" : "Faculty Research Assistant, Less Commonly Taught Languages & Technology Use",
      "location" : "College Park, MD",
      "dates" : "Jun 2010 - Sept 2011",
      "description" : "Description of my job goes here."
    },
    {
      "employer" : "Rosetta Stone",
      "title" : "Content Editor & Java Developer",
      "location" : "Harrisonburg, VA",
      "dates" : "Nov 2008 - Jun 2010",
      "description" : "Description of my job goes here."
    }
  ]
};

// EDUCATION OBJECT
var education = {
  "schools": [
    {
      "school" : "George Mason University",
      "city" : "Fairfax, VA",
      "degree" : "M.A.",
      "major": "Theoretical Linguistics, M.A.",
      "minor": "Computer Science & Software Engineering",
      "grad_year": "2008"
    },
    {
      "school" : "George Mason University",
      "city" : "Fairfax, VA",
      "degree" : "B.A.",
      "major": "Russian Studies",
      "minor": "Mandarin Chinese",
      "grad_year": "2004"
    }
  ],
  "online_classes": [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "date" : "Spring 2015",
      "url" : "https://www.udacity.com"
    }
  ]
}

// PROJECT OBJECT
var project = {
  "projects" : [
    {
      "title" : "The Wizard",
      "dates" : "Nov 2008 - Jun 2009",
      "description" : "A multi-lingual content authoring and leveling tool.",
      "images" : ["images/197x148.gif","images/197x148.gif"]
    },
    {
      "title" : "Drawing Board",
      "dates" : "Dec 2013 - Jan 2014",
      "description" : "A drawing tool that allows users to draw and format a variety of shapes.",
      "images" : ["images/197x148.gif","images/197x148.gif"]
    },
    {
      "title" : "Reaction Time",
      "dates" : "Apr 2015",
      "description" : "A game that tests a user's reaction time.",
      "images" : ["images/197x148.gif","images/197x148.gif"]
    }
  ]
}

// Display bio function
bio.myInfo = function(){

  // my pic
  var myPic = HTMLbioPic.replace("%data%", this.photo);
  $("#header").prepend(myPic);
  // role
  var formattedRole = HTMLheaderRole.replace("%data%", this.role);
  $("#header").prepend(formattedRole);
  // name
  var formattedName = HTMLheaderName.replace("%data%", this.name);
  $("#header").prepend(formattedName);
  // Format all skills in the bio object
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill;
    var numSkill = 0;
    while (numSkill < bio.skills.length){
      formattedSkill = HTMLskills.replace("%data%", this.skills[numSkill]);
      $("#skills").append(formattedSkill);
      numSkill++;
    }
  }
  // welcome message
  var formattedMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMsg);
  $("#header").append(formattedMsg);
  // mobile
  var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
  $("#topContacts:last").append(formattedMobile);
  // email
  var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
  $("#topContacts:last").append(formattedEmail);
  // LinkedIn
  var formattedLinkedIn = HTMLlinkedIn.replace("%data%", this.contacts.linkedIn);
  $("#topContacts:last").append(formattedLinkedIn);
  // location
  var formattedLoc = HTMLlocation.replace("%data%", this.contacts.location);
  $("#topContacts:last").append(formattedLoc);
  // Github
  var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
  $("#topContacts:last").append(formattedGithub);

  // Add certain contact info to footer
  $("#footerContacts").prepend(formattedLoc);
  $("#footerContacts").prepend(formattedEmail);
  $("#footerContacts").prepend(formattedMobile);


}

// Display bio info
bio.myInfo();

// Display Work function
function displayWork(){
  if(work.jobs.length > 0){
    for(index in work.jobs){
      $("#workExperience").append(HTMLworkStart);
      // employer
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
      // title
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
      // concatenate employer + job title
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      // dates worked
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
      $(".work-entry:last").append(formattedDates);
      // location
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
      $(".work-entry:last").append(formattedLocation);
      // description
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

// Display work on the page
displayWork();

// Display project function
project.display = function(){
  if(project.projects.length > 0){
    for(index in project.projects){
      $("#projects").append(HTMLprojectStart);
      // title
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[index].title);
      $(".project-entry:last").append(formattedTitle);
      // dates
      var formattedDates = HTMLprojectDates.replace("%data%", project.projects[index].dates);
      $(".project-entry:last").append(formattedDates);
      // description
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[index].description);
      $(".project-entry:last").append(formattedDescription);
      // images
      for(imgIndex in project.projects[index].images){
        var formattedImage = HTMLprojectImage.replace("%data%", project.projects[index].images[imgIndex]);
        $(".project-entry:last").append(formattedImage);
      }

    }
  }
};

// Display projects on the page
project.display();

// Display education function
education.display = function(){
  if(education.schools.length > 0){
    for(index in education.schools){
      $("#education").append(HTMLschoolStart);
      // school name
      var formattedName = HTMLschoolName.replace("%data%", education.schools[index].school);
      $(".education-entry:last").append(formattedName);
      // degree type
      var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
      $(".education-entry:last").append(formattedDegree);
      // graduation year
      var formattedDates = HTMLschoolDates.replace("%data%", education.schools[index].grad_year);
      $(".education-entry:last").append(formattedDates);
      // city
      var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[index].city);
      $(".education-entry:last").append(formattedLocation);
      // major
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
      $(".education-entry:last").append(formattedMajor);
      // minor
      var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[index].minor);
      $(".education-entry:last").append(formattedMinor);
    }
    // Online classes
    $(".education-entry:last").append(HTMLonlineClasses);
    for(index in education.online_classes){
      // course name
      var formattedClass = HTMLonlineTitle.replace("%data%", education.online_classes[index].title);
      $(".education-entry:last").append(formattedClass);
      // school name
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.online_classes[index].school);
      $(".education-entry:last").append(formattedSchool);
      // dates
      var formattedDates = HTMLonlineDates.replace("%data%", education.online_classes[index].date);
      $(".education-entry:last").append(formattedDates);
      // online URL
      var formattedURL = HTMLonlineURL.replace("%data%", education.online_classes[index].url);
      $(".education-entry:last").append(formattedURL);

    }
  }
};

// Display education on the page
education.display();

// Function to display name with international format
function inName(name){
  console.log(name);
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  console.log(name[0] + " " + name[1]);
  return name[0] + " " + name[1];
}

// Add Internationalize button to the page
$("#main").append(internationalizeButton);

// Map
$("#mapDiv").append(googleMap);
