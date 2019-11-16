function click(){
    const click = document.querySelector('#nav-list');
    click.classList.toggle('active')
}

document.querySelector('#burger').onclick = () => click()