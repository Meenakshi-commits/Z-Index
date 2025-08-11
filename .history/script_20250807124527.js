const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

const z1 = document.getElementById("z1");
const z2 = document.getElementById("z2");
const z3 = document.getElementById("z3");

const z1Val = document.getElementById("z1-value");
const z2Val = document.getElementById("z2-value");
const z3Val = document.getElementById("z3-value");

z1.addEventListener("input",() => {
    box1.style.zIndex = z1.value;
    box1.textContent = `z-index : ${z1.value}`

    
})