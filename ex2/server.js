const http = require('http');
const PORT = 3000;

const server = http.createServer(function (request, response) {
  // const url = request.url;
  // const method = request.method;
  const { url, method } = request;

  if (url !== '/')  {
    response.statusCode = 403;
    response.write('Mày không có quyền vào đây. Cút cút cút....');
    return response.end();
  }
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  const info = {
    name: "Tùng",
    ages: 30,
    address: "Vincom nguyễn chí thanh"
  }
  response.write(JSON.stringify(info));
  response.end();
  console.log('Someone is questing access to your server... ');
});

server.listen(PORT, function (error) {
  if (error) {
   return "Lỗi rồi. Check lại đi...." 
  }
  console.log('Server is running on port ' + PORT);
})