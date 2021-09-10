var menu_aberto = 0;

$("#botao-menu-bobile").on("click", function(e) {

    if(menu_aberto == 0) {
        menuAberto();
    }else {
        menuFechado();
    }

});

function menuAberto() {
    $("#menu-responsivo").show("2500");
    menu_aberto = 1;
}

function menuFechado() {
    $("#menu-responsivo").hide("2500");
    menu_aberto = 0;
}