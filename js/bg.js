const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Fullscreen canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lines = [];
const lineCount = 20;
const maxAmplitude = canvas.height / 3;
const frequency = 0.01;
const spacing = 20;

// Create lines with random phase and amplitude
for (let i = 0; i < lineCount; i++) {
    lines.push({
    phase: Math.random() * Math.PI * 2,
    amplitude: maxAmplitude * (0.6),
    speed: 0.003 + Math.random() * 0.003,
    opacity: 0.05 + Math.random() * 0.05,
    offsetY: canvas.height / 2 + (i - lineCount / 2) * spacing,
    frequency: frequency * (0.5 + Math.random())
    });
}

let progress = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    progress += 1;

    lines.forEach((line) => {
    ctx.beginPath();
    ctx.strokeStyle = `rgba(18,170,251,${line.opacity})`; // <-- White lines
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x++) {
        const y =
        line.offsetY +
        Math.sin(x * line.frequency + line.phase + progress * line.speed) *
            line.amplitude;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }

    ctx.stroke();
    });

    requestAnimationFrame(draw);
}

draw();

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});