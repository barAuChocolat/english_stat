
var canvasElement = document.getElementById("chart_content");
import { countConditional } from './test.js';
const tab = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 0, 1, 1, 0, 1, 1, 0, 0, 1,
	1, 1, 0, 0, 0, 0, 1, 1, 1, 0,
	1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
	0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
	1, 1, 0, 1, 1, 1, 1, 0, 1, 0,
	1, 0, 0, 0, 1, 1, 1, 0, 1, 1,
	1, 0, 1, 0, 1, 0, 0, 1, 1, 1,
];

const tab_E = [0, 1, 0, 1, 1, 1, 1, 0, 0, 1,
	0, 1, 1, 1, 1, 1, 0, 0, 1, 1,
	0, 0, 1, 0, 0, 0, 0, 1, 1, 1,
	0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	1, 0, 0, 1, 1, 1, 1, 0, 0, 0,
	1, 1, 0, 1, 0, 1, 1, 1, 0, 0,
	1, 1, 1, 1, 0, 0, 1, 1, 0, 1,
	1, 0, 0, 0, 0, 0, 1, 0, 1, 0,
	1, 0, 0, 0, 1, 0, 1, 0, 1, 1,
	0, 1, 0, 0, 1, 1, 0, 1, 0, 1,
];

countConditional(tab, function(result){
console.log(result);
function drawChart() {
	var config = {
		type: "radar",
		data: {
		labels: [
		"Past simple/past continuous",
		"Conditional",
		"Forms of the future",
		"Comparatives",
		"Prepositions",
		"Verb constructions",
		"Adverbs",
		"Passive form",
		"Coordination/subordination",
		"Present simple/present continuous",
		"Modals",
		"Conjunctive adverbs",
		"Noun",
		"Used to/be used to",
		], 
		
		datasets: [{
			label: "eval 4", 
			data: result
		}]
		},
		
		options: {
			plugins: {
				legend: {
					labels: {
						font: {
							size: 20
						}
					}
				}
			}
		}
	}
	
	var content_chart = new Chart(canvasElement, config)
}

window.onload = function(){
	Chart.defaults.font.size = 20;
	drawChart()
}
});




