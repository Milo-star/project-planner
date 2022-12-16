class Project{
    name;
    description;
    tasks = [];
    
    constructor(name, description){
        this.name = name;
        this.description = description;
    }

    addTask(name, description, status, deadline){
        let task = new Task(name, description, status, deadline);
        this.tasks.push(task);
    }

    deleteTask(task) {
        this.tasks.filter((item) => {
            return item != task;
        })
    }

    filterTasks(condition) {
        return this.tasks.filter((task) => {
            return task === condition;
        });
    }

    sortTasks(condition) {
        switch(condition){
            case "time":
                // To do
                break;
            
            case "name":
                // to do
                break;

            case "uregency":
                // to do
                break;
        }
    }
}

class Task{
    name;
    description;
    status = "to-do";
    deadline;

    constructor(name, description, status, deadline){
        this.name = name;
        this.description = description;
        this.status = status;
        this.deadline = deadline;
    }

    changeStatus(newStatus) {
        this.status = newStatus;
    }
}

export {Project};