const popupNikita = document.getElementById("Nikita");
const popupKirill = document.getElementById("Kirill");
const popupAndrey = document.getElementById("Andrey");
const popupSasha = document.getElementById("Sasha");
const popupMisha = document.getElementById("Misha");
const popupMaxim = document.getElementById("Maxim");
const popupMax = document.getElementById("Max");
const popupAndreyK = document.getElementById("AndreyK");
const popupVel = document.getElementById("Vel");
const popupIvan = document.getElementById("Ivan");
const popupZhenya = document.getElementById("Zhenya");
const popupSecret = document.getElementById("Secret");
const close = document.getElementById("close");
const videoPopup = document.getElementById("videoPopup");
const iframe = document.getElementById("video");

var videos = {
    "Nikita": "https://www.youtube.com/embed/OXcXc8sbVpI",
    "Kirill": "https://www.youtube.com/embed/VAWRQDnAAbE",
    "Andrey": "https://www.youtube.com/embed/S39avMi04Vw",
    "Sasha": "https://www.youtube.com/embed/fjG_hOM94V8",
    "Misha": "https://www.youtube.com/embed/kmRWzuadkHI",
    "Maxim": "https://www.youtube.com/embed/edaPBR13SKE",
    "AndreyK": "https://www.youtube.com/embed/bkpqnJFkfmI",
    "Ivan": "https://www.youtube.com/embed/58zJ3pF_V0g",
    "Zhenya": "https://www.youtube.com/embed/Do7eWovOme4",
    "Vel": "https://www.youtube.com/embed/GiWyOioVZ9c",
    "Max": "https://www.youtube.com/embed/RcVxVJVJ8Hw",
    "Secret": "https://www.youtube.com/embed/v4HuIon-2vc",
}
 
popupNikita.addEventListener("click", () => {
  iframe.src = videos["Nikita"]
  iframe.width = "315"
  iframe.height = "540"
  videoPopup.style.display = "block";
});
popupAndrey.addEventListener("click", () => {
  iframe.src = videos["Andrey"]
  iframe.width = "315"
  iframe.height = "540"
  videoPopup.style.display = "block";
});
popupKirill.addEventListener("click", () => {
    iframe.src = videos["Kirill"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
popupSasha.addEventListener("click", () => {
    iframe.src = videos["Sasha"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
  popupMisha.addEventListener("click", () => {
    iframe.src = videos["Misha"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
  popupMaxim.addEventListener("click", () => {
    iframe.src = videos["Maxim"]
    iframe.width = "540"
    iframe.height = "315"
    videoPopup.style.display = "block";
  });
  popupAndreyK.addEventListener("click", () => {
    iframe.src = videos["AndreyK"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
  popupIvan.addEventListener("click", () => {
    iframe.src = videos["Ivan"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
  popupZhenya.addEventListener("click", () => {
    iframe.src = videos["Zhenya"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
  popupVel.addEventListener("click", () => {
    iframe.src = videos["Vel"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
  popupMax.addEventListener("click", () => {
    iframe.src = videos["Max"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
  popupSecret.addEventListener("click", () => {
    iframe.src = videos["Secret"]
    iframe.width = "315"
    iframe.height = "540"
    videoPopup.style.display = "block";
  });
close.addEventListener("click", () => {
  videoPopup.style.display = "none";
});
