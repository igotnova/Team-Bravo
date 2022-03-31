let milieu = 0;
let arbeidsomstandigheden = 0;
let mensenrechten = 0;
let bestuur = 0;

let sector = '';

let count = 1;
let width = 0;
let total = 0;


const contentMilieu = ''
const contentArbeidsomstandigheden = ''
const contentmensenrechten = ''
const contentbestuur = ''


let doc = new jsPDF();
let specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    
    $('#cmd').click(function () {
        doc.fromHTML($('#resultaat').html(), 15, 15, {
            'width': 170,
                'elementHandlers': specialElementHandlers
        });
        doc.save('persoonlijk-testresultaat.pdf');
    });

function uiVisibility() {
    if (count === 1) {
        $('#back').attr('style','visibility:hidden')
    } else {
        $('#back').attr('style','visibility:visible')
    }

    $('#next').text('next')
    if (count === 5) {
        $('#next').text('Zie mijn resultaat')
    }

    if (count === 6) {
        $('#ui').attr('style','visibility:hidden')
        $('#back').attr('style','visibility:hidden')
        showResultScreen()
    }
}

function moveBar() {
    let elem = document.getElementById("myBar");
    if (width < 100) {
      width+=20;
      elem.style.width = width + '%';
      if(width == 100){
        elem.innerHTML = 'Klaar!';
      }
      else{
        elem.innerHTML = width * 1 + '%';
      }
    }
}
function move1Bar() {
    let elem = document.getElementById("myBar");
    if (width < 100) {
      width-=20;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
}


function addCategories(data) {
    category = Object.keys(data)[0]
    let score = data[category]

    if (category == 'sector') {
        sector = '' + score
    }
    
    if (data[category]) {
        
        if (category == "milieu") {
            milieu += score
        }
        
        if (category == "arbeidsomstandigheden") {
            arbeidsomstandigheden += score
        }
        
        if (category == "mensenrechten") {
            mensenrechten += score
        }
        
        if (category == "bestuur") {
            bestuur += score
        }
    }  
    
    console.log("category: " + category + ". Added score: " + score);
}

function subtractCategories(data) {
    category = Object.keys(data)[0]
    let score = data[category]

    if (data[category]) {
        
        if (category == "milieu") {
            milieu -= score
        }
        
        if (category == "arbeidsomstandigheden") {
            arbeidsomstandigheden -= score
        }
        
        if (category == "mensenrechten") {
            mensenrechten -= score
        }
        
        if (category == "bestuur") {
            bestuur -= score
        }
    }    
    console.log("category: " + category + ". Subtracted score: " + score);
}

//Checkbox listener
$('input:checkbox').on('change', function() {
    let $this = $(this);
    if (this.checked){
        addCategories($this.data())
    } else {
        subtractCategories($this.data())
    }
});


//next button listener
$('#next').click(function() {
    $('#screen' + count).hide()
    count++
    $('#screen' + count).show()

    uiVisibility()

});

//back button listener
$('#back').click(function() {
    $('#screen' + count).hide()
    count--
    $('#screen' + count).show()

    uiVisibility()
});

function showResultScreen() {
    let allScores = {
        milieu: milieu,
        arbeidsomstandigheden: arbeidsomstandigheden,
        mensenrechten: mensenrechten,
        bestuur: bestuur,
    }

    // Calculate lowest score and update text dynamically
    let lowestScore = calculateLowestScore(allScores)
    let textContent = "Jouw bedrijf valt onder de sector: " + sector + ". Je hebt het minst gescoord onder de categorie: " + lowestScore + "."
    $('#result-text').text(textContent)

    // Set all the scores on each bar
    setScoresOnResultPage(allScores)
}

function calculateLowestScore(allScores) {

    let lowestVal = Math.min(...Object.values(allScores))
    return Object.keys(allScores).find(key => allScores[key] === lowestVal);
}

function setScoresOnResultPage(allScores) {
 
    for (let key in allScores) {
        if (allScores[key] > 100) {
            allScores[key] = 100
        }

        $('#' + key).attr('style','width: ' + allScores[key] + '%');
        
    }
}

