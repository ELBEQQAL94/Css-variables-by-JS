// get all elements input
const inputs = document.querySelectorAll('input');
function handlupdate() {
    // set property in result division
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(
    input => input.addEventListener('change', handlupdate)
    );
inputs.forEach(
    input => input.addEventListener('mousemove', handlupdate)
    );