const places = {
  packages: [
    {
      name: "HongKong & Macau",
      status: "Extra Bonus!!",
      image: "/images/hong-kong.jpg",
    },
    {
      name: "Dubai tourism",
      status: "Destination!",
      image: "/images/burj-khalifa.jpg",
    },
    {
      name: "Rome, Itlay",
      status: "Destination!",
      image: "/images/RomeItaly.jpg",
    },
    {
      name: "Japan Highlights",
      status: "Destination!",
      image: "/images/japan.jpg",
    },
    {
      name: "Netherland highlights",
      status: "Extra Bonus!!",
      image: "/images/Netherlands.jpg",
    },
    {
      name: "Vietnam Highlights",
      status: "Special offer!",
      image: "/images/vietnam.jpg",
    },
    {
      name: "India Highlights",
      status: "Destination!",
      image: "/images/tajmahal.webp",
    },
    {
      name: "Spain ",
      status: "Extra Bonus!!",
      image: "/images/barcelona.jpg",
    },
    {
      name: "Singapore Highlights",
      status: "Special offer!",
      image: "/images/singapore.jpg",
    },
  ],
};
// for offer pakages
const packages = document.getElementById("packages");
//console.log(places["packages"]);
for (i = 0; i < places["packages"].length; i++) {
  let pactemp = `<div class="package-card slider border-box">
      <div class="image-card">
          <img src=${places["packages"][i]["image"]} class="img" alt="">
      </div>
      <div class="image-info  border-box">
          <p class="place-text">${places["packages"][i]["name"]}</p>
          <p>${places["packages"][i]["status"]}</p>
          <div class="arrow border-box right clearfix"></div>

          </div>
     
  </div>`;
  packages.innerHTML += pactemp;
}

// for sidenav
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// for slider
let slideIndex = 1;

const btnPressed = (n) => {
  showSlides((slideIndex += n));
};
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};

const showSlides = (n) => {
  const slides = document.getElementsByClassName("myslides");
  console.log(slides, slideIndex, n);
  if (n > slides.length) {
    slideIndex = slides.length;
    return;
  }
  if (n < 1) {
    slideIndex = 1;
    return;
  }
  let i = slideIndex;
  for (let j = 0; j < slides.length; j++) {
    if (slides[j].classList.contains("slide-left")) {
      slides[j].classList.remove("slide-left");
    }
    if (slides[j].classList.contains("slide-right")) {
      slides[j].classList.remove("slide-right");
    }
  }

  for (let j = slideIndex; j < slides.length; j++) {
    if (slides[j].classList.contains("slide-right")) {
      slides[j].classList.remove("slide-right");
    }
    slides[j].classList.add("slide-left");
  }

  if (i <= slides.length) {
    if (slides[i - 1].classList.contains("slide-left")) {
      slides[i - 1].classList.remove("slide-left");
    }
    slides[i - 1].classList.add("slide-right");
  }
};
showSlides(slideIndex);

// smooth horizontal scrolling
var slidedLeft = -1,
  slidedRight = -1;
let prevClass = null;
const offerPressed = (className, p) => {
  prevClass = null ? className : prevClass;
  slidedLeft = prevClass == className ? slidedLeft : -1;
  slidedRight = prevClass == className ? slidedRight : -1;
  console.log(prevClass, prevClass == className);
  prevClass = className;

  const pacCards = document.getElementsByClassName(className);
  // let totWidth = window.innerWidth;
  // console.log(totWidth);
  let style = pacCards[0].currentStyle || window.getComputedStyle(pacCards[0]);
  //console.log(style.marginLeft, style.width);
  let pacWidth =
    parseInt(style.marginLeft.split("px")[0]) +
    parseInt(style.width.split("px")[0]) +
    parseInt(style.marginRight.split("px")[0]);
  // let numOfPacs = Math.floor(window.innerWidth / pacWidth);
  let numOfPacs = 1;
  console.log(pacWidth, numOfPacs);
  console.log(
    slidedLeft,
    "[slidedLeft]",
    slidedRight,
    "[slidedRight]",
    "[before]"
  );
  slidedLeft =
    slidedLeft == -1
      ? slidedLeft + Math.floor(window.innerWidth / pacWidth) + 1
      : slidedLeft;
  // slidedRight=slidedRight==-1?slidedRight+pacCards.length-Math.floor(window.innerWidth / pacWidth):slidedRight;
  console.log(slidedLeft, "[slidedLeft]", slidedRight, "[slidedRight]");
  let matrix = new WebKitCSSMatrix(style.transform);
  let oldTransform = matrix.m41;
  console.log(slidedLeft < pacCards.length);
  //slidedRight = slidedRight<Math.floor(window.innerWidth / pacWidth)? slidedRight+1:slidedRight;
  if (p == 1) {
    if (slidedLeft < pacCards.length) {
      for (let i = 0; i < pacCards.length; i++) {
        // console.log('jdnjsd')
        let slideLen = ~(numOfPacs * pacWidth) + 1 + oldTransform + "px";
        let transform = "translateX(" + slideLen + ")";
        // console.log(slideLen,'[slideLen]',"translateX("+ slideLen +");",pacCards[i].style.transform);
        pacCards[i].style.transform = transform;
        // pacCards[i].style.display = 'none';
      }
      slidedLeft += numOfPacs;
      slidedRight =
        slidedRight == -1 ? slidedRight + pacCards.length : slidedRight;
      slidedRight -= numOfPacs;
    }
  } else {
    slidedRight =
      slidedRight < Math.floor(window.innerWidth / pacWidth)
        ? slidedRight + 1
        : slidedRight;
  }
  if (p == -1) {
    if (slidedRight > 0 && slidedRight < pacCards.length) {
      for (let i = 0; i < pacCards.length; i++) {
        //console.log('jdnjsd')
        let slideLen = numOfPacs * pacWidth + oldTransform + "px";
        let transform = "translateX(" + slideLen + ")";
        //console.log(slideLen,'[slideLen]',"translateX("+ slideLen +");",pacCards[i].style.transform);
        pacCards[i].style.transform = transform;
        // pacCards[i].style.display = 'none';
      }
      slidedRight += numOfPacs;
      slidedLeft -= numOfPacs;
    }
  }
  //console.log((~ (numOfPacs*pacWidth)+1 )+ 'px')
  // let x = style.transform
  // console.log(window.getComputedStyle(pacCards[0]).getPropertyValue('transform'))
  // if (p == -1) {
  //   for (let i = 0; i < pacCards.length; i++) {
  //     pacCards[i].classList.add("smooth-slide-right");
  //   }
  //}
};
const prev = document.getElementsByClassName("slide-prev");
const nxt = document.getElementsByClassName("slide-nxt");
for (let i = 0; i < prev.length; i++) {
  var slidedLeft = -1,
    slidedRight = -1;
  prev[i].addEventListener("click", (e) => {
    console.log(e.path[1].children[2].children[0].classList[0], "yes");
    let className = e.path[1].children[2].children[0].classList[0];
    offerPressed(className, -1);
  });
  nxt[i].addEventListener("click", (e) => {
    console.log(e.path[1].children[2].children[0].classList[0], "yes");
    let className = e.path[1].children[2].children[0].classList[0];
    offerPressed(className, 1);
  });
}

// for modal

const createModal = () => {
  let modal = document.createElement("DIV");
  modal.setAttribute("class", "modal");
  modal.setAttribute("id", "myModal");
  let modalContent = document.createElement("DIV");
  modalContent.setAttribute("class", "modal-content");
  let closeBtn = document.createElement("SPAN");
  closeBtn.setAttribute("class", "close-btn");
  let closeText = "&times;";
  closeBtn.innerHTML = closeText;
  modalContent.appendChild(closeBtn);
  let formHead = document.createElement("DIV");
  let formHeadP = document.createElement("P");
  formHead.setAttribute("class", "centre");
  formHeadP.innerHTML = "Contact Form";
  formHead.append(formHeadP);
  modalContent.appendChild(formHead);
  let formContent = createForm();
  console.log(formContent);
  modalContent.appendChild(formContent);
  modal.appendChild(modalContent);
  console.log(modal);
  document.body.appendChild(modal);
};
// form in modal
// form inputs detaila in json
const formInputs = {
                      elements: [
                        {
                          elementName: "INPUT",
                          label: [
                            "First name",
                            "Last Name",
                            "Email Address",
                            "Phone Number",
                            "Are you willing*",
                            "Gender*",
                            "Kind of Places you would like to visit*",
                            "Stars*",
                          ],
                          Attr: [
                            {
                              name: "firstname",
                              type: "text",
                              class: "input",
                              mandatory: true,
                              placeholder: "Enter the first name*",
                              "data-Error": "Please enter a First Name",
                              "data-helper": "non-empty",
                              isvalid: false,
                            },
                            {
                              name: "lastname",
                              type: "text",
                              class: "input",
                              mandatory: false,
                              placeholder: "Enter the last name",
                              "data-Error": "Please enter a Last Name",
                              "data-helper": "",
                            },
                            {
                              name: "email",
                              type: "email",
                              class: "input",
                              mandatory: true,
                              placeholder: "Enter the Email address*",
                              "data-Error": "Please enter a Valid  Email address",
                              "data-helper": "email-format",
                            },
                            {
                              name: "phno",
                              type: "text",
                              class: "input",
                              mandatory: true,
                              placeholder: "Enter the Phone number*",
                              "data-Error": "Please enter a Valid Phone number",
                              "data-helper": "phone-format",
                            },

                            {
                              label: ["Yes", "no", "maybe"],
                              name: ["will", "will", "will"],
                              type: "radio",
                              id: ["Yes", "no", "maybe"],
                              class: "input",
                              mandatory: false,
                              value: ["Yes", "no", "maybe"],
                              group: "will",
                              "data-Error": "Please select yes or no",
                              "data-helper": "group",
                            },
                            {
                              label: ["Male", "Female", "Others"],
                              name: ["gender", "gender", "gender"],
                              type: "radio",
                              id: ["male", "female", "others"],
                              class: "input",
                              mandatory: true,
                              value: ["male", "female", "others"],
                              group: "gender",
                              "data-Error": "Please fill the gender field",
                              "data-helper": "group",
                            },
                            {
                              label: ["Hill Station", "Islands", "Historical momuments", "Beach"],
                              name: ["hill", "Islands", "Historical", "Beach"],
                              type: "checkbox",
                              id: ["hill", "Islands", "Historical", "Beach"],
                              class: "input",
                              mandatory: false,
                              value: ["hill", "Islands", "Historical", "Beach"],
                              group: "places",
                              "data-Error": "Please Select 1 or more places",
                              "data-helper": "group",
                            },

                            {
                              label: ["1", "2", "3"],
                              name: ["1", "2", "3"],
                              type: "checkbox",
                              id: ["1", "2", "3"],
                              class: "input",
                              mandatory: true,
                              value: ["1", "2", "3"],
                              group: "stars",
                              "data-Error": "Please Select stars",
                              "data-helper": "group",
                            },
                          ],
                        },
                        {
                          elementName: "SELECT",
                          label: ["Country*"],
                          Attr: [
                            {
                              name: "country",
                              class: "input",
                              id: "country",
                              mandatory: true,
                              "data-Error": "Please Select a country",
                              "data-helper": "select",
                            },
                          ],
                          options: {
                            value: [
                              "None",
                              "India",
                              "Argentina",
                              "Russia",
                              "China",
                              "Srilanka",
                              "Japan",
                              "Brazil",
                              "Canada",
                              "Germany",
                              "Spain",
                              "France",
                              "Turkey",
                              "Italy",
                              "Vietnam",
                              "Thailand",
                            ],
                          },
                        },
                        {
                          elementName: "TEXTAREA",
                          label: ["Comments"],
                          Attr: [
                            {
                              name: "comments",
                              class: "input",
                              mandatory: true,
                              placeholder: "Please write your comments",
                              "data-Error": "Please fill comments field",
                              "data-helper": "non-empty",
                            },
                          ],
                        },
                      ],
};
let alertmsg = false,
  isvalid = false,
  c = 0,
  prevValid,
  prevmsg,
  prevGroup,
  prevChecker,
  finalValid,
  formDetails = {};
//  validation in form
const removeError = () => {
  errDiv = document.getElementById("error");
  if (errDiv) {
    let classes = errDiv.getAttribute("class");
    errDiv.setAttribute("class", classes + " hide");
    errDiv.remove();
  }
};
const removeInpErrBorder = (inp) => {
  inp.classList.remove("error");
};
const createFormErrorMsg = (errmsg, inpEle) => {
  if (document.getElementById("error")) {
    return;
  }
  const errDiv = document.createElement("DIV");
  errDiv.setAttribute("class", "error-container");
  errDiv.setAttribute("id", "error");
  const errDivMsg = document.createTextNode(errmsg);
  errDiv.appendChild(errDivMsg);
  let classes = inpEle.getAttribute("class");
  inpEle.setAttribute("class", classes + " error");
  document.body.append(errDiv);
  if (inpEle.getAttribute("group")) {
    console.log(
      document.querySelectorAll("[group=" + inpEle.getAttribute("group") + "]")
    );
    let groupEle = document.querySelectorAll(
      "[group=" + inpEle.getAttribute("group") + "]"
    );
    for (let i = 0; i < groupEle.length; i++) {
      groupEle[i].addEventListener("focus", (e) => {
        removeError();
        removeInpErrBorder(groupEle[i]);
      });
    }
  }
  inpEle.addEventListener("focus", () => {
    removeError();
    removeInpErrBorder(inpEle);
  });
};

const validateInput = (inpElement) => {
  let typeInp = inpElement.getAttribute("type"),
    mandatory = inpElement.getAttribute("mandatory"),
    checker = inpElement.getAttribute("data-helper"),
    val = inpElement.value.trim(),
    err = inpElement.getAttribute("data-error"),
    emailPattern = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    phonePattern = /^([0-9]{10})/;
  prevChecker = prevChecker == null ? checker : prevChecker;
  if (mandatory == "true" && val != "" && checker == "non-empty") {
    isvalid = true;
    //console.log(inpElement,err,isvalid,alertmsg,val,'[yes]');
  } else if (
    mandatory == "true" &&
    val != "" &&
    checker == "email-format" &&
    emailPattern.test(val)
  ) {
    isvalid = isvalid && true;
  } else if (
    mandatory == "true" &&
    val != "" &&
    checker == "phone-format" &&
    phonePattern.test(val)
  ) {
    isvalid = isvalid && true;
  } else if (mandatory == "false") {
    isvalid = isvalid && true;
  } else {
    isvalid = false;
  }
  if (checker == "group") {
    prevmsg = prevmsg == null ? err : prevmsg;
    prevGroup =
      prevGroup == null ? inpElement.getAttribute("group") : prevGroup;
    console.log(prevGroup, checker, "[watsup]", isvalid, mandatory);
    if (inpElement.getAttribute("group") === prevGroup) {
      isvalid = inpElement.checked;
      //  console.log(isvalid,'[isvalid cheked]',inpElement)
      prevValid = prevValid == null ? isvalid : prevValid;
      isvalid = prevValid || isvalid;
      prevValid = isvalid;
      if (mandatory == "false") {
        (isvalid = true), (prevValid = isvalid);
        console.log(checker, "[yaiudasuigsgdgdsdsgdsddsdds]");
      }
      return;
    } else if (
      prevValid == true &&
      inpElement.getAttribute("group") != prevGroup
    ) {
      //  console.log("here");
      prevmsg = err;
      prevChecker = checker;
      prevGroup = null;
      prevValid = inpElement.checked ? true : null;
      return;
    } else if (
      prevValid == false &&
      inpElement.getAttribute("group") != prevGroup
    ) {
      prevGroup = null;
      prevValid = null;
    } else {
      //console.log("yes prevoiu null");
    }
  } else if (checker == "group" && mandatory == false) {
    isvalid = isvalid && true;
    prevValid = isvalid;
  }
  if (checker == "select") {
    // console.log("here select", inpElement.value);
    isvalid = inpElement.value != "None" ? true : false;
  }

  alertmsg = isvalid == true ? true : false;
  if (prevValid == false) {
    alertmsg = false;
    err = prevmsg;
  }
  if (alertmsg == false && c == 0) {
    c += 1;
    //console.log(err, prevmsg, " hdkjshjshsdhfdshfd[error]");
    if (
      (prevChecker == "group" && prevValid == false) ||
      (checker == "group" && isvalid == false)
    ) {
      // console.log(inpElement, "[previousSibling]", prevChecker, "[prevchecker]",prevValid,'[prevalid]','isvalid',isvalid);
      while (inpElement.previousSibling.tagName != "INPUT") {
        inpElement = inpElement.previousSibling;
      }
      inpElement = inpElement.previousSibling;
      createFormErrorMsg(prevmsg, inpElement);
    } else {
      createFormErrorMsg(err, inpElement);
    }
    alertmsg = true;
    finalValid = false;
  }
  if (isvalid == true) {
    formDetails[inpElement.getAttribute("name")] = inpElement.value;
  }
  prevChecker = checker;
};
// dynamic form creation
const createForm = () => {
  let form = document.createElement("FORM");
  form.setAttribute("name", "contactform");
  form.setAttribute("id", "myform");
  let radiolab;
  for (let i = 0; i < formInputs["elements"].length; i++) {
    for (let j = 0; j < formInputs["elements"][i]["label"].length; j++) {
      let label = document.createElement("LABEL");
      let labelText = document.createTextNode(
        formInputs["elements"][i]["label"][j] + " : "
      );
      label.setAttribute("class", "labelform");
      label.appendChild(labelText);
      form.appendChild(label);
      if (
        formInputs["elements"][i]["Attr"][j]["type"] == "radio" ||
        formInputs["elements"][i]["Attr"][j]["type"] == "checkbox"
      ) {
        for (
          let k = 0;
          k < formInputs["elements"][i]["Attr"][j]["label"].length;
          k++
        ) {
          let Inp = document.createElement(
            formInputs["elements"][i]["elementName"]
          );
          Object.keys(formInputs["elements"][i]["Attr"][j]).forEach((key) => {
            if (Array.isArray(formInputs["elements"][i]["Attr"][j][key])) {
                Inp.setAttribute(
                  key,
                  formInputs["elements"][i]["Attr"][j][key][k]
                );
            
            } else {
              Inp.setAttribute(key, formInputs["elements"][i]["Attr"][j][key]);
            }
           
          });
          form.appendChild(Inp);
          radiolab = document.createElement("LABEL");
          radiolab.setAttribute("class", "labelform");
          let valName = document.createTextNode(
            formInputs["elements"][i]["Attr"][j]["label"][k]
          );
          radiolab.appendChild(valName);
          form.appendChild(radiolab);
        }
      } else {
        let Inp = document.createElement(
          formInputs["elements"][i]["elementName"]
        );
        console.log(Object.keys(formInputs["elements"][i]["Attr"][j]));
        Object.keys(formInputs["elements"][i]["Attr"][j]).forEach((key) => {
          Inp.setAttribute(key, formInputs["elements"][i]["Attr"][j][key]);
        });
        if (formInputs["elements"][i]["elementName"] == "TEXTAREA") {
          Inp.setAttribute("col", "8");
        }

        if (formInputs["elements"][i]["elementName"] == "SELECT") {
          for (
            let op = 0;
            op < formInputs["elements"][i]["options"]["value"].length;
            op++
          ) {
            let option = document.createElement("OPTION");
            option.setAttribute(
              "value",
              formInputs["elements"][i]["options"]["value"][op]
            );
            let optionText = document.createTextNode(
              formInputs["elements"][i]["options"]["value"][op]
            );
            option.appendChild(optionText);
            Inp.appendChild(option);
          }
        }
        form.appendChild(Inp);
      }
    }
  }
  let submitBtn = document.createElement("BUTTON");
  let sub = document.createTextNode("SUBMIT");
  submitBtn.setAttribute("value", "submit");
  submitBtn.setAttribute("class", "classicBtn white submit");
  submitBtn.appendChild(sub);
  form.appendChild(submitBtn);
  document.body.appendChild(form);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    alertmsg = false;
    isvalid = false;
    c = 0;
    prevChecker = null;
    finalValid = true;
    validity = null;
    prevmsg = null;
    prevValid = null;
    prevGroup = null;
    let formeEle = document.forms["contactform"];
    for (let i = 0; i < formeEle.children.length; i++) {
      if (
        formeEle.children[i].nodeName == "INPUT" ||
        formeEle.children[i].nodeName == "SELECT" ||
        formeEle.children[i].nodeName == "TEXTAREA"
      ) {
        validateInput(formeEle.children[i]);
      }
    }
    console.log(finalValid, "[final valid]");

    if (finalValid) {
      const jsondata = JSON.stringify(formDetails);
      console.log(jsondata);
    } else {
      console.log("Error in form details");
    }
  });
  return form;
};
// function call to create modal form
createModal();
const modal = document.getElementById("myModal");
const closebtn = document.getElementsByClassName("close-btn")[0];
const openbtn = document.getElementById("popup-btn");
console.log(closebtn);
openbtn.onclick = function () {
  console.log("yex");
  modal.style.display = "block";
};

closebtn.onclick = function () {
  modal.style.display = "none";
  removeError();
  inpEle = document.getElementsByClassName("error")[0];
  if (inpEle) removeInpErrBorder(inpEle);
  document.getElementById("myform").reset();
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("myform").reset();
    removeError();
    inpEle = document.getElementsByClassName("error")[0];
    if (inpEle) removeInpErrBorder(inpEle);
  }
};







// if (formInputs["elements"][i]["Attr"][j]["type"])
//   Inp.setAttribute(
//     "type",
//     formInputs["elements"][i]["Attr"][j]["type"]
//   );
// if (formInputs["elements"][i]["Attr"][j]["id"])
//   Inp.setAttribute("id", formInputs["elements"][i]["Attr"][j]["id"]);
// Inp.setAttribute(
//   "data-error",
//   formInputs["elements"][i]["Attr"][j]["data-Error"]
// );
// if (formInputs["elements"][i]["Attr"][j]["mandatory"] === true)
//   Inp.setAttribute("mandatory", "");
// if (formInputs["elements"][i]["Attr"][j]["name"] === "phno")
//   Inp.setAttribute("maxlength", 10);
// if (formInputs["elements"][i]["elementName"] == "TEXTAREA")
//   Inp.setAttribute("col", "8");

// if (formInputs["elements"][i]["elementName"] == "SELECT") {
//   for (
//     let op = 0;
//     op < formInputs["elements"][i]["options"]["value"].length;
//     op++
//   ) {
//     let option = document.createElement("OPTION");
//     option.setAttribute(
//       "value",
//       formInputs["elements"][i]["options"]["value"][op]
//     );
//     let optionText = document.createTextNode(
//       formInputs["elements"][i]["options"]["value"][op]
//     );
//     option.appendChild(optionText);
//     Inp.appendChild(option);
//   }
// }
// Inp.setAttribute("name", formInputs["elements"][i]["Attr"][j]["name"]);
// Inp.setAttribute(
//   "class",
//   formInputs["elements"][i]["Attr"][j]["class"]
// );
// Inp.setAttribute(
//   "mandatory",
//   formInputs["elements"][i]["Attr"][j]["mandatory"]
// );
// Inp.setAttribute(
//   "data-helper",
//   formInputs["elements"][i]["Attr"][j]["data-helper"]
// );

// if (formInputs["elements"][i]["Attr"][j]["placeholder"])
//   Inp.setAttribute(
//     "placeholder",
//     formInputs["elements"][i]["Attr"][j]["placeholder"]
//   );


 // Inp.setAttribute(
          //   "type",
          //   formInputs["elements"][i]["Attr"][j]["type"]
          // );
          // Inp.setAttribute(
          //   "value",
          //   formInputs["elements"][i]["Attr"][j]["value"][k]
          // );
          // Inp.setAttribute(
          //   "name",
          //   formInputs["elements"][i]["Attr"][j]["name"][k]
          // );
          // Inp.setAttribute(
          //   "class",
          //   formInputs["elements"][i]["Attr"][j]["class"]
          // );
          // Inp.setAttribute(
          //   "data-error",
          //   formInputs["elements"][i]["Attr"][j]["data-Error"]
          // );
          // Inp.setAttribute(
          //   "data-helper",
          //   formInputs["elements"][i]["Attr"][j]["data-helper"]
          // );
          // Inp.setAttribute(
          //   "mandatory",
          //   formInputs["elements"][i]["Attr"][j]["mandatory"]
          // );
          // Inp.setAttribute(
          //   "group",
          //   formInputs["elements"][i]["Attr"][j]["group"]
          // );
         
         