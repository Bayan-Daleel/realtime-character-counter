const totalElm=document.getElementById('total');
const remainlElm=document.getElementById('remaining');
const textearalElm=document.getElementById('texteara');

updatCounter();
textearalElm.addEventListener('keyup',()=>{
     updatCounter();
    
});



function updatCounter(){
    totalElm.innerText= textearalElm.value.length;
    remainlElm.innerText= textearalElm.getAttribute("maxlength") -textearalElm.value.length;
}