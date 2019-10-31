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
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Scrol top

$(function(){
  $('body').append("<div id='scrolltop'><i class='fas fa-caret-square-up fa-3x'></i></div>");
  $('#scrolltop').css ({
    'position': 'fixed',
    'width': '35px',
    'height': '35px',
    'bottom': '50px',
    'right': '50px',
    'display': 'none'
  });
  $(window).scroll(function(){
    if ($(window).scrollTop()<350) {
      $('#scrolltop').fadeOut();
    } else {
      $('#scrolltop').fadeIn();
    }
  });

  $('#scrolltop').click(function(){
    $('html, body').animate({scrollTop:'0'}, 'slow');
  });
});

// slider

// Présentation des films de Buster keaton (index.html)
var slideIndexx = 0;
showSlidess();

function showSlidess() {
  var i;
  var slides = document.getElementsByClassName("miniSlides1");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {
    slideIndexx = 1
  }
  slides[slideIndexx - 1].style.display = "block";
  setTimeout(showSlidess, 5000); // Change image every 2 seconds
}

// Présentation des films de Harold Lloyd (index.html)
showSlidesss();

function showSlidesss() {
  var i;
  var slides = document.getElementsByClassName("miniSlides2");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndexx++;
  if (slideIndexx > slides.length) {
    slideIndexx = 1
  }
  slides[slideIndexx - 1].style.display = "block";
  setTimeout(showSlidesss, 5000); // Change image every 2 seconds
}


// QUIZ //

// les questions
var Lequiz = [{
    question: "En quelle année Buster Keaton se lance dans le cinéma ?",
    reponse: {
      a: '1915',
      b: '1917',
      c: '1922'
    },
    correctAnswer: 'b'
  },
  {
    question: "Il obtient son premier grand rôle, dans :",
    reponse: {
      a: 'La maison démontable',
      b: 'Frigo déménageur',
      c: 'Frigo à l’Electric Hotel'
    },
    correctAnswer: 'a'
  },
  {
    question: "Quel était son surnom ?",
    reponse: {
      a: 'L’homme qui ne rit jamais',
      b: 'Le clown triste',
      c: 'L’artiste burlesque'
    },
    correctAnswer: 'a'
  },
  {
    question: "A partir de quand sa carrière décline ?",
    reponse: {
      a: 'Les années 20',
      b: 'Les années 30',
      c: 'Les années 40'
    },
    correctAnswer: 'b'
  },
  {
    question: "quoi le reconnait-on ?",
    reponse: {
      a: 'Son costume 3 pièces',
      b: 'Son canotier et ses lunettes',
      c: 'Son cigare'
    },
    correctAnswer: 'b'
  },
  {
    question: "En quelle année est-il né ?",
    reponse: {
      a: '1893',
      b: '1898',
      c: '1900'
    },
    correctAnswer: 'a'
  },
  {
    question: "En quelle année est-il au sommet de sa carrière ?",
    reponse: {
      a: '1921',
      b: '1923',
      c: '1929'
    },
    correctAnswer: 'b'
  },
  {
    question: "Quel est son film le plus célèbre ?",
    reponse: {
      a: 'Monte la haut',
      b: 'Monte là-dessus',
      c: 'Descend par là'
    },
    correctAnswer: 'b'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(Lequiz, quizContainer, resultsContainer, submitButton); //création du quiz

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

  function showQuestions(questions, quizContainer) {
    // stock les élèments et les réponse choisi
    var output = [];
    var reponse;

    // Pour chaque question
    for (var i = 0; i < questions.length; i++) {

      // premier reset de la liste
      reponse = [];

      // Pour chaque réponse possible
      for (letter in questions[i].reponse) {

        // ajout des radios
        reponse.push(
          '<label>' +
          '<input type="radio" name="question' + i + '" value="' + letter + '">' +
          letter + ': ' +
          questions[i].reponse[letter] +
          '</label>'
        );
      }

      // ajout des questions et des réponses dans le output
      output.push(
        '<div class="question">' + questions[i].question + '</div>' +
        '<div class="reponse">' + reponse.join('') + '</div>'
      );
    }

    // combine le tout dans une seul string d'html et le met dans le html
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer) {

    // récupère les reponsé des tableaux
    var answerContainers = quizContainer.querySelectorAll('.reponse');

    // garde un aperçu des réponse de l'utilisateur
    var userAnswer = '';
    var numCorrect = 0;

    // pour chaque questions
    for (var i = 0; i < questions.length; i++) {

      // trouver la réponse sélectionner
      userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

      // si la réponse est correct
      if (userAnswer === questions[i].correctAnswer) {
        // inrémentation au conteur de bonne réponse
        numCorrect++;

        // color en verre
        answerContainers[i].style.color = 'lightgreen';
      }
      // si réponse incorrect ou non cocher
      else {
        // color en rouge
        answerContainers[i].style.color = 'red';
      }
    }

    // montre le nombre de bonne réponse
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  // montre les questions
  showQuestions(questions, quizContainer);

  // montre les réponse lors du click sur le bouton
  submitButton.onclick = function() {
    showResults(questions, quizContainer, resultsContainer);
  }
}
