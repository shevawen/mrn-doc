window.onload = function () {
    var phone = document.createElement('element');

    phone.setAttribute("src","https://appetize.io/embed/j48zj9r83cetpd1mhg4g8buc4w?device=nexus5&scale=100&autoplay=true&orientation=portrait&deviceColor=black");
    phone.setAttribute("width","400px");
    phone.setAttribute("height","795px");
    phone.setAttribute("frameborder","0");
    phone.setAttribute("scrolling","no");
    phone.setAttribute("class","phone");

    document.querySelector('.content').appendChild(phone);
};