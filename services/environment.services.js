let db = [{
    "id": "javascript",
    "label": "JavaScript",
    "category": "programmingLanguages",
    "priority": 1
},
{
    "id": "typescript",
    "label": "TypeScript",
    "category": "programmingLanguages",
    "priority": 1
},
{
    "id": "sql",
    "label": "SQL",
    "category": "programmingLanguages",
    "priority": 2
},
{
    "id": "java",
    "label": "Java",
    "category": "programmingLanguages",
    "priority": 3
},
{
    "id": "go",
    "label": "GO",
    "category": "programmingLanguages",
    "priority": 3
},
{
    "id": "firebasestorage",
    "label": "Firebase Storage",
    "category": "databases",
    "priority": 2
},
{
    "id": "ibmcloudant",
    "label": "IBM Cloudant",
    "category": "databases",
    "priority": 2
},
{
    "id": "react",
    "label": "React",
    "category": "webTechnologies",
    "priority": 1
},
{
    "id": "angularjs",
    "label": "ANGULARJS",
    "category": "webTechnologies",
    "priority": 1
},
{
    "id": "redux",
    "label": "Redux",
    "category": "webTechnologies",
    "priority": 1
},
{
    "id": "materialui",
    "label": "Material UI",
    "category": "webTechnologies",
    "priority": 1
},
{
    "id": "git",
    "label": "Git",
    "category": "otherSkills",
    "priority": 2
},
{
    "id": "adobephotoshop",
    "label": "Adobe Photoshop",
    "category": "otherSkills",
    "priority": 2
},
];

function getEnvironments (){
    return db
}

function getEnvironmentsByID (id){
    let filteredDB = db.filter(el=> el.id===id)
    return filteredDB
}

function putEnvironments (id){
    const newElement = { "id": "ptypescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 }
    let filteredDB = db.filter(el=> el.id!==id)
    if(filteredDB.length) db.push(newElement)  
    return db
}



module.exports={
    getEnvironments, getEnvironmentsByID,putEnvironments
}