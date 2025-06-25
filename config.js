

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";
let apiKey = localStorage.getItem("apiKey") || "malemahlolomokgadi@gmail.com";

function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
