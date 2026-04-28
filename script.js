// ================= SIGNUP =================
function signup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup successful!");
    window.location.href = "login.html";
}

// ================= LOGIN =================
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid login");
    }
}

// ================= LOGOUT =================
function logout() {
    window.location.href = "login.html";
}


// ================= CAREER DATA WITH ROADMAP =================
const careersData = {

"AI Engineer": {
keywords:["ai","machine learning","python"],
courses:["ML","DL","Python"],
skills:["Python","TensorFlow","Data"],
jobs:["AI Engineer","ML Engineer"],
roadmap:[
"Learn Python",
"Learn Maths & Statistics",
"Learn Machine Learning",
"Do Projects",
"Learn Deep Learning",
"Apply for Jobs"
]
},

"Data Scientist": {
keywords:["data","analysis","statistics"],
courses:["Python","SQL","Statistics"],
skills:["Data Analysis","Visualization"],
jobs:["Data Scientist"],
roadmap:[
"Learn Python",
"Learn Statistics",
"Learn Data Analysis",
"Learn ML",
"Projects",
"Jobs"
]
},

"Web Developer": {
keywords:["html","css","javascript","react","node"],
courses:["HTML","CSS","JS","React","Node"],
skills:["Frontend","Backend","API"],
jobs:["Frontend Dev","Full Stack Dev"],
roadmap:[
"Learn HTML CSS",
"Learn JavaScript",
"Build Projects",
"Learn React",
"Learn Backend",
"Deploy Projects",
"Apply Jobs"
]
},

"Software Developer": {
keywords:["java","c++","coding"],
courses:["DSA","Java"],
skills:["Coding","Problem Solving"],
jobs:["Software Engineer"],
roadmap:[
"Learn Programming",
"Learn DSA",
"Practice Problems",
"Projects",
"Apply Jobs"
]
},

"Cyber Security": {
keywords:["cyber","security","network"],
courses:["Networking","Cyber Security"],
skills:["Linux","Security"],
jobs:["Security Analyst"],
roadmap:[
"Learn Networking",
"Learn Linux",
"Learn Security Basics",
"Practice Labs",
"Certifications",
"Jobs"
]
},

"UI/UX Designer": {
keywords:["design","figma"],
courses:["UI UX","Figma"],
skills:["Design","Creativity"],
jobs:["UI Designer"],
roadmap:[
"Learn Design Basics",
"Learn Figma",
"Create Designs",
"Portfolio",
"Jobs"
]
},

"Cloud Engineer": {
keywords:["cloud","aws"],
courses:["AWS"],
skills:["Cloud"],
jobs:["Cloud Engineer"],
roadmap:[
"Learn Cloud Basics",
"AWS",
"Projects",
"Jobs"
]
},

"Mobile App Developer": {
keywords:["android","flutter"],
courses:["Flutter"],
skills:["App Dev"],
jobs:["App Developer"],
roadmap:[
"Learn Language",
"Learn Flutter",
"Build Apps",
"Jobs"
]
},

"Game Developer": {
keywords:["game","unity"],
courses:["Unity"],
skills:["Game Dev"],
jobs:["Game Dev"],
roadmap:[
"Learn C#",
"Learn Unity",
"Build Games",
"Jobs"
]
},

"DevOps Engineer": {
keywords:["devops"],
courses:["DevOps"],
skills:["Automation"],
jobs:["DevOps"],
roadmap:[
"Learn Linux",
"Learn CI/CD",
"Projects",
"Jobs"
]
},

"Network Engineer": {
keywords:["network"],
courses:["CCNA"],
skills:["Routing"],
jobs:["Network Engineer"],
roadmap:[
"Networking Basics",
"CCNA",
"Practice",
"Jobs"
]
},

"Database Administrator": {
keywords:["sql","database"],
courses:["SQL"],
skills:["DB"],
jobs:["DBA"],
roadmap:[
"Learn SQL",
"Practice DB",
"Jobs"
]
},

"Digital Marketer": {
keywords:["marketing"],
courses:["Digital Marketing"],
skills:["SEO"],
jobs:["Marketer"],
roadmap:[
"Learn Marketing",
"SEO",
"Projects",
"Jobs"
]
},

"Content Creator": {
keywords:["youtube","content"],
courses:["Content Creation"],
skills:["Editing"],
jobs:["YouTuber"],
roadmap:[
"Choose Niche",
"Create Content",
"Grow Channel"
]
},

"Graphic Designer": {
keywords:["photoshop"],
courses:["Design"],
skills:["Creativity"],
jobs:["Designer"],
roadmap:[
"Learn Tools",
"Design",
"Portfolio",
"Jobs"
]
},

"Business Analyst": {
keywords:["business"],
courses:["Analytics"],
skills:["Analysis"],
jobs:["Analyst"],
roadmap:[
"Learn Basics",
"Tools",
"Projects",
"Jobs"
]
},

"Entrepreneur": {
keywords:["startup"],
courses:["Business"],
skills:["Leadership"],
jobs:["Founder"],
roadmap:[
"Idea",
"Plan",
"Execute",
"Grow"
]
},

"Teacher": {
keywords:["teaching"],
courses:["B.Ed"],
skills:["Teaching"],
jobs:["Teacher"],
roadmap:[
"Study",
"Training",
"Teaching"
]
},

"Lawyer": {
keywords:["law"],
courses:["LLB"],
skills:["Legal"],
jobs:["Lawyer"],
roadmap:[
"Study Law",
"Practice",
"Jobs"
]
},

"Civil Engineer": {
keywords:["civil"],
courses:["Civil Engg"],
skills:["Design"],
jobs:["Engineer"],
roadmap:[
"Study",
"Site Work",
"Jobs"
]
},

"Mechanical Engineer": {
keywords:["mechanical"],
courses:["Mechanical"],
skills:["CAD"],
jobs:["Engineer"],
roadmap:[
"Study",
"Design",
"Jobs"
]
},

"Electrical Engineer": {
keywords:["electrical"],
courses:["Electrical"],
skills:["Circuits"],
jobs:["Engineer"],
roadmap:[
"Study",
"Practice",
"Jobs"
]
},

"Doctor": {
keywords:["medical"],
courses:["MBBS"],
skills:["Care"],
jobs:["Doctor"],
roadmap:[
"NEET",
"MBBS",
"Practice"
]
},

"Pharmacist": {
keywords:["pharmacy"],
courses:["B.Pharmacy"],
skills:["Medicine"],
jobs:["Pharmacist"],
roadmap:[
"Study",
"Practice",
"Jobs"
]
},

"Nurse": {
keywords:["nursing"],
courses:["Nursing"],
skills:["Care"],
jobs:["Nurse"],
roadmap:[
"Study",
"Training",
"Jobs"
]
}
};


// ================= PREDICT =================
function predictCareer() {
    let input = (
        document.getElementById("skills").value +
        document.getElementById("interests").value
    ).toLowerCase();

    let bestMatch = "General Career";

    for (let career in careersData) {
        for (let key of careersData[career].keywords) {
            if (input.includes(key)) {
                bestMatch = career;
                break;
            }
        }
    }

    localStorage.setItem("career", bestMatch);
    window.location.href = "career.html";
}


// ================= DISPLAY =================
let title = document.getElementById("careerTitle");
let details = document.getElementById("careerDetails");

if (title && details) {
    let career = localStorage.getItem("career");
    title.innerText = career;

    let data = careersData[career];

    if (data) {
        details.innerHTML = `
        <h3>Courses:</h3>
        <ul>${data.courses.map(c => `<li>${c}</li>`).join("")}</ul>

        <h3>Skills:</h3>
        <ul>${data.skills.map(s => `<li>${s}</li>`).join("")}</ul>

        <h3>Jobs:</h3>
        <ul>${data.jobs.map(j => `<li>${j}</li>`).join("")}</ul>

        <h3>Roadmap:</h3>
        <ul>${data.roadmap.map(r => `<li>${r}</li>`).join("")}</ul>
        `;
    } else {
        details.innerHTML = "<p>No data</p>";
    }
}

// ================= BACK =================
function goBack() {
    window.location.href = "dashboard.html";
}