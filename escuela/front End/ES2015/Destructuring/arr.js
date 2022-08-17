 const students = [
 	{ name: 'Drake', gpa: 4.6 },
 	{ name: 'Henrietta', gpa: 4.4 },
 	{ name: 'Tung', gpa: 4.0 },
 	{ name: 'Harry', gpa: 3.8 },
 	{ name: 'Ant', gpa: 3.2 }
 ];

 const [ topStudent, secondBest, ,fourth ] = students;//this  consts  holds the first index of students in order , adding a coma moves on to the next index  
 const [ first, ...losers ] = students;