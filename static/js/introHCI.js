'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Jumbo Jumbo");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
	$("#submitBtn").click(updateProject);

}
var flag = 0;
function projectClick(e) { 
    console.log("Project clicked");
    e.preventDefault();
    $(this).css("background-color", "#7fff00");
  	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");

    if (description.length == 0) {
       $(description).fadeIn();
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } 
    else {
    	if(flag == 0)
    	{
    		$(description).fadeOut();
    		flag = 1;
    	}
    	else
    	{
    		$(description).fadeIn();
    		flag = 0;

    	}
    }
   
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}