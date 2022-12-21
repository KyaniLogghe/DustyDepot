"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM loaded");
  makeButtonIDtheJobName();

  document
    .querySelectorAll("#info")
    .forEach((button) => button.addEventListener("click", infoPopµp));

  document
    .querySelectorAll("#apply")
    .forEach((button) => button.addEventListener("click", applyPopµp));
}

function makeButtonIDtheJobName() {
  let names = [];
  document
    .querySelectorAll("div h3")
    .forEach((name) =>
      names.push(name.textContent.split(" ").join("_").toLowerCase())
    );

  let buttons = document.querySelectorAll("#info");
  buttons.forEach((button, i) => button.classList.add(names[i]));
  console.log(names);
}

function infoPopµp(e) {
  let backgroundPopup = document.querySelector(".popup-background");
  backgroundPopup.classList.add("visible");
  let job = e.target.classList.value.split("_").join(" ");
  document.querySelector(".pop-up").classList.toggle("hidden");
  let popup = document.querySelector(".pop-up div");
  popup.innerHTML = "";

  let description = "";
  //inserting the job form
  switch (job) {
    case "warehouse manager":
      description = ` <p>We are looking for an organized warehouse manager to supervise the receipt, dispatching, and storage of merchandise in our warehouse. The warehouse manager will oversee picking, storage, receiving, dispatching, security, maintenance, sanitation, and administrative functions. You will oversee, train, evaluate and reward staff. You will ensure the maintenance of company assets.

        To ensure success you need to multitask effectively in a fast-paced, dynamic environment, and perform your duties in a manner that maximizes profits. Top applicants are dedicated, competent, and have strong leadership skills. </p>  <h4> responsibilities : </h4> <ul>  <li> Overseeing receiving, warehousing, and distribution operations. </li>
        <li> Implementing operational policies and procedures. </li>
        <li>  Implementing and overseeing security operations.  </li>
        <li> Ensuring effective and safe use of warehouse equipment. </li> 
        <li> Ensuring the safety of staff.  </li>
        <li>  Assisting with deliveries where required. </li> </ul>`;
      break;
    case "team manager":
      description = "2";
      break;
    case "warehouse employee":
      description = "3";
      break;
    case "customer service representitive":
      description = "4";
      break;
    case "customer service employee":
      description = "5";
      break;
    case "it manager":
      description = "6";
      break;
  }
  popup.insertAdjacentHTML(
    "afterbegin",
    `
    <div id="information">
    <h3>${job}</h3>
    ${description}
    </div>
    `
  );
  document.querySelector("#close").addEventListener("click", closePopµp);
}

function applyPopµp(e) {
  let backgroundPopup = document.querySelector(".popup-background");
  backgroundPopup.classList.add("visible");
  let job = e.target.classList.value.split("_").join(" ");
  console.log("apply clicked");
  let popup = document.querySelector(".pop-up div");
  popup.innerHTML = "";
  popup.insertAdjacentHTML("afterbegin", `
  <form> 
  <div class="rendered-form">
  <div class="">
      <h3>Info</h3> <p>Here is some info about ${job}</p></div>
  <div class="formbuilder-text form-group field-text-1671619917753">
      <label for="text-1671619917753" class="formbuilder-text-label">Name</label>
      <input type="text" placeholder="John Doe" name="text-1671619917753" access="false" maxlength="20" id="text-1671619917753" required>
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
      <label for="textarea-1671620017313" class="formbuilder-textarea-label">motivation letter</label>
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
</form>`);
  document.querySelector(".pop-up").classList.toggle("hidden");
  document.querySelector("#close").addEventListener("click", closePopµp);
}

function closePopµp() {
  document.querySelector(".pop-up").classList.toggle("hidden");
  let backgroundPopup = document.querySelector(".popup-background");
  backgroundPopup.classList.remove("visible");
}
