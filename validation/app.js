document.querySelector('#subject').addEventListener('blur',validation)
document.querySelector('#message').addEventListener('blur',validation)
document.querySelector('#email').addEventListener('blur',validation)
function validation(e){
    if (e.target.value == '')
    {
        e.target.style='border:1px solid red;border-top:none;border-left:none;border-right:none;';
        
    }else{
        e.target.style='border:1px solid  #296;border-top:none;border-left:none;border-right:none;'
        document.querySelector('#submit').disabled = false;
    }
}
