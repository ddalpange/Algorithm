function getRelationSalary(relations, index) {
  let salary = 0;
  let relation = relations[index];

  for(let i = 0; i < relation.length; i++) {
  
      if(relation[i] === 'N') continue;
      
      salary = salary + getRelationSalary(relations, i);
  }
  
  return salary === 0 ? 1 : salary; 
}

function totalSalary(relations) {
    let totalSalary = 0;

    for(let i = 0; i < relations.length; i++){
    
        totalSalary += getRelationSalary(relations, i);
        
    }

    return totalSalary;
}

let testCases = [
	['N'],
  [ 'NNYN', 
  	'NNYN', 
    'NNNN', 
    'NYYN' ],
  ['NNNNNN',
   'YNYNNY',
   'YNNNNY',
   'NNNNNN',
   'YNYNNN',
   'YNNYNN'],
   ['NNNN',
    'NNNN',
    'NNNN',
    'NNNN']
];
for(let test of testCases) {
	let result = totalSalary(test);
  console.log('test', test);
  console.log('result', result);
}
