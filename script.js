const inputText = document.getElementById("text");
const result = document.getElementById("result");
const checkbtn = document.getElementById("btn");

function isPalindrom(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  //   console.log(cleanStr);
  const revStr = cleanStr.split("").reverse().join("");
  //   console.log(revStr);
  return cleanStr === revStr;
}

function check() {
  if (isPalindrom(inputText.value)) {
    result.textContent = `"${inputText.value}" is a Palindrom`;
  } else {
    result.textContent = `"${inputText.value}" is not a Palindrom`;
  }
  inputText.value = "";

  result.classList.remove("fadeIn");

  void result.offsetWidth;

  result.classList.add("fadeIn");
}

checkbtn.addEventListener("click", check);
