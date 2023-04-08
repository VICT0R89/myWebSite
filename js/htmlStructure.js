const header = document.getElementById("f-header");
const btnHome = document.getElementById("home-btn");


let changeLenguage = true;

const addHeader = () => {
  return header.innerHTML = `
    <div class="header h-img">
      <img src="img/logoMain.png" alt="imagen logo">
    </div>
    <div class="header h-list">
      <nav>
        <ul id="headerList">
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
      <button id="lenguage-btn" class="leng">${ changeLenguage ? headerText[6].en : headerText[6].sp }</button>
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
    <div>
      <section id="certificates" class="sliderStick"></section>
      <section id="insign" class="sliderStick"></section>
    </div>
  `
};

const addCertificates = () => {
  const certSection = document.getElementById("certificates");
  return (certSection.innerHTML =
    certificates.map((item)=>{
      let {imgSrc, route} = item
      return `
        <div class="project">
          <a target="_blank" href="${route}" class="link">
            <img class="certImg" src="img/cert${imgSrc}.png" alt="certificate">
          </a>
        </div>
      `
    }).join("")
  )
};

const addIng = () => {
  const insign = document.getElementById("insign");
  return (insign.innerHTML =
    ing.map((item)=>{
      let {imgSrc, route} = item
      return `
        <div class="project">
          <a target="_blank" href="${route}" class="link">
            <img class="ingImg" src="img/ing${imgSrc}.png" alt="certificate">
          </a>
        </div>
      `
    }).join("")
  )
};

const addProjectsTitle = () => {
  const projects = document.getElementById("portfolioSection");
  projects.innerHTML = `
    <div class="port-title">
      <h2>${ changeLenguage ? portTitleText[0].en : portTitleText[0].sp }</h2>
    </div>
    <p class="p-p">${ changeLenguage ? portTitleText[1].en : portTitleText[1].sp }</p>
    <div class="portDiv">
      <section id="port-item" class="sliderStick portSlider"></section>
    </div>
    `
};

const addProjects = () => {
  const proj = document.getElementById("port-item");
  return (proj.innerHTML =
    projects.map((item)=>{
      let {src, route} = item
      return `
        <div class="project">
          <a target="_blank" href="${route}" class="link">
            <img src="img/img${src}.jpg" alt="projects">
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
  header.scrollIntoView({behavior:"smooth"});
});

const changeLeng = () => {
  const btnLeng = document.getElementById("lenguage-btn");
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
};

const addSlider = () =>{
  addCertificates();
  addIng();
  addProjects();
};

const addAnimateTime = () => {
  let sectionLinks = document.querySelectorAll("a[href^='#']");
  sectionLinks.forEach((a, i) => {
    a.addEventListener("click", e => {
      e.preventDefault()
      let target = document.querySelector(e.target.getAttribute("href"));
      target.scrollIntoView({behavior: "smooth"})
    })
  })
};

const update = () =>{
  addHeader();
  addMain();
  addAboutMe();
  addSkillsTitle();
  addSkills();
  addCertificatesTitle();
  addProjectsTitle();
  addContactInfoTitle();
  addContactInfo();
  addContact();
  addFooter();
  addSlider();
  slickFunction();
  addAnimateTime();
  changeLeng();
};
update();

/* window.addEventListener("scroll", function() {
  let windowTop = window.pageYOffset || document.documentElement.scrollTop;

  let sections = document.querySelectorAll(".section");
  for (let i = 0; i < sections.length; i++) {
    let section = sections[i];
    let sectionTop = section.offsetTop;

    if (windowTop > sectionTop - window.innerHeight / 2) {
      section.classList.add("in");
      section.classList.remove("out");
    } else {
      section.classList.add("out");
      section.classList.remove("in");
    }
  }
}); */