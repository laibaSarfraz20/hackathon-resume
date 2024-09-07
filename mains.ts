document.getElementById("form-resume")?.addEventListener("submit", function  (event) {
    event?.preventDefault();


    var name = document.getElementById("name") as HTMLInputElement;
    var email = document.getElementById("email") as HTMLInputElement;
    var contact = document.getElementById("contact") as HTMLInputElement;
    var address = document.getElementById("address") as HTMLInputElement;
    var education = document.getElementById("education") as HTMLInputElement;
    var experience = document.getElementById("experience") as HTMLInputElement;
    var skills = document.getElementById("skills") as HTMLInputElement;

    if (name && email && contact && address && education && experience && skills) {
        var nameElement = name.value;
        var emailElement = email.value;
        var contactElement = contact.value;
        var addressElement = address.value;
        var educationElement = education.value;
        var experienceElement = experience.value;
        var skillsElement = skills.value;


    var resumeOutput = `
  <h1>Resume</h2>
  <p> Name: ${nameElement} </p>
  <p> Email:  ${emailElement}</p>
  <p> Contact:  ${contactElement}</p>
  <p> Address:  ${addressElement}</p>
  <p> Education: ${educationElement} </p>
  <p> Experience: ${experienceElement} </p>
  <p> Skills:  ${skillsElement}</p>
      `
   
    var resumeOutputElement = document.getElementById("resume-output")
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else{
console.error("some elements are missing!")
    }

}else{
    console.error("one or more outputs")
}

}
)