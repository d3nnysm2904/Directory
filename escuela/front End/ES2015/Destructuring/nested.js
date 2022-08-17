//destructuring nested obj
const instructor = {
    id: 44,
    name: 'Colt',
    isHilarious: true,
    funFacts: {
      favoriteFood: 'Burrito',
      favoriteDrink: 'Old Fashioned',
    }
  };
  const {funFacts: {favoriteFood, favoriteDrink}} = instructor;
 // console.log(favoriteFood); // 'Burrito'

//  this is the same
//  const favoriteFood =instructor.funFacts['favoriteFood']





// const { Rated } = movie;
// const { rating, advisory } = Rated;


const movie = {
	Title      : 'Amadeus',
	Year       : '1984',
	Rated      : {
		rating   : 'R',
		advisory : 'Rated R for brief nudity'
	},
	Released   : '19 Sep 1984',
	Runtime    : '160 min',
	Genres     : [ 'Biography', 'Drama', 'History', 'Music' ],
	Director   : 'Milos Forman',
	Writer     :
		'Peter Shaffer (original stage play), Peter Shaffer (original screenplay)',
	Actors     :
		'F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice',
	Plot       :
		"Antonio Salieri believes that Wolfgang Amadeus Mozart's music is divine and miraculous. He wishes he was himself as good a musician as Mozart so that he can praise the Lord through composing. He began his career as a devout man who believes his success and talent as a composer are God's rewards for his piety. He's also content as the respected, financially well-off, court composer of Austrian Emperor Joseph II. But he's shocked to learn that Mozart is such a vulgar creature, and can't understand why God favored Mozart to be his instrument. Salieri's envy has made him an enemy of God whose greatness was evident in Mozart. He is ready to take revenge against God and Mozart for his own musical mediocrity.",
	Language   : 'English, Italian, Latin, German',
	Versions   : [
		{ version: 'Original Release', runtime: 161 },
		{ version: "Director's Cut", runtime: 180 }
	],
	Country    : 'USA, France, Czechoslovakia, Italy',
	Awards     : 'Won 8 Oscars. Another 33 wins & 14 nominations.',
	Poster     :
		'https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
	Ratings    : [
		{ Source: 'Internet Movie Database', Value: '8.3/10' },
		{ Source: 'Rotten Tomatoes', Value: '93%' },
		{ Source: 'Metacritic', Value: '88/100' }
	],
	imdbVotes  : '346,056',
	imdbID     : 'tt0086879',
	Type       : 'movie',
	DVD        : '16 Dec 1997',
	BoxOffice  : 'N/A',
	Production : 'Warner Bros. Pictures',
	Website    : 'N/A',
	Response   : 'True'
};
const {Rated:{rating,advisory:note}}=movie //note is the const advisory renamed 'note'

//this can get crazy so we do this 

//exctracting the values of Ratings 

const {Ratings:[firstRating]}=movie //this equals to the first obj in Ratings { Source: 'Internet Movie Database', Value: '8.3/10' } 

const {
    Ratings:
    [
        {Value:firstValue},,
        {Value:thirdValue}, ],
        Versions:[{runtime:OriginalRelease,
        runtime:DirectorCut}]
    }=moviess