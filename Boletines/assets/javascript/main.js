let Links = document.querySelectorAll(".close");



Links.forEach(function (link) {

    link.addEventListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');
        content.classList.remove('animate__backInDown');
        content.classList.remove('animate__animated');
        content.classList.add('animate__fadeOutUp');
        content.classList.add('animate__animated');
        setTimeout(function () {
            location.href = "/index.html";
        }, 600)
        return false;
    });

});