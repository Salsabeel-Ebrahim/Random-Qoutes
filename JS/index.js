var allQoutes = [
    { qoute: "“A room without books is like a body without a soul.”", author: "― Marcus Tullius Cicero" },
    { qoute: "Be yourself; everyone else is already taken.", author: "― Oscar Wilde" }, 
    { qoute: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", author: "― Bernard M. Baruch" },
    { qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", author: "― Dr. Seuss" },
    { qoute: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
    { qoute: "“Be the change that you wish to see in the world.”", author: "― Mahatma Gandhi" },
    { qoute: "“If you tell the truth, you don't have to remember anything.”", author: "― Mark Twain" },
    { qoute: "“I am so clever that sometimes I don't understand a single word of what I am saying.”", author: "― Oscar Wilde" },
    { qoute: "“Without music, life would be a mistake.”", author: "― Friedrich Nietzsche" }
];

let lastIndex = -1;

function show() {
    let num;
    
    
    do {
        num = Math.floor(Math.random() * allQoutes.length);
    } while (num === lastIndex);
    
    lastIndex = num; 

   
document.getElementById("quoteText").textContent = allQoutes[num].qoute;
document.getElementById("quoteAuthor").textContent = allQoutes[num].author;

}
