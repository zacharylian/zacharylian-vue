const text = document.getElementById("circle-place");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const ele = document.querySelectorAll("span")
for (var i = 1; i < ele.length; i++) {
    ele[i].style.transform="rotate("+i*16.5+"deg)";
}


window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".fadeAnimate");
    for (let i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}