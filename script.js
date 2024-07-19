const userWaitlistForm = document.querySelector("#userWaitlistForm");
const submittedDetailsDiv = document.querySelector("#submittedDetailsDiv");

userWaitlistForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = document.querySelector("#fullName").value;
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const emailId = document.querySelector("#emailId").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const areGraduate = document.querySelector(
    "input[name='areGraduate']:checked"
  ).value;
  const selectWorkingType = document.querySelector("#selectWorkingType").value;
  const learnDescription = document.querySelector("#learnDescription").value;
  const howKnow = document.querySelectorAll("input[name='howKnow']:checked");

  const selectedCheckbox = [];
  for (let i = 0; i < howKnow.length; i++) {
    selectedCheckbox.push(howKnow[i].value);
  }

  const confirmation = document.querySelector("#confirmation").value;

  const submittedDetails = `
    <h2>Details Submitted:</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Email ID:</strong> ${emailId}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Are you a college graduate?:</strong> ${areGraduate}</p>
    <p><strong>Are you working anywhere full-time or part-time?:</strong> ${selectWorkingType}</p>
    <p><strong>Why do you want to learn web development?:</strong> ${learnDescription}</p>
    <p><strong>How did you come to know about us?:</strong> ${selectedCheckbox.join(
      ", "
    )}</p>
  `;

  if (confirmation === "confirmed") {
    submittedDetailsDiv.innerHTML = submittedDetails;
  }
});
