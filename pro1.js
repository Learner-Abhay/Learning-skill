
function vowels(str) {
  let count = 0;
  let newStr = "";
  let vowels = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
      vowels = vowels + str[i];
    } else {
      newStr += str[i];
    }
  }
  console.log(count);
  console.log(newStr);
  console.log(vowels);
}

vowels("hello");
