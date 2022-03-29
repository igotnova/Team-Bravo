let milieu = 0;
let arbeidsomstandigheden = 0;
let mensenrechten = 0;
let bestuur = 0;

let $total = 0;

$('input:checkbox').on('change', function() {
    // if (this.checked){
    //     $total += +this.value
    //     if (this.value == 3) {
    //         milieu += +1;
    //     }
    // }else{
    //     $total -= +this.value
    //     if (this.value == 3) {
    //         milieu -= +1;
    //     }
    // }
    console.log(this);
    let $this = $(this);
    if (this.checked){
       

        milieu += $this.data( "milieu" ).toInt();

      
    }else{
        milieu -= $this.data( "milieu" ).toInt();

    }


    
    $('#total').html($total);
    $('#milieu').html(milieu);
});




