const assets_dir = "assets"

const imgs = [
  "misfit-girl-1.jpeg", "misfit-girl-2.jpeg ", "misfit-girl-3.jpeg ", 
  "misfit-girl-4.jpeg", "misfit-girl-5.jpeg", "misfit-girl-6.jpeg", 
  "misfit-guy-1.jpg", "misfit-guy-2.jpg", "misfit-guy-3.jpg"
]

setInterval(() => {
  let img_node = document.getElementById("misfit_img")
  let index = Math.floor(Math.random() * imgs.length)

  img_node.setAttribute("src", assets_dir + "/" + imgs[index])
}, 2500);

function openSideBar() {
  document.getElementById("main-menu").style.width = "40%";
  document.getElementById("menu-list").style.display = "block";
}

function closeSideBar() {
  document.getElementById("main-menu").style.width = "0%";
  document.getElementById("menu-list").style.display = "none";
}

