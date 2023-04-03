const header = document.getElementById("f-header");
const btnHome = document.getElementById("home-btn");
const btnLeng = document.getElementById("lenguage-btn");
const sliderTest = document.getElementById("sliderTest");
const sliderTest2 = document.getElementById("sliderTest2");

let changeLenguage = true;

const addHeader = () => {
  return header.innerHTML = `
    <div class="header h-img">
      <img src="img/logoMain.png" alt="imagen logo">
    </div>
    <div class="header h-list">
      <nav>
        <ul>
          <li><a href="#aboutMeSection">${ changeLenguage ? headerText[0].en : headerText[0].sp }</a></li>
          <li><a href="#skillsSection">${ changeLenguage ? headerText[1].en : headerText[1].sp }</a></li>
          <li><a href="#certificateSection">${ changeLenguage ? headerText[2].en : headerText[2].sp }</a></li>
          <li><a href="#portfolioSection">${ changeLenguage ? headerText[3].en : headerText[3].sp }</a></li>
          <li><a href="#contactSection">${ changeLenguage ? headerText[4].en : headerText[4].sp }</a></li>
        </ul>
      </nav>
    </div>
    <div class="header h-btn">
    <button type="button">
      <a href="#contactSection">
      ${ changeLenguage ? headerText[5].en : headerText[5].sp }
      </a>
    </button>
    </div>
  `
};

const addMain = () => {
  const mainSection = document.getElementById("mainSection");
  return mainSection.innerHTML = `
    <div class="m-text">
      <h1>      
      ${ changeLenguage ? mainText[0].en : mainText[0].sp }
        <span>
        ${ changeLenguage ? mainText[1].en : mainText[1].sp }
        </span>
      </h1>
      <p>
      ${ changeLenguage ? mainText[2].en : mainText[2].sp }
      </p>
      <button type="button">
        <a target="_blank" href="https://drive.google.com/file/d/1ki9-aeiEqHjXlAjx6TRMMClc8TZOX5I1/view">${ changeLenguage ? mainText[3].en : mainText[3].sp }</a>
      </button>      
    </div>
    <div class="img-main">
        <img src="img/${imgMain.src}" alt=" Mi foto de fondo">
      </div>
  `
};

const addAboutMe = () => {
  const aboutMeSection = document.getElementById("aboutMeSection");
  return aboutMeSection.innerHTML = `
    <div class="a-img-cont">
      <div class="img-marco">
        <img src="img/${imgAboutMe.src}" alt=" Mi imagen de fondo">
      </div>
    </div>
    <div class="a-text">
      <h1>${ changeLenguage ? aboutMeText[0].en : aboutMeText[0].sp }</h1>
      <h3>${ changeLenguage ? aboutMeText[1].en : aboutMeText[1].sp }</h3>
      <h4>${ changeLenguage ? aboutMeText[2].en : aboutMeText[2].sp }</h4>
      <p>${ changeLenguage ? aboutMeText[3].en : aboutMeText[3].sp }</p>
      <p>${ changeLenguage ? aboutMeText[4].en : aboutMeText[4].sp }</p>
      <div class="a-btn">
        <button type="button" class="btn-hire">
          <a href="#contactSection">
          ${ changeLenguage ? aboutMeText[5].en : aboutMeText[5].sp }
          </a>
        </button>
        <button type="button" class="btn-cv">
          <a target="_blank" href="https://drive.google.com/file/d/1ki9-aeiEqHjXlAjx6TRMMClc8TZOX5I1/view">
          ${ changeLenguage ? aboutMeText[6].en : aboutMeText[6].sp }
          </a>
        </button>
      </div>
    </div>
  `
};

const addSkillsTitle = () => {
  const skill = document.getElementById("skillsSection");
  return skill.innerHTML = `
  <div class="s-title">
    <h1>${ changeLenguage ? skillsText[0].en : skillsText[0].sp }</h1>
  </div>
  <p class="s-p">
  ${ changeLenguage ? skillsText[1].en : skillsText[1].sp }
  </p>
  <div id="mySkillsSection"></div>
  `
};

const addSkills = () =>{
  const mySkillsSection = document.getElementById("mySkillsSection");
  return (mySkillsSection.innerHTML =     
    skills.map((x)=>{
      let {name, value} = x;
      return`        
        <div class="skills-bars">
          <div class="s-p-container">
            <p>${name}</p>
          </div>
          <div class="skill-bar">
            <div class="bar-fill" style="width: ${value}%"></div>
          </div>
        </div>
      `
    }).join("")
  )
};

const addCertificatesTitle = () =>{
  const certificate = document.getElementById("certificateSection");
  certificate.innerHTML = `
    <div class="c-title">
      <h1>${ changeLenguage ? certificateText[0].en : certificateText[0].sp }</h1>
    </div>
    <p class="c-p">
    ${ changeLenguage ? certificateText[1].en : certificateText[1].sp }
    </p>
    <div class="c-container">
      <div id="certificates"></div>
      <div id="insign"></div>
    </div>
  `
};

const addSlider = () => {
  sliderTest.innerHTML=`
  <button class="prev"><</button>
  <div class="slider" id="slider">
    <ul class="slides" id="slides">
    </ul>
  </div>
  <button class="next">></button>
  `
  
}

const addCertificatesSlider = () =>{
  const slides = document.getElementById("slides")
  return (slides.innerHTML =
    certificates.map((x)=>{
      let { imgSrc, route } = x;
      return `
        <li class="slide">
          <a href="${route}" target="_blank">
            <img class="slide-img" src="img/cert${imgSrc}.png" alt="imagen de certificado">
          </a>          
        </li>
      `
    }).join("")
  )
};

const addSlider2 = () => {
  sliderTest2.innerHTML=`
  <button class="prev2"><</button>
  <div class="slider" id="slider2">
    <ul class="slides" id="slides2">
    </ul>
  </div>
  <button class="next2">></button>
  `
  
};

const addInsgSlider = () =>{
  const slides2 = document.getElementById("slides2")
  return (slides2.innerHTML =
    ing.map((x)=>{
      let { imgSrc, route } = x;
      return `
        <li class="slide">
          <a href="${route}" target="_blank">
            <img class="slide-img ing-img" src="img/ing${imgSrc}.png" alt="imagen de certificado">
          </a>          
        </li>
      `
    }).join("")
  )
};

const addProjectsTitle = () => {
  const projects = document.getElementById("portfolioSection");
  projects.innerHTML = `
    <div class="port-title">
      <h2>${ changeLenguage ? portTitleText[0].en : portTitleText[0].sp }</h2>
      <p>${ changeLenguage ? portTitleText[1].en : portTitleText[1].sp }</p>
    </div>
    <div class="port-items">
      <div id="port-item"></div>
    </div>
  `
};

const addProjects = () => {
  const portfolioSection = document.getElementById("port-item");
  return (portfolioSection.innerHTML =
    projects.map((x)=>{
      let { src, route } = x;
      return `
      <div class="c-img-container">
        <a href="${route}" target="_blank">
          <img src="img/img${src}.jpg" alt="imagen de proyecto">
        </a>
      </div>
      `
    }).join("")
    )
};

const addContactInfoTitle = () => {
  const contact = document.getElementById("contactSection");
  contact.innerHTML = `
    <div class="contact-title">
      <h2 class="title">${ changeLenguage ? contactText[0].en : contactText[0].sp }</h2>
      <p>${ changeLenguage ? contactText[1].en : contactText[1].sp }</p>
    </div>
    <div class="contact-container">
      <div id="contact">
        <div id="contactInfo"></div>
        <div id="contactInfo2"></div>
      </div>
    </div>
  `
};

const addContactInfo = () =>{
  const contact = document.getElementById("contactInfo");
  return (contact.innerHTML =
    contactInfo.map ((x) => {
      let { icono, title, info, href } = x;
      return `
      <div class= "contact-img-info">
        <div class = "icono">
          <img src="img/${icono}.svg" alt="icono">
        </div>
        <div class = "info">
          <h4>${title}</h4>
          <a href=${href}>${info}</a>
        </div>
      </div>
      `
    }).join("")
  );
};

const addContact = () =>{
  const contact2 = document.getElementById("contactInfo2");
  return (contact2.innerHTML = 
    contactInfo2.map((x)=>{
      let { icono, title, info, url } = x;
      return `
      <div class= "contact-img-info">
        <div class = "icono">
          <img src="img/${icono}.svg" alt="icono">
        </div>
        <div class = "info">
          <h4>${title}</h4>
          <p><a href="${url}" target="_blank">${info}</a></p>
        </div>
      </div>
      `
    }).join("")
  );
};

const addFooter = () => {
  const footer = document.getElementById("f-footer");
  return (footer.innerHTML =
    footerIcons.map((x) => {
      let { icono, src } = x;
      return `
      <div class= "foot-img-container">
        <a href=${src} target="_blank">
          <img src="img/${icono}.svg" alt="icono">
        </a>
      </div>
      `
    }).join("")
    );
};

window.onscroll = function() {
  if (window.pageYOffset > header.offsetHeight) {
    btnHome.style.display = "block";
  } else {
    btnHome.style.display = "none";
  }
};

btnHome.addEventListener('click', () =>{
  btnLeng.scrollIntoView();
});

btnLeng.addEventListener('click', () =>{
  if(changeLenguage){
    changeLenguage = false;
    btnLeng.innerText = "English?";
    btnHome.innerText = "INICIO";
    update();
  } else {
    changeLenguage = true;
    btnLeng.innerText = "Español?"
    btnHome.innerText = "HOME";
    update();
  }
});

// SLIDER LOGIC ----------------------
const crearSlider = () =>{

  const slides = document.getElementById("slides");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let slideWidth = 13;
  let currentSlide = 1;
  let intervalId = null;

  const modificarWidth = (size) => {
    size < 1800 && size >= 1600 ? slideWidth = 14 : slideWidth = slideWidth
    size < 1600 && size >= 1200 ? slideWidth = 15 : slideWidth = slideWidth
    size < 1200 && size >= 800 ? slideWidth = 17 : slideWidth = slideWidth
    size < 800 ? slideWidth = 19 : slideWidth = slideWidth
  };

  const moveRight = () => {
    modificarWidth(window.innerWidth)
    if (currentSlide === certificates.length) {
      currentSlide = currentSlide
    } else {
      currentSlide++;
      slides.style.transform = `translateX(-${slideWidth * (currentSlide -1)}vw)`;
    }
  };

  const moveLeft = () => {
    modificarWidth(window.innerWidth)
    if (currentSlide === 1) {
      currentSlide = currentSlide
    } else {
      currentSlide--;
      slides.style.transform = `translateX(-${slideWidth * (currentSlide -1)}vw)`;
    }
  };

  let aux = false
  const move = () => {
    modificarWidth(window.innerWidth)
    if (currentSlide < certificates.length && !aux) {
      currentSlide++;
      slides.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}vw)`
    } else if (currentSlide === certificates.length && !aux){
      aux = true;
    } else if (currentSlide > 1 && aux){
      currentSlide--;
      slides.style.transform = `translateX(-${slideWidth * (currentSlide - 1)}vw)`
    } else if (currentSlide === 1 && aux){
      aux = false;
    }
  };

  const startInterval = () => {
    intervalId = setInterval(() => {
      move();
    }, 1000);
  };

  const stopInterval = () => {
    clearInterval(intervalId);
  };

  sliderTest.addEventListener("mouseenter", () => {
    stopInterval();
  });

  sliderTest.addEventListener("mouseleave", () => {
    startInterval();
  });

  prevButton.addEventListener("click", () => {
    stopInterval();
    moveLeft();
  });

  nextButton.addEventListener("click", () => {
    stopInterval();
    moveRight();
  });

  startInterval();

  const slides2 = document.getElementById("slides2");
  const prevButton2 = document.querySelector(".prev2");
  const nextButton2 = document.querySelector(".next2");
  let slideWidth2 = 10;
  let currentSlide2 = 1;
  let intervalId2 = null;

  const moveRight2 = () => {
    modificarWidth(window.innerWidth)
    if (currentSlide2 === certificates.length) {
      currentSlide2 = currentSlide2
    } else {
      currentSlide2++;
      slides2.style.transform = `translateX(-${slideWidth2 * (currentSlide2 -1)}vw)`;
    }
  };

  const moveLeft2 = () => {
    modificarWidth(window.innerWidth)
    if (currentSlide2 === 1) {
      currentSlide2 = currentSlide2
    } else {
      currentSlide2--;
      slides2.style.transform = `translateX(-${slideWidth2 * (currentSlide2 -1)}vw)`;
    }
  };

  let aux2 = false
  const move2 = () => {
    modificarWidth(window.innerWidth)
    if (currentSlide2 < certificates.length && !aux2) {
      currentSlide2++;
      slides2.style.transform = `translateX(-${slideWidth2 * (currentSlide2 - 1)}vw)`
    } else if (currentSlide2 === certificates.length && !aux2){
      aux2 = true;
    } else if (currentSlide2 > 1 && aux2){
      currentSlide2--;
      slides2.style.transform = `translateX(-${slideWidth2 * (currentSlide2 - 1)}vw)`
    } else if (currentSlide2 === 1 && aux2){
      aux2 = false;
    }
  };

  const startInterval2 = () => {
    intervalId2 = setInterval(() => {
      move2();
    }, 1000);
  };

  const stopInterval2 = () => {
    clearInterval(intervalId2);
  };

  sliderTest2.addEventListener("mouseenter", () => {
    stopInterval2();
  });

  sliderTest2.addEventListener("mouseleave", () => {
    startInterval2();
  });

  prevButton2.addEventListener("click", () => {
    stopInterval2();
    moveLeft2();
  });

  nextButton2.addEventListener("click", () => {
    stopInterval2();
    moveRight2();
  });

  startInterval2();

}

const update = () =>{
  addHeader();
  addMain();
  addAboutMe();
  addSkillsTitle();
  addSkills();
  addCertificatesTitle();
  addSlider();
  addCertificatesSlider();
  addSlider2();
  addInsgSlider();
  addProjectsTitle();
  addProjects();
  addContactInfoTitle();
  addContactInfo();
  addContact();
  addFooter();
  crearSlider()
};
update();