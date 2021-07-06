{
    const welcome = () => {
        console.log("Pozdrawiam każdego kto tu zajrzał :)");
    }

    const onDisplayTableClick = () => {

        const table = document.querySelector(".table");
        table.classList.toggle("table--hidden");
        displayTableButton.innerText =
            table.classList.contains("table--hidden") ? "Pokaż ulubione piosenki" : "Ukryj ulubione piosenki";
    };

    welcome();

    const init = () => {
        const displayTableButton = document.querySelector(".displayTableButton");
        displayTableButton.addEventListener("click", onDisplayTableClick);
    };

    init();

}
