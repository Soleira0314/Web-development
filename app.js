const reviews = [
  {
    name: 'Tugtai Bambar',
    job: 'web developer',
    img: 'person-1.jpeg',
    text: 'Shutislag bambar Shutisiin tugiig baridag',
  },
  {
    name: 'Kimonotoi Bambar',
    job: 'web designer',
    img: 'person-2.jpeg',
    text: 'Kimono umsdug bambar boduul ypon l yum bga bizdeee',
  },
  {
    name: 'Tolgoitoi Bambar',
    job: 'intern',
    img: 'person-3.jpeg',
    text: 'Yrnol gants tolgoi huvilbar n. Interneesee jinhlegdeed biytei boloh baihooo',
  },
  {
    name: 'Jinhenevter Bambar',
    job: 'the boss',
    img: 'person-4.jpeg',
    text: 'jinkenevter bambar Dotor n yag hen baisniig bi odoo sanakuenlda Barilgiin Bilegt l bizde boduul',
  },
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

let current = 0;

function showPerson() {
  const review = reviews[current];
  img.src = review.img;
  author.textContent = review.name;
  job.textContent = review.job;
  info.textContent = review.text;
}

document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % reviews.length;
  showPerson();
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + reviews.length) % reviews.length;
  showPerson();
});

document.getElementById('random').addEventListener('click', () => {
  current = Math.floor(Math.random() * reviews.length);
  showPerson();
});

showPerson();