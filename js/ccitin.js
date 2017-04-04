$(document).ready(function(){

	var json = $.getJSON( "./codecamp_schedule.json");
	var schedule = null;

	json.complete(function(){
		schedule = JSON.parse(json.responseText);
		console.log(schedule);
		var lcr;

		$.each(schedule, function(index, element){
			var day;
			var dt = new Date(element.date_time);
			if(dt.getUTCDay() == 5){
				day = "#friday";
			}
			else{
				day = "#saturday";
			}

			$(day).append(document.createElement("hr"));

			var time = document.createElement("h5");
			$(time).html("<em>" + (dt.getUTCHours() % 12 == 0 ? "12" : dt.getUTCHours() % 12) + ":" + (dt.getUTCMinutes() < 10 ? "0" : '') + dt.getUTCMinutes() + (dt.getUTCHours() < 12 ? "a" : "p"));
			$(day).append(time);

			var row = document.createElement("div");
			$(row).attr("class", "row");

			var new_elem = document.createElement("div");			
			$(new_elem).attr("class", "event col center");


			var title = document.createElement("h4");
			$(title).text(element.title);
			new_elem.append(title);

			var subtitle = document.createElement("h5");
			$(subtitle).text(element.subtitle);
			new_elem.append(subtitle);

			var loc = document.createElement("p");
			$(loc).html("<em>" + element.location);
			new_elem.append(loc);

			var img1 = document.createElement("img");
			$(img1).attr("src", "./images/icons/" + element.img);
			new_elem.append(img1);

			if(element.img2 !== ""){
				var img2 = document.createElement("img");
				$(img2).attr("src", "./images/icons/" + element.img2);
				new_elem.append(img2);
			}

			row.append(new_elem);

			$(day).append(row);
			
		});

	});

	

	
});