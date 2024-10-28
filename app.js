let score = 0;
let taskIndex = 0;
const tasks = [
    { question: "Kırmızı Kuşu Bul", answer: "doğru cevap", city: [39.9334, 32.8597] }, // Ankara
    { question: "Mavi Gölü Bul", answer: "doğru cevap", city: [38.6939, 34.6857] }, // Kırşehir
    { question: "Yeşil Ormanı Bul", answer: "doğru cevap", city: [39.9208, 32.8541] } // Eskişehir
];

const map = L.map('map').setView([39.9334, 32.8597], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

function updateTask() {
    document.getElementById("taskText").textContent = tasks[taskIndex].question;
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    if (answer === tasks[taskIndex].answer.toLowerCase()) {
        score += 10;
        document.getElementById("score").textContent = score;
        L.marker(tasks[taskIndex].city).addTo(map)
            .bindPopup(tasks[taskIndex].question + " - İşaretlendi")
            .openPopup();
        taskIndex = (taskIndex + 1) % tasks.length;  // Bir sonraki göreve geç
        updateTask();
    } else {
        alert("Yanlış cevap! Tekrar deneyin.");
    }
    document.getElementById("answer").value = "";  // Cevap kutusunu temizle
}

function generateNewTask() {
    taskIndex = (taskIndex + 1) % tasks.length;
    updateTask();
}

// İlk görevi başlat
updateTask();
