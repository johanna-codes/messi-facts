const messiFacts = [
  "Lionel Messi was born on June 24, 1987, in Rosario, Argentina.",
  "Messi made his professional debut for FC Barcelona at the age of 17.",
  "He has won multiple Ballon d'Or awards, more than any other player in history.",
  "Messi scored 91 goals in a calendar year (2012), breaking Gerd Müller’s long-standing record.",
  "In 2022, Messi led Argentina to victory in the FIFA World Cup.",
  "Messi has played for Barcelona, PSG, and Inter Miami.",
  "He holds the record for most goals in La Liga history.",
  "Messi is the only player to score in 17 consecutive Champions League seasons.",
  "He began hormone growth treatment at age 11 due to a growth hormone deficiency.",
  "Messi has over 800 career goals for club and country.",
  "He is known for his humble personality and philanthropic work through the Leo Messi Foundation.",
  "Messi is often compared to Diego Maradona and Cristiano Ronaldo as one of the greatest footballers ever."
];

function getMessiFact() {
  const spinner = document.getElementById('spinner');
  const factPara = document.getElementById('messiFact');

  spinner.style.display = 'block';
  factPara.style.opacity = '0.5';

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * messiFacts.length);
    factPara.textContent = messiFacts[randomIndex];
    spinner.style.display = 'none';
    factPara.style.opacity = '1';
  }, 500);
}
