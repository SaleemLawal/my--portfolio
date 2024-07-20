particlesJS.load("particles-js", "particles.json");

const eventListenerSetup = () => {
  document
    .getElementById("intro--link")
    .addEventListener("click", () => setTimeout(navHandler, 0));
  document
    .getElementById("work--link")
    .addEventListener("click", () => setTimeout(navHandler, 0));
  document
    .getElementById("projects--link")
    .addEventListener("click", () => setTimeout(navHandler, 0));
  document
    .getElementById("contact--link")
    .addEventListener("click", () => setTimeout(navHandler, 0));
};

const navHandler = () => {
  const currentPath = window.location.hash;
  document.getElementById("modal").classList.add("show");
  document
    .querySelector(".sub--content")
    .classList.add("sub--content--display");
  switch (currentPath) {
    case "#intro":
      document.getElementById("intro").classList.add("show");
      break;
    case "#work":
      document.getElementById("work").classList.add("show");
      break;
    case "#projects":
      document.getElementById("projects").classList.add("show");
      break;
    case "#contact":
      document.getElementById("contact").classList.add("show");
      document
      .querySelector(".sub--content")
      .classList.add("contact--styling");
      break;

    default:
      break;
  }
};

const cancelHandler = () => {
  const modal = document.getElementById("modal");
  const subContent = document.querySelector(".sub--content");
  const intro = document.getElementById("intro");
  const work = document.getElementById("work");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const cancel = document.querySelector(".bi-x-lg");

  const hideElements = () => {
    const elements = [modal, intro, work, projects, contact, subContent];
    elements.forEach((element) => {
      element.classList.remove("show");
    });
    document
      .querySelector(".sub--content")
      .classList.remove("sub--content--display");
      document
      .querySelector(".sub--content").classList.remove("contact--styling");
  };

  const elements = [modal, cancel];
  elements.forEach((element) => {
    element.addEventListener("click", hideElements);
  });
};

const main = () => {
  eventListenerSetup();
  cancelHandler();
};
main();
