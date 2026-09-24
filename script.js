// Menu na mobilu
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Filtrování receptů
const chips = document.querySelectorAll('.chip');
const recipes = document.querySelectorAll('.recipe');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    const filter = chip.dataset.filter;
    recipes.forEach((r) => {
      r.hidden = filter !== 'all' && r.dataset.cat !== filter;
    });
  });
});

// Formulář pro odběr novinek
const form = document.getElementById('news-form');
const emailInput = document.getElementById('email');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (!valid) {
    msg.textContent = 'Zadej prosím platný e-mail, například jmeno@email.cz.';
    msg.className = 'err';
    emailInput.focus();
    return;
  }

  // Tady později napojíš skutečné odeslání (např. Mailchimp, vlastní server).
  msg.textContent = 'Hotovo, děkujeme! První recept ti přijde do e-mailu.';
  msg.className = 'ok';
  form.reset();
});

// Rok v patičce
document.getElementById('year').textContent = new Date().getFullYear();
