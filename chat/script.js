const status1 = document.getElementById("status");
const messages = document.getElementById("messages");
const form = document.getElementById("form");
const input = document.getElementById("input");

const ws = new WebSocket("ws://localhost:3000");

function setStatus(value) {
    status1.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement("li");

    li.innerHTML = value;
    messages.appendChild(li);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    ws.send(input.value);
    input.value = "";
});

ws.onopen = () => setStatus("Connected");
ws.onclose = () => setStatus("Disconnected");
ws.onmessage = (respone) => printMessage(respone.data);