let milieu = 0;
let arbeidsomstandigheden = 0;
let mensenrechten = 0;
let bestuur = 0;

let branche = ''

let count = 1;
let width = 0;
let total = 0;

const contentMilieu = 'Je kan op het '
const contentArbeidsomstandigheden = ''
const contentmensenrechten = ''
const contentbestuur = ''


function uiVisibility() {
    if (count === 1) {
        $('#back').hide()
    } else {
        $('#back').show()
    }

    $('#next').text('next')
    if (count === 5) {
        $('#next').text('submit')
    }

    if (count === 6) {
        $('#ui').hide()

    }
}

function moveBar() {
    let elem = document.getElementById("myBar");
    if (width < 100) {
      width+=20;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
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

if (count == 6 ) {
    showResultScreen()
}

function showResultScreen() {
    
}


