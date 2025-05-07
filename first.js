// size 12
const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];


//   size of 31
  
  const compliments = [
    "You have a brilliant mind.",
    "Your smile lights up the room.",
    "You’re an amazing listener.",
    "You inspire people around you.",
    "You bring out the best in others.",
    "You're a natural leader.",
    "Your positivity is contagious.",
    "You have a heart of gold.",
    "Your creativity knows no bounds.",
    "You are stronger than you think.",
    "You make the world a better place.",
    "You’re incredibly thoughtful.",
    "You’re full of good ideas.",
    "You have great taste in everything.",
    "You're a true friend.",
    "Your kindness is magnetic.",
    "You radiate confidence.",
    "You're one of a kind.",
    "You always know just what to say.",
    "You turn dreams into reality.",
    "You are full of wisdom.",
    "You handle challenges with grace.",
    "You are beautifully unique.",
    "You make every day brighter.",
    "You’re deeply appreciated.",
    "You're unstoppable when focused.",
    "Your presence is a gift.",
    "You're growing more impressive every day.",
    "You deserve all good things.",
    "You are pure joy.",
    "You're a masterpiece in progress."
  ];
  

//   size of 20
  const victimCardCompliments = [
    "You've been through a lot—and still look fabulous.",
    "No one survives drama like you do.",
    "You always bounce back stronger.",
    "Your story could inspire a Netflix series.",
    "You handle chaos like a pro.",
    "You suffer beautifully.",
    "Somehow, you make misery look elegant.",
    "You’ve mastered the art of emotional resilience.",
    "You're everyone's favorite underdog.",
    "You've turned every setback into a plot twist.",
    "You deserve an award for surviving nonsense.",
    "Your ability to rise is unmatched.",
    "You're a survivor with style.",
    "Drama fears you now.",
    "You've cried, conquered, and come out glowing.",
    "You walk through storms with flair.",
    "You're a masterpiece built from broken pieces.",
    "Your scars make you legendary.",
    "You’ve got ‘main character energy’ even in tragedy.",
    "You turn victimhood into victory."
  ];

    // size of 30
  const recommendations = [
    "Feed a stray dog or cat.",
    "Smile at a stranger today.",
    "Compliment someone's outfit.",
    "Plant a tree or care for a plant.",
    "Write a thank-you note to someone.",
    "Pick up litter in your neighborhood.",
    "Call a friend you haven’t talked to in a while.",
    "Donate clothes you no longer wear.",
    "Help someone cross the road.",
    "Cook a meal and share it.",
    "Let someone go ahead of you in line.",
    "Leave a kind note in a public place.",
    "Support a small business.",
    "Water a thirsty roadside plant.",
    "Share your knowledge with someone new.",
    "Offer to help your parents or siblings.",
    "Say 'thank you' with meaning today.",
    "Give a motivational pep talk to a friend.",
    "Write a journal entry about your blessings.",
    "Sponsor a meal for someone in need.",
    "Share useful resources online.",
    "Give away books you’ve already read.",
    "Offer to teach someone a skill you know.",
    "Take a tech-free walk and enjoy nature.",
    "Feed the birds with grains or water.",
    "Help a classmate with their work.",
    "Donate to an animal shelter.",
    "Mentor a junior student or peer.",
    "Clean up your local park or street corner.",
    "Genuinely ask someone how they are—and listen."
  ];
  
//   size of array is 20
const predictions = [
    "You will become a crorepati before 30.",
    "Your startup idea will change lives.",
    "You will be featured in Forbes one day.",
    "Your dream job is already on its way to you.",
    "You’ll build a brand the world will admire.",
    "You will travel to five countries next year.",
    "You’ll buy your parents their dream house.",
    "You will inspire millions with your story.",
    "One of your ideas will go viral worldwide.",
    "You’ll earn money while you sleep—literally.",
    "You’ll be known as the person who never gave up.",
    "Your bank balance is about to shock you—in a good way.",
    "The next big opportunity has your name on it.",
    "You will make money doing what you love.",
    "You’ll receive unexpected wealth soon.",
    "A luxury car with your name is waiting for you.",
    "You’ll build a digital empire from your laptop.",
    "You will be the reason someone believes in magic again.",
    "Your hustle will pay off sooner than you think.",
    "Your future is richer, happier, and brighter than ever."
  ];
  

  const form=document.getElementById('astroform');
  form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const Name=document.getElementById('name').value;
    const Surname= document.getElementById('surname').value;
    const Date= Number(document.getElementById('date').value);
    const Month= Number(document.getElementById('month').value);
    const Year= Number(document.getElementById('year').value);

    const result=document.getElementById('result');
        // result.innerText="hello everyone";
        const first_message=`Hello ${Name} ${Surname}.`;
        const second_message=`your zodizcsign is ${zodiacSigns[Month-1]}`;
        const third_message=compliments[Date-1];

        let index=Math.floor(Math.random()*20);
        const fourth_message=victimCardCompliments[index];

        index=(Name.length*Surname.length*Year)%30;
        const firth_message=recommendations[index];


        index=(Date*Month*Year)%20;
        const sixth_message=predictions[index];


        result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} Our Reccomendation for you: ${firth_message} Your Future Prediction is: ${sixth_message}`;



        
  })


  
  
  
  
  



  
  
  
  