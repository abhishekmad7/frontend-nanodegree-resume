var awesomethoughts = "i am abhishek and i am awesome";
console.log(awesomethoughts);
var funthoughts = awesomethoughts.replace("awesome","fun");
console.log(awesomethoughts);
console.log(funthoughts);

var name = "abhishek";
var formattedName = HTMLheaderName.replace("%data%",name);
var role = "Web Developer" ;
var formattedRole = HTMLheaderRole.replace("%data%",role);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var bio{
    "name": "abhishek Grover",
    "role": "web Developer",
    "contact": [8126748069,"abhishekmad7@gmail.com"],
    "picture" : "",
    "welcome_msg": "Hi, lets have some fun!",
    "skills": "html,css,javascript,python,photoshop",
};

var formattedname = HTMLheaderName.replace("%data%",bio.name);
var formattedrole = HTMLheaderRole.replace("%data%",bio.role);
var formattedcontact = HTMLcontactGeneric.replace("%data%",bio.contact);
var formattedbilpic = HTMLbiopic.replace("%data%",bio.picture);
var formattedwelcome_msg = HTMLwelcomeMsg.replace("%data%",bio.welcome_msg);
var formattedskills = HTMLskills.replace("%data%",bio.skills);

$("header").prepend(formattedname);
$("header").append(formattedrole);

var education = {
	"schools" = ["paramount internatinal school","IIt Roorkee"],
	
}