function dropMenu(){
  const btnMenu = document.getElementById('btn-drop-menu')
  const menu = document.getElementById('menu')

  btnMenu.addEventListener('click', e =>{
    menu.classList.toggle('animations-menu')
    menu.classList.toggle('menu-animations-outside')
  })
}