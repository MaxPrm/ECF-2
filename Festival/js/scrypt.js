
/* Slider */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Montrer l'image en fonction de la dot choisi
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Slider
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// miniSlider //

var slideIndexx = 0;
showSlides();

function showSlidess() {
  var i;
  var slidess = document.getElementsByClassName("miniSlides");
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slidess.length) {slideIndexx = 1}
  slidess[slideIndexx-1].style.display = "block";
  setTimeout(showSlidess, 2000); // Change image every 2 seconds
}

// QUIZ //

var quizkeaton = [
	{
		question: "En quelle année Buster Keaton se lance dans le cinéma ?",
		answers: {
			a: '1915',
			b: '1917',
			c: '1922'
		},
		correctAnswer: 'b'
	},
	{
		question: "Il obtient son premier grand rôle, dans :",
		answers: {
			a: 'La maison démontable',
			b: 'Frigo déménageur',
			c: 'Frigo à l’Electric Hotel'
		},
		correctAnswer: 'a'
	},
  {
		question: "Quel était son surnom ?",
		answers: {
			a: 'L’homme qui ne rit jamais',
			b: 'Le clown triste',
			c: 'L’artiste burlesque'
		},
		correctAnswer: 'a'
	},
  {
		question: "A partir de quand sa carrière décline ?",
		answers: {
			a: 'Les années 20',
			b: 'Les années 30',
			c: 'Les années 40'
		},
		correctAnswer: 'b'
	}
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(quizkeaton, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;

		// for each question...
		for(var i=0; i<questions.length; i++){

			// first reset the list of answers
			answers = [];

			// for each available answer...
			for(letter in questions[i].answers){

				// ...add an html radio button
				answers.push(
					'<label>'
						+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer){

		// gather answer containers from our quiz
		var answerContainers = quizContainer.querySelectorAll('.answers');

		// keep track of user's answers
		var userAnswer = '';
		var numCorrect = 0;

		// for each question...
		for(var i=0; i<questions.length; i++){

			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

			// if answer is correct
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers
				numCorrect++;

				// color the answers green
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong or blank
			else{
				// color the answers red
				answerContainers[i].style.color = 'red';
			}
		}

		// show number of correct answers out of total
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

}
