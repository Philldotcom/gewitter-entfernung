let blitzZeit;

document.addEventListener("DOMContentLoaded", () => {
    const blitzButton = document.getElementById("buttonBlitz");
    const donnerButton = document.getElementById("buttonDonner");
    const resultBox = document.getElementById("result");

    blitzButton.addEventListener("click", () => {
        blitzZeit = new Date();
        resultBox.textContent = "Blitz registriert! Jetzt warte auf den Donner...";
        resultBox.classList.add("visible");
    });

    donnerButton.addEventListener("click", () => {
        if (!blitzZeit) {
            resultBox.textContent = "Bitte zuerst auf „Blitz gesehen“ klicken!";
            resultBox.classList.add("visible");
            return;
        }

        const donnerZeit = new Date();
        const differenzSekunden = (donnerZeit - blitzZeit) / 1000;
        const entfernungMeter = Math.round(differenzSekunden * 343);
        const entfernungKm = (entfernungMeter / 1000).toFixed(2);

        resultBox.textContent = `Der Blitz ist etwa ${entfernungKm} Kilometer entfernt. (${entfernungMeter} Meter)`;
        resultBox.classList.add("visible");

        blitzZeit = null; // zurücksetzen
    });
});
