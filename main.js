let userOne = document.getElementById("userOne");
let userTwo = document.getElementById("userTwo");

const btn = document.getElementById("btn");

const result = document.getElementById("result");
const message = document.getElementById("message");

function capitalizedName(name) {
  name = name.trim();
  let FirstLetter = name[0].toUpperCase();
  let newName = name.slice(1).toLowerCase();

  name = FirstLetter + newName;
  return name;
}

function calcLove() {
  let n1 = userOne.value;
  let n2 = userTwo.value;

  n1 = capitalizedName(n1);
  n2 = capitalizedName(n2);

  if (n1.trim() === "" || n2.trim() === "") {
    result.innerText = "Enter both names 🩻";
    message.innerText = "";
    return;
  }

  let percentage = Math.floor(Math.random() * 100) + 1;

  result.innerHTML = `${n1} 💖 ${n2} = <strong>${percentage}%</strong>`;

  let msg = "";

  if (percentage > 90) msg = "Prefect match! soulmate vibe💘🥰";
  else if (percentage > 75) msg = "Strong bond! Lots of chemistry 💗💗";
  else if (percentage > 50) msg = "Good connection! can grow stronger 😻💌";
  else msg = "Needs understanding and communication 😅";

  message.innerHTML = msg;

  userOne.value = "";
  userTwo.value = "";
}

btn.addEventListener("click", calcLove);
