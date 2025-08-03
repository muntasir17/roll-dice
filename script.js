let scrollRevealOption = {
    distance: "15px",
    duration: 500,
};
ScrollReveal().reveal(".conta", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".conta", {
     ...scrollRevealOption,
     delay: 500,
});

let text = document.querySelector(".text")
let image = document.querySelector(".image");
let roll = document.querySelector(".roll");
let obj = [
{photUrl : "https://cdn-icons-png.flaticon.com/128/8336/8336943.png",Para : "Dice No 1"},
{photUrl : "https://cdn-icons-png.flaticon.com/128/8336/8336956.png",Para : "Dice No 2"},
{photUrl : "https://cdn-icons-png.flaticon.com/128/8336/8336955.png",Para : "Dice No 3"},
{photUrl : "https://cdn-icons-png.flaticon.com/128/8336/8336933.png",Para : "Dice No 4"},
{photUrl : "https://cdn-icons-png.flaticon.com/128/8336/8336931.png",Para : "Dice No 5"},
{photUrl : "https://cdn-icons-png.flaticon.com/128/8336/8336948.png",Para : "Dice No 6"},
];
roll.addEventListener("click",()=>{
let rando1 = Math.floor(Math.random() * obj.length) * 1;
let randomImage = obj[rando1].photUrl;
let randomtext = obj[rando1].Para;
image.src = randomImage;
text.innerHTML = randomtext;
});



