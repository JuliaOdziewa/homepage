console.log("Pozdrawiam każdego kto tu zajrzał :)");

let displayTableButton = document.querySelector(".displayTableButton");

let table = document.querySelector(".table");

displayTableButton.addEventListener("click",
    () => {
        table.classList.toggle("table--hidden");
        displayTableButton.innerText =
            table.classList.contains("table--hidden") ? "Pokaż ulubione piosenki" : "Ukryj ulubione piosenki";
    });

