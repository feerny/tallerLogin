const icon = document.getElementById("icon-menu")
const menu = document.getElementById("menu")


icon.addEventListener('click', (e)=>{
    menu.classList.toggle('active');
    

    const rutaActual = e.target.getAttribute('src');
    
    if (rutaActual == 'images/menu.png') {
        icon.classList.toggle('withe')
    }else{
        e.target.setAttribute('src','images/menu.png');
    }
})