function hitungLuas() {
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert(
            "Nilai tidak valid, masukkan nilai yang valid untuk alas dan tinggi!"
        );
        return;
    }

    var luas = 0.5 * alas * tinggi;

    var formulaText = "Luas = 1/2 * alas * tinggi";
    var luasFormulaText = `Luas = 1/2 * ${alas} * ${tinggi}`;
    var resultText = `Luas = ${luas.toFixed(1)}`;

    document.getElementById("formula").innerText = formulaText;
    document.getElementById("luasFormula").innerText = luasFormulaText;
    document.getElementById("luasResult").innerText = resultText;

    document.getElementById("result-container").style.visibility = "visible";
}

function resetForm() {
    document.getElementById("fmluas").reset();
    document.getElementById("result-container").style.visibility = "hidden";
}

//untuk keliling
function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById("sisi1").value);
    var sisi2 = parseFloat(document.getElementById("sisi2").value);
    var sisi3 = parseFloat(document.getElementById("sisi3").value);

    if (
        isNaN(sisi1) ||
        isNaN(sisi2) ||
        isNaN(sisi3) ||
        sisi1 <= 0 ||
        sisi2 <= 0 ||
        sisi3 <= 0
    ) {
        alert("Masukkan nilai yang valid untuk panjang sisi segitiga!");
        return;
    }

    var keliling = Math.floor(sisi1 + sisi2 + sisi3);

    var rumusKel = `Keliling = sisi 1 + sisi 2 + sisi 3`;
    var kel = `Keliling = ${sisi1} + ${sisi2} + ${sisi3}`;
    var kelilingResultText = `Keliling = ${keliling}`;

    document.getElementById("rumusKel").innerText = rumusKel;
    document.getElementById("kel").innerText = kel;
    document.getElementById("kelilingResult").innerText = kelilingResultText;

    document.getElementById("hasilKel").style.visibility = "visible";
}

function resetKel() {
    document.getElementById("fmkeliling").reset();
    document.getElementById("hasilKel").style.visibility = "hidden";
}
