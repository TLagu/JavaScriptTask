function displayFormContent() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let gender = "";
  const genderNode = document.querySelector("input[name = gender]:checked");
  if (genderNode) {
    for (let i = 0; i < genderNode.labels.length; i++) {
      gender = genderNode.labels[i].textContent;
    }
  }
  let questionTypeSelect = document.getElementById("questionType");
  let questionType =
    questionTypeSelect.options[questionTypeSelect.selectedIndex].text;
  let message = document.getElementById("message").value;
  let attachment = document.getElementById("attachment").value;
  let accept = document.getElementById("accept").value;

  document.getElementById("newFormContent").innerHTML = "";
  let toChange = document.getElementById("newFormContent");
  toChange.appendChild(createParagraph("firstName", firstName));
  toChange.appendChild(createParagraph("lastName", lastName));
  toChange.appendChild(createParagraph("email", email));
  toChange.appendChild(createParagraph("gender", gender));
  toChange.appendChild(createParagraph("questionType", questionType));
  toChange.appendChild(createParagraph("message", message));
  toChange.appendChild(createParagraph("attachment", attachment));
  toChange.appendChild(createParagraph("accept", accept));
}

function createParagraph(label, value) {
  let newParagraph = document.createElement("p");
  newParagraph.appendChild(createBold(label));
  newParagraph.innerText += value;
  return newParagraph;
}

function createBold(text) {
  let newBold = document.createElement("b");
  let newText = document.createTextNode(text + ": ");
  return newBold.appendChild(newText);
}

document.getElementById("submit").addEventListener("click", displayFormContent);
