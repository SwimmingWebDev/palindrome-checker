const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultText = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const lowerTextInput = textInput.value.toLowerCase();

  if (lowerTextInput.length === 0) {
    alert("Please input a value");
  } else if (lowerTextInput.length === 1) {
    resultText.textContent = `${textInput.value} is a palindrome`;
  } else if (lowerTextInput === lowerTextInput.split("").reverse().join("")) {
    resultText.textContent = `${textInput.value} is a palindrome`;
  } else if (lowerTextInput.includes("_")) {
    let removeSpecialText = lowerTextInput.replace(/[\\,_,|,(,),:,-,/]/g, "");
    removeSpecialText = removeSpecialText.replace(/-/g, "");
    console.log(removeSpecialText);
    if (removeSpecialText === removeSpecialText.split("").reverse().join("")) {
      resultText.textContent = `${textInput.value} is a palindrome`;
    } else {
      resultText.textContent = `${textInput.value} is not a palindrome`;
    }
  } else if (lowerTextInput.includes(" ")) {
    const newText = lowerTextInput.replace(/[.,\s]/g, "");
    if (newText === newText.split("").reverse().join("")) {
      resultText.textContent = `${textInput.value} is a palindrome`;
    } else {
      resultText.textContent = `${textInput.value} is not a palindrome`;
    }
  } else {
    resultText.textContent = `${textInput.value} is not a palindrome`;
  }
});
