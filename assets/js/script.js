"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
  makeButtonIDtheJobName();

  document
    .querySelectorAll(".info")
    .forEach((button) => button.addEventListener("click", infoPopup));

  document
    .querySelectorAll(".apply")
    .forEach((button) => button.addEventListener("click", applyPopup));
}

function makeButtonIDtheJobName() {
  let names = [];
  document
    .querySelectorAll("div h3")
    .forEach((name) =>
      names.push(name.textContent.split(" ").join("_").toLowerCase())
    );

  let buttons = document.querySelectorAll(".info");
  buttons.forEach((button, i) => button.classList.add(names[i]));
  let buttons2 = document.querySelectorAll(".apply");
  buttons2.forEach((button, i) => button.classList.add(names[i]));
}

async function infoPopup(e) {
  let backgroundPopup = document.querySelector(".popup-background");
  backgroundPopup.classList.add("visible");
  let job = e.target.classList.value.split("_").join(" ");
  document.querySelector(".pop-up").classList.toggle("hidden");
  let popup = document.querySelector(".pop-up div");
  popup.innerHTML = "";
  let description = "";
  let requirements = "";
  await fetch("../assets/js/jobs.json")
    .then((response) => response.json())
    .then((json) =>
      json.forEach(function (info) {
        if ("info " + info.title === job) {
          description = info.mainParagraph;
            info.responsibilities.forEach(function (requirement) {
            requirements += `<li>${requirement}</li>`;
            });
        }
      })
    );
  console.log(description)
  popup.insertAdjacentHTML(
    "afterbegin",
    `
    <div id="information">
    <h3>${job}</h3>
    <p>${description} </p>
    <h4>Requirements</h4>
    <ul>
     ${requirements}
    </ul>
    </div>
    `
  );
  document.querySelector("#close").addEventListener("click", closePopup);
}

function applyPopup(e) {
  let backgroundPopup = document.querySelector(".popup-background");
  backgroundPopup.classList.add("visible");
  let job = e.target.classList.value.split("_").join(" ");
  let popup = document.querySelector(".pop-up div");
  popup.innerHTML = "";
  popup.insertAdjacentHTML(
    "afterbegin",
    `
  <form> 
  <div class="rendered-form">
  <div class="">
      <h3>Apply now!</h3> <p>You can apply here for the job: ${job}</p></div>
  <div class="formbuilder-text form-group field-text-1671619917753">
      <label for="text-1671619917753" class="formbuilder-text-label">Name</label>
      <input type="text" placeholder="John Doe" name="text-1671619917753" access="false" maxlength="20" id="text-1671619917753" required>
  </div>
  </div>
  <div class="formbuilder-text form-group field-text-1671620106132">
      <label for="text-1671620106132" class="formbuilder-text-label">e-mail</label>
      <input type="text" placeholder="john.doe@dustydepot.be" name="text-1671620106132" access="false" id="text-1671620106132" required>
  </div>
  <div class="formbuilder-date form-group field-date-1671620155874">
      <label for="date-1671620155874" class="formbuilder-date-label">birthday</label>
      <input type="date" name="date-1671620155874" access="false" id="date-1671620155874" required>
  </div>
  <div class="formbuilder-textarea form-group field-textarea-1671620017313">
      <textarea type="textarea" class="form-control" name="textarea-1671620017313" access="false" id="textarea-1671620017313" placeholder="motivation letter" required></textarea>
  </div>
  <div class="formbuilder-file form-group field-file-1671619950969">
      <label for="file-1671619950969" class="formbuilder-file-label">Upload resume</label>
      <input type="file" class="form-control" name="file-1671619950969" access="false" multiple="false" id="file-1671619950969" required>
  </div>
  <div class="formbuilder-button form-group field-button-1671620059122">
  <input type="submit" value="Submit">
  </div>
</div>
</form>`
  );
  document.querySelector(".pop-up").classList.toggle("hidden");
  document.querySelector("#close").addEventListener("click", closePopup);
}

function closePopup() {
  document.querySelector(".pop-up").classList.toggle("hidden");
  let backgroundPopup = document.querySelector(".popup-background");
  backgroundPopup.classList.remove("visible");
}
