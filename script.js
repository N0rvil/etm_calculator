const I = document.getElementById("IValue");
const U = document.getElementById("UValue");
const deltaI = document.getElementById("deltaIValue");
const deltaU = document.getElementById("deltaUValue");
const btn = document.getElementById("btn");
const vysledek1 = document.getElementById("vysledek1");
const vysledek2 = document.getElementById("vysledek2");

const calculDeltaP = () => {
    let calc = Number(deltaI.value) * Number(U.value) + Number(deltaU.value) * Number(I.value);
    vysledek1.innerHTML = calc;
    console.log(calc);
};

const calculDeltaR = () => {
    let calc2 = (Number(deltaI.value) * Number(U.value) + Number(deltaU.value) * Number(I.value))/(Number(I.value) * Number(I.value));
    vysledek2.innerHTML = calc2;
    console.log(calc2);
};

btn.addEventListener ("click", calculDeltaP);
btn.addEventListener ("click", calculDeltaR);


