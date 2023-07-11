document.querySelector('#password').addEventListener('blur',validation)
document.querySelector('#firstname').addEventListener('blur',validation)
document.querySelector('#lastname').addEventListener('blur',validation)
function validation(e){
    if (e.target.value == '')
    {
        e.target.style='border:1px solid red;border-top:none;border-left:none;border-right:none;';
        
    }else{
        e.target.style='border:1px solid  #296;border-top:none;border-left:none;border-right:none;'
        document.querySelector('#submit').disabled = false;
    }
}
