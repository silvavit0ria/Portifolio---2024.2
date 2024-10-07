const NavMobile = document.getElementById('nav-bar-mobile');
const botaoNavMobile= document.getElementById('botao-nav-bar');

botaoNavMobile.addEventListener('click',function(){
    if(NavMobile.style.display==='block'){
        NavMobile.style.display='none'
    }else{
        NavMobile.style.display='block'
    }
});
