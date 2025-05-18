let btns = document.querySelectorAll('.button');
let body = document.querySelector('body');

btns.forEach(function(button) {
    button.addEventListener('click', function(e) {
        if(e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
        }
        else if(e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }else {
            body.style.backgroundColor = e.target.id;
        }
    })
});
