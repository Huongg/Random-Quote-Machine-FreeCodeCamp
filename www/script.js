
let QUOTESJSON = [
    {
      "quote": "Without Sunday, I wouldn't know when to put on the brakes of a hurtling life.",
      "author": "Byron Pulsifer"
    },
    {
      "quote": "Nothing pains some people more than having to think.",
      "author": "Martin Luther"
    },
    {
      "quote": "I've learned that you can tell a lot about a person by the way (s)he handles these three things: a rainy day, lost luggage, and tangled Christmas tree lights.",
      "author": "Maya Angelou "
    },
    {
      "quote": "When science finally locates the center of the universe, some people will be surprised to learn they're not it.",
      "author": "Bernard Bailey "
    },
    {
      "quote": "When fate hands us a lemon, let's try to make lemonade.",
      "author": "Dale Carnegie"
    },
    {
      "quote": "I know God will not give me anything I can't handle. I just wish He didn't trust me so much. ",
      "author": "Mother Teresa"
    },
    {
      "quote": "Eliminating procrastination from our lives is like trying to stop a moving train; it's not easy.",
      "author": "Joseph R. Ferrari"
    },
    {
      "quote": "The only time I don't have any problems in this world is when I am already six feet below the ground.",
      "author": "James Jason"
    },
    {
      "quote": "For some, life is like a river. It becomes overpowering, uncontrollable and sometimes wild.",
      "author": "Ravindranath Jayaratne"
    }
    
]

let COLOUR = [
	"#B8860B", //darkGolden
	"#B22222", //red
	"#4B0082", //purple 
	"#20B2AA", //LightSeaGreen
	"#4682B4", //SteelBlue
	"#2F4F4F",//DarkSlateGray
	"#FF6347", //tomato
	"#FF69B4", //hot pink
	"#556B2F", //dark olive
	"#87CEEB", //sky blue
	"#6A5ACD", //slate blue
	"#F08080", //light coral
	"#FA8072", //salmon
	"#00FF00", //lime
	"#3CB371", //sea green
	"#A52A2A" //brown


]



function getRandomQuote (){
	var valOfQuote = Math.floor(Math.random() * QUOTESJSON.length);
	return QUOTESJSON[valOfQuote];
}



//console.log(getRandomQuote());

function getRandomColour () {
	var randomColour = Math.floor(Math.random() * COLOUR.length);
	return COLOUR[randomColour];
};

//console.log(getRandomColour());



$(document).ready(function(){
	$('#new-quote').click(function(){
		//buton is clicked -> get ranDomeQuote
		var randomQuote = getRandomQuote();
		$("#text").text(randomQuote["quote"]);
		$("#author").text(randomQuote["author"]);
		var randomColor = getRandomColour();
		$("#quote-box").css("borderColor", randomColor);
		$("#new-quote").css("background-color",randomColor);
	   
		




	})
});




















