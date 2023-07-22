let button = document.getElementById("submit");
let text = document.getElementById("textbox");
let classified = document.getElementById("classified");

button.addEventListener("click", function(event) {
    console.log("Sending for classification...");
    fetch('http://127.0.0.1:5000/next', {
        method: "POST",
        body: JSON.stringify({
            data: text.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(function(data) {
        check = data.label;
        console.log(check);
        if(check == 0) {
            classified.innerHTML = "Real News";
        }
        else {
            classified.innerHTML = "Fake News";
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occured. Please try again.");
    });
});

text.addEventListener("input", function(event) {
    if(text.value == "")
        classified.innerHTML = "";
});