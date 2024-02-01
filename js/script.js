const api_url ="https://type.fit/api/quotes";

fetch(api_url)
    .then((a) => {
        return a.json();
    })
    .then((text) => {
        let it = Math.floor(Math.random() * 15);
        if (it == 15) { it = 7; }
        if (it == 8) { it = 7; }

        console.log("Quote:")
        console.log(text[it].text);
        document.getElementById("quote").innerHTML = text[it].text;

        let author = text[it].author.toString();
        console.log("~"+author.substring(0,author.length - 10));
        document.getElementById("author").innerHTML = "~"+author.substring(0,author.length - 10);
    })

slideshow;
setInterval(slideshow, 5000);
let remember = 0;

function slideshow() {
    do {
        y = Math.floor(Math.random() * 4) + 1;
    }
    while (remember == y)
    remember = y;

    let ext = ".png";
    if (y > 2) { ext = ".jpg" }
    document.getElementById("slide").src = "images/"+y+ext;
}