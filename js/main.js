function seleccion() {
    var x = document.getElementById("sede").selectedIndex;
    // MÉXICO
    if(x == "2") {
        nombres = [
                'jackie',
                'isolda',
                'oliva',
                'isabel',
                'linda'];
            var ok = 0;
            $('#resultado').html('<p class="correcto">'+''+'</p>');
            $('#control').val(ok);
            var foto;
            var j = Math.floor((Math.random()*nombres.length));
            var src = 'img/fotos/'+nombres[j]+'.jpg';
            function rotarImagenes(){
                $('#photo').html('<img class="photo pure-img" src="'+src+'">');
            }
            foto = nombres[j];
            rotarImagenes();
            $('#comprobar').click(function(event){
                resp = $('#respuesta').val().toLowerCase();
                if(resp.indexOf(foto)>-1){
                        $('#resultado').html('<p class="correcto">'+'Correcto'+'</p>');
                        ok++;
                        $('#control').val(ok);
                        $('#respuesta').val("");
                        setTimeout(rotarImagenes, 3000);
                        return;
                } else {
                        $('#resultado').html('<p class="correcto">'+'Incorrecto'+'</p>');
                        $('#respuesta').val("");
                }
        })
    } else {
        alert('Elige México');
    }
}