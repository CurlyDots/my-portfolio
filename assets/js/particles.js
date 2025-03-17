// Words to display in the background
const words = [
  "Literature", "Art", "Poetry", "Writing", "Creativity",
  "Content", "Storytelling", "Culture", "Language", "Expression", "Innovation", "Design",
  "Communication", "Words", "Ideas", "Inspiration", "Knowledge",
  // Bengali words
  "সাহিত্য", "শিল্প", "কবিতা", "লেখা", "সৃজনশীলতা",
  "প্রকাশ", "সংস্কৃতি", "ঐতিহ্য", "চিন্তাধারা", "উদ্ভাবন",
  // Odia words
  "ସାହିତ୍ୟ", "କଳା", "କବିତା", "ଲେଖନ", "ସୃଜନଶୀଳତା",
  "ଗବେଷଣା", "ଜ୍ଞାନ", "ପରମ୍ପରା", "ଭାଷା", "ପ୍ରକାଶନ",
  // Swedish words
  "Litteratur", "Konst", "Poesi", "Skrivande", "Kreativitet",
  "Vetenskap", "Kunskap", "Uttryck", "Berättande", "Formgivning",
  // French words
  "Littérature", "Art", "Poésie", "Écriture", "Créativité",
  "Patrimoine", "Imagination", "Philosophie", "Esthétique", "Réflexion",
  // English words (additional)
  "Anthology", "Humanities", "Aesthetics", "Linguistics", "Eloquence",
  "Composition", "Discourse", "Enlightenment", "Narrative", "Interpretation",
  // Japanese words
  "文学", "芸術", "詩", "執筆", "創造性",
  "表現", "伝統", "美学", "言葉", "物語"
];

class FloatingWord {
  constructor() {
    this.element = document.createElement('div');
    this.element.className = 'floating-word';
    this.element.textContent = words[Math.floor(Math.random() * words.length)];
    
    // Random starting position
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    
    // Random movement speed and direction
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    
    // Random size
    this.size = Math.random() * 20 + 10;
    
    // Random opacity
    this.opacity = Math.random() * 0.5 + 0.2;
    
    this.updateStyle();
  }

  updateStyle() {
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.fontSize = `${this.size}px`;
    this.element.style.opacity = this.opacity;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
    if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;

    this.updateStyle();
  }
}

// Initialize floating words
const floatingWords = [];
const container = document.createElement('div');
container.className = 'floating-words-container';
document.body.appendChild(container);

// Create initial words
for (let i = 0; i < 20; i++) {
  const word = new FloatingWord();
  container.appendChild(word.element);
  floatingWords.push(word);
}

// Animation loop
function animate() {
  floatingWords.forEach(word => word.update());
  requestAnimationFrame(animate);
}

animate(); 