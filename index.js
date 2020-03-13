function cal(){
    var billAmount = document.getElementById("bill").value;
    var service = document.getElementById("service").value;
    var numofpeople = document.getElementById("people").value;

    document.getElementById("tvalue").innerHTML = (billAmount*service) / numofpeople
}
