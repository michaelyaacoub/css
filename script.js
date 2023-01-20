// load html first then perform events
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btn-post').addEventListener('click', function () {
        if ('click') {
            document.querySelector('#btn-post').innerHTML = "This feature is coming soon! 🙃";
            document.querySelector('#btn-post').style.color = 'blue';
        }
    });
});

