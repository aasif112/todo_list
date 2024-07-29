import inquirer from "inquirer";
let dayWise = [];
let taskArray = [];
let condition = true;
let t = 1;
startList();
async function startList() {
    const taskDay = await inquirer.prompt([
        { message: 'Select day for todo list:',
            name: "taskDay", type: "list",
            choices: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", ""]
        },
    ]);
    if (taskDay.taskDay) {
        taskList(taskDay.taskDay);
    }
    else {
        console.log(``);
        console.log(`<----------WEEKLY TASKS LIST---------->`);
        for (let i = 0; i < dayWise.length; i++) {
            console.log(dayWise[i]);
        }
    }
}
async function taskList(day) {
    while (condition) {
        const taskAdd = await inquirer.prompt([
            { message: `Add Task-${t} for ${day}:`,
                name: "taskInput", type: "input",
            },
            { message: `Do you want to Add Task-${t + 1} for ${day}?`,
                type: "confirm", name: "moreTask",
                default: "false"
            },
        ]);
        taskArray.push(` ${taskAdd.taskInput} |`);
        condition = taskAdd.moreTask;
        // console.log(taskArray);
        t++;
    }
    console.log(``);
    console.log(`Your Tasks for ${day} are:`, taskArray);
    dayWise.push(`${day} Tasks:` + '\t\t' + taskArray);
    taskArray = [];
    condition = true;
    t = 1;
    startList();
}
