var _a;
(_a = document.getElementById("form-resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event === null || event === void 0 ? void 0 : event.preventDefault();
    var profile = document.getElementById("profilePicture");
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var contact = document.getElementById("contact");
    var address = document.getElementById("address");
    var education = document.getElementById("education");
    var experience = document.getElementById("experience");
    var skills = document.getElementById("skills");
    var achievements = document.getElementById("achievements");
    if (profile && name && email && contact && address && education && experience && skills && achievements) {
        var nameElement = name.value;
        var emailElement = email.value;
        var contactElement = contact.value;
        var addressElement = address.value;
        var achievementsElement = education.value;
        var educationElement = education.value;
        var experienceElement = achievements.value;
        var skillsElement = skills.value;
        var profilePictureFile = (_a = profile.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "img src=\" ".concat(profilePictureURL, "\" alt=\"profile\" class = \"prof\"> ") : "", "\n\n        <p> Name:<span id=\"edit-name\" class=\"editable\"> ").concat(nameElement, " </span></p>\n        <p> Email: <span id=\"edit-email\" class=\"editable\"> ").concat(emailElement, " </span></p>\n        <p> Contact: <span id=\"edit-contact\" class=\"editable\"> ").concat(contactElement, " </span></p>\n        <p> Address: <span id=\"edit-address\" class=\"editable\"> ").concat(addressElement, " </span></p>\n\n        <p> Key Achievements:<p id=\"edit-acheivements\" class=\"editable\"> ").concat(achievementsElement, " </p></p>\n        <p> Education:<p  id=\"edit-education\" class=\"editable\"> ").concat(educationElement, " </p> </p>\n        <p> Experience: <p  id=\"edit-education\" class=\"editable\">").concat(experienceElement, " </p></p>\n        <p> Skills: <p  id=\"edit-education\" class=\"editable\"> ").concat(skillsElement, "</p></p>\n        ");
        var resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("some elements are missing!");
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElements = element;
            var currentValue = currentElements.textContent || '';
            if (currentElements.tagName === "p" || currentElements.tagName === "span") {
                var input = document.createElement("input");
                input.type = "text"; // corrected here
                input.value = currentValue;
                input.classList.add("editing-input");
                input.addEventListener("blur", function () {
                    currentElements.textContent = input.value;
                    currentElements.style.display = " inline";
                    input.remove();
                });
                currentElements.style.display = "none";
                (_a = currentElements.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElements);
                input.focus();
            }
        });
    });
}
