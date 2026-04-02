<script>
    const date = new Date();
    const debutFatour = new Date("2026-04-17");
    // Calculer la différence en millisecondes
    const diff = debutFatour.getTime() - date.getTime();
    // Convertir la différence en jours
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    // Afficher le résultat et le centrer au milieu de la page
    const resultElement = document.getElementById("result");
    resultElement.textContent = `Il reste ${days} jours avant le début de la Fatour.`;
</script>

<div id="result"></div>
