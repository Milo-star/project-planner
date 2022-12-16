class Task{

    constructor(name, description, status, deadline){
        this.name = name;
        this.description = description;
        this.status = status;
        this.deadline = deadline;
    }

    get getName(){
        return this.name;
    }

    get description(){
        return this.description;
    }

    get status(){
        return this.status;
    }

    get deadline(){
        return this.deadline;
    }

    changeStatus(newStatus) {
        this.status = newStatus;
    }
}

let t = new Task("Lorem", "ipsum", "to-do", 5);
console.log(t);