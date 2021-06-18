document.addEventListener("DOMContentLoaded", function (event) {
    var element = document.querySelector('.column-properties');

    function resize() {
        if (window.innerWidth < 1000) {
            element.classList.remove('row-cols-2');
            element.classList.add('row-cols-1');
        } else {
            element.classList.remove('row-cols-1');
            element.classList.add('row-cols-2');
        }
    }

    window.onresize = resize;
});

function copy() {
    var code = document.getElementById("copy-to-clipboard-input");
    code.select();
    document.execCommand("copy");
}