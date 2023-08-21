
// this is for the first button to show and hide the company icon and names

function togglehide(){

    let btn = document.getElementById('btn');
    let para = document.getElementById('para');
    if(para.style.display !='none'){
        para.style.display='none'
    }
    else{
        para.style.display='block';
    }
   }

   // this is for the second button to show and hide the read more options
function togglehide2(){
    let btn = document.getElementById('sec8btn');
    let para = document.getElementById('hide');
    if(para.style.display !='none'){
        para.style.display='none'
    }
    else{
        para.style.display='block';
    }
   }