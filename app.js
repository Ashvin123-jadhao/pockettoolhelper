const textInput = document.getElementById("textInput");

const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const sentenceCount = document.getElementById("sentenceCount");

textInput.addEventListener("input", () => {

let text = textInput.value;

charCount.textContent = text.length;

let words = text.trim().split(/\s+/).filter(word => word.length > 0);
wordCount.textContent = text.trim() === "" ? 0 : words.length;

let sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
sentenceCount.textContent = sentences.length;

});