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
    var userName = document.getElementById("username");
    if (profile && name && email && contact && address && education && experience && skills && achievements && userName) {
        var nameElement = name.value;
        var emailElement = email.value;
        var contactElement = contact.value;
        var addressElement = address.value;
        var achievementsElement = achievements.value;
        var educationElement = education.value;
        var experienceElement = experience.value;
        var skillsElement = skills.value;
        var userNameElement = userName.value;
        var uniquePath = "resume/".concat(userNameElement.replace(/\s+/g, '_'), "_cv.html");
        var downloadLink = document.createElement('a');
        var resumeOutputElement = document.getElementById("resume-output");
        var profilePictureFile = (_a = profile.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var resumeOutput = "\n            <h2>Resume</h2>\n            ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile\" class=\"prof\">") : "No profile picture selected", "\n\n            <p>Name: <span id=\"edit-name\" class=\"editable\">").concat(nameElement, "</span></p>\n            <p>Email: <span id=\"edit-email\" class=\"editable\">").concat(emailElement, "</span></p>\n            <p>Contact: <span id=\"edit-contact\" class=\"editable\">").concat(contactElement, "</span></p>\n            <p>Address: <span id=\"edit-address\" class=\"editable\">").concat(addressElement, "</span></p>\n\n            <p>Key Achievements: <span id=\"edit-achievements\" class=\"editable\">").concat(achievementsElement, "</span></p>\n            <p>Education: <span id=\"edit-education\" class=\"editable\">").concat(educationElement, "</span></p>\n            <p>Experience: <span id=\"edit-experience\" class=\"editable\">").concat(experienceElement, "</span></p>\n            <p>Skills: <span id=\"edit-skills\" class=\"editable\">").concat(skillsElement, "</span></p>\n        ");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            downloadLink.href = "data:text/html;charset=utf-8,".concat(encodeURIComponent(resumeOutput));
            downloadLink.download = uniquePath;
            downloadLink.textContent = 'Download your Resume';
            resumeOutputElement.appendChild(downloadLink);
            makeEditable();
        }
        else {
            console.error("Some elements are missing!");
        }
    }
    else {
        console.error("Please fill in all the required fields!");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElements = element;
            var currentValue = currentElements.textContent || '';
            if (currentElements.tagName === "SPAN") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElements.textContent = input_1.value;
                    currentElements.style.display = "inline";
                    input_1.remove();
                });
                currentElements.style.display = "none";
                (_a = currentElements.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElements);
                input_1.focus();
            }
        });
    });
}
