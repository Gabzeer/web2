const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); 
console.log(dateTimeNow.toLocaleTimeString());

function addDateTime(message) {
    message = dateTimeNow.toLocaleDateString() + dateTimeNow.toLocaleTimeString() + " : This is the best moment to have a look at this website !";
}

alert(message);