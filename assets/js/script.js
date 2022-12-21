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
  popup.insertAdjacentHTML(
    "afterbegin",
    `<h3>Info</h3> <p>Here is some info about ${job}</p>`
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