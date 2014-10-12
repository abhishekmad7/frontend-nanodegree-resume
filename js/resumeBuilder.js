var bio = {
	"name":"Abhishek Grover",
	"role":"Web Developer",
	"contacts":{
		"mobile":"9971796975",
		"email":"abhishekmad7@gmail.com",
		"github":"abhishekmad7",
		"location":"Roorkee"
	},
	"welcomeMessage":"lets have some fun guys!",
	"skills":["awesomeness","backchodi","revolutionising the universe","being lazy"],
	"biopic":"images/pic.jpg"
}

var education = {
	"schools": [
	{
		"name":"Paramount International School",
		"city":"New Delhi",
		"degree":"12th"
	},
	{
		"name":"IIT Roorkke",
		"city":"Roorkee",
		"degree":"B.Tech",
	},
	"onlineCourses":[
	{
		"title":"Python",
		"school":"udacity",
		"dates":2014,
		"url":"http://www.udacity.com",
	}
	]
}

var work={
	"job":[
	{
		"employer":"Planet Express",
		"title":"Delivery Boy",
		"dates":"January 3000-Future",
		"description":"who moves the cheese cheesy feet cauliflower cheese.
		Queso taleggio when the cheese comes out everybody's happy airedale
		ricotta cheese and wine paneer camebert de nomandie. Swiss mozzarella 
		cheese slices fetaa fromage frails aridele sewas cheeese ."

	},
	{
		"employer":"Panucci's Pizza",
		"title":"Delivery Boy",
		"dates":"1998-December 31,1999",
		"description":"who moved my cheese cheefdf cjkldfdsa dsfjkdl dsfjkdlsa 
		djslkfajdslk fdjsa lkj sdfj ak sdaf jkldsjf asfj kls fjsdalk jfk ds 
		sdjfaklds sdfds fds a klj; adf jkl;  asdf jklsd  sdfdjk  ds afkj f12sdkaj
		kdsj fkd  fdsak jfk  dsajkf djsa kf dsfjk ajd "

	}]
}

var projects={
	"projects":[
	{
		"title":"Sample Project 1",
		"dates":"2014",
		"description":"Who moved my cheese chdsfklja dksljfa  jsdaklf jasdd
		dsjkfla  sdjkfl jafkj dsalkfj sdaf jdskla fjldsak jfkl fasdjlkdsja kfl
		sdjkaf ljklasd f;klasdfj d safdsf fds afd sf sdafds f dsaf dsf dsf ",
		"images":[
		"http://fsdaf/dsafdsa/",
		"http://dfjkdslaf/dskjfa"]
	}]
}


if (bio.skills.length>0){
	$("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
}
for(job in work.job){
    $('#workExperience').append(HTMLworkStart);

    var formattedemployer = HTMLworkEmployer("%data%",work.job[job].employer);
    var formattedtitle = HTMLworkTitle("%data%",work.job[job].title);
    var formattedEmployerTitle = formattedemployer + formattedtitle;

    $('.work-entry:last').append(formattedEmployerTitle);
}

