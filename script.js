function change(element) {
    var a = element.innerHTML;
    switch (a) {
        case "Menu":
            document.getElementById("img").src = "m1.jpg";
            document.getElementById("promo_title").innerHTML = "Here you can see menu of our delivery and in pavilion!"
            document.getElementById("promo_subtitle").innerHTML = "You won't regret choosing us"
            break;
        case "Order Online":
            document.getElementById("img").src = "ds1.png";
            document.getElementById("promo_title").innerHTML = "Our fastest delivery service!"
            document.getElementById("promo_subtitle").innerHTML = "Here you can make an order"
            break;
        case "Contacts":
            document.getElementById("img").src = "cont.jpg";
            document.getElementById("promo_title").innerHTML = "We glad to see your feedbacks and suggestions!"
            document.getElementById("promo_subtitle").innerHTML = "This is our whatsapp, instagram account and g-mail!"
            break;


    }
    $("#img").animate({ left: '+=100px', opacity: '0' }, "slow");
    $("#img").animate({ left: '-=100px', opacity: '1' }, "slow");
}
function load() {
    $("#promo").animate({ opacity: '1' }, "slow");
}
function big(element) {
    element.style.fontSize = "40px";
}
function small(element) {
    element.style.fontSize = "30px";
}
function openForm() {
    document.getElementById("registration1").style.display = "flex";
}

function closeForm() {
    document.getElementById("registration1").style.display = "none";
}
