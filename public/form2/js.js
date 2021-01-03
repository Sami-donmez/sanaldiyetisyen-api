$(function(){
    var kaynaksınıf=1;
    $('.yeni').click(()=>{
        kaynaksınıf+=1;
        $('.kaynakca').append('<label id="kaynaklabel'+kaynaksınıf+'" class="col-md-12">'+kaynaksınıf+') <input type="text" class="form-control doktora my-2" id="kaynak-'+kaynaksınıf+'" name="kaynakca[]"></label>');
    })
    $('.sil').click(()=>{
        $("#kaynakcalabel"+kaynaksınıf).remove();
        kaynaksınıf-=1;

    })
    $("#ogr-no").keydown(function(){
        $('#ogr-no').css({'border-bottom':'5px solid green'});
    });
    $("#ogr-ad").keydown(function(){
        $('#ogr-ad').css({'border-bottom':'5px solid green'});
    });
    $("#danisman").keydown(function(){
        $('#danisman').css({'border-bottom':'5px solid green'});
    });
    $("#anabilim-dali").click(function(){
        $('#anabilim-dali').css({'border-bottom':'5px solid green'});
    });
    $("#bilim-dali").keydown(function(){
        $('#bilim-dali').css({'border-bottom':'5px solid green'});
    });
    $("#turkceBaslik").keydown(function(){
        $('#turkceBaslik').css({'border-bottom':'5px solid green'});
    });
    $("#ingBaslik").keydown(function(){
        $('#ingBaslik').css({'border-bottom':'5px solid green'});
    });
    $("#anahtarKelime").keydown(function(){
        $('#anahtarKelime').css({'border-bottom':'5px solid green'});
    });
    $("#tez-amac").keydown(function(){
        $('#tez-amac').css({'border':'5px solid green'});
    });
    $("#tanım").keydown(function(){
        $('#tanım').css({'border':'5px solid green'}); 
    });
    $("#hipotez").keydown(function(){
        $('#hipotez').css({'border':'5px solid green'});
    });
    $("#yapilabilirlik").keydown(function(){
        $('#yapilabilirlik').css({'border':'5px solid green'});
    });
    $("#detay").keydown(function(){
        $('#detay').css({'border':'5px solid green'});
    });
    $("#literatur").keydown(function(){
        $('#literatur').css({'border':'5px solid green'});
    });
    $("#yontem").keydown(function(){
        $('#yontem').css({'border':'5px solid green'});
    });
    $("#ozgun-deger").keydown(function(){
        $('#ozgun-deger').css({'border':'5px solid green'});    
    });
    $("#yaygin-etki").keydown(function(){
        $('#yaygin-etki').css({'border':'5px solid green'});
    });
    $("#bagimlilik").keydown(function(){
        $('#bagimlilik').css({'border':'5px solid green'});
    });

//İş paketleri           
    $("#is-paket1").keydown(function(){
        $('#is-paket1').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket2").keydown(function(){
        $('#is-paket2').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket3").keydown(function(){
        $('#is-paket3').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket4").keydown(function(){
        $('#is-paket4').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket5").keydown(function(){
        $('#is-paket5').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket6").keydown(function(){
        $('#is-paket6').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket7").keydown(function(){
        $('#is-paket7').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket8").keydown(function(){
        $('#is-paket8').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket9").keydown(function(){
        $('#is-paket9').css({'border-bottom':'5px solid green'});
    });
    $("#is-paket10").keydown(function(){
        $('#is-paket10').css({'border-bottom':'5px solid green'});
    });
    
//İş zamanları
    $("#is-zaman").keydown(function(){
        $('#is-zaman').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman2").keydown(function(){
        $('#is-zaman2').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman3").keydown(function(){
        $('#is-zaman3').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman4").keydown(function(){
        $('#is-zaman4').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman5").keydown(function(){
        $('#is-zaman5').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman6").keydown(function(){
        $('#is-zaman6').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman6").keydown(function(){
        $('#is-zaman6').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman7").keydown(function(){
        $('#is-zaman7').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman8").keydown(function(){
        $('#is-zaman8').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman9").keydown(function(){
        $('#is-zaman9').css({'border-bottom':'5px solid green'});
    });
    $("#is-zaman10").keydown(function(){
        $('#is-zaman10').css({'border-bottom':'5px solid green'});
    });


//Öğrenci bilgileri alanı----------------------------------------------------------------------------------------
    $(".devam2").click(function(){
        var ogrAdıSoyadı  =$("#ogr-ad").val();
        var ogrNo         =$("#ogr-no").val();
        var ogr_NoEdit    = /^[0-9]+$/gm;
        var ogr_AdEdit    = /^[a-zA-Z " "]+$/gm;

        if(ogrNo == null || ogrNo == "" || !ogr_NoEdit.test(ogrNo)){
            $('.ogrnu').html("Lütfen öğrenci numarasını rakamlarla giriniz!!!").css({"color":"red"});
            $('#ogr-no').css({'border-bottom':'5px solid red'});
            //Uyarı penceresini 5 saniye sonra kapattık
            /*setTimeout(function() { 
                $('.ogrnu').hide(); }, 4000); /*1000 milisaniye = 1 saniye*/
            $('.ogrnu').show();
            return false;
            
        }else if(ogrAdıSoyadı == null || ogrAdıSoyadı == ""  || !ogr_AdEdit.test(ogrAdıSoyadı)){
            $('.ograd').html("Lütfen öğrenci adı-soyadı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#ogr-ad').css({'border-bottom':'5px solid red'});
            /*setTimeout(function() { 
                $('.ograd').hide(); }, 4000); /*1000 milisaniye = 1 saniye*/
            $('.ograd').show();
            return false;
        }

    });
    $("#ogr-no").keyup(function(){
        if(this.value.match(/[^0-9]/g)){
            $('#ogr-no').css({'border-bottom':'5px solid red'});
            $('.ogrnu').show();      
        }
        else if(this.value.match(/[^a-zA-Z]/g)){
            $(".ogrnu").css({"border-bottom":"green"});
            $('.ogrnu').hide();
        }
    });
    $("#ogr-ad").keyup(function(){
        if(this.value.match(/[^a-zA-Z " "]/g)){
            $('#ogr-ad').css({'border-bottom':'5px solid red'});
            $('.ograd').show();
        }
        else if(this.value.match(/[^0-9]/g)){
            $(".ograd").css({"border-bottom":"green"});
            $('.ograd').hide();
        }
    });

    
//Danışman alanı----------------------------------------------------------------------------------------------  
    $(".devam3").click(function(){
        var danısman=$("#danisman").val();
        var danısmanEdit    = /^[a-zA-Z " " ,]+$/gm;

        if(danısman==null || danısman=="" || !danısmanEdit.test(danısman)){
            $('.danısmanB').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#danisman').css({'border-bottom':'5px solid red'});
            $('.danısmanB').show();
            return false;
            }
    });
    $("#danisman").keyup(function(){
        if(this.value.match(/[^a-zA-Z " " ,]/g)){
            $('#danisman').css({'border-bottom':'5px solid red'});
            $('.danısmanB').show();
        }
        else if(this.value.match(/[^0-9]/g)){
            $(".danısmanB").css({"border-bottom":"green"});
            $('.danısmanB').hide();
        }
    });
//Anabilim dalı ve Bilim dalı ----------------------------------------------------------------------------------
    $(".devam4").click(function(){
        var anaBilim = $("#anabilim-dali");
        var bilimDalı=$("#bilim-dali").val();
        var bilimdalıEdit    = /^[a-zA-Z " "]+$/gm;

        if (anaBilim.val() == null || anaBilim.val()==""){
            $('.anabilimUyarı').html("Lütfen Anabilim Dalı Seçin!!!").css({"color":"red"});
            $('#anabilim-dali').css({'border-bottom':'5px solid red'});
            $('.anabilimUyarı').show();
            return false;
        }
        if(bilimDalı==null || bilimDalı=="" || !bilimdalıEdit.test(bilimDalı)){
            $('.bilimdalıUyari').html("Lütfen  bilim dalı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#bilim-dali').css({'border-bottom':'5px solid red'});
            $('.bilimdalıUyari').show();
            return false;
        }
    });
    $("#bilim-dali").keyup(function(){
        if(this.value.match(/[^a-zA-Z " "]/g)){
            $('#bilim-dali').css({'border-bottom':'5px solid red'});
            $('.bilimdalıUyari').show();
            
        }
        else if(this.value.match(/[^0-9]/g)){
            $(".bilimdalıUyari").css({"border-bottom":"green"});
            $('.bilimdalıUyari').hide();
        }
    });
 //Tez Bilgileri 1 ------------------------------------------------------------------------------------------------
    $(".devam19").click(function(){
        var turkçeB=$("#turkceBaslik").val();
        var ingB=$("#ingBaslik").val();
        var anahtarKelimeler=$("#anahtarKelime").val();

        if(turkçeB==null || turkçeB==""){
            $('.tezturkceUyari').html("Lütfen  türkçe tez başlığı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#turkceBaslik').css({'border-bottom':'5px solid red'});
            $('.tezturkceUyari').show();
            return false;
        }else if(ingB==null || ingB==""){
            $('.tezingUyari').html("Lütfen  ingilizce tez başlığı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#ingBaslik').css({'border-bottom':'5px solid red'});
            $('.tezingUyari').show();
            return false;
        }
        else if(anahtarKelimeler==null || anahtarKelimeler==""){
            $('.anahtarkelimeUyari').html("Lütfen anahtar kelimeler alanını kontrol ediniz(max 5 kelime giriniz)!!!").css({"color":"red"});
            $('#anahtarKelime').css({'border-bottom':'5px solid red'});
            $('.anahtarkelimeUyari').show();
            return false;
        }
    });
    $("#turkceBaslik").click(function(){
        $('.tezturkceUyari').hide();
    });
    $("#ingBaslik").click(function(){
        $('.tezingUyari').hide();
    });
    $("#anahtarKelime").click(function(){
        $('.anahtarkelimeUyari').hide();
    });
    var kelimeUzunlugu = 5,
		len; // Maximum word length
	$('#anahtarKelime').keydown(function(event) {	
		len = $('#anahtarKelime').val().split(/[\s,-?.]+/);
		if (len.length > kelimeUzunlugu) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }}
		kalanKelime = (kelimeUzunlugu) - len.length;
		$('.kalanson').html(kalanKelime+ ' kelime kaldı');
		if(kalanKelime == 0) {
			$('.kalanson').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    });

 //Tez Bilgileri 2 ------------------------------------------------------------------------------------------------
    $(".devam5").click(function(){
        var tezYazımDili=$("input[name='tez-Yazım-Dili']:checked").val();
        var çalışmaTarzı=$("input[name='calisma-tarzi']:checked").val();
        //Tez dili için
        $("#turkce").click(function(){
            $('.tezdiliUyari').hide();
        });
        $("#ingilizce").click(function(){
            $('.tezdiliUyari').hide();
        });
        //Çalışma Tarzı için
        $("#deneysel").click(function(){
            $('.çalışmaAlanıUyari').hide();
        });
        $("#teorik").click(function(){
            $('.çalışmaAlanıUyari').hide();
        });
        $("#simulasyon").click(function(){
            $('.çalışmaAlanıUyari').hide();
        });
        $("#gelistirme").click(function(){
            $('.çalışmaAlanıUyari').hide();
        });
        $("#analiz").click(function(){
            $('.çalışmaAlanıUyari').hide();
        });
        if(tezYazımDili==null || tezYazımDili==""){
            $('.tezdiliUyari').html("Lütfen bir seçim yapınız!!!").css({"color":"red"});
            $('.tezdiliUyari').show();
            return false;

        }
        else if(çalışmaTarzı==null || çalışmaTarzı==""){
            $('.çalışmaAlanıUyari').html("Lütfen çalışma tarzı alanını kontrol ediniz!!!").css({"color":"red"});
            $('.çalışmaAlanıUyari').show();
            return false;
        }
    }); 
//Ekler -------------------------------------------------------------------------------------------------------------
    $(".devam8").click(function(){
        var etikIzin=$("input[name='etik-izin']:checked").val();
        var veriIzin=$("input[name='veri-izin']:checked").val();
        var kurumIzin=$("input[name='kurum-izin']:checked").val();
        var fikirIzin=$("input[name='fikir-izin']:checked").val();
        
        //Etik kurul izni
        $("#gerekmiyor").click(function(){
            $('.ek1Uyari').hide();
        });
        $("#belgevar").click(function(){
            $('.ek1Uyari').hide();
        });
        //Veri Kullanım izni
        $("#gerekmiyor2").click(function(){
            $('.ek2Uyari').hide();
        });
        $("#belgevar2").click(function(){
            $('.ek2Uyari').hide();
        });
        //Kurum/Kuruluş izni
        $("#gerekmiyor3").click(function(){
            $('.ek3Uyari').hide();
        });
        $("#belgevar3").click(function(){
            $('.ek3Uyari').hide();
        });
        //Fikir hak sahipliği
        $("#gerekmiyor4").click(function(){
            $('.ek4Uyari').hide();
        });
        $("#belgevar4").click(function(){
            $('.ek4Uyari').hide();
        });
        
        if(etikIzin==null || etikIzin==""){
            $('.ek1Uyari').html("Lütfen ekler alanını kontrol ediniz!!!").css({"color":"red"});
            $('.ek1Uyari').show();
            return false;
        }
        else if(veriIzin==null || veriIzin==""){
            $('.ek2Uyari').html("Lütfen ekler alanını kontrol ediniz!!!").css({"color":"red"});
            $('.ek2Uyari').show();
            return false;
        }
        else if(kurumIzin==null || kurumIzin==""){
            $('.ek3Uyari').html("Lütfen ekler alanını kontrol ediniz!!!").css({"color":"red"});
            $('.ek3Uyari').show();
            return false;
        }
        else if(fikirIzin==null || fikirIzin==""){
            $('.ek4Uyari').html("Lütfen ekler alanını kontrol ediniz!!!").css({"color":"red"});
            $('.ek4Uyari').show();
            return false;
        }

    });
//Ayrıntılar --1.Tez Amacı------------------------------------------------------------------------------------------
    $(".devam9").click(function(){
        var tezAmacı=$("#tez-amac").val();
        $("#tez-amac").click(function(){
            $('.tezamacıUyari').hide();
        });
        if(tezAmacı==null || tezAmacı==""){
            $('.tezamacıUyari').html("Lütfen tezin amacı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#tez-amac').css({'border':'6px solid red'});
            $('.tezamacıUyari').show();
            return false;
        }
    });
    $('#tez-amac').keydown(function(event) {
        var kelimeUzunlugu2 = 300,
		len2; // Maximum word length	
        len2 = $('#tez-amac').val().split(/[\s,-?.]+/);
        if (len2.length > kelimeUzunlugu2) { 
            if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
        }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
            event.preventDefault();
        }
        }
        console.log(len2.length + " words are typed out of an available " + kelimeUzunlugu2);
        kalanKelime2 = (kelimeUzunlugu2) - len2.length;
        $('.kalan2').html(kalanKelime2+ ' kelime kaldı');
        if(kalanKelime2 == 0) {
            $('.kalan2').css({'background':'red'}).prepend(
                '<i class="fafa-exclamation-triangle"></i>');
        }
    });
//Ayrıntılar --2.Çalışma Gerekçesi---------------------------------------------------------------------------------
    $(".devam10").click(function(){
        var tezTanımı=$("#tanım").val();
        var hipotezTanımı=$("#hipotez").val();
        var yapilabilirlik=$("#yapilabilirlik").val();

        $("#tanım").click(function(){
            $('.ProblemTanımıUyari').hide();
        });
        $("#hipotez").click(function(){
            $('.hipotezUyari').hide();
        });
        $("#yapilabilirlik").click(function(){
            $('.yapılabilirlikUyari').hide();
        });

        if(tezTanımı==null || tezTanımı==""){
            $('.ProblemTanımıUyari').html("Lütfen çalışma tarzı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#tanım').css({'border':'6px solid red'});
            $('.ProblemTanımıUyari').show();
            return false;
        }else if(hipotezTanımı==null || hipotezTanımı==""){
            $('.hipotezUyari').html("Lütfen hipotez tanım alanını kontrol ediniz!!!").css({"color":"red"});
            $('#hipotez').css({'border':'6px solid red'});
            $('.hipotezUyari').show();
            return false;
        }else if(yapilabilirlik==null || yapilabilirlik==""){
            $('.yapılabilirlikUyari').html("Lütfen yapılabilirlik (motivasyon) alanını kontrol ediniz!!!").css({"color":"red"});
            $('#yapilabilirlik').css({'border':'6px solid red'});
            $('.yapılabilirlikUyari').show();
            return false;
        }
    });
    var kelimeUzunlugu3 = 300,
		len3;
    $('#tanım').keydown(function(event) {	
		len3 = $('#tanım').val().split(/[\s,-?.]+/);
		if (len3.length > kelimeUzunlugu3) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len3.length + " words are typed out of an available " + kelimeUzunlugu3);
		kalanKelime3 = (kelimeUzunlugu3) - len3.length;
		$('.kalan3').html(kalanKelime3+ ' kelime kaldı');
		if(kalanKelime3 == 0) {
			$('.kalan3').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    
    });
    var kelimeUzunlugu4 = 300,
		len4;
    $('#hipotez').keydown(function(event) {	
		len4 = $('#hipotez').val().split(/[\s,-?.]+/);
		if (len4.length > kelimeUzunlugu4) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len4.length + " words are typed out of an available " + kelimeUzunlugu4);
		kalanKelime4 = (kelimeUzunlugu4) - len4.length;
		$('.kalan4').html(kalanKelime4+ ' kelime kaldı');
		if(kalanKelime4 == 0) {
			$('.kalan4').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    
    });
    var kelimeUzunlugu5 = 300,
		len5;
    $('#yapilabilirlik').keydown(function(event) {	
		len5 = $('#yapilabilirlik').val().split(/[\s,-?.]+/);
		if (len5.length > kelimeUzunlugu5) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len5.length + " words are typed out of an available " + kelimeUzunlugu5);
		kalanKelime5 = (kelimeUzunlugu5) - len5.length;
		$('.kalan5').html(kalanKelime5+ ' kelime kaldı');
		if(kalanKelime5 == 0) {
			$('.kalan5').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
        
    });
    //Ayrıntılar -- 3. Bölüm Konu ve Kapsam----------------------------------------------------------------------------------------- 
    $(".devam11").click(function(){
        var konuDetayı=$("#detay").val();
        var literatürÖzeti=$("#literatur").val();

        $("#detay").click(function(){
            $('.konuDetayıUyari').hide();
        });
        $("#literatur").click(function(){
            $('.literatürUyari').hide();
        });

        if(konuDetayı==null || konuDetayı==""){
            $('.konuDetayıUyari').html("Lütfen konu detayı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#detay').css({'border':'6px solid red'});
            $('.konuDetayıUyari').show();
            return false;
        }else if(literatürÖzeti==null || literatürÖzeti==""){
            $('.literatürUyari').html("Lütfen Literatür özet alanını kontrol ediniz!!!").css({"color":"red"});
            $('#literatur').css({'border':'6px solid red'});
            $('.literatürUyari').show();
            return false;
        }
    });
    var kelimeUzunlugu6 = 300,
		len6;
    $('#detay').keydown(function(event) {	
		len6 = $('#detay').val().split(/[\s,-?.]+/);
		if (len6.length > kelimeUzunlugu6) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len6.length + " words are typed out of an available " + kelimeUzunlugu6);
		kalanKelime6 = (kelimeUzunlugu6) - len6.length;
		$('.kalan6').html(kalanKelime6+ ' kelime kaldı');
		if(kalanKelime6 == 0) {
			$('.kalan6').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    
    });
    var kelimeUzunlugu7 = 300,
		len7;
    $('#literatur').keydown(function(event) {	
		len7 = $('#literatur').val().split(/[\s,-?.]+/);
		if (len7.length > kelimeUzunlugu7) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len7.length + " words are typed out of an available " + kelimeUzunlugu7);
		kalanKelime7 = (kelimeUzunlugu7) - len7.length;
		$('.kalan7').html(kalanKelime7+ ' kelime kaldı');
		if(kalanKelime7 == 0) {
			$('.kalan7').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    
    });
    //3.Bölümde Kaynak kısmı yapılmamış Onu unutma

    //Ayrıntılar -- 4.Bölüm Yöntem yeri -----------------------------------------------------------------------------------------------
    $(".devam12").click(function(){
        var yöntem=$("#yontem").val();

        $("#yontem").click(function(){
            $('.yöntemUyari').hide();
        });
        if(yöntem==null || yöntem==""){
            $('.yöntemUyari').html("Lütfen yöntem alanını kontrol ediniz!!!").css({"color":"red"});
            $('#yontem').css({'border':'6px solid red'});
            $('.yöntemUyari').show();
            return false;
        }
    });
    var kelimeUzunlugu8 = 300,
		len8;
    $('#yontem').keydown(function(event) {	
		len8 = $('#yontem').val().split(/[\s,-?.]+/);
		if (len8.length > kelimeUzunlugu8) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len8.length + " words are typed out of an available " + kelimeUzunlugu8);
		kalanKelime8 = (kelimeUzunlugu8) - len8.length;
		$('.kalan8').html(kalanKelime8+ ' kelime kaldı');
		if(kalanKelime8 == 0) {
			$('.kalan8').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    
    });
    //Ayrıntılar -- 5.Bölüm Özgün değer alanı-----------------------------------------------------------------------------------------
    $(".devam13").click(function(){
        var özgünDeğer=$("#ozgun-deger").val();

        $("#ozgun-deger").click(function(){
            $('.özgünDegerUyari').hide();
        });
        if(özgünDeğer==null || özgünDeğer==""){
            $('.özgünDegerUyari').html("Lütfen özgün değer alanını kontrol ediniz!!!").css({"color":"red"});
            $('#ozgun-deger').css({'border':'6px solid red'});
            $('.özgünDegerUyari').show();
            return false;
        }
    });
    var kelimeUzunlugu9 = 300,                            
		len9;
    $('#ozgun-deger').keydown(function(event) {	
		len9 = $('#ozgun-deger').val().split(/[\s,-?.]+/);
		if (len9.length > kelimeUzunlugu9) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len9.length + " words are typed out of an available " + kelimeUzunlugu9);
		kalanKelime9 = (kelimeUzunlugu9) - len9.length;
		$('.kalan9').html(kalanKelime9+ ' kelime kaldı');
		if(kalanKelime9 == 0) {
			$('.kalan9').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    
    });
    //Ayrıntılar -- 6.Bölüm Yaygın etki-------------------------------------------------------------------------------                                  
    $(".devam14").click(function(){                             
        var yaygınEtki=$("#yaygin-etki").val();

        $("#yaygin-etki").click(function(){
            $('.yaygınetkiUyari').hide();
        });
        if(yaygınEtki==null || yaygınEtki==""){
            $('.yaygınetkiUyari').html("Lütfen yaygın etki alanını kontrol ediniz!!!").css({"color":"red"});
            $('#yaygin-etki').css({'border':'6px solid red'});
            $('.yaygınetkiUyari').show();
            return false;
        }
    });
    var kelimeUzunlugu10 = 300,
		len10;
    $('#yaygin-etki').keydown(function(event) {	
		len10 = $('#yaygin-etki').val().split(/[\s,-?.]+/);
		if (len10.length > kelimeUzunlugu10) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len10.length + " words are typed out of an available " + kelimeUzunlugu10);
		kalanKelime10 = (kelimeUzunlugu10) - len10.length;
		$('.kalan10').html(kalanKelime10+ ' kelime kaldı');
		if(kalanKelime10 == 0) {
			$('.kalan10').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    
    });
//Ayrıntılar -- 7. Bölüm Kurum Dışına Bağımlılık-----------------------------------------------------------------------
    $(".devam15").click(function(){
        var bağımlılık=$("#bagimlilik").val();

        $("#bagimlilik").click(function(){
            $('.bağımlılıkUyari').hide();
        });
        if(bağımlılık==null || bağımlılık==""){
            $('.bağımlılıkUyari').html("Lütfen kurum dışına bağımlılık alanını kontrol ediniz!!!").css({"color":"red"});
            $('#bagimlilik').css({'border':'6px solid red'});
            $('.bağımlılıkUyari').show();
            return false;
        }
    });
    var kelimeUzunlugu11 = 300,
		len11;
    $('#bagimlilik').keydown(function(event) {	
		len11 = $('#bagimlilik').val().split(/[\s,-?.]+/);
		if (len11.length > kelimeUzunlugu11) { 
			if ( event.keyCode == 46 || event.keyCode == 8 ) {// geri alma ve silme
	    }else if (event.keyCode < 48 || event.keyCode > 57 ) {//all other buttons
	    	event.preventDefault();
	    }
		}
		console.log(len11.length + " words are typed out of an available " + kelimeUzunlugu11);
		kalanKelime11 = (kelimeUzunlugu11) - len11.length;
		$('.kalan11').html(kalanKelime11+ ' kelime kaldı');
		if(kalanKelime11 == 0) {
			$('.kalan11').css({'background':'red'}).prepend(
				'<i class="fafa-exclamation-triangle"></i>');
		}
    
    });

});

//Ayrıntılar -- İş paketleri 8. Bölüm Çalışma Takvimi--------------------------------------------------------------

$(function(){
    $(".devam16").click(function(){
        //Çalışma takvimi
        var isPaketi1=$("#is-paket1").val();     
        var isZamanı1=$("#is-zaman").val();

        var isPaketi2=$("#is-paket2").val();
        var isZamanı2=$("#is-zaman2").val();

        var isPaketi3=$("#is-paket3").val();
        var isZamanı3=$("#is-zaman3").val();

        var isPaketi4=$("#is-paket4").val();
        var isZamanı4=$("#is-zaman4").val();

        var isPaketi5=$("#is-paket5").val();
        var isZamanı5=$("#is-zaman5").val();

        var isPaketi6=$("#is-paket6").val();
        var isZamanı6=$("#is-zaman6").val();

        var isPaketi7=$("#is-paket7").val();
        var isZamanı7=$("#is-zaman7").val();

        var isPaketi8=$("#is-paket8").val();
        var isZamanı8=$("#is-zaman8").val();

        var isPaketi9=$("#is-paket9").val();
        var isZamanı9=$("#is-zaman9").val();

        var isPaketi10=$("#is-paket10").val();
        var isZamanı10=$("#is-zaman10").val();
//İş paketleri uayarı penceresini gizleme
        $("#is-paket1").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket2").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket3").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket4").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket5").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket6").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket7").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket8").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket9").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-paket10").click(function(){
            $('.takvimUyari').hide();
        });
//İş zamanları uyarı penceresini gizleme

        $("#is-zaman").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman2").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman3").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman4").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman5").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman6").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman7").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman8").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman9").click(function(){
            $('.takvimUyari').hide();
        });
        $("#is-zaman10").click(function(){
            $('.takvimUyari').hide();
        });

        if(isPaketi1==null || isPaketi1==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket1').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı1==null || isZamanı1==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi2==null || isPaketi2==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket2').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı2==null || isZamanı2==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman2').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi3==null || isPaketi3==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket3').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı3==null || isZamanı3==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman3').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi4==null || isPaketi4==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket4').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı4==null || isZamanı4==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman4').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi5==null || isPaketi5==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket5').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı5==null || isZamanı5==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman5').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi6==null || isPaketi6==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket6').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı6==null || isZamanı6==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman6').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi7==null || isPaketi7==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket7').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı7==null || isZamanı7==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman7').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi8==null || isPaketi8==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket8').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı8==null || isZamanı8==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman8').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi9==null || isPaketi9==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket9').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı9==null || isZamanı9==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman9').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
        else if(isPaketi10==null || isPaketi10==""){
            $('.takvimUyari').html("Lütfen iş paket alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-paket10').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }else if(isZamanı10==null || isZamanı10==""){
            $('.takvimUyari').html("Lütfen çalışma takvimi zaman alanını kontrol ediniz!!!").css({"color":"red"});
            $('#is-zaman10').css({'border-bottom':'6px solid red'});
            $('.takvimUyari').show();
            return false;
        }
    });

//Ayrıntılar -- 9.Bölüm İstatistik amaçlı sorular-------------------------------------------------------------------------
    $(".devam17").click(function(){
        var iSorular1   =$("input[name='soru1']:checked").val();
        var iSorular2   =$("input[name='soru2']:checked").val();
        var iSorular3   =$("input[name='soru3']:checked").val();
        var iSorular4   =$("input[name='soru4']:checked").val();
        var iSorular5   =$("input[name='soru5']:checked").val();
        var iSorular6   =$("input[name='soru6']:checked").val();
        var iSorular7   =$("input[name='soru7']:checked").val();
        var iSorular8   =$("input[name='soru8']:checked").val();
        var iSorular9   =$("input[name='soru9']:checked").val();
        var iSorular10  =$("input[name='soru10']:checked").val();
        var iSorular11  =$("input[name='soru11']:checked").val();
        var iSorular12  =$("input[name='soru12']:checked").val();
        var iSorular13  =$("input[name='soru13']:checked").val();
        var iSorular14  =$("input[name='soru14']:checked").val();
        var iSorular15  =$("input[name='soru15']:checked").val();
        var iSorular16  =$("#soru16").val();
        var kurumSoru   =$("#destek-kurum").val();
      

        
        $(".soru1-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru2-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru3-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru4-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru5-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru6-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru7-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru8-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru9-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru10-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru11-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru12-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru13-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru14-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $(".soru15-").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $("#soru16").click(function(){
            $('.istatistikSoruUyari').hide();
        });
        $("#destek-kurum").keydown(function(){
            $('.kurumUyari').hide();    
        });
        
        if(iSorular1==null || iSorular1==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;

        }else if(iSorular2==null || iSorular2==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;

        }else if(iSorular3==null || iSorular3==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular4==null || iSorular4==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular5==null || iSorular5==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular6==null || iSorular6==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular7==null || iSorular7==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular8==null || iSorular8==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular9==null || iSorular9==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular10==null || iSorular10==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular11==null || iSorular11==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular12==null || iSorular12==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular13==null || iSorular13==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular14==null || iSorular14==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        
        }else if(iSorular15==null || iSorular15==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        }else if(iSorular16==null || iSorular16==""){
            $(".istatistikSoruUyari").html("Lütfen sorulara tekrar kontrol ediniz!!!").css({"color":"red"});
            $('.istatistikSoruUyari').show();
            return false;
        }/*else if(kurumSoru==null || kurumSoru==""){
            var iSorular15  =$("input[name='soru15']:checked").val();
            $(".kurumUyari").html("Lütfen bu alanı kontrol ediniz!!!");
            $(".kurumUyari").css({"color":"red"});
            
            return false;
        }*/
            
        
    });
    $("#soru15-2").click(function(){
		$("#destek-kurum").hide();
        $("#destek-kurum").val("");
        $(".kurumUyari").hide();
        
        
    });
    $("#soru15-1").click(function(){
        
        $("#destek-kurum").show();
        $(".kurumUyari").html("Lütfen burayı doldurunuz!!!");
        $(".kurumUyari").css({"color":"red"});
        $(".kurumUyari").show();
        return false;
    });

});
