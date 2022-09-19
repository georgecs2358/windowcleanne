const switchImage = () => {
  const homeSection = document.getElementById("home-section");
  if (homeSection.lastElementChild.id === "main-img1") {
    const img2 = document.createElement("div");
    img2.id = "main-img2";
    img2.className = "home";
    homeSection.replaceChild(img2, homeSection.lastElementChild);
  } else if (homeSection.lastElementChild.id === "main-img2") {
    const img3 = document.createElement("div");
    img3.id = "main-img3";
    img3.className = "home";
    homeSection.replaceChild(img3, homeSection.lastElementChild);
  } else if (homeSection.lastElementChild.id === "main-img3") {
    const img1 = document.createElement("div");
    img1.id = "main-img1";
    img1.className = "home";
    homeSection.replaceChild(img1, homeSection.lastElementChild);
  }
};

setInterval(switchImage, 8000);

const srcTitle = (title) => {
  const words = title.split(" ");
  return words.join("").toLowerCase().substring(0, 5);
};

const addTile = (title, info, price) => {
  const serviceTile = document.createElement("div");
  serviceTile.className = "service-tile";
  serviceTile.innerHTML = `
  <h2>${title}</h2>
  <img class="service-img" src="images/${srcTitle(title)}.jpg"
    alt="${title} image">
  <p>${info}</p>
  <p class="alt-text">Starting from £${price}</p>
  `;
  document.getElementById("services-grid").appendChild(serviceTile);
};

const addImage = (number) => {
  const imageTile = document.createElement("img");
  imageTile.className = "image-tile";
  imageTile.src = `images/image${number.toString()}.jpg`;
  imageTile.alt = "An image taken while cleaning windows of house";
  document.getElementById("images-box").appendChild(imageTile);
};

addTile(
  "Residential Window Cleaning",
  `WindowClean North-East is an established brand of window cleaning
  services, with over 2000 clients across the North-East.`,
  3
);
addTile(
  "Fascia Cleaning",
  `We clean all UPVC fascias and cladding boards upon request. Please ask
  the operator for details or email your enquiry.`,
  25
);
addTile(
  "Patio Jet-Wash",
  `We also specialise in patio/ driveway cleaning, owning modern jet-wash
  equipment. This can be offered as a one-off service or as a quarterly
  clean.`,
  50
);
addTile(
  "Gutter Cleaning",
  `We have the equipment to clean guttering of houses, protecting you against
  drainage problems and costly repairs.`,
  25
);
addTile(
  "Conservatory Cleaning",
  `If you have a conservatory then we offer a full cleaning service, ensuring
  you are ready for the summmer.`,
  30
);
addTile(
  "Commercial and Office",
  `After establishing a strong reputation for residential
  cleaning services we have successfully moved to cleaning commercial
  properties, providing the same high quality, high value service.`,
  20
);
addImage(1);
addImage(2);
addImage(3);
addImage(4);
addImage(5);
addImage(6);
