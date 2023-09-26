
let input = prompt("Please Enter an Instruction")
let TodoList = []

while (input !== "quit") {

    if (input == "new") {
        let new_item = prompt("What's the new task?");
        TodoList.push(new_item);

        console.log(`${new_item} added.`);
        input = prompt("Please Enter an Instruction");
    }

    else if (input == "list") {
        for (let i of TodoList) {
            console.log(`${TodoList.indexOf(i)} : ${i}`);
        }

        input = prompt("Please Enter an Instruction");
    }

    else if (input == "del") {
        let del_item = prompt("Which one would you like to delete?");
        TodoList.splice(del_item, 1);

        input = prompt("Please Enter an Instruction");
    }

    else {
        input = prompt("Please enter a Valid Instruction.");
    }

}

console.log("END");