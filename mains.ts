
document.getElementById("form-resume")?.addEventListener("submit", function (event) {
    event?.preventDefault();

       var profile = document.getElementById("profilePicture") as HTMLInputElement;
       var name = document.getElementById("name") as HTMLInputElement;
       var email = document.getElementById("email") as HTMLInputElement;
       var contact = document.getElementById("contact") as HTMLInputElement;
       var address = document.getElementById("address") as HTMLInputElement;
       var education = document.getElementById("education") as HTMLInputElement;
       var experience = document.getElementById("experience") as HTMLInputElement;
       var skills = document.getElementById("skills") as HTMLInputElement;
       var achievements = document.getElementById("achievements") as HTMLInputElement;

     if ( profile && name && email && contact && address && education && experience && skills && achievements) {
       
        var nameElement = name.value;
        var emailElement = email.value;
        var contactElement = contact.value;
        var addressElement = address.value;
        var achievementsElement = education.value;
        var educationElement = education.value;
        var experienceElement = achievements.value;
        var skillsElement = skills.value;


         var profilePictureFile = profile.files?.[0]
         var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile): "";
 


        var resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `img src=" ${profilePictureURL}" alt="profile" class = "prof"> `: ""}

        <p> Name:<span id="edit-name" class="editable"> ${nameElement} </span></p>
        <p> Email: <span id="edit-email" class="editable"> ${emailElement} </span></p>
        <p> Contact: <span id="edit-contact" class="editable"> ${contactElement} </span></p>
        <p> Address: <span id="edit-address" class="editable"> ${addressElement} </span></p>

        <p> Key Achievements:<p id="edit-acheivements" class="editable"> ${achievementsElement} </p></p>
        <p> Education:<p  id="edit-education" class="editable"> ${educationElement} </p> </p>
        <p> Experience: <p  id="edit-education" class="editable">${experienceElement} </p></p>
        <p> Skills: <p  id="edit-education" class="editable"> ${skillsElement}</p></p>
        `

        var resumeOutputElement = document.getElementById("resume-output")
         if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
            makeEditable()
          } else {
            console.error("some elements are missing!")
        }

     }   
      
    }
)
function makeEditable(){
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(element => {
        element.addEventListener('click', function(){
            var currentElements = element as HTMLElement;
            var currentValue = currentElements.textContent || '';

            if(currentElements.tagName === "p" || currentElements.tagName === "span"){
                var input = document.createElement("input");
                input.type = "text"; // corrected here
                input.value = currentValue;
                input.classList.add("editing-input");

                input.addEventListener("blur",function(){
                    currentElements.textContent = input.value;
                    currentElements.style.display =" inline";
                    input.remove()
                })

                currentElements.style.display = "none";
                currentElements.parentNode?.insertBefore(input, currentElements);
                input.focus();
            }
        });
    });
}



