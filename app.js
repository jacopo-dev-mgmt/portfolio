document.addEventListener('DOMContentLoaded', () => {
    const lastOverlay = document.querySelector('.overlay.delay-3');
    lastOverlay.addEventListener('animationend', () => {
        const text = document.querySelector('.typewriter');
        text.style.visibility = 'visible';
        const parts = text.textContent.split(/(\s+)/);
        let html = '';
        parts.forEach(part => {
            if (/\s+/.test(part)) {
                html += part;
            } else {
                const letters = part.split('');
                html += letters.map(letter => `<span>${letter}</span>`).join('');
            }
        });
        text.innerHTML = html;
        const spans = text.querySelectorAll('span');
        let cumulativeDelay = 0;
        spans.forEach(span => {
            const delay = Math.random() * (600 - 250) + 100;
            span.style.animationDelay = `${cumulativeDelay}ms`;
            cumulativeDelay += delay;
        });
    });
});