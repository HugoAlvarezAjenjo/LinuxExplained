document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(0);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff00';
        ctx.font = '15px monospace';

        drops.forEach((y, index) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);
            const x = index * 20;
            ctx.fillText(text, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[index] = 0;
            } else {
                drops[index] += 20;
            }
        });
    }

    setInterval(drawMatrix, 50);
});
