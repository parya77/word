const wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to an indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]

const inputs = document.querySelector('.inputs');
const hint = document.querySelector('.hint');
const guesses1 = document.querySelector('.guesses1');
const wrong = document.querySelector('.wrong');
const btn = document.querySelector('.btn');

let word = "";
let maxWrong = 5;

function randomWord() {
    let ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;

    hint.innerText = `Hint: ${ranItem.hint}`;

    let html = "";
    for (let i = 1; i <= word.length; i++) {
        html += `<input type="text" class="myInput" disabled>`;
        inputs.innerHTML = html;
    }
    document.getElementsByClassName("guesses").innerHTML = maxWrong;
    console.log(word);
}

randomWord();


window.addEventListener("keydown", function (e) {
    let strArr = Array.from(word);

    strArr.forEach((even, index) => {
        if (even === e.key) {
            inputs.querySelectorAll("input")[index].value = e.key;
        }
    })

    if (!word.includes(e.key)) {
        wrong.textContent += e.key + " , ";
        maxWrong--;
        guesses1.innerHTML = maxWrong;
    }

    let counter = 0;
    for (let e of inputs.children) {
        if (e.value) { counter = counter + 1; }
    }

    if (counter === word.length) {
        alert(`Congrats!You Win.`);
        return randomWord();
    } else if (maxWrong < 1) {
        alert(`Game over!You Lose.`);
    }
})
let resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener("click" , function(){
    randomWord();
    inputs.querySelectorAll("input").forEach(e => {
        let maxWrong = 5;
        let wrong = "";
    })
});
