function calcTotal() {
    let totalAmount = 0;

    if (document.getElementById("checkbox").checked) {
        const quantity = parseInt(document.getElementById("quantity").value) || 0;
        const price = parseInt(document.getElementById("price").innerText);
        totalAmount += quantity * price;
    }

    if (document.getElementById("checkbox1").checked) {
        const quantity1 = parseInt(document.getElementById("quantity1").value) || 0;
        const price1 = parseInt(document.getElementById("price1").innerText);
        totalAmount += quantity1 * price1;
    }

    if (document.getElementById("checkbox2").checked) {
        const quantity2 = parseInt(document.getElementById("quantity2").value) || 0;
        const price2 = parseInt(document.getElementById("price2").innerText);
        totalAmount += quantity2 * price2;
    }

    // VAT
    const includeVAT = document.getElementById("vat").checked;
    if (includeVAT) {
        totalAmount *= 1.1; // Add 10% VAT
    }

    document.getElementById("total").innerText = totalAmount.toFixed(2);

}
