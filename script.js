function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#perfil img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/profile-img.jpeg")
  } else {
    img.setAttribute("src", "assets/profile-img.jpeg")
  }
}
