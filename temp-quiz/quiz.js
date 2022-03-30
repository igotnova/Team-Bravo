let milieu = 0;
let arbeidsomstandigheden = 0;
let mensenrechten = 0;
let bestuur = 0;
let count = 1;
let width = 0;
let total = 0;

function backVisibility() {
    if (count === 1) {
        $('#back').hide()
    } else {
        $('#back').show()
    }
    
}

function move() {
    let elem = document.getElementById("myBar");
    if (width < 100) {
      width+=20;
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%';
    }
}
function move1() {
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

    //temp
    // $('#milieu').html(milieu);
});






//next button listener
$('#next').click(function() {
    $('#screen' + count).hide()
    count++
    $('#screen' + count).show()

    backVisibility()

});

//back button listener
$('#back').click(function() {
    $('#screen' + count).hide()
    count--
    $('#screen' + count).show()

    backVisibility()
});




