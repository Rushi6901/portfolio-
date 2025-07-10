
document.addEventListener("DOMContentLoaded", function () {
  const toggleSections = document.querySelectorAll(".toggle-section");
  toggleSections.forEach(section => {
    const header = section.querySelector(".toggle-header");
    const content = section.querySelector(".toggle-content");
    if (content) content.style.display = "none";
    header.addEventListener("click", () => {
      const isVisible = content.style.display === "block";
      content.style.display = isVisible ? "none" : "block";
      header.classList.toggle("active", !isVisible);
    });
  });
  sendViewNotification();
  insertResumeDetails();
  insertProjectExperienceDetails();
  addContactIcons();
});
/* Other JS functions omitted for brevity – use full JS from previous response */
