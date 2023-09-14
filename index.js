//https://www.omdbapi.com/?apikey=967ecf24&t=lagan

const root = document.getElementById("root");
const mName = document.getElementById("name-input");
const sBtn = document.getElementById("sBtn");

let typingTimer;
const doneTypingInterval = 1000;

async function getMovie(name) {
    root.innerHTML = `<i class="fa fa-spinner fa-spin"></i>`;

    const url = `https://www.omdbapi.com/?&apikey=967ecf24&s=${name}&type=movie`;
    const data = await fetch(url);
    const dataInfo = await data.json();

    if (dataInfo.Search) {
        root.innerHTML = "";

        dataInfo.Search.forEach(ele => {
            const card = document.createElement("div");
            card.innerHTML = `<div class="mCard">
                <div class="imgContainer">
                    <img src="${ele.Poster}" alt="${ele.Title}">
                </div>
                <div class="mInfo">
                    <h5>${ele.Title}</h5>
                    <p>${ele.Year}</p>
                </div>
            </div>`;
            getDetails(card,ele.imdbID);
            root.appendChild(card);
        });
    } else {
        if (dataInfo.Error == "Too many results.") {
            root.innerHTML = `<h1>${dataInfo.Error} <br> Please refine your Search</h1>`;
        } else {
            root.innerHTML = `<h1>${dataInfo.Error}</h1>`;
        }
        console.log(dataInfo.Error);
    }
}

function getDetails(card,id){
    card.addEventListener("click",()=>{
        let baseUrl = (window.location.href).split("/");
        baseUrl[4] = `details.html?id=${id}`;
        console.log(baseUrl[4]);
        newUrl = baseUrl.join("/");
        console.log(newUrl);
        window.location.href = newUrl;
    })
}

function doneTyping() {
    if (mName.value == "") {
        alert("Please Enter a movie name");
    } else {
        getMovie(mName.value);
    }
}

sBtn.addEventListener("click", () => {
    if (mName.value == "") {
        alert("Please Enter a movie name");
    } else {
        getMovie(mName.value);
    }
});

mName.addEventListener("input", (e) => {
    clearTimeout(typingTimer);
    if (mName.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});



