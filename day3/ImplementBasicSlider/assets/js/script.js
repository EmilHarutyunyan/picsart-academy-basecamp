const images = [
  "https://wallpapers.com/images/hd/ellen-ripley-alien-movie-srtz5jjdu58tb9xo.webp",
  "https://wallpapers.com/images/hd/the-avengers-superhero-movie-eeotwqkmypkvalg9.webp",
  "https://wallpapers.com/images/hd/joker-dark-knight-movie-b8kaybfyv79ad2zc.webp",
  "https://wallpapers.com/images/hd/stalingrad-movie-digital-cover-zkg4mir70ziqyau6.webp",
  "https://wallpapers.com/images/hd/skyfall-digital-movie-cover-u8n7rawya7nwp519.webp",
];

let count = 0;
const slideImg = document.querySelector(".slide-img");

slideImg.src = images[count];

const nextImage = () => {
  count =
    (count + 1) % images.length > images.length
      ? 0
      : (count + 1) % images.length;
  changeUpdate(count);
};

const prevImage = () => {
  count =
    count - 1 + images.length < 0 ? images.length : count - 1 + images.length;
  changeUpdate(count);
};

const changeUpdate = (count) => {
  slideImg.style.opacity = 0;
  setTimeout(function () {
    slideImg.src = images[count];
    slideImg.style.opacity = 1;
  }, 500);
};
