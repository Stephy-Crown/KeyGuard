// const characters = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "~",
//   "`",
//   "!",
//   "@",
//   "#",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
//   "(",
//   ")",
//   "_",
//   "-",
//   "+",
//   "=",
//   "{",
//   "[",
//   "}",
//   "]",
//   ",",
//   "|",
//   ":",
//   ";",
//   "<",
//   ">",
//   ".",
//   "?",
//   "/",
// ];

// Generate Password Function
// Write a function to create a random password of 15 characters.

// function generatePassword(length = 15) {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     // return randomIndex;
//     // password+=characters[randomIndex]
//     password = password + characters[randomIndex];
//     // return password;
//   }
//   return password;
// }

// console.log(generatePassword());

// Update Passwords on Button Click
// Attach an event listener to the button to generate and display passwords.

// document.getElementById("generate-btn").addEventListener("click", () => {
//   const password1 = generatePassword();
//   const password2 = generatePassword();

//   document.getElementById("password1").textContent = password1;
//   document.getElementById("password2").textContent = password2;
// });

// Stretch Goals:😎😎😋😎
// Ability to set password length.
// Add "copy-on-click" functionality.
// Toggle "symbols" and "numbers" on/off.

// Step 1: Add Inputs for Password Length and Toggles
// Enhance the HTML with input fields and checkboxes for customization.

// Step 2: Update JavaScript for Customization Options
// Separate Character Pools
// Modify the characters array to group letters, numbers, and symbols.
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
  ""
);
// ['A', 'B', 'C', ..., 'a', 'b', 'c', ...]

const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()-_+=|{}[]:;<>,.?/".split("");

// 2.// Dynamic Password Generation
// Generate the password based on user input.

function generatePassword(length, includeSymbols, includeNumbers) {
  let characterPool = [...letters];
  // Character Pool Initialization:
  // let characterPool = [...letters];: This initializes the characterPool with all the letters (uppercase and lowercase) using the letters array.
  // The ... spread syntax is used to clone the array. This is important because modifying characterPool later won't affect the original letters array.

  if (includeSymbols) characterPool = [...characterPool, ...symbols];
  // ['A', 'B', 'C', ..., 'Z', 'a', 'b', 'c', ..., 'z', '~', '`', '!', '@', '#', ...]

  if (includeNumbers) characterPool = [...characterPool, ...numbers];
  // ['A', 'B', 'C', ..., 'Z', 'a', 'b', 'c', ..., 'z', '0', '1', '2', '3', ..., '9']

  // If includeSymbols = true and includeNumbers = true:
  // characterPool will contain letters, numbers, and symbols.
  // ['A', 'B', 'C', ..., 'Z', 'a', 'b', 'c', ..., 'z', '0', '1', '2', '3', ..., '9', '~', '`', '!', '@', '#', ...]

  // If includeSymbols = false and includeNumbers = false:
  // characterPool will contain only letters.

  // ['A', 'B', 'C', ..., 'Z', 'a', 'b', 'c', ..., 'z']

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }
  return password;
}

// 3.Handle Button Click
// Update the button event listener to use the new options.

// document.getElementById("generate-btn").addEventListener("click", () => {
//   const length = parseInt(document.getElementById("password-length").value);
//   const includeSymbols = document.getElementById("include-symbols").checked;
//   const includeNumbers = document.getElementById("include-numbers").checked;

//   console.log("Length:", length);
//   console.log("Include Symbols:", includeSymbols);
//   console.log("Include Numbers:", includeNumbers);

//   const password1 = generatePassword(length, includeSymbols, includeNumbers);
//   const password2 = generatePassword(length, includeSymbols, includeNumbers);

//   document.getElementById("password1").textContent = password1;
//   document.getElementById("password2").textContent = password2;
// });

// const password1Display = document.getElementById("password1");
// const password2Display = document.getElementById("password2");

// password1Display.addEventListener("click", () => {
//   navigator.clipboard.writeText(password1Display.textContent);
//   showToast("Password 1 copied to clipboard!");
// });

// password2Display.addEventListener("click", () => {
//   navigator.clipboard.writeText(password2Display.textContent);
//   showToast("Password 2 copied to clipboard!");
// });

document.getElementById("generate-btn").addEventListener("click", () => {
  const length = parseInt(document.getElementById("password-length").value);
  const includeSymbols = document.getElementById("include-symbols").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;

  const password1 = generatePassword(length, includeSymbols, includeNumbers);
  const password2 = generatePassword(length, includeSymbols, includeNumbers);

  // Set Passwords with Copy Icons
  const password1Display = document.getElementById("password1");
  const password2Display = document.getElementById("password2");

  password1Display.innerHTML = `
    <span class="password-text">${password1}</span>
    <span class="copy-icon">
      <i class="bi bi-clipboard"></i>
    </span>`;

  password2Display.innerHTML = `
    <span class="password-text">${password2}</span>
    <span class="copy-icon">
      <i class="bi bi-clipboard"></i>
    </span>`;

  // Ensure copy icons are visible after generation
  const copyIcons = document.querySelectorAll(".copy-icon");
  copyIcons.forEach((icon) => (icon.style.display = "inline"));

  // Add copy functionality
  password1Display.querySelector(".copy-icon").addEventListener("click", () => {
    navigator.clipboard.writeText(password1);
    showToast("Password 1 copied to clipboard!");
  });

  password2Display.querySelector(".copy-icon").addEventListener("click", () => {
    navigator.clipboard.writeText(password2);
    showToast("Password 2 copied to clipboard!");
  });
});

function showToast(message) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.textContent = message;
  document.body.appendChild(toast);

  // Show the toast with a slight delay for animation
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  // Hide and remove the toast after 2 seconds
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 2000);
}
