function fillCellRandomly(cell, n) {
    const randomIndex = Math.floor(Math.random() * 3);
   switch (randomIndex) {
        case 0:
            cell.innerHTML = `<h3>Заголовок ${n}</h3>`;
            break;
        case 1:
            cell.innerHTML = `<img class="image" src="img.png" alt="Image ${n}">`;
            break;
        case 2:
            cell.innerHTML = `Текст ${n}`;
            break;
        default:
            break;
    }
    function fillTable() {
 
        const table = document.querySelector('table');
        const rows = table.rows;
    
        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < rows[i].cells.length; j++) {
                const cell = rows[i].cells[j];
                const n = i * rows[i].cells.length + j + 1; 
                fillCellRandomly(cell, n); 
            }
        }
    }
    document.addEventListener('DOMContentLoaded', fillTable);
}
function refill(){
const cells = document.querySelectorAll('td');
cells.forEach((cell, index) => {
    fillCellRandomly(cell, index + 1);
});}
function changeStyles() {
    const cells = document.querySelectorAll('td, th');
    cells.forEach((cell, index) => {
        if (index % 2 === 1) {  
            cell.classList.add('italic');
            const h3s = cell.getElementsByTagName('h3');
            for (let h3 of h3s) {
                h3.classList.remove('h6');
                h3.classList.add('h6');
            }
            const img = cell.querySelector('img');
            if (img) {
                img.style.height = img.clientHeight / 2 + 'px';  
            }
        }
    });
}
