let timer=document.getElementsByClassName('timer')[0];
let sec=60;
let dark_mode=true;
let dark_switch=document.getElementsByClassName('switch')[0];

const display_timer=()=>{
    
    
}
setInterval(() => {
    if(sec<1)
    {
        sec=60;
    }
    timer.innerText=sec;
    sec--;
    
}, 1000);

function dark()
{
    console.log('dark');
    if(dark_mode===true)
    {
        let body=document.getElementsByClassName('body')[0];
        body.style.backgroundColor='white';
    }
    else
    {
        let body=document.getElementsByClassName('body')[0];
        body.style.backgroundColor='black';

    }
    if(dark_mode==true)
    {
        dark_mode=false;
    }
    else
    {
        dark_mode=true;
    }
}

dark_switch.addEventListener('click',dark);