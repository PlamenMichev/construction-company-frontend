// Load the projects
$(document).ready(function () {
  // Load the projects
  console.log("Loading projects...");
  $.get("xml/projects.xml", function (data) {
    // Load the projects
    console.log("Projects loaded.");
    var projects = $(data).find("projects").slice(0, 4);

    projects.each((index, element) => {
      const name = $(element).find("name").text();
      const type = capitalizeFirstLetter($(element).find("type").text());
      const manHours = $($(element).find("resource")).find("manHours").text();
      const totalHours = $($(element).find("resource"))
        .find("expectedTotalHours")
        .text();
      const budget = $(element).find("budget").text();
      const timeline = $(element).find("timeline").text();
      const size = $(element).find("size").text();

      const nameH3 = $("<h3></h3>").text(name);
      const pType = $("<p></p>").text(type);

      const manHoursLi = $("<li></li>").text(
        "Hours of work per person: " + manHours
      );
      const totalHoursLi = $("<li></li>").text(
        "Expected hours of work: " + totalHours
      );
      const budgetLi = $("<li></li>").text("Budget: " + budget);
      const timelineLi = $("<li></li>").text(
        "Timeline: " + timeline + " months"
      );
      const sizeLi = $("<li></li>").text("Size: " + size);

      const elementToAppendTo = $(".project-info")[index];
      $(elementToAppendTo).append(nameH3);
      $(elementToAppendTo).append(pType);
      $(elementToAppendTo).append(manHoursLi);
      $(elementToAppendTo).append(totalHoursLi);
      $(elementToAppendTo).append(budgetLi);
      $(elementToAppendTo).append(timelineLi);
      $(elementToAppendTo).append(sizeLi);
    });
  });
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
