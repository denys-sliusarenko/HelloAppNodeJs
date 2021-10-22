const http = require("http");
const greeting = require("./greeting");
const os = require("os");
const User = require("./user.js");
const welcome = require("./welcome");//folder

let userName = os.userInfo().username;
console.log(`Date: ${greeting.date}`);
console.log(greeting.getMessage(userName));

 
let denys = new User("Denys", 24);
denys.sayHi();

http.createServer(function(request,response){

    response.end("Hello NodeJS!");

}).listen(3000, "127.0.0.1",function(){
    console.log("Server is listening on port 3000");
});

 
welcome.getMorningMessage();
welcome.getEveningMessage();