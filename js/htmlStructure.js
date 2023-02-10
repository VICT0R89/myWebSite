const header = document.getElementById("f-header");
const mainSection = document.getElementById("mainSection");
const aboutMeSection = document.getElementById("aboutMeSection");
const mySkillsSection = document.getElementById("mySkillsSection");
const certificateSection = document.getElementById("certificates");
const certificateInsign = document.getElementById("insign");
const portfolioSection = document.getElementById("port-item");
const contact = document.getElementById("contactInfo");
const contact2 = document.getElementById("contactInfo2");
const contactForm = document.getElementById("contact-form");
const footer = document.getElementById("f-footer");
const btn = document.getElementById("floating-btn");

const addHeader = () => {
  return header.innerHTML = `
    <div class="header h-img">
      <img src="img/logoMain.png" alt="imagen logo">
    </div>
    <div class="header h-list">
      <nav>
        <ul>
          <li><a href="#aboutMeSection">About Me</a></li>
          <li><a href="#skillsSection">Skills</a></li>
          <li><a href="#certificateSection">Certificates</a></li>
          <li><a href="#portfolioSection">Projects</a></li>
          <li><a href="#contactSection">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="header h-btn">
    <button type="button">
      <a href="#contactSection">
        Contact Me
      </a>
    </button>
    </div>
  `
}
addHeader();

const addMain = () => {
  return mainSection.innerHTML = `
    <div class="m-text">
      <h1>      
        I’m Víctor Gutiérrez
        <span>
        Software Developer
        </span>
      </h1>
      <p>
        Software development student at Digital House looking for my first work experience in the trade. I’m a dedicated person, focused and a lover of new challenges. Always managing a solid ethical structure, autonomy, analytical and problem-solving capacity, giving the best to grow together with colleagues.
      </p>
      <button type="button">
        <a target="_blank" href="https://drive.google.com/file/d/1ki9-aeiEqHjXlAjx6TRMMClc8TZOX5I1/view">Download CV</a>
      </button>      
    </div>
    <div class="img-main">
        <img src="../img/imgMain-fondo.png">
      </div>
  `
}
addMain();

const addAboutMe = () => {
  return aboutMeSection.innerHTML = `
    <div class="a-img-cont">
      <div class="img-marco">
        <img src="../img/imgAboutMe.png">
      </div>
    </div>
    <div class="a-text">
      <h1>- ABOUT ME</h1>
      <h3>Hello everybody!</h3>
      <h4>I am taking my first steps in the world of software development.</h4>
      <p>I am a software development student living in Uruguay. I am passionate about learning and deepening in new technologies, as I am convinced that they can help many people to achieve a better quality of life.</p>
      <p>I really like challenges, teamwork, meeting people to grow together and in this new world I have realized that human values are above all.
        For this reason and because everyone can grow as much as they want and that depends on you, I have decided to dedicate my life to software development.
      </p>
      <div class="a-btn">
        <button type="button" class="btn-hire">
          <a href="#contact-section">
            HIRE ME NOW
          </a>
        </button>
        <button type="button" class="btn-cv">
          <a target="_blank" href="https://drive.google.com/file/d/1ki9-aeiEqHjXlAjx6TRMMClc8TZOX5I1/view">VIEW RESUME</a>
        </button>
      </div>
    </div>
  `
}
addAboutMe();

const addSkills = () =>{
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
}
addSkills();

const addCertificates = () =>{
  return (certificateSection.innerHTML =
    certificates.map((x)=>{
      let { imgSrc, route } = x;
      return `
        <div class="c-img-container">
          <a href="${route}" target="_blank">
            <img src="img/cert${imgSrc}.png" alt="imagen de certificado">
          </a>          
        </div>
      `
    }).join("")
  )
}
addCertificates();

const addIng = () =>{
  return (certificateInsign.innerHTML =
    ing.map((x)=>{
      let { imgSrc, route } = x;
      return `
        <div class="c-img-container">
          <a href="${route}" target="_blank">
            <img src="img/ing${imgSrc}.png" alt="imagen de insignia">
          </a>
        </div>
      `
    }).join("")
  )
}
addIng();

const addProjects = () => {
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
}
addProjects();

const addContactInfo = () =>{
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
}
addContactInfo();

const addContact = () =>{
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
}
addContact();

const addFooter = () => {
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
addFooter();

window.onscroll = function() {
  if (window.pageYOffset > header.offsetHeight) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.addEventListener('click', () =>{
  header.scrollIntoView();
})