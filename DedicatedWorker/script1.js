const worker = new Worker('worker.js')
const btn = document.getElementById('calcBtn')

btn.onclick = () => {
    btn.disabled = true;
    worker.postMessage(50000000000)
};
worker.onmessage = (e) => {
    document.getElementById('result').textContent = e.data
    btn.disabled = false;
}