//importing http module 
//http is an inbuilt module in nodejs


const http=require("http"); //common js module import

// http create server is a method that creates a server for you

//A kind of server like http server / web app server
//we can pass es5 function or arrow function as well both are valid and this function basically has  2 parameters(request, response)
http.createServer((req,res)=>{
    res.write("<h1>hello node js!!</h1>") //sending response in HTML foramte
    res.write(JSON.stringify({name:'preethi',age:23, course:'fullstackdeveloper'})) //sending response in JSON formate
    res.end(); //server ends here
    
}).listen(8090);// Basically this listen runs our application on some port

