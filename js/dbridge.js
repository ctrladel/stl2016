Reveal.addEventListener( 'fragmentshown', function( event ) {
   console.log(this.querySelector(".current-fragment.apply-table-border"));
    if(this.querySelector(".current-fragment.apply-table-border")) {
        this.querySelector("table.reveal").className += " table-border";
    }
} );
Reveal.addEventListener( 'fragmenthidden', function( event ) {
    console.log(!this.querySelector(".current-fragment.apply-table-border"));
    if(!this.querySelector(".current-fragment.apply-table-border")) {
        this.querySelector("table.reveal").classList.remove("table-border");
    }
} );