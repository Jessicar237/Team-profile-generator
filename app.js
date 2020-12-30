const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function mangerData() {
    inquirer.promt([
        {
            type: "input",
            message: "what is the name of the team?",
            name: "teamTitle",
        },
        {
            type: "input",
            message: "what is the manager's name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "what is the manager's id?",
            name: "managerId"
        },
        {
            type: "input",
            message: "what is the manager's email?",
            name: "managerEmail",

        },
        {
            type: "input",
            message: "what is the manager's office number?",
            name: "officeNumber",

        }])
        .then(managerAnswers => {
            manager = new Manager (
                managerAnswers.managerName, 
                managerAnswers.managerId,
                managerAnswers.managerEmail, 
                mqanagerAnswers.officeNumber,
            );
            teamTitle= managaerAnswers.teamTitle;

            console.log("next team member."
            )
        });
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
inquirer.promt([
    {
        type: "input",
        message: "Is the employee an Intern or Engineer?",
        name: "employeeRole",
    },
    {
        type: "input",
        message: "What is the employee's name?",
        name: "employeeName",
    },
    {
        type: "input",
        message: "what is the employee's email?",
        name: "employeeEmail",
    },
    {
        type:"input",
        message: "what is the employee's ID?",
        name: "employeeId",
    },
    {
        when: (userInput) => userInput.employeeRole === "Intern",
        type: "input",
        messgae: "What is the intern's School?",
        name: "SchoolName",
    
    },
    {
        whem: (unserInput) => userInoout.employeeRole === "Engineer",
        type: "input",
        message: "What is the Engineers Git hub?",
        name: "github",
    },
    {
        type: confirm,
        messgae: "would you like to add another team memner?",
        name:"new member"


    }
    // After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
    
        .then(answers => {
         if(answers.employeeRole ==="Intern"){
             const employee = new Intern(answers.employeeName, answers.employeeEmail, answers.employeeId, answers.SchoolName);
             teamMemebers.push(employee);
            
         }else if (answers.employeeRole === "Engineer") {
             teamMemebers.push(new Engineer(answers.employeeName, answers.managerEmail, answers.employeeId, answes.github));
         }
         if (answers.newEmployee === true){
             lesserEmpleoyeeData ();
         }
         else{
             var main = fs.readFileSync('./templates/main.html', "utf-8");
             main = main.replace(/{{teamTitle}}/g, teamTitle);
         }
         var managerCard = fs.readFileSync('./templates/manager.html', 'utf-8');

         managerCard =managerCard.replace('.templates/manager.html', 'utf-8');
         managerCard =managerCard.replace('{{role}}', manager.getEmployeeRole());
         managerCard =managerCard.replace('{{name}}', manager.getEmployeeName());
         managerCard =managerCard.replace('{{email}}', manager.getEmployeeEmail());
         managerCard =managerCard.replace('{{github}}', manager.getGithub());

         var cards = managerCard;
         for (var i = 0; i < teamMemebers.lenght; i++) {
             var employee = teamMemebers[i];
             cards += renderEmployee(employee);

         }
         main = main.replace('{{cards}}', cards);
         fs.writeFileSync('./output/team.html', main);

         console.log( "Team.html has been generated");
         // HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work//

        },
    

function renderEmployee(employee){
    if (employee.getEmployeeRole() == "Intern") {
        var InternCard = fs.readFileSync('./templates/Intern.html', 'utf-8');
        InternCard = InternCard.replace('{{employeeRole}}', employee.getEmployeeRole);
        InternCard = InternCard.replace('{{employeeName}}', employee.getEmployeeName);
        InternCard = InternCard.replace('{{employeeId}}', employee.getEmployeeId);
        InternCard = InternCard.replace('{{employeeEmail}}', employee.getEmployeeEmail);
        
return InternCard;
    }
    else if (employe.getEmployeeRole() === "Engineer") {
        var EngineerCard = fs.readFileSync('./templates/engineer.html', 'utf-8');
        engineerCrd = engineerCard.replace('{{employeeRole}}', employee.getEmployeeRole());
        engineerCrd = engineerCard.replace('{{employeeName}}', employee.getEmployeeName());
        engineerCrd = engineerCard.replace('{{employeeId}}', employee.getEmployeeId());
        engineerCrd = engineerCard.replace('{{employeeEmail}}', employee.getEmployeeEmail());
        engineerCrd = engineerCard.replace('{{employeeGithub}}', employee.getGithub());
    }
    
