window.onload = function () {
    var phone = document.createElement('iframe');

    phone.setAttribute("src","https://appetize.io/embed/j48zj9r83cetpd1mhg4g8buc4w?device=nexus5&scale=75&autoplay=true&orientation=portrait&deviceColor=black");
    phone.setAttribute("width","300px");
    phone.setAttribute("height","597px");
    phone.setAttribute("frameborder","0");
    phone.setAttribute("scrolling","no");
    phone.setAttribute("class","phone");

    document.querySelector('.content').appendChild(phone);
};