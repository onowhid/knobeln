//Homepage Magic
$(document).ready(function() {
	$('div.alert').slideDown('slow');
}
	);


// Hier wird gewürfelt
var wurfArray = [
	Math.floor(Math.random() * 6 + 1),
	Math.floor(Math.random() * 6 + 1),
	Math.floor(Math.random() * 6 + 1),
	Math.floor(Math.random() * 6 + 1),
	Math.floor(Math.random() * 6 + 1),
	]

// Punktezettel

var scoreCard = {
	einsen: 0,
	zweien: 0,
	dreien: 0,
	vieren: 0,
	fuenfen: 0,
	sechsen: 0,
	summeOben: 0,
	dreierPasch: 0,
	viererPasch: 0,
	fullHouse: 0,
	kleineStrasse: 0,
	grosseStrasse: 0,
	kniffel: 0,
	chance: 0

}

// Funktion zum Anzeigen des Wurfes

var wurfAnzeige = function() {
	for (i=0; i < wurfArray.length; i++) {
		
		document.write(wurfArray[i] + " ");
	};
}

// Initialisierung der Punkte-Variabel

var punkte = 0;


// Überprüfen ob der Wurf etwas ergeben hat


// compare with array


var compareArray = function(wuerfel11, wuerfel12, wuerfel13, wuerfel14, wuerfel15) {


	
	if (wuerfel11 === wuerfel12 && wuerfel12 === wuerfel13 && wuerfel13 === wuerfel14 && wuerfel14 === wuerfel15) {
		document.write("<p>" + "Kniffel!" + "</p>");
	}

	else if ((wuerfel11 === wuerfel12 && wuerfel12 === wuerfel13 && wuerfel13 === wuerfel14) || (wuerfel12 === wuerfel13 && wuerfel13 === wuerfel14 && wuerfel14 === wuerfel15)) {
		document.write("<p>" + "Ein Viererpasch!" + "</p>");
	}

	else if (((wuerfel11 === wuerfel12 && wuerfel12 === wuerfel13) && (wuerfel14 === wuerfel15)) || ((wuerfel11 === wuerfel12) && (wuerfel13 === wuerfel14 && wuerfel14 === wuerfel15))) {
		document.write("<p>" + "Full House!" + "</p>");
	}

	else if((wuerfel11 === wuerfel12) && (wuerfel12 === wuerfel13) || (wuerfel12 === wuerfel13) && (wuerfel13 === wuerfel14) || (wuerfel13 === wuerfel14) && (wuerfel14 === wuerfel15)) {
		document.write("<p>" + "Ein 3er Pasch." + "</p>");
	}
	
	else if ( (wuerfel15 === wuerfel14+1 && wuerfel14 === wuerfel13+1 && wuerfel13 === wuerfel12+1 && wuerfel12 === wuerfel11+1) ){
		document.write("<p>" + "Eine grosse Strasse!" + "</p>");
	}

	else if ( (wuerfel14 === wuerfel13+1 && wuerfel13 === wuerfel12+1 && wuerfel12 === wuerfel11+1) || (wuerfel15 === wuerfel14+1 && wuerfel14 === wuerfel13 + 1 && wuerfel13 === wuerfel12+1) || (wuerfel15 === wuerfel14+1 && wuerfel14 === wuerfel12 + 1 && wuerfel12 === wuerfel11+1) || (wuerfel15 === wuerfel13+1 && wuerfel13 === wuerfel12 + 1 && wuerfel12 === wuerfel11+1) || (wuerfel15 === wuerfel14+1 && wuerfel14 === wuerfel12 + 1 && wuerfel12 === wuerfel11+1) || (wuerfel15 === wuerfel13+1 && wuerfel13 === wuerfel12 + 1 && wuerfel12 === wuerfel11+1) ){
		document.write("<p>" + "Eine kleine Strasse!" + "</p>");
	}
	else {
		document.write("<p>" + "Leider nichts." + "</p>");
	}
}


// Weitere Wuerfe


var nochEinWurfArray = function(userChoice) {
	switch(userChoice) {
		case "1":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein neuer Wurf:" + "<br>" + " " + wurfArray[0] + "</p>"));
		break;
	case "2":
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[2] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[1] + "</p>"));
		break;
	case "3":
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[2] + "</p>"));
		break;
	case "4":
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[3] + "</p>"));
		break;
	case "5":
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[3] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[4] + "</p>"));
		break;
	case "1,2":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[2] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[1] + "</p>"));
		break;
	case "1,3":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[1] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[2] + "</p>"));
		break;
	case "1,4":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[3] + "</p>"));
		break;
		break;
	case "1,5":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[2] + " " + wurfArray[3] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[4] + "</p>"));
		break;
	case "2,3":
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>" ) );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[1] + " " + wurfArray[2] + "</p>"));
		break;
	case "2,4":
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[2] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[1] + " " + wurfArray[3] + "</p>"));
		break;
	case "2,5":
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[2] + " " + wurfArray[3] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[1] + " " + wurfArray[4] + "</p>"));
		break;
	case "3,4":
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[2] + " " + wurfArray[3] + "</p>"));
		break;
	case "3,5":
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[3] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[2] + " " + wurfArray[4]));
		break;
	case "4,5":
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[2] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[3] + " " + wurfArray[4] + "</p>"));
		break;
	case "1,2,3":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[3] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[2] + "</p>"));
		break;
	case "1,2,4":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[2] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[3] + "</p>"));
		break;
	case "1,2,5":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[2] + " " + wurfArray[3] + "</p>") )
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[4] + "</p>"));
		break;
	case "1,3,4":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[1] + " " + wurfArray[4] + "</p>") )
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[2] + " " + wurfArray[3] + "</p>"));
		break;
	case "1,3,5":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[1] + " " + wurfArray[3] + "</p>") )
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[2] + " " + wurfArray[4]));
		break;
	case "1,4,5":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[1] + " " + wurfArray[2] + "</p>") )
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>"));
		break;
	case "2,3,4":
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[3] + "</p>"));
		break;
	case "2,3,5":
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[3] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[4] + "</p>"));
		break;
	case "2,4,5":
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[2] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[1] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>"));
		break;
	case "3,4,5":
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + " " + wurfArray[1] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[2] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>"));
		break;
	case "1,2,3,4":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[4] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[3] + "</p>"));
		break;
	case "2,3,4,5":
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[0] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[3] + " " + wurfArray[4]));
		break;

	case "1,3,4,5":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		document.write(unescape("<p>" + "Deine zur\u00fcckbehaltenen W\u00fcrfel:" + " " + wurfArray[1] + "</p>") );
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[2] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>"));
		break;
	case "all":
		wurfArray[0] = Math.floor(Math.random() * 6 + 1);
		wurfArray[1] = Math.floor(Math.random() * 6 + 1);
		wurfArray[2] = Math.floor(Math.random() * 6 + 1);
		wurfArray[3] = Math.floor(Math.random() * 6 + 1);
		wurfArray[4] = Math.floor(Math.random() * 6 + 1);
		wurfArray.sort();
		document.write(unescape("<p>" + "Dein Wurf:" + "<br>" + " " + wurfArray[0] + " " + wurfArray[1] + " " + wurfArray[2] + " " + wurfArray[3] + " " + wurfArray[4] + "</p>"));
		break;
	default:
		document.write("<p>" + "Alles bleibt wie es ist." + "</p>");
		break;

	}
}