const images = [
  {
    id: 1,
    src: "assets/cat-7995160_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/hs-photografie-25492778/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7995160",
    byName: "Heino Schliep",
    category: "animais",
  },
  {
    id: 2,
    src: "assets/stairs-8054618_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/wal_172619-12138562/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8054618",
    byName: "wal_172619",
    category: "pessoas",
  },
  {
    id: 3,
    src: "assets/alps-8173743_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/peterg63-11841274/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8173743",
    byName: "Peter G.",
    category: "paisagens",
  },
  {
    id: 4,
    src: "assets/dog-8273965_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/whitechappel79-18016358/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8273965",
    byName: "Roger Jeffreys",
    category: "animais",
  },
  {
    id: 5,
    src: "assets/theme-park-8065415_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/ignartonosbg-21428489/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8065415",
    byName: "hartono subagio",
    category: "paisagens",
  },
  {
    id: 6,
    src: "assets/station-7946105_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/wal_172619-12138562/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7946105",
    byName: "wal_172619",
    category: "paisagens",
  },
  {
    id: 7,
    src: "assets/road-8003640_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/sdg_rai-25409145/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8003640",
    byName: "Lương Đạt Nguyễn",
    category: "pessoas",
  },
  {
    id: 8,
    src: "assets/monochrome-image-8598798_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/jaclou-dl-5602247/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8598798",
    byName: "JackieLou DL",
    category: "animais",
  },
  {
    id: 9,
    src: "assets/man-8329151_1280.jpg",
    alt: "",
    byHref:
      "https://pixabay.com/users/vaivography-34806637/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=8329151",
    byName: "Vaiva Zernosekovaite ",
    category: "pessoas",
  }
];

const galleryTab = document.getElementById("galleryTab");
const galleryTabContent = document.getElementById("galleryTabContent");
const categorys = [];

function creatTab(category, index) {
    const li = document.createElement("li");
    li.classList.add("nav-item");
    li.setAttribute("role", "presentation");

    const button = document.createElement("button");
    button.classList.add("nav-link");
    if(index == 0) {
        button.classList.add("active");
        button.setAttribute("aria-selected", "true");
    } else {
        button.setAttribute("aria-selected", "false");
    }
    button.setAttribute("id", `${category}-tab`);
    button.setAttribute("data-bs-toggle", "tab");
    button.setAttribute("data-bs-target", `#grid-${category}`);
    button.setAttribute("type", "button");
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", `grid-${category}`);
    button.textContent = category;

    li.appendChild(button);

    galleryTab.appendChild(li);

    const tabContentDiv = document.createElement("div");
    tabContentDiv.classList.add("tab-pane", "fade");
    if(index == 0) {
        tabContentDiv.classList.add("show", "active");
    }
    tabContentDiv.setAttribute("id", `grid-${category}`);
    tabContentDiv.setAttribute("role", "tabpanel");
    tabContentDiv.setAttribute("aria-labelledby", `${category}-tab`);

    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row", "g-4", "mb-4");

    tabContentDiv.appendChild(rowDiv);

    galleryTabContent.appendChild(tabContentDiv);
}

function creatCards(src, alt, byHref, byName, categoryDiv) {
      const colDiv = document.createElement("div");
      colDiv.classList.add("col-lg-4", "col-md-6", "col-sm-12");

      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "border-0", "rounded-0", "p-0", "bg-body-tertiary");

      const img = document.createElement("img");
      img.classList.add("card-img-top", "rounded-0");
      img.setAttribute("src", src);
      img.setAttribute("loading", "lazy");
      img.setAttribute("alt", alt);

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.innerHTML = `Image by <a target="_blank" href="${byHref}">${byName}</a> from <a target="_blank" href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7995160">Pixabay</a>`;

      cardBody.appendChild(cardText);
      cardDiv.appendChild(img);
      cardDiv.appendChild(cardBody);
      colDiv.appendChild(cardDiv);

      categoryDiv.appendChild(colDiv);
}

function displayImgs() {

  images.forEach((el) => {
    if (!categorys.includes(el.category)) {
      categorys.push(el.category);
    }
  });

  categorys.forEach((category, index) => {
    creatTab(category, index);
  });

  images.forEach((el) => {
    const categoryDiv = document.querySelector(`#grid-${el.category} div`);
    creatCards(el.src, el.alt, el.byHref, el.byName, categoryDiv);
  });
}

displayImgs();

// incluir datas
