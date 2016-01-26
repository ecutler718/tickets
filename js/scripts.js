
function Ticket(filmName, showing, SeniorDiscount) {
	this.filmName = filmName;
	this.showing = showing;
	this.SeniorDiscount = SeniorDiscount;
}

Ticket.prototype.price = function() {


	var ticketPrice = 8;


	if (
		this.filmName === "Movie1" ||
		this.filmName === "Movie2" ||
		this.filmName === "Movie3" ||
		this.filmName === "Movie4"
		) {
		ticketPrice += 4;
	} else if (this.filmName === "Other") {
		ticketPrice += 0;
	}


	if (this.showing === "Main" ) {
		ticketPrice += 3;
	} else if (this.showing ==="Matinee") {
		ticketPrice += 0;
	}

	if (this.SeniorDiscount === true) {
		ticketPrice -=5;
	} else if (this.SeniorDiscount === false) {
		ticketPrice += 0;
	}

	return ticketPrice;
};





$(document).ready(function() {

	$("form#ticket-information").submit(function(event) {

		event.preventDefault();

		var submittedFilm = $("select#film").val();
		var stringAge = $("input#age").val();
		var integerAge = parseInt(stringAge);
		var SeniorDiscount;


		if (integerAge >= 60) {
			SeniorDiscount = true;
		} else if (integerAge < 60) {
			SeniorDiscount = false;
		}

		var submittedShowing = $("select#showing").val();

		newTicket = new Ticket(submittedFilm, submittedShowing, SeniorDiscount);
		newTicketPrice = newTicket.price();

		$("span#finalPrice").append(newTicketPrice);

	});
});
