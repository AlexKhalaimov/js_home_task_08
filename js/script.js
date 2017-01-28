$(function(){
    $( "input" ).focus(function() {
  $( this ).next( "span" ).css( "display", "inline-block" ).fadeOut( 3000 );
});
    $( "button" ).on("click", function () {
        $( "span" ).css( "display", "inline-block" ).fadeOut( 3000 );
    });

});
