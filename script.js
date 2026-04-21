function shortenUrl() {
  let url = document.getElementById("longUrl").value;
  let shortCode = Math.random().toString(36).substring(2, 7);
  let shortUrl = "short.ly/" + shortCode;

  document.getElementById("result").innerText = shortUrl;
}
