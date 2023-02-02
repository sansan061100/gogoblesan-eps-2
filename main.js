let option = document.getElementById("selection");
let input = document.getElementById("inputValue");

// reset nilai input jika option diubah
option.addEventListener("change", function () {
    input.value = "";
});
function update() {
    let optionValue = option.value;
    let object1 = document.getElementById("targetObject1");
    let object2 = document.getElementById("targetObject2");
    let valueInput = input.value

    if (optionValue != null && optionValue != "") {
        if (optionValue == "background") {
            object1.style.backgroundColor = valueInput;
        } else if (optionValue == "font-color") {
            object2.style.color = valueInput;
        } else if (optionValue == "font-size") {
            object2.style.fontSize = valueInput + "px";
        } else if (optionValue == "font-family") {
            object2.style.fontFamily = valueInput;
        } else if (optionValue == "width") {
            object1.style.width = valueInput + "px";
        } else {
            object1.style.height = valueInput + "px";
        }
    }

    input.value = "";
}