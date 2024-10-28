document.getElementById("start-game").addEventListener("click", function() {
    const username = document.getElementById("username").value.trim();
    
    if (username) {
        window.location.href = `game.html?username=${encodeURIComponent(username)}`;
    } else {
        alert("Lütfen bir kullanıcı adı girin.");
    }
});
