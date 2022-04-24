const backgroundImg = ["00.jpg", "01.jpg", "02.jpg", "03.jpg",]


const randomImg = backgroundImg[Math.floor(Math.random() * backgroundImg.length)];


document.body.style.backgroundImage =  `url(img/${randomImg})`;
