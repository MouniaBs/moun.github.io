function showSection(sectionId) {
  var section = document.getElementById(sectionId);
  var content = section.innerText || section.textContent;
  alert(content);
}

function goToFacebook() {
  window.location.href =
    "https://www.facebook.com/profile.php?id=100067471292962&mibextid=ZbWKwL";
}
function showPhoto() {
  showSection("personal-photo");
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
});
