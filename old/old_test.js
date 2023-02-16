

function put_in_pourcentage(data,  total_data){
	for (let i = 0; i < data.length; i++) 
		data[i] = (data[i] * 100)/ total_data[i];
	return data;
}


export function countConditional(tab, callback) {
	let total_data = [0, 0, 0, 0, 0, 0,
					0, 0, 0, 0, 0, 0,
					0, 0, 0, 0];
	let data = [0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0,
				0, 0, 0, 0];

	$.getJSON("eval.json", (json) => {
	  for (let i = 0; i < json.eval_4.length; i++) {
		if (json.eval_4[i].question_type === "Past simple/past continuous") {
			total_data[0]++;
			data[0] += tab[i];
		  }
		if (json.eval_4[i].question_type === "Conditional") {
		  total_data[1]++;
		  data[1] += tab[i];
		}
		if (json.eval_4[i].question_type === "Forms of the future") {
		  total_data[2]++;
		  data[2] += tab[i];
		}
		if (json.eval_4[i].question_type === "Comparatives") {
		  total_data[3]++;
		  data[3] += tab[i];
		}
		if (json.eval_4[i].question_type === "Prepositions") {
			total_data[4]++;
			data[4] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Verb constructions") {
			total_data[5]++;
			data[5] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Adverbs") {
			total_data[6]++;
			data[6] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Passive form") {
			total_data[7]++;
			data[7] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Coordination/subordination") {
			total_data[8]++;
			data[8] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Present simple/present continuous") {
			total_data[9]++;
			data[9] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Modals") {
			total_data[10]++;
			data[10] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Conjunctive adverbs") {
			total_data[11]++;
			data[11] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Noun") {
			total_data[12]++;
			data[12] += tab[i];
		  }
		  if (json.eval_4[i].question_type === "Used to/be used to") {
			total_data[13]++;
			data[13] += tab[i];
		  }
	  }
	  callback(put_in_pourcentage(data, total_data));
	});
  }
  