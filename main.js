let buttons = document.querySelectorAll('button');
let input = document.querySelector('#input');
let resolutions = [
  { width: 375, height: 667 },
  { width: 412, height: 736 },
  { width: 1024, height: 768 },
  { width: 1920, height: 1080 },
];

buttons.forEach((button, index) => {
  button.onclick = () => {
    const { width, height } = resolutions[index];
    window.open(input.value, '_blank', `width=${width},height=${height}`);
  };
});