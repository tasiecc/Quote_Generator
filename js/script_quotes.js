
//Object Array to hold quotes, sources, citaitons and years
var quotes = [
{ quote: "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.", source: "Terry Pratchett", citation: "Diggers", year: "1990" },
{ quote: "It's still magic even if you know how it's done.", source: "Terry Pratchett", citation: "A Hat Full of Sky", year: "2004" },
{ quote: "Five exclamation marks, the sure sign of an insane mind.", source: "Terry Pratchett", citation: "Reaper Man", year: "1991" },
{ quote: "They say a little knowledge is a dangerous thing, but it's not one half so bad as a lot of ignorance.", source: "Terry Pratchett", citation: "The Last Continent", year: "1998" },
{ quote: "The IQ of a mob is the IQ of its most stupid member divided by the number of mobsters.", source: "Terry Pratchett", citation: "Maskerade", year: "1995" },
{ quote: "There are no wise few. Every aristocracy that has ever existed has behaved, in all essential points, exactly like a small mob.", source: "G.K. Chesterton", citation: "Heretics", year: "1905" },
{ quote: "There are two ways to get enough: one is to continue to accumulate more and more. The other is to desire less.", source: "G.K. Chesterton", citation: "Orthodoxy", year: "1908" },
{ quote: "Art consists of limitation. The most beautiful part of every picture is the frame.", source: "G.K. Chesterton", citation: "Orthodoxy", year: "1908" },
{ quote: "There is a great deal of difference between an eager man who wants to read a book and a tired man who wants a book to read.", source: "G.K. Chesterton", citation: "Charles Dickens", year: "1906" },
{ quote: "A good novel tells us the truth about its hero; but a bad novel tells us the truth about its author.", source: "G.K. Chesterton", citation: "Heretics", year: "1905" },
{ quote: "The way to love anything is to realize that it may be lost.", source: "G.K. Chesterton", citation: "The Father Brown Stories", year: "1911" },
{ quote: "To love means loving the unlovable. To forgive means pardoning the unpardonable. Faith means believing the unbelievable. Hope means hoping when everything seems hopeless.", source: "G.K. Chesterton", citation: "Tremendous Trifles", year: "1909" },
{ quote: "The true soldier fights not because he hates what is in front of him, but because he loves what is behind him.", source: "G.K. Chesterton", citation: "The New Jerusalem", year: "1920" },
{ quote: "Courage is almost a contradiction in terms. It means a strong desire to live taking the form of readiness to die.", source: "G.K. Chesterton", citation: "Orthodoxy", year: "1908" },
{ quote: "The Christian ideal has not been tried and found wanting. It has been found difficult and left untried.", source: "G.K. Chesterton", citation: "What's Wrong with the World", year: "1910" },
{ quote: "Without education, we are in a horrible and deadly danger of taking educated people seriously.", source: "G.K. Chesterton", citation: "The Illustrated London News", year: "1925" },
{ quote: "Angels can fly because they take themselves lightly.", source: "G.K. Chesterton", citation: "Orthodoxy", year: "1908" },
{ quote: "Art, like morality, consists of drawing the line somewhere.", source: "G.K. Chesterton", citation: "All Things Considered", year: "1908" },
{ quote: "The Bible tells us to love our neighbors, and also to love our enemies; probably because generally they are the same people.", source: "G.K. Chesterton", citation: "Illustrated London News", year: "1931" },
{ quote: "The whole modern world has divided itself into Conservatives and Progressives. The business of Progressives is to go on making mistakes. The business of Conservatives is to prevent mistakes from being corrected.", source: "G.K. Chesterton", citation: "Illustrated London News", year: "1924" },
{ quote: "The word 'good' has many meanings. For example, if a man were to shoot his grandmother at a range of five hundred yards, I should call him a good shot, but not necessarily a good man.", source: "G.K. Chesterton", citation: "The Defendant", year: "1901" },
{ quote: "experience is simply the name we give to our mistakes.", source: "Oscar Wilde", citation: " Lady Windermere's Fan", year: "1892" },
{ quote: "Be yourself; everyone else is already taken.", source: "Oscar Wilde", citation: "The Soul of Man under Socialism", year: "1895" },
{ quote: "Always forgive your enemies; nothing annoys them so much.", source: "Oscar Wilde", citation: "A Woman of No Importance", year: "1893" },
{ quote: "To live is the rarest thing in the world. Most people exist, that is all.", source: "Oscar Wilde", citation: "The Soul of Man under Socialism", year: "1891" },
{ quote: "Life is far too important a thing ever to talk seriously about.", source: "Oscar Wilde", citation: "Lady Windermere's Fan", year: "1892" },
{ quote: "Anyone who lives within their means suffers from a lack of imagination.", source: "Oscar Wilde", citation: "The Picture of Dorian Gray", year: "1890" },
{ quote: "A thing is not necessarily true because a man dies for it.", source: "Oscar Wilde", citation: "The Portrait of Mr. W. H.", year: "1889" },
{ quote: "Arguments are to be avoided; they are always vulgar and often convincing.", source: "Oscar Wilde", citation: "The Picture of Dorian Gray", year: "1890" },
{ quote: "Experience is one thing you can't get for nothing.", source: "Oscar Wilde", citation: "The Importance of Being Earnest", year: "1895" },
{ quote: "Every saint has a past, and every sinner has a future.", source: "Oscar Wilde", citation: "A Woman of No Importance", year: "1893" },
{ quote: "Everything popular is wrong.", source: "Oscar Wilde", citation: "The Importance of Being Earnest", year: "1895" },
{ quote: "Fashion is a form of ugliness so intolerable that we have to alter it every six months.", source: "Oscar Wilde", citation: "The Philosophy of Dress", year: "1885" },
{ quote: "I can resist everything except temptation.", source: "Oscar Wilde", citation: "Lady Windermere's Fan", year: "1892" },
{ quote: "I choose my friends for their good looks, my acquaintances for their good characters, and my enemies for their intellects.", source: "Oscar Wilde", citation: "Picture of Dorian Gray", year: "1890" },
{ quote: "I have the simplest tastes. I am always satisfied with the best.", source: "Oscar Wilde", citation: "The Picture of Dorian Gray", year: "1890" },
{ quote: "I never travel without my diary. One should always have something sensational to read in the train.", source: "Oscar Wilde", citation: "The Importance of Being Earnest", year: "1895" },
{ quote: "If one cannot enjoy reading a book over and over again, there is no use in reading it at all.", source: "Oscar Wilde", citation: "The Picture of Dorian Gray", year: "1890" },
{ quote: "If you are not too long, I will wait here for you all my life.", source: "Oscar Wilde", citation: "The Importance of Being Earnest", year: "1895" },
{ quote: "It is absurd to divide people into good and bad. People are either charming or tedious.", source: "Oscar Wilde", citation: "Lady Windermere's Fan", year: "1892" },
{ quote: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.", source: "Oscar Wilde", citation: "The Ballad of Reading Gaol", year: "1898" },
{ quote: "Life is too important to be taken seriously.", source: "Oscar Wilde", citation: "A Woman of No Importance", year: "1893" },
{ quote: "Man is least himself when he talks in his own person. Give him a mask, and he will tell you the truth.", source: "Oscar Wilde", citation: "The Critic as Artist", year: "1891" },
{ quote: "Memory is the diary that we all carry about with us.", source: "Oscar Wilde", citation: "The Importance of Being Earnest", year: "1895" },
{ quote: "Moderation is a fatal thing. Nothing succeeds like excess.", source: "Oscar Wilde", citation: "A Woman of No Importance", year: "1893" },
{ quote: "Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.", source: "Oscar Wilde", citation: "De Profundis", year: "1905" },
{ quote: "No great artist ever sees things as they really are. If he did, he would cease to be an artist.", source: "Oscar Wilde", citation: "The Decay of Lying", year: "1889" },
{ quote: "The books that the world calls immoral are books that show the world its own shame.", source: "Oscar Wilde", citation: "The Picture of Dorian Gray", year: "1890" },
{ quote: "There is only one thing in life worse than being talked about, and that is not being talked about.", source: "Oscar Wilde", citation: "The Picture of Dorian Gray", year: "1890" },
{ quote: "To get back my youth I would do anything in the world, except take exercise, get up early, or be respectable.", source: "Oscar Wilde", citation: "The Picture of Dorian Gray", year: "1890" },
{ quote: "We are all in the gutter, but some of us are looking at the stars.", source: "Oscar Wilde", citation: "Lady Windermere's Fan", year: "1892" },
{ quote: "When I was young I thought that money was the most important thing in life; now that I am old I know that it is.", source: "Oscar Wilde", citation: "A Woman of No Importance", year: "1893" },
{ quote: "When the gods wish to punish us, they answer our prayers.", source: "Oscar Wilde", citation: "An Ideal Husband", year: "1895" },
{ quote: "Women are made to be loved, not understood.", source: "Oscar Wilde", citation: "The Sphinx without a Secret", year: "1887" },
{ quote: "Yes: I am a dreamer. For a dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.", source: "Oscar Wilde", citation: "The Critic as Artist", year: "1891" },
{ quote: "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.", source: "Oscar Wilde", citation: "The Picture of Dorian Gray", year: "1890" },
{ quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", source: "Martin Luther King, Jr.", citation: "Letter From a Birmingham Jail", year: "1963" },
{ quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "Our lives begin to end the day we become silent about things that matter.", source: "Martin Luther King, Jr.", citation: "I Have a Dream", year: "1963" },
{ quote: "Love is the only force capable of transforming an enemy into a friend.", source: "Martin Luther King, Jr.", citation: "A Testament of Hope", year: "1958" },
{ quote: "Faith is taking the first step even when you don't see the whole staircase.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "The time is always right to do what is right.", source: "Martin Luther King, Jr.", citation: "The Trumpet of Conscience", year: "1967" },
{ quote: "Injustice anywhere is a threat to justice everywhere.", source: "Martin Luther King, Jr.", citation: "Letter From a Birmingham Jail", year: "1963" },
{ quote: "We must accept finite disappointment, but never lose infinite hope.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "We must learn to live together as brothers or perish together as fools.", source: "Martin Luther King, Jr.", citation: "A Christmas Sermon on Peace", year: "1967" },
{ quote: "I have decided to stick with love. Hate is too great a burden to bear.", source: "Martin Luther King, Jr.", citation: "A Knock at Midnight", year: "1963" },
{ quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.", source: "Martin Luther King, Jr.", citation: "Letter From a Birmingham Jail", year: "1963" },
{ quote: "Life's most persistent and urgent question is, 'What are you doing for others?'", source: "Martin Luther King, Jr.", citation: "Remaining Awake Through A Revolution", year: "1968" },
{ quote: "Science investigates; religion interprets. Science gives man knowledge, which is power; religion gives man wisdom, which is control. Science deals mainly with facts; religion deals mainly with values. The two are not rivals.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "Love is the only force capable of transforming an enemy into friend.", source: "Martin Luther King, Jr.", citation: "A Testament of Hope", year: "1958" },
{ quote: "We must develop and maintain the capacity to forgive. He who is devoid of the power to forgive is devoid of the power to love.", source: "Martin Luther King, Jr.", citation: "Loving Your Enemies", year: "1957" },
{ quote: "Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "I believe that unarmed truth and unconditional love will have the final word in reality.", source: "Martin Luther King, Jr.", citation: "Acceptance speech, Nobel Peace Prize", year: "1964" },
{ quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.", source: "Martin Luther King, Jr.", citation: "I Have a Dream", year: "1963" },
{ quote: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.", source: "Martin Luther King, Jr.", citation: "The Maroon Tiger", year: "1947" },
{ quote: "Change does not roll in on the wheels of inevitability, but comes through continuous struggle.", source: "Martin Luther King, Jr.", citation: "Letter From a Birmingham Jail", year: "1963" },
{ quote: "We are prone to judge success by the index of our salaries or the size of our automobiles rather than by the quality of our service and relationship to mankind.", source: "Martin Luther King, Jr.", citation: "The Measure of A Man", year: "1959" },
{ quote: "Every man must decide whether he will walk in the light of creative altruism or in the darkness of destructive selfishness.", source: "Martin Luther King, Jr.", citation: "The Trumpet of Conscience", year: "1967" },
{ quote: "History will have to record that the greatest tragedy of this period of social transition was not the strident clamor of the bad people, but the appalling silence of the good people.", source: "Martin Luther King, Jr.", citation: "Letter From a Birmingham Jail", year: "1963" },
{ quote: "Our lives begin to end the day we become silent about things that matter.", source: "Martin Luther King, Jr.", citation: "I Have A Dream", year: "1963" },
{ quote: "All labor that uplifts humanity has dignity and importance and should be undertaken with painstaking excellence.", source: "Martin Luther King, Jr.", citation: "All Labor Has Dignity", year: "1968" },
{ quote: "A right delayed is a right denied.", source: "Martin Luther King, Jr.", citation: "Letter from a Birmingham Jail", year: "1963" },
{ quote: "The moral arc of the universe bends at the elbow of justice.", source: "Martin Luther King, Jr.", citation: "Where Do We Go From Here: Chaos or Community?", year: "1967" },
{ quote: "Love is the only force capable of transforming an enemy into a friend.", source: "Martin Luther King, Jr.", citation: "A Testament of Hope", year: "1958" },
{ quote: "There comes a time when people get tired of being pushed out of the glittering sunlight of life's July and left standing amid the piercing chill of an alpine November.", source: "Martin Luther King, Jr.", citation: "Letter from a Birmingham Jail", year: "1963" },
{ quote: "Nonviolence is a powerful and just weapon. It is a weapon unique in history, which cuts without wounding and ennobles the man who wields it.", source: "Martin Luther King, Jr.", citation: "The Quest for Peace and Justice", year: "1964" },
{ quote: "Discrimination is a hellhound that gnaws at Negroes in every waking moment of their lives to remind them that the lie of their inferiority is accepted as truth in the society dominating them.", source: "Martin Luther King, Jr.", citation: "Why We Can't Wait", year: "1964" },
{ quote: "We must come to see that the end we seek is a society at peace with itself, a society that can live with its conscience.", source: "Martin Luther King, Jr.", citation: "Where Do We Go from Here: Chaos or Community?", year: "1967" },
{ quote: "I have the audacity to believe that peoples everywhere can have three meals a day for their bodies, education and culture for their minds, and dignity, equality, and freedom for their spirits.", source: "Martin Luther King, Jr.", citation: "The Quest for Peace and Justice", year: "1964" },
{ quote: "The hope of a secure and livable world lies with disciplined nonconformists who are dedicated to justice, peace and brotherhood.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "We are now faced with the fact that tomorrow is today. We are confronted with the fierce urgency of now. In this unfolding conundrum of life and history there is such a thing as being too late.", source: "Martin Luther King, Jr.", citation: "Beyond Vietnam", year: "1967" },
{ quote: "Power at its best is love implementing the demands of justice. Justice at its best is love correcting everything that stands against love.", source: "Martin Luther King, Jr.", citation: "Where Do We Go From Here: Chaos or Community?", year: "1967" },
{ quote: "I refuse to accept the view that mankind is so tragically bound to the starless midnight of racism and war that the bright daybreak of peace and brotherhood can never become a reality... I believe that unarmed truth and unconditional love will have the final word.", source: "Martin Luther King, Jr.", citation: "Nobel Prize Acceptance Speech", year: "1964" },
{ quote: "I have decided to stick with love. Hate is too great a burden to bear.", source: "Martin Luther King, Jr.", citation: "A Knock at Midnight", year: "1963" },
{ quote: "We must learn to live together as brothers or perish together as fools.", source: "Martin Luther King, Jr.", citation: "Speech in St. Louis, Missouri", year: "1964" },
{ quote: "Injustice anywhere is a threat to justice everywhere.", source: "Martin Luther King, Jr.", citation: "Letter from Birmingham Jail", year: "1963" },
{ quote: "The time is always right to do what is right.", source: "Martin Luther King, Jr.", citation: "Speech at Oberlin College", year: "1965" },
{ quote: "We must come to see that peace is not merely a distant goal we seek, but it is a means by which we arrive at that goal.", source: "Martin Luther King, Jr.", citation: "Nobel Prize Acceptance Speech", year: "1964" },
{ quote: "The hope of a secure and livable world lies with disciplined nonconformists, who are dedicated to justice, peace, and brotherhood.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin, but by the content of their character.", source: "Martin Luther King, Jr.", citation: "I Have a Dream", year: "1963" },
{ quote: "Our scientific power has outrun our spiritual power. We have guided missiles and misguided men.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.", source: "Martin Luther King, Jr.", citation: "Where Do We Go From Here: Chaos or Community?", year: "1967" },
{ quote: "Faith is taking the first step even when you don't see the whole staircase.", source: "Martin Luther King, Jr.", citation: "Speech at Ebenezer Baptist Church", year: "1965" },
{ quote: "We must learn to live together as brothers or perish together as fools.", source: "Martin Luther King, Jr.", citation: "Speech at St. Louis, Missouri", year: "1964" },
{ quote: "We must accept finite disappointment, but never lose infinite hope.", source: "Martin Luther King, Jr.", citation: "Strength to Love", year: "1963" },
{ quote: "The time is always right to do what is right.", source: "Martin Luther King, Jr.", citation: "Speech at Oberlin College", year: "1965" },
{ quote: "Our lives begin to end the day we become silent about things that matter.", source: "Martin Luther King, Jr.", citation: "I Have a Dream", year: "1963" },
{ quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", source: "Martin Luther King, Jr.", citation: "Speech at Civil Rights March on Washington", year: "1963" },
{ quote: "Life's most persistent and urgent question is, 'What are you doing for others?'", source: "Martin Luther King, Jr.", citation: "Speech in Montgomery, Alabama", year: "1957" },
{ quote: "Whatever affects one directly, affects all indirectly. I can never be what I ought to be until you are what you ought to be. This is the interrelated structure of reality.", source: "Martin Luther King, Jr.", citation: "Letter from a Birmingham Jail", year: "1963" },
{ quote: "Change does not roll in on the wheels of inevitability, but comes through continuous struggle.", source: "Martin Luther King, Jr.", citation: "Letter from a Birmingham Jail", year: "1963" },


];

// Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

// Function to select a random RGB color value
function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return randomColor;
}

// Function to calculate the relative luminance of a color (for text color contrast)
function getLuminance(color) {
  const rgb = color.match(/\d+/g);
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance;
}

// Function to calculate the text color based on background color
function calculateTextColor(bgColor) {
  var luminance = getLuminance(bgColor);
  return luminance > 0.5 ? "#000" : "#fff";
}

function printQuote() {
  // Get a random quote
  var quote = getRandomQuote();
  // Get elements to display the quote text and source
  var quoteContainer = document.getElementById("quote-box");
  var quoteText = quoteContainer.querySelector(".quote-text");
  var quoteSource = quoteContainer.querySelector(".quote-source");

  // Set the quote text and source
  quoteText.textContent = quote.quote;
  quoteSource.innerHTML = `<cite class="source">${quote.source}</cite>`;

  // Add citation and year if available
  if (quote.citation) {
    quoteSource.innerHTML += `<span class="citation">${quote.citation}</span>`;
  }

  if (quote.year) {
    quoteSource.innerHTML += `<span class="year">${quote.year}</span>`;
  }

  // Generate a random background color
  var bgColor = getRandomColor();
  document.body.style.backgroundColor = bgColor;

  // Calculate text color based on background color and set it for quote text and source
  var textColor = calculateTextColor(bgColor);
  quoteText.style.color = textColor;
  quoteSource.style.color = textColor;
}

// Refresh the quote automatically every 15 seconds
window.setInterval(function () {
  printQuote();
}, 15000);

// Event listener on LoadQuote button to generate a new quote
document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
