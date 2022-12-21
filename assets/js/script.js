"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("DOM loaded");
  makeButtonIDtheJobName();
  document.querySelector("#info").addEventListener("click", infoPopµp);
  document.querySelector("#apply").addEventListener("click", applyPopµp);
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
  let job = e.target.classList.value.split("_").join(" ");
  console.log(job);
  console.log("info clicked");
  document.querySelector(".pop-up").classList.toggle("hidden");
  let popup = document.querySelector(".pop-up div");
  popup.innerHTML = "";
  //inserting the job form

  popup.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="rendered-form">
    <div class="">
        <h3>Info</h3> <p>Here is some info about ${job}</p></div>
    <div class="formbuilder-text form-group field-text-1671619917753">
        <label for="text-1671619917753" class="formbuilder-text-label">Name</label>
        <input type="text" placeholder="John Doe" name="text-1671619917753" access="false" maxlength="20" id="text-1671619917753">
    </div>
    <div class="formbuilder-text form-group field-text-1671620106132">
        <label for="text-1671620106132" class="formbuilder-text-label">e-mail</label>
        <input type="text" placeholder="john.doe@dustydepot.be" name="text-1671620106132" access="false" id="text-1671620106132">
    </div>
    <div class="formbuilder-date form-group field-date-1671620155874">
        <label for="date-1671620155874" class="formbuilder-date-label">birthday</label>
        <input type="date" name="date-1671620155874" access="false" id="date-1671620155874">
    </div>
    <div class="formbuilder-textarea form-group field-textarea-1671620017313">
        <label for="textarea-1671620017313" class="formbuilder-textarea-label">motivation letter</label>
        <textarea type="textarea" class="form-control" name="textarea-1671620017313" access="false" id="textarea-1671620017313"></textarea>
    </div>
    <div class="formbuilder-file form-group field-file-1671619950969">
        <label for="file-1671619950969" class="formbuilder-file-label">Upload resume</label>
        <input type="file" class="form-control" name="file-1671619950969" access="false" multiple="false" id="file-1671619950969">
    </div>
    <div class="formbuilder-button form-group field-button-1671620059122">
        <button type="button" class="btn-default btn" name="button-1671620059122" access="false" style="default" id="button-1671620059122">Submit</button>
    </div>
</div>
    `
  );
  document.querySelector("#close").addEventListener("click", closePopµp);
}

function applyPopµp() {
  console.log("apply clicked");
  let popup = document.querySelector(".pop-up div");
  popup.innerHTML = "";
  document.querySelector(".pop-up").classList.toggle("hidden");
  document.querySelector("#close").addEventListener("click", closePopµp);
}


function closePopµp() {
  document.querySelector(".pop-up").classList.toggle("hidden");
}