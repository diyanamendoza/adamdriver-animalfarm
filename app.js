const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');
const horseSound = document.getElementById('horse-sound');

const dogImage = document.getElementById('dog-pic');
const catImage = document.getElementById('cat-pic');
const horseImage = document.getElementById('horse-pic');

// const animalHeard = document.getElementById('animal-heard');

// refactoring

function playSoundChangeText (sound, animalName) {
  sound.play();
  // animalHeard.textContent = animalName;
  // setTimeout(() => {
  //   animalHeard.textContent = "";
  // }, 3000);
}

// set event listeners 
dogImage.addEventListener('click', () => {
  playSoundChangeText (dogSound, "Dog");
})

catImage.addEventListener('click', () => {
  playSoundChangeText (catSound, "Cat");
})

horseImage.addEventListener('click', () => {
  playSoundChangeText (horseSound, "Horse");
})