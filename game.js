const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get("username");
if (username) {
    document.getElementById("user-name").innerText = username;
} else {
    window.location.href = "index.html";
}

let map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM(),
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([35.0, 39.0]),
        zoom: 6
    })
});

const cities = [
    { name: "Adana", coords: [37.0000, 35.3213], plate: 1 },
    { name: "Adıyaman", coords: [37.7601, 38.2797], plate: 2 },
    { name: "Afyonkarahisar", coords: [38.7638, 30.5405], plate: 3 },
    { name: "Ağrı", coords: [39.7191, 43.0452], plate: 4 },
    { name: "Amasya", coords: [40.6539, 35.8353], plate: 5 },
    { name: "Ankara", coords: [39.9334, 32.8597], plate: 6 },
    { name: "Antalya", coords: [36.8969, 30.7133], plate: 7 },
    { name: "Artvin", coords: [41.1828, 41.8194], plate: 8 },
    { name: "Aydın", coords: [37.8493, 27.8441], plate: 9 },
    { name: "Balıkesir", coords: [39.6484, 27.8845], plate: 10 },
    { name: "Bilecik", coords: [40.1501, 30.0571], plate: 11 },
    { name: "Bingöl", coords: [38.8853, 40.4899], plate: 12 },
    { name: "Bitlis", coords: [38.3938, 42.1014], plate: 13 },
    { name: "Bolu", coords: [40.7356, 31.5892], plate: 14 },
    { name: "Burdur", coords: [37.7203, 30.2839], plate: 15 },
    { name: "Bursa", coords: [40.1826, 29.0619], plate: 16 },
    { name: "Çanakkale", coords: [40.1553, 26.4058], plate: 17 },
    { name: "Çankırı", coords: [40.5983, 33.6167], plate: 18 },
    { name: "Çorum", coords: [40.5489, 34.9519], plate: 19 },
    { name: "Denizli", coords: [37.7765, 29.0876], plate: 20 },
    { name: "Diyarbakır", coords: [37.9144, 40.2317], plate: 21 },
    { name: "Edirne", coords: [41.6771, 26.5595], plate: 22 },
    { name: "Elazığ", coords: [38.6753, 39.2303], plate: 23 },
    { name: "Erzincan", coords: [39.7500, 39.5051], plate: 24 },
    { name: "Erzurum", coords: [39.9041, 41.2769], plate: 25 },
    { name: "Eskişehir", coords: [39.7667, 30.5256], plate: 26 },
    { name: "Gaziantep", coords: [37.0662, 37.0662], plate: 27 },
    { name: "Giresun", coords: [40.9128, 38.3874], plate: 28 },
    { name: "Gümüşhane", coords: [40.4602, 39.4714], plate: 29 },
    { name: "Hakkari", coords: [37.5744, 43.7456], plate: 30 },
    { name: "Hatay", coords: [36.1993, 36.1255], plate: 31 },
    { name: "Isparta", coords: [37.7648, 30.5544], plate: 32 },
    { name: "Mersin", coords: [36.8121, 34.6399], plate: 33 },
    { name: "İstanbul", coords: [41.0082, 28.9784], plate: 34 },
    { name: "İzmir", coords: [38.4192, 27.1384], plate: 35 },
    { name: "Kars", coords: [40.6085, 43.0975], plate: 36 },
    { name: "Kastamonu", coords: [41.3887, 33.7797], plate: 37 },
    { name: "Kayseri", coords: [38.7335, 35.4853], plate: 38 },
    { name: "Kırklareli", coords: [41.7350, 27.2232], plate: 39 },
    { name: "Kırşehir", coords: [39.1458, 34.1595], plate: 40 },
    { name: "Kocaeli", coords: [40.7654, 29.9162], plate: 41 },
    { name: "Konya", coords: [37.8715, 32.4846], plate: 42 },
    { name: "Kütahya", coords: [39.4242, 29.6114], plate: 43 },
    { name: "Malatya", coords: [38.3552, 38.3173], plate: 44 },
    { name: "Manisa", coords: [38.6191, 27.4226], plate: 45 },
    { name: "Kahramanmaraş", coords: [37.5817, 36.9264], plate: 46 },
    { name: "Mardin", coords: [37.3212, 40.7341], plate: 47 },
    { name: "Muğla", coords: [37.2153, 28.2418], plate: 48 },
    { name: "Muş", coords: [38.9462, 41.4918], plate: 49 },
    { name: "Nevşehir", coords: [38.6250, 34.7122], plate: 50 },
    { name: "Niğde", coords: [37.9667, 34.6833], plate: 51 },
    { name: "Ordu", coords: [40.9861, 37.2804], plate: 52 },
    { name: "Rize", coords: [41.0201, 40.5168], plate: 53 },
    { name: "Sakarya", coords: [40.7563, 30.4070], plate: 54 },
    { name: "Samsun", coords: [41.2867, 36.33], plate: 55 },
    { name: "Siirt", coords: [37.9293, 41.9400], plate: 56 },
    { name: "Sinop", coords: [42.0268, 35.1535], plate: 57 },
    { name: "Sivas", coords: [39.7477, 37.0179], plate: 58 },
    { name: "Tekirdağ", coords: [40.9780, 27.5143], plate: 59 },
    { name: "Tokat", coords: [40.3167, 36.5544], plate: 60 },
    { name: "Trabzon", coords: [41.0027, 39.7169], plate: 61 },
    { name: "Tunceli", coords: [39.1061, 39.5483], plate: 62 },
    { name: "Şanlıurfa", coords: [37.1676, 38.7939], plate: 63 },
    { name: "Uşak", coords: [38.6823, 29.4082], plate: 64 },
    { name: "Van", coords: [38.5019, 43.0560], plate: 65 },
    { name: "Yozgat", coords: [39.8181, 34.8142], plate: 66 },
    { name: "Zonguldak", coords: [41.4564, 31.7917], plate: 67 },
    { name: "Aksaray", coords: [38.3687, 33.6112], plate: 68 },
    { name: "Bayburt", coords: [40.2586, 40.2249], plate: 69 },
    { name: "Karaman", coords: [37.1811, 33.2150], plate: 70 },
    { name: "Kırıkkale", coords: [39.8468, 33.5153], plate: 71 },
    { name: "Batman", coords: [37.8812, 41.1322], plate: 72 },
    { name: "Şırnak", coords: [37.4187, 42.4918], plate: 73 },
    { name: "Bartın", coords: [41.5811, 32.3374], plate: 74 },
    { name: "Ardahan", coords: [41.1085, 42.7022], plate: 75 },
    { name: "Iğdır", coords: [39.9237, 44.0442], plate: 76 },
    { name: "Yalova", coords: [40.6500, 29.2769], plate: 77 },
    { name: "Karabük", coords: [41.2061, 32.6258], plate: 78 },
    { name: "Kilis", coords: [36.7184, 37.1166], plate: 79 },
    { name: "Osmaniye", coords: [37.0748, 36.2477], plate: 80 },
    { name: "Düzce", coords: [40.8438, 31.1606], plate: 81 }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledCities = shuffle(cities);

let score = 0;
let questionIndex = 0;
let timeLeft = 30;
let timerId;

function startTimer() {
    clearInterval(timerId);
    timeLeft = 30;
    document.getElementById("feedback").innerText = `Kalan Süre: ${timeLeft} saniye`;
    
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById("feedback").innerText = `Kalan Süre: ${timeLeft} saniye`;

        if (timeLeft <= 0) {
            clearInterval(timerId);
            document.getElementById("feedback").innerText = "Süre doldu! Bir sonraki göreve geçiliyor.";
            score -= 5;
            document.getElementById("score").textContent = score;
            questionIndex++;
            generatePlateQuestion();
            startTimer(); 
        }
    }, 1000);
}

function generatePlateQuestion() {
    if (questionIndex < shuffledCities.length) {
        const city = shuffledCities[questionIndex];
        document.getElementById('mission-text').innerText = `${city.name} şehrinin plaka numarası kaçtır?`;
        document.getElementById('answer').dataset.answer = city.plate;
        startTimer();
    } else {
        document.getElementById('mission-text').innerText = "Tüm şehirler işaretlendi, tebrikler!";
        document.getElementById('submit-answer').disabled = true;
        document.getElementById('next-mission').disabled = true;
        clearInterval(timerId);
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const correctAnswer = document.getElementById('answer').dataset.answer;
    const feedback = document.getElementById('feedback');

    if (parseInt(userAnswer) === parseInt(correctAnswer)) {
        feedback.innerText = "Tebrikler! Doğru cevap.";
        score += 10;
        document.getElementById("score").textContent = score;
        clearInterval(timerId);

        markCity(shuffledCities[questionIndex]);
        questionIndex++;
        generatePlateQuestion();
    } else {
        feedback.innerText = "Yanlış cevap, tekrar deneyin.";
        score -= 5;
        document.getElementById("score").textContent = score;
    }
    document.getElementById('answer').value = "";
}

function markCity(city) {
    let marker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([city.coords[1], city.coords[0]])),
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

generatePlateQuestion();
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
document.getElementById("next-mission").addEventListener("click", function() {
    questionIndex++;
    generatePlateQuestion();
});