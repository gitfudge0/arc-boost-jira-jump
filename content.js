/* This runs after a web page loads */
const DOMAIN = "https://your-domain.atlassian.net";
const container = document.createElement("div");
container.classList.add("jira-boost__container");

// Attach the container div to the body
document.body.appendChild(container);

// Create a new input element
const inputElement = document.createElement("input");
inputElement.type = "text";

container.appendChild(inputElement);

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const searchText = inputElement.value;
    const searchUrl = `${DOMAIN}/browse/${searchText}`;
    window.open(searchUrl, "_blank");
    container.style.display = "none";
    inputElement.value = "";
  }
});

document.addEventListener("keydown", function (event) {
  if (
    (event.metaKey && event.key === "j") ||
    (event.ctrlKey && event.key === "j")
  ) {
    container.style.display =
      container.style.display === "flex" ? "none" : "flex";
    document.querySelector(".jira-boost__container input").focus();
  }

  if (event.key === "Escape" || event.key === "Esc") {
    container.style.display = "none";
    inputElement.value = "";
  }
});
