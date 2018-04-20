function generate()
{
	var arr_strings = [":id => ,"];
	for(var e = 0; e < vals.length; e++)
	{
		var curr_obj = document.getElementById(vals[e]);
		var curr_id = curr_obj.id;
		var curr_val = curr_obj.value;
		var missionTime = document.getElementById("fp_value").value;
		
		var frak = document.getElementById("frak");
		var selectedFrak = frak.options[frak.selectedIndex].id;
		
		//Wähle gewähle Option aus SELECT Tag als "curr_val"
		if(curr_obj.tagName == "SELECT")
		{
			curr_val = curr_obj.options[curr_obj.selectedIndex].id;
		}
		
		//Berechne Zeit für "fire_value" wenn Feuerwehr aktiv
		if(vals[e] == "fire_value" && selectedFrak == "fire")
		{
			curr_val = missionTime * 100;
		}
		//Berechne Zeit für "police_value" wenn Police aktiv
		if(vals[e] == "police_value" && selectedFrak == "police")
		{
			curr_val = missionTime * 100;
		}
		
		//True/False als "curr_val" wenn Checkbox
		if(curr_obj.type == "checkbox")
		{
			curr_val = curr_obj.checked;
			//Patient after Mission wenn Checked oder leer wenn nicht
			if(curr_id == "patient_modus")
			{
				if(curr_val)
				{
					curr_val = "Patient::PATIENT_MODUS_AFTER_MISSION";
				}
				else
				{
					curr_val = "";
				}
			}
		}

		//Versuch letzte Line ohne "," zu schreiben
		if(e - 1 == vals.length)
		{
			//Wähle aktuellen "Namespace" + Value (:need_lf => COUNT)
			var str = ":" + vals[e] + " => " + curr_val;
		}
		else
		{
			//Wähle aktuellen "Namespace" + Value (:need_lf => COUNT,)
			var str = ":" + vals[e] + " => " + curr_val + ",";
		}
		
		//Wenn String nicht leer ist
		if(curr_val === "none" || curr_val === "" || curr_val.length == 0 || curr_val == -1 || curr_val == "-1" || curr_val == 0)
		{
			
		}
		else
		{
			//Wenn Datum = Datum umformatieren
			if(curr_obj.type == "date")
			{
				var arr_date = curr_val.split("-");
				var reformedDate = arr_date[0] + "," + arr_date [1] + "," + arr_date[2];
				curr_val = "DateTime.new(" + reformedDate + ")";
				
			}
			//Push neuen Namespace in Array
			arr_strings.push(str);
		}
	}
	
	//Generiere Mission Output
	var missionOutput = "{\n";
	for(var y = 0; y < arr_strings.length; y++)
	{
		missionOutput = missionOutput + "	" + arr_strings[y] + "\n";
	}
	missionOutput = missionOutput + "}";
	document.getElementById("missionOutput").innerHTML = missionOutput;
}

function resetForm()
{
	var ins = document.getElementById("neededValues");
	ins.reset();
	for(var res = 0; res < vehs.length; res++)
	{
		handler(res);
	}
	document.getElementById("missionOutput").innerHTML = "";
}

function generate_handler( g ) {
	return function(event) { 
		
		var active = document.querySelector("#" + vehs[g] + "_chance");
		var prev = active.previousElementSibling;
		var next = active.nextElementSibling;
	
		if ($('#' + vehs[g]).val() != 0) {
			$('#' + vehs[g] +'_chance').attr('hidden', false);
			$(prev).attr('hidden', false);
			$(next).attr('hidden', false);
		} else {
			$('#' + vehs[g] +'_chance').attr('hidden', true);
			$('#' + vehs[g] +'_chance').val(0);
			$(prev).attr('hidden', true);
			$(next).attr('hidden', true);
		}
	};
}

function handler( handid )
{
	var active = document.querySelector("#" + vehs[handid] + "_chance");
	var prev = active.previousElementSibling;
	var next = active.nextElementSibling;
	$('#' + vehs[handid] + '_chance').attr('hidden', true);
	$(prev).attr('hidden', true);
	$(next).attr('hidden', true);
}

function generate_handlerOnLoad( l ) 
{
	return function(event) 
	{ 
		var active = document.querySelector("#" + vehs[l] + "_chance");
		var prev = active.previousElementSibling;
		var next = active.nextElementSibling;
		$('#' + vehs[l] + '_chance').attr('hidden', true);
		$(prev).attr('hidden', true);
		$(next).attr('hidden', true);
		
		
	};
}

function dateHide()
{
	var box = document.getElementById("static");
	if(box.checked)
	{
		console.log("Box ist checked");
		$("#text1").attr('hidden', true);
		$("#text2").attr('hidden', true);
		$("#text3").attr('hidden', true);
		$("#date_start").attr('hidden', true);
		$("#date_end").attr('hidden', true);
	}
	
	if(!box.checked)
	{
		$("#text1").attr('hidden', false);
		$("#text2").attr('hidden', false);
		$("#text3").attr('hidden', false);
		$("#date_start").attr('hidden', false);
		$("#date_end").attr('hidden', false);
		console.log("Box ist nicht checked");
	}
}
