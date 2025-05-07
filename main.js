// 1 [h1]
let mainText = document.getElementsByClassName("mainText")[0]
mainText.style.color = "orange"
mainText.style.fontWeight = "600"
mainText.style.backgroundColor = "black"

// 2 [paragraph]
let par = document.getElementById("par")
par.style.color = "green"
par.style.backgroundColor = "lightblue"


// 3 [img]
let img = document.getElementsByTagName("img")[0];

img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg";



// [4] list
let ul = document.querySelector("#list");

for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.textContent = "hello";
    ul.appendChild(li);
}


// [5] table
let table = document.createElement("table");
table.className = "table";

for (let row = 0; row < 5; row++) {
    let tr = document.createElement("tr");

    for (let col = 0; col < 3; col++) {
        let cell = document.createElement("td");

        tr.appendChild(cell);
    }

    table.appendChild(tr);
}

document.body.appendChild(table);