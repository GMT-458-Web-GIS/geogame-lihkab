// Kullanıcı adını alma ve ekrana yazdırma
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
if (username) {
    document.getElementById("user-name").innerText = username;
} else {
    window.location.href = "index.html";
}

// Harita Ayarları
let map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([35.0, 39.0]), // Türkiye'nin merkezi
        zoom: 5
    })
});

// Türkiye'nin 81 ili ve koordinatları (kıyıdan içe doğru ilerleyecek şekilde düzenlenmiş)
const cities = [
    { name: "İstanbul", coords: [28.9784, 41.0082] },
    { name: "Kocaeli", coords: [29.9162, 40.7654] },
    { name: "Yalova", coords: [29.2769, 40.6500] },
    { name: "Tekirdağ", coords: [27.5143, 40.9780] },
    { name: "Çanakkale", coords: [26.4058, 40.1553] },
    { name: "Balıkesir", coords: [27.8845, 39.6484] },
    { name: "İzmir", coords: [27.1384, 38.4192] },
    { name: "Aydın", coords: [27.8441, 37.8493] },
    { name: "Muğla", coords: [28.2418, 37.2153] },
    { name: "Manisa", coords: [27.4226, 38.6191] },
    { name: "Antalya", coords: [30.7133, 36.8969] },
    { name: "Mersin", coords: [34.6399, 36.8121] },
    { name: "Adana", coords: [35.3213, 37.0000] },
    { name: "Hatay", coords: [36.1255, 36.1993] },
    { name: "Zonguldak", coords: [31.7917, 41.4564] },
    { name: "Bartın", coords: [32.3374, 41.5811] },
    { name: "Sinop", coords: [35.1535, 42.0268] },
    { name: "Samsun", coords: [36.33, 41.2867] },
    { name: "Ordu", coords: [37.2804, 40.9861] },
    { name: "Giresun", coords: [38.3874, 40.9128] },
    { name: "Trabzon", coords: [39.7169, 41.0027] },
    { name: "Rize", coords: [40.5168, 41.0201] },
    { name: "Artvin", coords: [41.8194, 41.1828] },
    { name: "Bursa", coords: [29.0619, 40.1826] },
    { name: "Bilecik", coords: [30.0571, 40.1501] },
    { name: "Edirne", coords: [26.5595, 41.6771] },
    { name: "Kırklareli", coords: [27.2232, 41.7350] },
    { name: "Denizli", coords: [29.0876, 37.7765] },
    { name: "Uşak", coords: [29.4082, 38.6823] },
    { name: "Afyonkarahisar", coords: [30.5405, 38.7638] },
    { name: "Kütahya", coords: [29.6114, 39.4242] },
    { name: "Isparta", coords: [30.5544, 37.7648] },
    { name: "Burdur", coords: [30.2839, 37.7203] },
    { name: "Kahramanmaraş", coords: [36.9264, 37.5817] },
    { name: "Osmaniye", coords: [36.2477, 37.0748] },
    { name: "Kastamonu", coords: [33.7797, 41.3887] },
    { name: "Amasya", coords: [35.8353, 40.6539] },
    { name: "Tokat", coords: [36.5544, 40.3167] },
    { name: "Gümüşhane", coords: [39.4714, 40.4602] },
    { name: "Ankara", coords: [32.8597, 39.9334] },
    { name: "Konya", coords: [32.4846, 37.8715] },
    { name: "Eskişehir", coords: [30.5256, 39.7667] },
    { name: "Kayseri", coords: [35.4853, 38.7335] },
    { name: "Sivas", coords: [37.0179, 39.7477] },
    { name: "Yozgat", coords: [34.8142, 39.8181] },
    { name: "Çankırı", coords: [33.6167, 40.5983] },
    { name: "Kırıkkale", coords: [33.5153, 39.8468] },
    { name: "Nevşehir", coords: [34.7122, 38.6250] },
    { name: "Niğde", coords: [34.6833, 37.9667] },
    { name: "Aksaray", coords: [34.0366, 38.3687] },
    { name: "Kırşehir", coords: [34.1595, 39.1458] },
    { name: "Karaman", coords: [33.2150, 37.1811] },
    { name: "Erzurum", coords: [41.2769, 39.9041] },
    { name: "Erzincan", coords: [39.5051, 39.7500] },
    { name: "Tunceli", coords: [39.5483, 39.1061] },
    { name: "Malatya", coords: [38.3173, 38.3552] },
    { name: "Elazığ", coords: [39.2303, 38.6753] },
    { name: "Ağrı", coords: [43.0452, 39.7191] },
    { name: "Kars", coords: [43.0975, 40.6085] },
    { name: "Ardahan", coords: [42.7022, 41.1085] },
    { name: "Iğdır", coords: [44.0442, 39.9237] },
    { name: "Bitlis", coords: [42.1014, 38.3938] },
    { name: "Bingöl", coords: [40.4899, 38.8853] },
    { name: "Diyarbakır", coords: [40.2317, 37.9144] },
    { name: "Şanlıurfa", coords: [38.7939, 37.1676] },
    { name: "Gaziantep", coords: [37.0662, 37.0662] },
    { name: "Mardin", coords: [40.7341, 37.3212] },
    { name: "Batman", coords: [41.1322, 37.8812] },
    { name: "Siirt", coords: [41.9400, 37.9293] },
    { name: "Şırnak", coords: [42.4918, 37.4187] },
    { name: "Hakkari", coords: [43.7456, 37.5744] },
    { name: "Adıyaman", coords: [38.2797, 37.7601] },
    { name: "Muş", coords: [41.4918, 38.9462] },
    { name: "Van", coords: [43.0560, 38.5019] },
    { name: "Çorum", coords: [34.9519, 40.5489] },
    { name: "Bolu", coords: [31.5892, 40.7356] },
    { name: "Düzce", coords: [31.1606, 40.8438] },
    { name: "Karabük", coords: [32.6258, 41.2061] },
    { name: "Sakarya", coords: [30.4070, 40.7563] },
    { name: "Bayburt", coords: [40.2249, 40.2586] },
    { name: "Kilis", coords: [37.1166, 36.7184] }
];

let score = 0;
let questionIndex = 0;
let lastCoords = null;

// Yeni çarpım sorusu oluşturma
function generateMultiplicationQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('mission-text').innerText = `${num1} x ${num2} kaçtır?`;
    document.getElementById('answer').dataset.answer = num1 * num2;
}

// Cevap kontrolü
function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const correctAnswer = document.getElementById('answer').dataset.answer;
    const feedback = document.getElementById('feedback');

    if (parseInt(userAnswer) === parseInt(correctAnswer)) {
        feedback.innerText = "Tebrikler! Doğru cevap.";
        score += 10;
        document.getElementById("score").textContent = score;

        // Şehri işaretle ve çizgi çek
        if (questionIndex < cities.length) {
            markCity(cities[questionIndex]);
            if (lastCoords) {
                drawLine(lastCoords, cities[questionIndex].coords);
            }
            lastCoords = cities[questionIndex].coords;
            questionIndex++;
        } else {
            feedback.innerText = "Tebrikler, oyunu tamamladınız!";
            document.getElementById("submit-answer").disabled = true;
            document.getElementById("next-mission").disabled = true;
        }
        generateMultiplicationQuestion();
    } else {
        feedback.innerText = "Yanlış cevap, tekrar deneyin.";
    }
    document.getElementById('answer').value = ""; // Cevap kutusunu temizle
}

// Haritada şehri işaretleme
function markCity(city) {
    let marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([city.coords[0], city.coords[1]])), // Koordinatlar [lon, lat] formatında
    });

    let vectorSource = new ol.source.Vector({
        features: [marker],
    });

    let markerVectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: new ol.style.Style({
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({ color: '#ffcc00' }),
                stroke: new ol.style.Stroke({ color: '#ffffff', width: 2 })
            })
        })
    });

    map.addLayer(markerVectorLayer);
}

// İki şehir arasında çizgi çekme
function drawLine(coords1, coords2) {
    const lineFeature = new ol.Feature({
        geometry: new ol.geom.LineString([
            ol.proj.fromLonLat([coords1[0], coords1[1]]),
            ol.proj.fromLonLat([coords2[0], coords2[1]])
        ])
    });

    const lineStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#ff0000',
            width: 2
        })
    });

    lineFeature.setStyle(lineStyle);

    const vectorSource = new ol.source.Vector({
        features: [lineFeature]
    });

    const vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });

    map.addLayer(vectorLayer);
}

// İlk görevi başlatma
generateMultiplicationQuestion();
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
document.getElementById("next-mission").addEventListener("click", generateMultiplicationQuestion);
