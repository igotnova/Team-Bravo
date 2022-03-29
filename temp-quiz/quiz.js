let milieu = 0;
let arbeidsomstandigheden = 0;
let mensenrechten = 0;
let bestuur = 0;


let total = 0;


function addCategories(data) {
    category = Object.keys(data)[0]
    
    if (data[category]) {
        
        if (category == "milieu") {
            milieu += data[category]
        }
        
        if (category == "arbeidsomstandigheden") {
            arbeidsomstandigheden += data[category]
        }
        
        if (category == "mensenrechten") {
            mensenrechten += data[category]
        }
        
        if (category == "bestuur") {
            bestuur += data[category]   
        }
    }    
}

function subtractCategories(data) {
    category = Object.keys(data)[0]
    if (data[category]) {
        
        if (category == "milieu") {
            milieu -= data[category]
        }
        
        if (category == "arbeidsomstandigheden") {
            arbeidsomstandigheden -= data[category]
        }
        
        if (category == "mensenrechten") {
            mensenrechten -= data[category]
        }
        
        if (category == "bestuur") {
            bestuur -= data[category]   
        }
    }    
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
    $('#milieu').html(milieu);

});




