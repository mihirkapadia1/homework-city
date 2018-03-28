// alert('hello');
// Prevent form submission
$(document).ready(function() {
     $("#submit-btn").click(function (event) {
         event.preventDefault();

function setBackground(city-type, keywords) {

	var city-type = "" {
		// If else statements to ensure keyword submitted changes background image
       if (city-type == "la") {
           $("body").css("background-image: url(./images/la.jpg)").fadeIn(700); 
}
       else if (city-type === "nyc") {
           $("body").css("backgroundImage: url(./images/nyc.jpg)").fadeIn(700); 
}
       else if (city-type === "sf") {
           $("body").css("backgroundImage: url(./images/sf.jpg)").fadeIn(700); 
}
       else if (city-type === "austin") {
           $("body").css("backgroundImage: url(./images/austin.jpg)").fadeIn(700); 
}
       else if (city-type === "sydney") {
           $("body").css("backgroundImage: url(./images/sydney.jpg)").fadeIn(700);
}

	}


// City and keyword variances
function keywords () {
       var nyc = ["New York", "New York City", "NYC"];
       var sf = ["San Francisco", "SF", "Bay Area"];
       var la = ["Los Angeles", "LA", "LAX"];
       var austin = ["Austin", "ATX"];
       var sydney = ["Sydney", "SYD"];
}

// User clicks on submit button to update background image
 $("#submit-btn").click(function(){
        $("input:text").val("Glenn Quagmire");

       $("body").toggleClass();
           var value = $(this).val();




// Clear input and background

$(".clear").on("click", function() {
		// reset values of form inputs back to empty strings
		$("#submit-btn").val("");
		$("#city-type").val("");
		// remove any classes on the body tag
		$("body").attr("class", "");
	});
});

