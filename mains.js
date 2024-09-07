// Get the form element
var form = document.getElementById("form-resume");
// Add event listener to the form
form === null || form === void 0 ? void 0 : form.addEventListener("submit", function (event) {
    // Prevent default form submission
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // Get the input values
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var contact = document.getElementById("contact");
    var address = document.getElementById("address");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var skills = document.getElementById("skills");
    if (name && email && contact && address && education && experience && skills) {
        var nameElement = name.value;
        var emailElement = email.value;
        var contactElement = contact.value;
        var addressElement = address.value;
        var educationElement = education.value;
        var experienceElement = experience.value;
        var skillsElement = skills.value;
        var resumeOutput = "\n  <h1>Resume</h2>\n  <p> Name: ".concat(nameElement, " </p>\n  <p> Email:  ").concat(emailElement, "</p>\n  <p> Contact:  ").concat(contactElement, "</p>\n  <p> Address:  ").concat(addressElement, "</p>\n  <p> Education: ").concat(educationElement, " </p>\n  <p> Experience: ").concat(experienceElement, " </p>\n  <p> Skills:  ").concat(skillsElement, "</p>\n      ");
        var resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("resume-output element is missing!");
        }
    }
    else {
        console.error("one or more output elements are missing!");
    }
});
