// Hier wird gewürfelt und der Wert in HTML ausgegeben

function rollDice() {

  var die1 = document.getElementById("die1");
  var die2 = document.getElementById("die2");
  var die3 = document.getElementById("die3");
  var die4 = document.getElementById("die4");
  var die5 = document.getElementById("die5");
  
  d1 = Math.floor(Math.random() * 6 + 1);
  d2 = Math.floor(Math.random() * 6 + 1);
  d3 = Math.floor(Math.random() * 6 + 1);
  d4 = Math.floor(Math.random() * 6 + 1);
  d5 = Math.floor(Math.random() * 6 + 1);

  

  die1.innerHTML = d1;
  die2.innerHTML = d2;
  die3.innerHTML = d3;
  die4.innerHTML = d4;
  die5.innerHTML = d5;
  
  
};


$(document).ready(function() {
	

	// Funktion für das Vergleichen des Wurfergebnisses
	var compare = function(dice1, dice2, dice3, dice4, dice5) {

		if (dice1 === dice2 && dice2 === dice3 && dice3 === dice4 && dice4 === dice5) {
			$('h3').html("<p>" + "Kniffel!" + "</p>");
		}

		else if ((dice1 === dice2 && dice2 === dice3 && dice3 === dice4) || (dice2 === dice3 && dice3 === dice4 && dice4 === dice5)) {
			$('h3').html("<p>" + "Ein Viererpasch!" + "</p>");
		}

		else if (((dice1 === dice2 && dice2 === dice3) && (dice4 === dice5)) || ((dice1 === dice2) && (dice3 === dice4 && dice4 === dice5))) {
			$('h3').html("<p>" + "Full House!" + "</p>");
		}

		else if((dice1 === dice2) && (dice2 === dice3) || (dice2 === dice3) && (dice3 === dice4) || (dice3 === dice4) && (dice4 === dice5)) {
			$('h3').html("<p>" + "Ein 3er Pasch." + "</p>");
		}
	
		else if ( (dice5 === dice4+1 && dice4 === dice3+1 && dice3 === dice2+1 && dice2 === dice1+1) ){
			$('h3').html("<p>" + "Eine grosse Strasse!" + "</p>");
		}

		else if ( (dice4 === dice3+1 && dice3 === dice2+1 && dice2 === dice1+1) || (dice5 === dice4+1 && dice4 === dice3 + 1 && dice3 === dice2+1) || (dice5 === dice4+1 && dice4 === dice2 + 1 && dice2 === dice1+1) || (dice5 === dice3+1 && dice3 === dice2 + 1 && dice2 === dice1+1) || (dice5 === dice4+1 && dice4 === dice2 + 1 && dice2 === dice1+1) || (dice5 === dice3+1 && dice3 === dice2 + 1 && dice2 === dice1+1) ){
			$('h3').html("<p>" + "Eine kleine Strasse!" + "</p>");
		}
		else {
			$('h3').html("<p>" + "Leider nichts." + "</p>");
		}
	}

	// Funktion zum Anzeigen des Ergebnisses wenn man auf "Nehmen" klickt
	$(function() {
		$('#points').click(function() {
				var d1Result = $('#die1').text();
				var d2Result = $('#die2').text();
				var d3Result = $('#die3').text();
				var d4Result = $('#die4').text();
				var d5Result = $('#die5').text();
				var results = [];
				results.push(d1Result);
				results.push(d2Result);
				results.push(d3Result);
				results.push(d4Result);
				results.push(d5Result);
				results.sort();
			compare(results[0], results[1], results[2], results[3], results[4]);
			
			
		});

	});

	// Funktion zum Aus- und Abwählen von Würfeln
	$(function() {
		$('.augen').click(function() {
			if( $(this).hasClass('unselect')) {
				$(this).animate({opacity: 0.4}, 'fast').removeClass('unselect').addClass('select');
			} else {
				$(this).animate({opacity: 1}, 'fast').removeClass('select').addClass('unselect');
			}

		});


	});


// Hier wird gewürfelt
	$(function() {
		var rollCount = 1;

		rollDice();
		$('h2').html(unescape("Bitte markiere die W\u00fcrfel, die du noch mal w\u00fcrfeln m\u00f6chtest."));
		$("#roll").click(function() {
			
			
				
			if ( $('#die1').hasClass('select') && $('#die2').hasClass('select') && $('#die3').hasClass('select') && $('#die4').hasClass('select') && $('#die5').hasClass('select') ) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
			}

			else if ( $('#die1').hasClass('select') && $('#die2').hasClass('select') && $('#die3').hasClass('select') && $('#die4').hasClass('select') ) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
			}

			else if ($('#die1').hasClass('select') && $('#die2').hasClass('select') && $('#die3').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;

			}

			else if ($('#die1').hasClass('select') && $('#die2').hasClass('select') && $('#die4').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;

			}

			else if ($('#die1').hasClass('select') && $('#die3').hasClass('select') && $('#die4').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;

			}

			else if ($('#die2').hasClass('select') && $('#die3').hasClass('select') && $('#die4').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;

			}

			else if ($('#die1').hasClass('select') && $('#die3').hasClass('select') && $('#die4').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;

			}

			else if ($('#die1').hasClass('select') && $('#die2').hasClass('select') && $('#die3').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die1').hasClass('select') && $('#die2').hasClass('select') && $('#die4').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die1').hasClass('select') && $('#die2').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die1').hasClass('select') && $('#die3').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die1').hasClass('select') && $('#die4').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die2').hasClass('select') && $('#die3').hasClass('select') && $('#die4').hasClass('select')) {
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die2').hasClass('select') && $('#die3').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die2').hasClass('select') && $('#die4').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die3').hasClass('select') && $('#die4').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die1').hasClass('select') && $('#die2').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die1').hasClass('select') && $('#die3').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die1').hasClass('select') && $('#die4').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die1').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die1').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die2').hasClass('select') && $('#die3').hasClass('select')) {
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die2').hasClass('select') && $('#die4').hasClass('select')) {
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die2').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die2').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die3').hasClass('select') && $('#die4').hasClass('select')) {
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die3').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die3').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else if ($('#die4').hasClass('select') && $('#die5').hasClass('select')) {
				$('#die4').html(Math.floor(Math.random() * 6 + 1));
				$('#die5').html(Math.floor(Math.random() * 6 + 1));
				rollCount = rollCount + 1;
				
			}

			else {
				$('h2').html(unescape("Du hast vergessen einen W\u00fcrfel zu markieren."));
			};

			// Wenn dreimal gewürfelt wurde, wird das Ergebnis angezeigt
			if (rollCount === 3) {
				$('h2').html("Du hast dreimal geworfen");
				var d1Result = $('#die1').text();
				var d2Result = $('#die2').text();
				var d3Result = $('#die3').text();
				var d4Result = $('#die4').text();
				var d5Result = $('#die5').text();
				var results = [];
				results.push(d1Result);
				results.push(d2Result);
				results.push(d3Result);
				results.push(d4Result);
				results.push(d5Result);
				results.sort();
				compare(results[0], results[1], results[2], results[3], results[4]);
				$('#roll').html("Nochmal");
				$('#roll').click(function() {
					location.reload();
				});
			}	
			else {
				$('h3').html(unescape("Nochmal? Oder willst du die Punkte nehmen?"));
			}
		}); 
	});	
}); // end document.ready



 


