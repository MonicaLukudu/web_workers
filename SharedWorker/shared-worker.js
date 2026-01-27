let counter = 0;
const ports = [];

onconnect = function(e) {
  const port = e.ports[0];
  ports.push(port);

  port.onmessage = function(event) {
    if (event.data === 'increment') {
      counter++;
      // Notify ALL connected tabs of the new count
      ports.forEach(p => p.postMessage(counter));
    }
  };
};