
// Kullanıcı Adı Girişi ve Oyunu Başlatma
document.getElementById("start-game").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    
    if (username) {
        // Kullanıcı adını güncelleme
        document.getElementById("user-name").innerText = username;
        // Giriş ekranını gizle, oyun ekranını göster
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("game-header").classList.remove("hidden");
        document.getElementById("game-main").classList.remove("hidden");
    } else {
        alert("Lütfen bir kullanıcı adı girin.");
    }
});

// Haritayı yükleme
let map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([27.57, 38.42]),
        zoom: 5
    })
});

// Görev güncelleme ve diğer fonksiyonlar
let score = 0;
let missions = [
    { name: "Kırmızı Kuşu Bul", info: "Bu tür nadir görülür ve korunması önemlidir." },
    { name: "Mavi Çiçeği Keşfet", info: "Bu çiçek nadir bir türdür." },
    { name: "Büyük Taşı Bul", info: "Bu taş doğa harikası olarak bilinir." }
];
let currentMission = 0;

function updateMission() {
    let missionItem = missions[currentMission];
    document.getElementById("mission-text").innerText = missionItem.name;
    currentMission = (currentMission + 1) % missions.length;
}

document.getElementById("next-mission").addEventListener("click", updateMission);

map.on('click', function () {
    score += 10;
    document.getElementById("score").innerText = score;

    let missionItem = missions[currentMission];
    document.getElementById("item-name").innerText = missionItem.name;
    document.getElementById("item-info").innerText = missionItem.info;
    document.getElementById("info-card").classList.remove("hidden");

    updateMission();
});

document.getElementById("close-card").addEventListener("click", function() {
    document.getElementById("info-card").classList.add("hidden");
});
