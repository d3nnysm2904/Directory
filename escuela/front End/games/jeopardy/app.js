

function start() {

	const apiUrl = 'https://jservice.io/api/';

	let categories = [];

	

	async function getIdQuestion() {
		// ask for 100 categories [most we can ask for], so we can pick random

		const res = await axios.get(`${apiUrl}categories?count=100`);
		// console.log(res);

		let ids = res.data.map((c) => c.id);
		// console.log(ids);

		//  grabs 6 random questions id from apis
		// console.log('id questions');

		return _.sampleSize(ids, 6);
	}

	async function questionData(valId) {
		let res = await axios.get(`${apiUrl}category?id=${valId}`);
		// console.log('question data');
		// console.log('res', res);

		let data = res.data;
		// console.log('data', data);

		let dataClue = data.clues;
		// console.log('dataCLUE', dataClue);

		let randomData = _.sampleSize(dataClue, 5);
		// console.log('randomData', randomData);

		let clues = randomData.map((c) => ({
			question : c.question,
			answer   : c.answer,
			showing  : null
		}));
		// console.log('clues', clues);
		return { title: data.title, clues };
	}

	async function fillTable() {
		//  fill row with table
		let $tableRow = $('<tr>');
		$('#jeopardy thead').empty();
		for (let thead = 0; thead < 6; thead++) {
			let row = $('<td>');
			$tableRow.append(row.text(categories[thead].title));

			$('#jeopardy thead').append($tableRow);
		}

		// Add rows with questions for each category

		$('#jeopardy tbody').empty();
		for (let clueId = 0; clueId < 5; clueId++) {
			let $tr = $('<tr>');
			for (let catIdx = 0; catIdx < 6; catIdx++) {
				$tr.append($('<td>').attr('id', `${catIdx}-${clueId}`).text('question?'));
			}

			$('#jeopardy tbody').append($tr);
		}
		
	}

	function handleClick(e) {
		let id = e.target.id;

		let [
			numId,
			numIdx
		] = id.split('-');
		//  console.log(numId,numIdx);
		let clue = categories[numId].clues[numIdx];
		// console.log(categories);
		// console.log(clue)
		let msg;

		if (!clue.showing) 
    {
			msg = clue.question;
			clue.showing = 'question';
		}else if(clue.showing==="question")
    {
      msg=clue.answer;
      clue.showing="answer"
    }else
    {
      return
      
    }
    $( `#${ numId  }-${ numIdx }` ).html( msg );
	}

	async function setupAndStart() {
		let catIds = await getIdQuestion();

		categories = [];

		for (let catId of catIds) {
			categories.push(await questionData(catId));
			// console.log('question data of 6');
			// console.log(categories);
			// console.log(categories);;
		}
		fillTable();
	}
  $( "#restart" ).on( "click", setupAndStart );


  
  $( async function ()
  {
    setupAndStart();
    $( "#jeopardy" ).on( "click", "td", handleClick );
  } );
  
}
 
$( async function (){

 
  $(".start").on('click',function(){

    $('#start').attr('id','hidden')
    $('.restart').attr('id','restart')
    start()
  })

})
