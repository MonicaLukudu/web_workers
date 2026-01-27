const myWorker = new SharedWorker('shared-worker.js');
myWorker.port.start();
console.log(myWorker.port);

document.getElementById('addBtn').onclick = () => {
  myWorker.port.postMessage('increment');
};

myWorker.port.onmessage = (e) => {
  document.getElementById('count').textContent = e.data;
};
