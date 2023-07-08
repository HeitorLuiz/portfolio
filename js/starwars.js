function audio(){
    const button = document.querySelector('#vader')
    button.addEventListener('click', function(){
        const audio = document.querySelector('#audio')
        audio.currentTime = 0
        audio.play();
    })
}

function audio2(){
    const button = document.querySelector('#kenobi')
    button.addEventListener('click', function(){
        const audio = document.querySelector('#audio2')
        audio.currentTime = 0
        audio.play();
    })
}

function audio3(){
    const button = document.querySelector('#yoda')
    button.addEventListener('click', function(){
        const audio = document.querySelector('#audio3')
        audio.currentTime = 0
        audio.play();
    })
}

function audio4(){
    const button = document.querySelector('#chewbacca')
    button.addEventListener('click', function(){
        const audio = document.querySelector('#audio4')
        audio.currentTime = 0
        audio.play();
    })
}