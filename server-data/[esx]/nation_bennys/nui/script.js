
    function translation() {
		console.log('translation')
		document.getElementById("cam").innerHTML = 'Premi <span style="color: rgb(241, 66, 66);">h/q</span> per abilitare/disabilitare la telecamera fissa';
		document.getElementById("pagar").innerHTML = 'Cost &nbsp;&nbsp;&nbsp;<i class="fas fa-hand-holding-usd"></i>';
		document.getElementById("sair").innerHTML = 'Close &nbsp;&nbsp;&nbsp;<i class="fas fa-window-close"></i>';
		//document.getElementById("aerofólio > textbox").innerHTML = 'Close&nbsp;&nbsp;&nbsp;<i class="fas fa-window-close"></i>';
		$('#aerofólio > .textbox > span').html('Spoiler');
		$('#parachoque-dianteiro > .textbox > span').html('Paraurti anteriore');
		$('#parachoque-traseiro > .textbox > span').html('Paraurti posteriore');
		$('#saias > .textbox > span').html('Gonna laterale');
		$('#escapamento > .textbox > span').html('Silenziatore');
		$('#chassi > .textbox > span').html('Telaio');
		$('#grelha > .textbox > span').html('Griglia');
		$('#capô > .textbox > span').html('Cappuccio');
		$('#para-lama > .textbox > span').html('Parafango');
		$('#teto > .textbox > span').html('Tetto');
		$('#motor > .textbox > span').html('Motore');
		$('#freios > .textbox > span').html('Freni');
		$('#transmissão > .textbox > span').html('Trasmissione');
		$('#buzina > .textbox > span').html('Clacson');
		$('#suspensão > .textbox > span').html('Sospensione');
		$('#blindagem > .textbox > span').html('Armatura');
		$('#turbo > .textbox > span').html('Turbo');
		$('#interior > .textbox > span').html('Interno');
		$('#farol > .textbox > span').html('Fari');
		$('#decal > .textbox > span').html('Adesivi');
		$('#rodas > .textbox > span').html('Ruote');
		$('#placa > .textbox > span').html('Targa');
		$('#neon > .textbox > span').html('Luci al neon');
		$('#pintura > .textbox > span').html('Colore');
		$('#vidro > .textbox > span').html('Specchi');
		
		//inner
		$('#titulo').html('Seleziona Upgrade');
		$('#aerofólio-0 > span').html('Default');
		$('#parachoque-dianteiro-0 > span').html('Default');
		$('#parachoque-traseiro-0 > span').html('Default');
		$('#saias-0 > span').html('Default');
		$('#escapamento-0 > span').html('Default');
		$('#chassi-0 > span').html('Default');
		$('#grelha-0 > span').html('Default');
		$('#capô-0 > span').html('Default');
		$('#para-lama-0 > span').html('Default');
		$('#teto-0 > span').html('Default');
		$('#motor-0 > span').html('Default');
		$('#freios-0 > span').html('Default');
		$('#buzina-0 > span').html('Default');
		$('#transmissão-0 > span').html('Default');
		$('#suspensão-0 > span').html('Default');
		$('#blindagem-0 > span').html('Default');
		$('#turbo-0 > span').html('Default');
		$('#interior-0 > span').html('Default');
		$('#farol-0 > span').html('Default');
		$('#decal-0 > span').html('Default');
		$('#placa-0 > span').html('Default');
		$('#neon-default > span').html('Default');
		$('#pintura-0 > span').html('Default');
		$('#vidro-0 > span').html('Default');
		$('#arch-cover > .textbox > span').html('Copertura fari');
		$('#arch-cover-0 > span').html('Default');
		$('#doors > .textbox > span').html('Porte');
		$('#doors-0 > span').html('Default');
		$('#roll-cage > .textbox > span').html('Roll-bar');
		$('#roll-cage-0 > span').html('Default');
		$('#ornaments > .textbox > span').html('Ornamenti');
		$('#ornaments-0 > span').html('Default');
		$('#dashboard > .textbox > span').html('Dashboard');
		$('#dashboard-0 > span').html('Default');
		$('#dials > .textbox > span').html('Indicatore del cruscotto');
		$('#dials-0 > span').html('Default');
		$('#janela > .textbox > span').html('Tinte a specchio');
		$('#janela-0 > span').html('Default');
		$('#seats > .textbox > span').html('Sedili personalizzati');
		$('#seats-0 > span').html('Default');

		$('#neon-default > .textbox > span').html('Default');
		$('#farol-fabrica > .textbox > span').html('Custom');
		$('#farol-fabrica-0 > span').html('Default');
		$('#farol-xenon > .textbox > span').html('Xenon');
		$('#farol-xenon-0 > span').html('Default');
		$('#xenon-colors > .textbox > span').html('Xenon Colori');
		$('#xenon-colors-0 > span').html('Default');
		$('#other-colors > div > span').html('Seleziona Colore');

		$('#wheel-types > .textbox > span').html('Tipo di ruota');
		$('#wheel-types-0 > span').html('Default');
		$('#wheel-colors > .textbox > span').html('Colore ruota');
		$('#wheel-colors-0 > span').html('Default');
		$('#wheel-accessories > .textbox > span').html('Accessori per ruote');
		$('#wheel-accessories-0 > span').html('Default');
		$('#fabrica-pneus > .textbox > span').html('Default');
		$('#fabrica-pneus-0 > span').html('Default');
		$('#custom-pneus > .textbox > span').html('Custom');
		$('#custom-pneus-0 > span').html('Default');
		$('#bulletproof-pneus > .textbox > span').html('Anti Proiettile');
		$('#bulletproof-pneus-0 > span').html('Default');
		$('#smoke-colors > .textbox > span').html('Colore Fumo');
		$('#smoke-colors-0 > span').html('Default');
		$('.color-picker > div > span').html('Seleziona Colore');
		$('#neon-colors > .textbox > span').html('Colore Neon');
		$('#neon-colors-0 > span').html('Default');

		$('#cor-primaria > .textbox > span').html('Primario');
		$('#cor-primaria-0 > span').html('Default');
		$('#cor-secundaria > .textbox > span').html('Secondario');
		$('#cor-secundaria-0 > span').html('Default');

		$('#cor-secundaria-cromado').html('Cromo');
		$('#cor-secundaria-fosco').html('Opaco');
		$('#cor-secundaria-metálico').html('Metallo');
		$('#cor-secundaria-metal').html('Metallo 2');

		$('#cor-primaria-cromado').html('Cromo');
		$('#cor-primaria-fosco').html('Opaco');
		$('#cor-primaria-metálico').html('Metallo');
		$('#cor-primaria-metal').html('Metallo 2');
		document.getElementById("voltar").innerHTML = 'Back&nbsp;&nbsp;&nbsp;<i class="fas fa-arrow-alt-circle-left"></i>';
	}
		function googleTranslateElementInit() { // depracated will remove soon
			//new google.translate.TranslateElement({ pageLanguage: 'pt' }, 'google_translate_element'); 
			setTimeout(function(){ var select = document.querySelector('select.goog-te-combo'); 
			//select.value    = 'en'; 
			//select.dispatchEvent(new Event('change')); 
			$('.titulo').empty(); 
			$('.titulo').html('<img src="https://i.imgur.com/8ZV4Tvh.png">'); 
			document.getElementById("principal").style.backgroundImage = "url('https://i.imgur.com/iasgoQU.jpeg')"; 
			document.getElementById("principal").style.backgroundSize = "110%";
			document.getElementById("principal").style.opacity = '1.0';
			setInterval(function(){ translation() }, 100);
			document.getElementById("principal").style.backgroundRepeat = 'no-repeat'; },1000) }
			var loadJS = function(url, implementationCode, location){
			var scriptTag = document.createElement('script');
			scriptTag.src = url;
			scriptTag.onload = implementationCode;
			scriptTag.onreadystatechange = implementationCode;
			location.appendChild(scriptTag);
		};

		var yourCodeToBeCalled = function(){
		}
		
		var img = '<img src="https://rare5m.co/data/avatars/m/32/32737.jpg?1619695016">';
		$(document).ready(function () {
			document.getElementById("translator").innerHTML = "";
			document.body.innerHTML.replace('para liberar a câmera', 'hi');
			window.addEventListener('message', function (table) {
				let event = table.data;
				console.log(event.action)
				if (event.action == 'showMenu') {
					// $('.titulo').empty();
					// loadJS('https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit', yourCodeToBeCalled, document.body);
					googleTranslateElementInit()
					console.log("noobking was here")
				}
				if (event.action == 'hideMenu') {
					window.location.reload(false);
				}
			});
		});
        
    