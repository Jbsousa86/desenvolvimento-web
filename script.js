const botao = document.getElementById('button');

botao.addEventListener("click",() =>{
    botao.style.backgroundColor = "lightgreen";
    setTimeout(() =>{
        botao.style.backgroundColor = "";
    }, 300);
})