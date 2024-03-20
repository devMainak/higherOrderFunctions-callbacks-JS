function greetUser(userName, callback)
{
  let message = "Good Morning" + userName
  callback(message)
}

//callback function
function logMessage(message){
  console.log(message)
}

greetUser("Alice", logMessage) //Higher order function



const greetUser = (userName, callback) => {
  let message = "Good Morning, " + userName
  callback(message)
}

const logMessage = (message) => {
  console.log(message)
}

greetUser("Alice", logMessage)

// You have a btn 

btn.addEventListener("click", printMessage)

function printMessage()
{
  console.log("...")
}