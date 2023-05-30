function generate() {
  const quotes = {
    " ― Jules Renard":
      '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
    " - Albert Einstein":
      '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
    " - Lana Del Rey":
      "“Who are you?Are you in touch with all of your darkest fantasies?Have you created a life for yourself where you can experience them?I have. I am fucking crazy.But I am free.”",
    " - Candace Bushnell":
      "“Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.Carrie Bradshaw”",
    " - Pierce Brown":
      "“Man cannot be freed by the same injustice that enslaved it.”",
    " - Henry D. Thoreau":
      "“The preachers and lecturers deal with men of straw, as they are men of straw themselves. Why, a free-spoken man, of sound lungs, cannot draw a long breath without causing your rotten institutions to come toppling down by the vacuum he makes. Your church is a baby-house made of blocks, and so of the state. ...The church, the state, the school, the magazine, think they are liberal and free! It is the freedom of a prison-yard.” ",
  };

  const authors = Object.keys(quotes);

  const author = authors[Math.floor(Math.random() * authors.length)];

  const quote = quotes[author];
  document.getElementById("author").innerHTML = author;
  document.getElementById("quote").innerHTML = quote;
}
