document.addEventListener("DOMContentLoaded", () => {
    const facts = [
      "Honey never spoils.",
      "Octopuses have three hearts.",
      "Bananas are berries, but strawberries aren't.",
      "A day on Venus is longer than a year on Venus.",
      "Humans share 60% of their DNA with bananas.",
      "Sharks are older than trees.",
      "Wombat poop is cube-shaped.",
      "There are more stars in the universe than grains of sand on all of Earth’s beaches."
    ];
  
    const thoughtElement = document.querySelector(".thought-of-the-day");
    const factBox = document.getElementById("random-fact");
  
    thoughtElement.addEventListener("mouseenter", () => {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      factBox.textContent = randomFact;
      factBox.style.display = "block";
    });
  
    thoughtElement.addEventListener("mouseleave", () => {
      factBox.style.display = "none";
    });
  });
