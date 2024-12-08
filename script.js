function showCard() {
  const name = document.getElementById("friendName").value;
  if (name) {
    const greeting = `Merry Christmas, ${name}! 🎁`;
    document.getElementById("greeting").textContent = greeting;
    document.getElementById("card").style.display = "block";
  } else {
    alert("Please enter a name!");
  }
}
