function checkVowels() {
  const text = document.querySelector("#vowel").value;
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) count++;
  }
  document.querySelector("#result").textContent = `Number of vowels: ${count}`;
}
