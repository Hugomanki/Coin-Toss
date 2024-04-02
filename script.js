const coin = document.getElementById('coin');
const flipBtn = document.getElementById('flipBtn');
const resultText = document.getElementById('result');

flipBtn.addEventListener('click', flipCoin);

function flipCoin() {
    coin.classList.add('flipping');
    setTimeout(() => {
        coin.classList.remove('flipping');
        const randomResult = Math.random() < 0.5 ? 'heads' : 'tails';
        coin.style.transform = `rotateY(${randomResult === 'tails' ? 180 : 0}deg)`;
        resultText.textContent = `Yaay, it's ${randomResult.charAt(0).toUpperCase() + randomResult.slice(1)}!`;
    }, 3000);
}