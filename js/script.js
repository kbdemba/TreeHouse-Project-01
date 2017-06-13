

var quotes = [
	{ quote: "The art and science of asking questions is the source of all knowlegde",
	  source: 'Thomas Berger',
	  tag: ["knowlegde", "science"]
	},
	{ quote: "Edison failed 10, 000 times before he made the electric light. Do not be discouraged if you fail a few times.",
	  source: 'Napoleon Hill',
	  tag: ["Motivational", "Inspirational"]
	},
	{ quote: 'Everything is funny, as long as it is happening to somebody else',
	  source: 'Will Rogers',
	  tag: ['humor']
	},
	{ quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
	  source: 'Muhammed Ali',
	  tag: ["motivational", "sports"]
	},
	{ quote: "At the end of the day, whether or not those people are comfortable with how you're living your life doesn't matter. What matters is whether you're comfortable with it.",
	  source: "Phillip Mc Graw",
	  citation: "O Magazine",
	  year: '2003',
	  tag: ['positive', "Inspirational"]
	},
	{ quote: "Difficulties come when you don't pay attention to life's whisper. Life always whispers to you first, but if you ignore the whisper, sooner or later you'll get a scream.",
	  source: 'Oprah Winfey',
	  citation: "Stanford Commencement Adress",
	  year: '2008',
	  tag: ['Inspirational' ]
	},
]; //quotes

// variable to hold quotes that have already been displayed
var DisplayedQuotes = [];
//start variable global so it can be accesed by the clearInterval
var start;

//function to make the quotes change every (some seconds) interval
function startSetIterval(){

	start = setInterval(function(){ 
				printQuote();	
	 }, 15000);
}
// this function to stop the interval
function stopSetInterval() {
    clearInterval(start);
}



//calling the function so it will initially start changing the quotes without pressing any buttons
startSetIterval();
 
// function to get a random quote from the quotes array
function getRandomQuote() {

		
		var ranNum;
		//
		while(true){
			console.log("111")
			ranNum = Math.floor(Math.random() * quotes.length);
			//check to see if the quote is already been displayed, if not, push it to the displayed array
			if (DisplayedQuotes.indexOf(quotes[ranNum]) < 0 ) {
				DisplayedQuotes.push(quotes[ranNum]);
				// reset the displayedQuote's array if it displayed all the quotes from the quotes array
				if (DisplayedQuotes.length === quotes.length) {
					DisplayedQuotes = [];
					console.log("final")
					
				}
			break;	
			}
		}//while
	return quotes[ranNum];
    } // getRandomQuotes

//function to create Randon RGB color
function ranColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	
	return "rgb(" + red + "," + green + "," + blue + ")";

}

// function to print the quote
function printQuote() {
	var quoteToDisplay = getRandomQuote();
	var displayedText = '<p class="quote">'+ quoteToDisplay.quote + '</p>' +
						'<p class="source">' + quoteToDisplay.source;
		// check to see if citation exist for "this" code				
		if (quoteToDisplay.citation) {
			displayedText += '<span class="citation">' + quoteToDisplay.citation + '</span>';
		}
		// check to see if year exist for this code
		if (quoteToDisplay.year) {
			displayedText += '</span> <span class="year">' + quoteToDisplay.year + '</span></p>';
		}
	
	document.getElementById('quote-box').innerHTML= displayedText;
	document.querySelector("body").style.background = ranColor();

	// anytime a quote is dispayed, the timer resets and then starts from 0 seconds
	stopSetInterval();
	startSetIterval();
} // print Quote

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

