const funfactBox = document.querySelector('.funfact-box');
const funfactText = document.querySelector('#funfact-text');
const newFunfactBtn = document.querySelector('#new-funfact-btn');

newFunfactBtn.addEventListener('click', getNewFunfact);

function getNewFunfact() {
  // Fetch a random fun fact from an API or a local array
  const funfact = getRandomFunfact();
  funfactText.textContent = funfact;
}

function getRandomFunfact() {
  // Replace this with your own API or local array
  const funfacts = [
    'The shortest war in history was between Britain and Zanzibar on August 27, 1896, and lasted only 38 minutes.',
    'The longest word in the English language, according to the Oxford English Dictionary, is pneumonoultramicroscopicsilicovolcanoconiosis, a lung disease caused by inhaling very fine particles of silica.',
    'Butterflies taste with their feet.',
  ];
  return funfacts[Math.floor(Math.random() * funfacts.length)];
}
