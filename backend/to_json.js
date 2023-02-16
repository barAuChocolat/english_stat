//import { readFile, writeFile } from 'fs';

const addEval = (ev) => {
	ev.preventDefault();
	let Eval = {
		number: document.getElementById('eval_num').value,
		result: document.getElementById('result').value,

	}
	evals.push(Eval);
	document.forms[0].reset();
	console.warn('added', {evals});
	let pre = document.querySelector('#msg pre');
	pre.textContent = '\n' + JSON.stringify(evals, '\t', 2);
  
  readFile('result.json', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    let existingData = [];
    try {
      existingData = JSON.parse(data);
    } catch (e) {
      console.error(e);
    }
    
    const newData = JSON.stringify([...existingData, ...evals]);
    
    writeFile('result.json', newData, 'utf-8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Data written to file');
    });
  });
}
