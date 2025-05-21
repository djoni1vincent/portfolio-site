const lines = [
  { id: "line1", text: "Hi, I’m Denys" },
  { id: "line2", text: "Aspiring Front-End Developer" },
  { id: "line3", text: "I create modern and clean websites." }
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  const current = lines[lineIndex];
  const element = document.getElementById(current.id);

  if (charIndex < current.text.length) {
    element.textContent += current.text.charAt(charIndex);
    charIndex++;
    setTimeout(typeLine, 38);
  } else {
    charIndex = 0;
    lineIndex++;
    if (lineIndex < lines.length) {
      setTimeout(typeLine, 300);
    } else {
      // убираем курсоры после окончания печати
      document.querySelectorAll('#hero h1, #hero p').forEach(el => {
        el.style.borderRight = "none";
      });
    }
  }
}

document.addEventListener("DOMContentLoaded", typeLine);