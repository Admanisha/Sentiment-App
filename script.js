function analyzeSentiment() {
  let text = document.getElementById("userInput").value.toLowerCase();
  let resultBox = document.getElementById("result-box");
  let result = document.getElementById("result");
  let emoji = document.getElementById("emoji");
  let message = document.getElementById("message");

  if (text.trim() === "") {
    alert("Please write something first!");
    return;
  }

  
  let positiveWords = ["happy", "love", "good", "great", "excellent", "fun"];
  let negativeWords = ["sad", "angry", "bad", "hate", "upset", "terrible"];

  let sentiment = "neutral";

  for (let word of positiveWords) {
    if (text.includes(word)) {
      sentiment = "positive";
      break;
    }
  }
  for (let word of negativeWords) {
    if (text.includes(word)) {
      sentiment = "negative";
      break;
    }
  }

  
  resultBox.classList.remove("hidden");

  if (sentiment === "positive") {
    result.innerText = "Positive Sentiment 😊";
    emoji.innerText = "🌟✨🎉";
    message.innerText = "Awesome! Keep spreading positivity!";
    resultBox.style.background = "#d4f7d4";
  } else if (sentiment === "negative") {
    result.innerText = "Negative Sentiment 😢";
    emoji.innerText = "💔☁️";
    message.innerText = "Don’t worry, every day is a new beginning!";
    resultBox.style.background = "#f7d4d4";
  } else {
    result.innerText = "Neutral Sentiment 😐";
    emoji.innerText = "🤔";
    message.innerText = "Hmm, that’s neutral. Try writing something fun!";
    resultBox.style.background = "#f0f0f0";
  }
}
