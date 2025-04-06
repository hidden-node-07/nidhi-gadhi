var btn = document.querySelector('button');
var img = document.querySelector('img');
var layer1 = document.querySelector('.layer1');
var topText = document.querySelector('#topText');
var song = document.querySelector('.song');

let arr = [
    {
        src:'./assets/1.jpg',
        id : '1'
    },
    {
        src:'./assets/2.jpg',
        id : '2'
    },
    {
        src:'./assets/3.jpg',
        id : '3'
    },
    {
        src:'./assets/4.jpg',
        id : '4'
    },
    {
        src:'./assets/5.jpg',
        id : '5'
    },
    {
        src:'./assets/6.jpeg',
        id : '6'
    },
    {
        src:'./assets/7.jpeg',
        id : '7'
    },
    {
        src:'./assets/8.jpeg',
        id : '8'
    },
    {
        src:'./assets/9.jpeg',
        id : '9'
    },
    {
        src:'./assets/10.jpg',
        id : '10'
    },
    {
        src:'./assets/11.jpg',
        id : '11'
    },
    {
        src:'./assets/12.jpg',
        id : '12'
    },
    {
        src:'./assets/13.jpg',
        id : '13'
    },
    {
        src:'./assets/14.jpg',
        id : '14'
    },
    {
        src:'./assets/15.jpg',
        id : '15'
    },
    {
        src:'./assets/16.jpg',
        id : '16'
    },
    {
        src:'./assets/17.jpg',
        id : '17'
    },
    {
        src:'./assets/18.jpg',
        id : '18'
    },
    {
        src:'./assets/19.jpg',
        id : '19'
    },
    {
        src:'./assets/20.jpg',
        id : '20'
    },
    {
        src:'./assets/21.jpg',
        id : '21'
    },
    {
        src:'./assets/22.jpg',
        id : '22'
    },
    {
        src:'./assets/23.jpg',
        id : '23'
    },
    {
        src:'./assets/24.jpg',
        id : '24'
    }
];

let i = 0, j = 1 , k=0;
btn.addEventListener('click', function () {
if(k==0){
        song.innerHTML = '<audio src="./assets/song.mp3" autoplay loop style="display: none;"></audio>'
    k=1;
}
    
    if (j == 0) {
        topText.innerHTML = 'Nidhi';
        j = 1; // Update j to ensure the block doesn't execute again
    }else{
        topText.innerHTML = 'Gadhii 😘';
        j=0
    }

    // Create a new image element for the book effect
    let newImg = document.createElement('img');
    newImg.src = arr[i].src;
    newImg.alt = `${arr[i].id}`;
    newImg.className = 'h-full rounded-[20px] absolute z-20 transition-transform duration-700 ease-in-out';
    newImg.style.transform = 'rotateY(90deg)';
    newImg.style.opacity = '0';

    // Append the new image to the layer
    layer1.appendChild(newImg);

    // Trigger the book effect
    setTimeout(() => {
        newImg.style.transform = 'rotateY(0deg) rotateX(10deg)';
        newImg.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)'; 
        newImg.style.opacity = '1';
        img.style.opacity = '0';
    }, 50);
    i++;
    if(i===arr.length){
        i=0;
    }
    // Fade out and gently remove the previous image
    if (layer1.children.length > 1) {
        let previousImg = layer1.lastChild.previousSibling;
        previousImg.style.transition = 'transform 0.7s ease-in-out, opacity 1.5s ease-in-out';
        previousImg.style.transform = 'rotateY(-90deg)';
        previousImg.style.opacity = '0';
        console.log(layer1.children.length);
        
        // Remove the previous image after the transition
        setTimeout(() => {
            layer1.removeChild(previousImg);
        }, 1500); // Match the opacity transition duration
    }

    img.style.zIndex = 88;
    img.style.opacity = '0.3';
});
