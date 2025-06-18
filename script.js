let contact = document.getElementsByClassName('contact')[0];
contact.onclick = function(){
    document.getElementById('popup').style.visibility = 'visible';
    document.getElementById('popup').style.opacity = '1';
    document.getElementById('popup').style.transition = 'opacity 0.5s ease-in-out';
    document.querySelectorAll('img').opacity = '0.5';

    
    
}

let close = document.getElementsByClassName('close')[0];
close.onclick = function(){
    document.getElementById('popup').style.visibility = 'hidden';
    document.querySelector('body').style.backgroundColor = '';
}
