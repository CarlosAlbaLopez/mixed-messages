const dataForMessages = {
  characters: [
    "Reena Invert",
    "L",
    "Kakashi",
    "Edward Elric",
    "Light Yagami",
    "Levi",
    "Naruto Uzumaki",
    "Mikasa Ackerman",
    "Ryuk",
    "Itachi Uchiha",
  ],
  villains: ["Sabranibudú", "Madara", "Bu", "Freezer"],
  weapons: [
    "the light sword",
    "the death note",
    "a shuriken",
    "the sharingan",
    "the dimensional battle equipment",
  ],
  actions: [
    "slays",
    "kills",
    "hits",
    "erases",
    "fights",
    "comfronts",
    "battles",
    "destroys",
    "talks to",
    "negotiates with",
  ],
};

const createRandomMessage = (character, villain, weapon, action) => {
  return `${character} ${action} ${villain} with ${weapon}.`;
};

const p = document.querySelector("p");

p.textContent = createRandomMessage(
  dataForMessages.characters[Math.floor(Math.random() * 9)],
  dataForMessages.villains[Math.floor(Math.random() * 3)],
  dataForMessages.weapons[Math.floor(Math.random() * 4)],
  dataForMessages.actions[Math.floor(Math.random() * 9)]
);

const button = document.querySelector("button");

button.addEventListener("click", function () {
  p.textContent = createRandomMessage(
    dataForMessages.characters[
      Math.floor(Math.random() * (dataForMessages.characters.length - 1))
    ],
    dataForMessages.villains[
      Math.floor(Math.random() * (dataForMessages.villains.length - 1))
    ],
    dataForMessages.weapons[
      Math.floor(Math.random() * (dataForMessages.weapons.length - 1))
    ],
    dataForMessages.actions[
      Math.floor(Math.random() * (dataForMessages.actions.length - 1))
    ]
  );
});
