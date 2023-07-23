// document.querySelector('#subject').addEventListener('blur',validation)
// document.querySelector('#message').addEventListener('blur',validation)
// document.querySelector('#email').addEventListener('blur',validation)
// function validation(e){
//     if (e.target.value == '')
//     {
//         e.target.style='border:1px solid red;border-top:none;border-left:none;border-right:none;';
        
//     }else{
//         e.target.style='border:1px solid  #296;border-top:none;border-left:none;border-right:none;'
//         document.querySelector('#submit').disabled = false;
//     }
// }
const container=document.querySelector('.container'),
pwShowHide=document.querySelectorAll('.showHidePw'),
pwFields=document.querySelectorAll('.password'),

signUp=document.querySelector('.signup-link'),
login=document.querySelector('.login-link'),
pwField=document.querySelectorAll('.password');
// /...................................................................../
pwShowHide.forEach(eyeIcon=>{
    eyeIcon.addEventListener("click",()=>{
        pwFields.forEach(pwField =>{
            if(pwField.type === "password"){
                pwField.type="text";
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye-slash","uil-eye");
                })
            }else{
                pwField.type="password"; 
                pwShowHide.forEach(icon =>{
                    icon.classList.replace("uil-eye","uil-eye-slash");
                })
            }
        })
    })
})
signUp.addEventListener("click",( ) =>{
   container.classList.add("active");
});
login.addEventListener("click",( ) =>{
    container.classList.remove("active");
 });