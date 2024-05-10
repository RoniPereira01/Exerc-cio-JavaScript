    function mudarForma() {
        const paragrafo1 = document.getElementById("p1")
        paragrafo1.innerText = "Aulas de Programação para web"

        const paragrafo2 = document.getElementById("p2")
        paragrafo2.style.fontSize = "40"

        const paragrafo3 = document.getElementById("p3")
        paragrafo3.style.color = "blue"

        const paragrafo4 = document.getElementById("p4")
        paragrafo4.style.textAlign = "center"

        const paragrafo5 = document.getElementById("p5")
        paragrafo5.style.color = "red"
        paragrafo5.style.fontSize = "10px"

        const paragrafo6 = document.getElementById("p6")
        paragrafo6.innerText = "JavaScript nao e vaja"
        paragrafo6.style.color = "red"
        paragrafo6.style.fontWeight = "bold";
        

        const paragrafos = document.querySelectorAll(".elementos p"); 
      
        for (let i = 0; i < paragrafos.length; i++) { 
            if ((i + 1) % 2 === 0) { 
                paragrafos[i].style.backgroundColor = "#FFFF00"; 
            }
        }
    }

    