/* =============================== Typing Animation =================================== */
var typed = new Typed(".typing", {
    strings: [
      "",
      "that believes in the power of the beautiful game to inspire, unite, and bring joy to people around the world.",
      " that welcomes diversity, celebrates differences, and values the unique contributions of each and every member of our team and community.",
      "that embodies the spirit of competition, sportsmanship, and fair play, and always strives to leave a positive impact on the communities we serve.",
      "that stands for more than just results - we stand for passion, dedication, and the pursuit of a shared dream.",
      "that knows that greatness is not achieved overnight, but through hard work, perseverance, and an unwavering commitment to our goals.",
      "that is driven by a love for the game, a passion for competition, and a deep respect for our opponents and supporters.",
      "that believes that football has the power to change lives, to bring people together, and to inspire greatness in all who play or watch it."
    ],
    typeSpeed: 1,
    loop: true,
  });
  
  /* =============================== Aside =================================== */
  const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
  
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function () {
  
      removeBackSection();
  
      for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a").classList.contains("active")) {
          addBackSection(j);
        }
        navList[j].querySelector("a").classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
      if(window.innerWidth < 1200)
      {
          asideSectionTogglerBtn();
      }
    });
  }
  
  function addBackSection(num)
  {
      allSection[num].classList.add("back-section");
  }
  
  function removeBackSection()
  {
      for (let i = 0; i < totalSection; i++) {
          allSection[i].classList.remove("back-section");
        }
  }
  
  function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
  }
  
  function updateNav(element)
  {
      for(let i=0; i<totalNavList; i++)
      {
          navList[i].querySelector("a").classList.remove("active");
          const target = element.getAttribute("href").split("#")[1];
          if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
          {
              navList[i].querySelector("a").classList.add("active");
          }
      }
  }
  document.querySelector(".hire-me").addEventListener("click",function()
  {
      const sectionIndex = this.getAttribute("data-section-index");
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(sectionIndex);
  })
  
  const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", () => 
  {
    asideSectionTogglerBtn();
  })
  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i=0; i<totalSection;i++)
    {
      allSection[i].classList.toggle("open");
    }
  }
  
  /*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
contactName = document.getElementById("contact-name"),
contactEmail = document.getElementById("contact-email"),
contactProject = document.getElementById("contact-project"),
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
e.preventDefault();

//Check if field has a value
if (
  contactName.value === "" ||
  contactEmail.value === "" ||
  contactProject.value === ""
) {
  // Add and remove color
  contactMessage.classList.remove("color-blue");
  contactMessage.classList.add("color-red");

  //Show message
  contactMessage.textContent = "Write all the input fields !";
} else {
  //serviceID - templateId -#form -pyblickey
  emailjs
    .sendForm(
      "service_boygds7",
      "template_500sthk",
      "#contact-form",
      "Jv4ZWm5CNAkUSFpEA"
    )
    .then(
      () => {
        //Shoe message and add color
        contactMessage.classList.add("color-blue");
        contactMessage.textContent = "Message sent ✅";

        //Remove message after 5 sec
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      },
      (error) => {
        alert("OOPS! SOMETHING HAS FAILED...", error);
      }
    );

  //To clear the input field
  contactName.value = "";
  contactEmail.value = "";
  contactProject.value = "";
}
};
contactForm.addEventListener("submit", sendEmail);