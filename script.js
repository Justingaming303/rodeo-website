let interval = 0
setInterval(() => {
   let images = ['./images/rodeo-outdoor-1.jpg','./images/rodeo-outdoor-2.jpg', './images/sewing-1.jpg','./images/sewing-2.jpg','./images/sewing-3.jpg','./images/sewing-4.jpg','./images/sewing-5.jpg',]
    let image = document.getElementById('hero-image')
    if (interval == 6) {
        interval = 0
    } else {
        interval++
    }
    
    console.log(images[interval]);
    image.src = images[interval]

}, 3000);



    let btn = document.getElementsByClassName('menu-btn')[0]

    btn.addEventListener('click', () => {
        let menu = document.getElementsByClassName('menu-container')[0]
        btn.style.display = 'None'
        menu.style.display = 'Block'
        console.log('w');
    })

