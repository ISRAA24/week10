
const http = require("http");
const url = require("url");

const server = http.createServer((req,res) => {
    console.log("request", req.url);
    
  const parsedUrl = url.parse(req.url, true);
  const operation = parsedUrl.pathname; 
  const { a, b } = parsedUrl.query;

  const num1 = parseFloat(a);
  const num2 = parseFloat(b);

  if (isNaN(num1) || isNaN(num2)) {
    res.end(" Please provide valid numbers for a and b");
    return;
  }

  if (operation === "/add") {
    res.end((num1 + num2).toString());
  } else if (operation === "/subtract") {
    res.end((num1 - num2).toString());
  } else if (operation === "/multiply") {
    res.end((num1 * num2).toString());
  } else if (operation === "/divide") {
    if (num2 === 0) {
      res.end(" Cannot divide by zero");
    } else {
      res.end((num1 / num2).toString());
    }
  } else {
    res.end(" Invalid operation. Use /add, /subtract, /multiply, /divide");
  }
    
});

server.listen(3001 , () =>{
    console.log("listening on port 3001");
    
})