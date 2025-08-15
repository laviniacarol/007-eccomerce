const allBond = document.querySelectorAll('.all-bond img');
const bondItems = document.getElementById('bond-items');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu')



menuBtn.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});



const bondKits = {
    "first-bond": [
        { name: 'Patek Philippe', image: 'images/watch-blue.png', price: 'R$ 900,00' },
        { name: 'Monblanc', image: 'images/pen-blue.png', price: 'R$ 350,00' },
        { name: '007 Edition', image: 'images/perf-blue.png', price: 'R$ 600,00' }
    ],
    "second-bond": [
        { name: 'Patek Philippe', image: 'images/watch-grey.png', price: 'R$ 1200,00' },
        { name: 'Monblanc', image: 'images/pen-grey.png', price: 'R$ 280,00' },
        { name: '007 Edition', image: 'images/perf-grey.png', price: 'R$ 720,00' }
    ],
    "third-bond": [
        { name: 'Patek Philippe', image: 'images/watch-gold.png', price: 'R$ 1050,00' },
        { name: 'Monblanc', image: 'images/pen-golden.png', price: 'R$ 300,00' },
        { name: '007 Edition', image: 'images/perf-gold.png', price: 'R$ 680,00' }
    ],
    "four-bond": [
        { name: 'Patek Philippe', image: 'images/watch-red.png', price: 'R$ 880,00' },
        { name: 'Monblanc', image: 'images/pen-red.png', price: 'R$ 320,00' },
        { name: '007 Edition', image: 'images/perf-red.png', price: 'R$ 640,00' }
    ],
  "five-bond": [
    { name: 'Patek Philippe', image: 'images/watch-lemon.jpg', price: 'R$ 1305,00' },
    { name: 'Montblanc', image: 'images/pen-lemon.png', price: 'R$ 350,00' },
    { name: '007 Edition', image: 'images/perf-lemon.png', price: 'R$ 720,00' }
]
    

    };

let currentVisibleBond = null; 

allBond.forEach(img => {
    img.addEventListener('click', () => {
        const bondId = img.id;

        if (currentVisibleBond === bondId) {
            bondItems.innerHTML = '';
            bondItems.style.display = 'none';
            currentVisibleBond = null;
        } else {
            const kit = bondKits[bondId];
            bondItems.innerHTML = '';

            if (kit) {
                kit.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'bond-item';
                    div.innerHTML = `
                        <img src="${item.image}" alt="${item.name}">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        <button>Add to cart</button>
                    `;
                    bondItems.appendChild(div);
                });

                bondItems.style.display = 'block';
                currentVisibleBond = bondId;
            }
        }
    });

 
});
