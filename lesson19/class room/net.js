const net = require('net');

net
  .createServer(socket => {
    socket.on('connect', () => {});
    socket.on('data', data => {
      console.log('connected');
      console.log(data.toString());
      socket.end('HTTP/1.1 200\r\nConnection: none\r\n\r\n Hello');
    });
  })
  .listen(3000, () => {
    console.log('running at <localhost:3000></localhost:3000>');
  });
