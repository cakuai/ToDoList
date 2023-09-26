
let input = prompt("Please Enter an Instruction")
let TodoList = []

while (input !== "quit") {

    if (input == "new") {
        let new_item = prompt("What's the new task?");
        TodoList.push(new_item);
        console.log(`${new_item} added.`);
    }

    else if (input == "list") {
        for (let i of TodoList) {
            console.log(`${TodoList.indexOf(i)} : ${i}`);
        }
    }

    else if (input == "del") {
        let del_item = prompt("Which one would you like to delete?");
        TodoList.splice(del_item, 1);
    }

    else {
        input = prompt("Please enter a Valid Instruction.");
    }

    input = prompt("Please Enter an Instruction");

}

console.log("END");
console.log("test");