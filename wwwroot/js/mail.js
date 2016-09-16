function ContactUs() {
    location.replace('mailto:thejourney@microsoft.com?subject=[Journey to the Web Summit - Registration]&body=Hey,%0D%0A%0D%0AI would like my my startup to join the challenge.%0D%0AHere is our info:%0D%0A');
}

function Help() {
    location.replace('mailto:thejourney@microsoft.com?subject=[Journey to the Web Summit - Help]&body=Hey,%0D%0A%0D%0AMy name is <name> from <company_name>. I have a question for you guys:');
}

var links = document.getElementsByClassName('contactus');
let linksArr = Array.from(links);
linksArr.forEach(function(element) {
    element.addEventListener("click", ContactUs);
});

var linksh = document.getElementsByClassName('help');
let linkshArr = Array.from(linksh);
linkshArr.forEach(function(element) {
    element.addEventListener("click", Help);
});