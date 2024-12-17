const btn = document.getElementById("btn");
const table = document.getElementById("table");
let grandTotal = 0;
function submit() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const qty = document.getElementById("qty").value;

    let tr1 = document.createElement("tr");
    const total = calculate(price, qty);
    grandTotal += total;
    tr1.innerHTML = `
        <td>${name}</td>
        <td>${price}</td>
        <td>${qty}</td>
        <td>${total}</td>
    `;


    table.appendChild(tr1);
    document.getElementById("grandTotal").innerHTML = `Grand Total : ${grandTotal}`;
}


btn.addEventListener("click", submit);



// calculate total
function calculate(price, qty) {
    return price * qty
}
