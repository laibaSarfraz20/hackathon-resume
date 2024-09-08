
document.getElementById("form-resume")?.addEventListener("submit", function (event) {
    event?.preventDefault();

    const profile = document.getElementById("profilePicture") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const contact = document.getElementById("contact") as HTMLInputElement;
    const address = document.getElementById("address") as HTMLInputElement;
    const education = document.getElementById("education") as HTMLInputElement;
    const experience = document.getElementById("experience") as HTMLInputElement;
    const skills = document.getElementById("skills") as HTMLInputElement;
    const achievements = document.getElementById("achievements") as HTMLInputElement;
    const userName = document.getElementById("username") as HTMLInputElement;

    if (profile && name && email && contact && address && education && experience && skills && achievements && userName) {
        const nameElement = name.value;
        const emailElement = email.value;
        const contactElement = contact.value;
        const addressElement = address.value;
        const achievementsElement = achievements.value;
        const educationElement = education.value;
        const experienceElement = experience.value;
        const skillsElement = skills.value;
        const userNameElement = userName.value;

        const uniquePath = `resume/${userNameElement.replace(/\s+/g, '_')}_cv.html`;

        const downloadLink = document.createElement('a');
        const resumeOutputElement = document.getElementById("resume-output");

        const profilePictureFile = profile.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";

        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile" class="prof">` : "No profile picture selected"}

            <p>Name: <span id="edit-name" class="editable">${nameElement}</span></p>
            <p>Email: <span id="edit-email" class="editable">${emailElement}</span></p>
            <p>Contact: <span id="edit-contact" class="editable">${contactElement}</span></p>
            <p>Address: <span id="edit-address" class="editable">${addressElement}</span></p>

            <p>Key Achievements: <span id="edit-achievements" class="editable">${achievementsElement}</span></p>
            <p>Education: <span id="edit-education" class="editable">${educationElement}</span></p>
            <p>Experience: <span id="edit-experience" class="editable">${experienceElement}</span></p>
            <p>Skills: <span id="edit-skills" class="editable">${skillsElement}</span></p>
        `;

        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            downloadLink.href = `data:text/html;charset=utf-8,${encodeURIComponent(resumeOutput)}`;
            downloadLink.download = uniquePath;
            downloadLink.textContent = 'Download your Resume';
            resumeOutputElement.appendChild(downloadLink);

            makeEditable();
        } else {
            console.error("Some elements are missing!");
        }
    } else {
        console.error("Please fill in all the required fields!");
    }
});

function makeEditable() {
    const editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElements = element as HTMLElement;
            const currentValue = currentElements.textContent || '';

            if (currentElements.tagName === "SPAN") {
                const input = document.createElement("input");
                input.type = "text";
                input.value = currentValue;
                input.classList.add("editing-input");

                input.addEventListener("blur", function () {
                    currentElements.textContent = input.value;
                    currentElements.style.display = "inline";
                    input.remove()
                })

                currentElements.style.display = "none";
                currentElements.parentNode?.insertBefore(input, currentElements);
                input.focus();
            }
        });
    });
}



