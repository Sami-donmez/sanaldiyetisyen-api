$(function(){
    $("#toplanti-tarih34").on({
        keydown:function(){$('#toplanti-tarih34').css({'border-bottom':'5px solid green'});},
        click:function(){$('#toplanti-tarih34').css({'border-bottom':'5px solid green'});}
    });
    $("#toplanti-saat34").on({
        keydown:function(){$('#toplanti-saat34').css({'border-bottom':'5px solid green'});},
        click:function(){$('#toplanti-saat34').css({'border-bottom':'5px solid green'});}
        
    });
    $("#toplanti-yer34").keydown(function(){
        $('#toplanti-yer34').css({'border-bottom':'5px solid green'});
    });
    $("#baskan-unvan").keydown(function(){
        $('#baskan-unvan').css({'border-bottom':'5px solid green'});
    });
    $("#baskan-adi").keydown(function(){
        $('#baskan-adi').css({'border-bottom':'5px solid green'});
    });
    $("#ogr-no").keydown(function(){
        $('#ogr-no').css({'border-bottom':'5px solid green'});
    });
    $("#ogr-ad").keydown(function(){
        $('#ogr-ad').css({'border-bottom':'5px solid green'});
    });
    $("#danisman-adi").keydown(function(){
        $('#danisman-adi').css({'border-bottom':'5px solid green'});
    });
    $("#danisman-dal").keydown(function(){
        $('#danisman-dal').css({'border-bottom':'5px solid green'});
    });
    $("#danisman-eposta").keydown(function(){
        $('#danisman-eposta').css({'border-bottom':'5px solid green'});
    });
    $("#uye1-adi").keydown(function(){
        $('#uye1-adi').css({'border-bottom':'5px solid green'});
    });
    $("#uye1-dal").keydown(function(){
        $('#uye1-dal').css({'border-bottom':'5px solid green'});
    });
    $("#uye1-eposta").keydown(function(){
        $('#uye1-eposta').css({'border-bottom':'5px solid green'});
    });
    $("#uye2-adi").keydown(function(){
        $('#uye2-adi').css({'border-bottom':'5px solid green'});
    });
    $("#uye2-dal").keydown(function(){
        $('#uye2-dal').css({'border-bottom':'5px solid green'});
    });
    $("#uye2-eposta").keydown(function(){
        $('#uye2-eposta').css({'border-bottom':'5px solid green'});
    });
    

    $(".devam1").click(function(){
        var tarih1 =$("#toplanti-tarih34").val();
        var saat1  =$("#toplanti-saat34").val();
        var yer1   =$("#toplanti-yer34").val();

        $("#toplanti-tarih34").click(function(){
            $('.tarihUyari').hide();
        });
        $("#toplanti-saat34").click(function(){
            $('.saatUyari').hide();
        });
        $("#toplanti-yer34").click(function(){
            $('.yerUyari').hide();
        });

        if (tarih1==null || tarih1==""){
            $(".tarihUyari").html("Lütfen bu alanı doldurunuz!!!").css({"color":"red"});
            $("#toplanti-tarih34").css({"border-bottom":"5px solid red"})
            $('.tarihUyari').show();
            return false();
        }else if (saat1==null || saat1==""){
            $(".saatUyari").html("Lütfen bu alanı kontrol ediniz!!!").css({"color":"red"});
            $("#toplanti-saat34").css({"border-bottom":"5px solid red"})
            $('.saatUyari').show();
            return false();
        }else if (yer1==null || yer1==""){
            $(".yerUyari").html("Lütfen bu alanı kontrol ediniz!!!").css({"color":"red"});
            $("#toplanti-yer34").css({"border-bottom":"5px solid red"})
            $('.yerUyari').show();
            return false();
        }
    });

    $(".devam2").click(function(){
        var unvan=$("#baskan-unvan").val();
        var unvanEdit=/^[a-zA-Z " "]+$/gm;
        var adıSoyadı=$("#baskan-adi").val();
        var adEdit=/^[a-zA-Z " "]+$/gm;

        $("#baskan-unvan").click(function(){
            $(".unvanUyari").hide();
        });
        $("#baskan-adi").click(function(){
            $(".adUyari").hide();
        });

        if(unvan==null || unvan=="" || !unvanEdit.test(unvan)){
            $(".unvanUyari").html("Lütfen bu alanı kontrol ediniz!!!").css({"color":"red"});
            $("#baskan-unvan").css({"border-bottom":"5px solid red"})
            $('.unvanUyari').show();
            return false();
        }else if(adıSoyadı==null || adıSoyadı=="" || !adEdit.test(adıSoyadı)){
            $(".adUyari").html("Lütfen bu alanı kontrol ediniz!!!").css({"color":"red"});
            $("#baskan-adi").css({"border-bottom":"5px solid red"})
            $('.adUyari').show();
            return false();
        }
    });
    $("#baskan-unvan").keyup(function(){
        if(this.value.match(/[^a-zA-Z " "]/g)){
            $('#baskan-unvan').css({'border-bottom':'5px solid red'});
            $(".unvanUyari").html("Lütfen bu alanı kontrol ediniz!!!").css({"color":"red"});
            $('.unvanUyari').show();
        }
        else if(this.value.match(/[^0-9]/g)){
            $(".unvanUyari").css({"border-bottom":"green"});
            $('.unvanUyari').hide();
        }
    });
    $("#baskan-adi").keyup(function(){
        if(this.value.match(/[^a-zA-Z " "]/g)){
            $('#baskan-adi').css({'border-bottom':'5px solid red'});
            $(".adUyari").html("Lütfen bu alanı kontrol ediniz!!!").css({"color":"red"});
            $('.adUyari').show();
        }
        else if(this.value.match(/[^0-9]/g)){
            $(".adUyari").css({"border-bottom":"green"});
            $('.adUyari').hide();
        }
    });

    $(".devam3").click(function(){
        var ogrAdı  =$("#ogr-ad").val();
        var ogrNo         =$("#ogr-no").val();
        var ogrNoEdit    = /^[0-9]+$/gm;
        var ogrAdEdit    = /^[a-zA-Z " "]+$/gm;

        if(ogrNo == null || ogrNo == "" || !ogrNoEdit.test(ogrNo)){
            $('.ogrnu').html("Lütfen öğrenci numarasını rakamlarla giriniz!!!").css({"color":"red"});
            $('#ogr-no').css({'border-bottom':'5px solid red'});
            $('.ogrnu').show();
            return false();  
            
        }else if(ogrAdı == null || ogrAdı == ""  || !ogrAdEdit.test(ogrAdı)){
            $('.ograd').html("Lütfen öğrenci adı-soyadı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#ogr-ad').css({'border-bottom':'5px solid red'});
            $('.ograd').show();
            return false();
        }

    });
    $("#ogr-no").keyup(function(){
        if(this.value.match(/[^0-9]/g)){
            $('.ogrnu').html("Lütfen öğrenci numarasını rakamlarla giriniz!!!").css({"color":"red"});
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
            $('.ograd').html("Lütfen öğrenci adı-soyadı alanını kontrol ediniz!!!").css({"color":"red"});
            $('#ogr-ad').css({'border-bottom':'5px solid red'});
            $('.ograd').show();
        }
        else if(this.value.match(/[^0-9]/g)){
            $(".ograd").css({"border-bottom":"green"});
            $('.ograd').hide();
        }
    });

    $(".devam4").click(function(){
        var tezYazımDili=$("input[name='ilk-teklif']:checked").val();
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
            return false();

        }
        else if(çalışmaTarzı==null || çalışmaTarzı==""){
            $('.çalışmaAlanıUyari').html("Lütfen çalışma tarzı alanını kontrol ediniz!!!").css({"color":"red"});
            $('.çalışmaAlanıUyari').show();
            return false();
        }
    });
    $(".devam5").click(function(){

        //Danışman alanı   ------------------------------------------------------------------------------------------
        var danısmanad1		 =$("#danisman-adi").val();		//Ad-SOyad
        var uye_Edit    = /^[a-zA-Z " " ,]+$/gm;    	   //Ad-SOyad düzenleme
        var kurumDali		 =$("#danisman-dal").val();	  //Kurum/Anabilim Dalı	
        
        //Email düzenleme
        var email = $("input[name=danisman-eposta]").val();
        var atpos=email.indexOf("@");
        var dotpos=email.lastIndexOf(".");
                    
        $("#danisman-adi").keydown(function(){
            $(".danısmanAdıUyari").hide();
        });
        $("#danisman-dal").keydown(function(){
            $(".danısmanAdıUyari").hide();
        });
        $("#danisman-eposta").keydown(function(){
            $(".danısmanAdıUyari").hide();
            $(".emailUyari").hide();
        });
        
        if(danısmanad1==null || danısmanad1=="" || !uye_Edit.test(danısmanad1)){
        $('.danısmanAdıUyari').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
        $('#danisman-adi').css({'border-bottom':'5px solid red'});
        $('.danısmanAdıUyari').show();
        return false();
        }else if(kurumDali==null || kurumDali==""){
            $('.danısmanAdıUyari').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#danisman-dal').css({'border-bottom':'5px solid red'});
            $('.danısmanAdıUyari').show();
            return false();
        }else if ( atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length ){
            $('.danısmanAdıUyari').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('.emailUyari').html("Geçerli email adresi girin").css({"color":"red"});
            $('#danisman-eposta').css({'border-bottom':'5px solid red'});
            $('.emailUyari').show();
            $('.danısmanAdıUyari').show();
            return false();
        }
    //Uye 1 alanı-------------------------------------------------------------------------------------------------
                        
        var uyeadı1		 	=$("#uye1-adi").val();				//Ad-SOyad
        var uye_Edit    	= /^[a-zA-Z " " ,]+$/gm;    	   	   //Ad-SOyad düzenleme
        var uyekurumDali	=$("#uye1-dal").val();	  		  //Kurum/Anabilim Dalı	
        
        //Email düzenleme
        var email2 	= $("input[name=uye1-eposta]").val();
        var atpos2 	=email2.indexOf("@");
        var dotpos2	=email2.lastIndexOf(".");
                    
        $("#uye1-adi").keydown(function(){
            $(".uyeUyari").hide();
        });
        $("#uye1-dal").keydown(function(){
            $(".uyeUyari").hide();
        });
        $("#uye1-eposta").keydown(function(){
            $(".uyeUyari").hide();
            $(".emailUyari2").hide();
        });
        
        if(uyeadı1==null || uyeadı1=="" || !uye_Edit.test(uyeadı1)){
            $('.uyeUyari').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#uye1-adi').css({'border-bottom':'5px solid red'});
            $('.uyeUyari').show();
            return false();
        }else if(uyekurumDali==null || uyekurumDali==""){
            $('.uyeUyari').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#uye1-dal').css({'border-bottom':'5px solid red'});
            $('.uyeUyari').show();
            return false();
        }else if( atpos2<1 || dotpos2<atpos2+2 || dotpos2+2>=email2.length ){
            $('.uyeUyari').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('.emailUyari2').html("Geçerli email adresi girin").css({"color":"red"});
            $('#uye1-eposta').css({'border-bottom':'5px solid red'});
            $('.emailUyari2').show();
            $('.uyeUyari').show();
            return false();
        }
    //Uye 2 alanı-------------------------------------------------------------------------------------------------
                        
        var uyeadı2		 	=$("#uye2-adi").val();				//Ad-SOyad
        var uye_Edit2    	= /^[a-zA-Z " " ,]+$/gm;    	   	   //Ad-SOyad düzenleme
        var uyekurumDali2	=$("#uye2-dal").val();	  		  //Kurum/Anabilim Dalı	
        
        //Email düzenleme
        var email3 	= $("input[name=uye2-eposta]").val();
        var atpos3 	=email3.indexOf("@");
        var dotpos3	=email3.lastIndexOf(".");
                    
        $("#uye2-adi").keydown(function(){
            $(".uyeUyari2").hide();
        });
        $("#uye2-dal").keydown(function(){
            $(".uyeUyari2").hide();
        });
        $("#uye1-eposta").keydown(function(){
            $(".uyeUyari2").hide();
            $(".emailUyari3").hide();
        });
        
        if(uyeadı2==null || uyeadı2=="" || !uye_Edit2.test(uyeadı2)){
            $('.uyeUyari2').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#uye2-adi').css({'border-bottom':'5px solid red'});
            $('.uyeUyari2').show();
            return false();
        }else if(uyekurumDali2==null || uyekurumDali2==""){
            $('.uyeUyari2').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#uye2-dal').css({'border-bottom':'5px solid red'});
            $('.uyeUyari2').show();
            return false();
        }else if( atpos3<1 || dotpos3<atpos3+2 || dotpos3+2>=email3.length ){
            $('.uyeUyari2').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('.emailUyari3').html("Geçerli email adresi girin").css({"color":"red"});
            $('#uye2-eposta').css({'border-bottom':'5px solid red'});
            $('.emailUyari3').show();
            $('.uyeUyari2').show();
            return false();
        }
    });
    $("#danisman-adi").keyup(function(){
        if(this.value.match(/[^a-zA-Z " " ,]/g)){
            $('.danısmanAdıUyari').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#danisman-adi').css({'border-bottom':'5px solid red'});
            $('.danısmanAdıUyari').show();
        }
        else if(this.value.match(/[^0-9]/g)){
            $(".danısmanAdıUyari").css({"border-bottom":"green"});
            $('.danısmanAdıUyari').hide();
            }
    });
    $("#uye1-adi").keyup(function(){
        if(this.value.match(/[^a-zA-Z " " ,]/g)){
            $('.uyeUyari').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#uye1-adi').css({'border-bottom':'5px solid red'});
            $('.uyeUyari').show();
       }
       else if(this.value.match(/[^0-9]/g)){
            $(".uyeUyari").css({"border-bottom":"green"});
            $('.uyeUyari').hide();
        }
    });
    $("#uye2-adi").keyup(function(){
        if(this.value.match(/[^a-zA-Z " " ,]/g)){
            $('.uyeUyari2').html("Lütfen danışman bilgilerinizi kontrol ediniz!!!").css({"color":"red"});
            $('#uye2-adi').css({'border-bottom':'5px solid red'});
            $('.uyeUyari2').show();
        }
        else if(this.value.match(/[^0-9]/g)){
            $(".uyeUyari2").css({"border-bottom":"green"});
            $('.uyeUyari2').hide();
        }
    });
             

});
