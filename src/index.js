import { sss } from "./a.js"
import "./static/a.css"

window.onload = function() {
    test();
    sss();
}

function test() {
    console.log("123")
    document.querySelector("#app").innerHTML = "888"
    document.querySelector("#app").style.color = "red"
}