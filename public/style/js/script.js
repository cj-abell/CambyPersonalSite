$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#contact_scroll").fadeOut();

                $("#about_me").click(function(){
                    $("#index").fadeOut();
                    $("#about_me_scroll").fadeIn();
                    $('#about_me_left').addClass('animated slideInLeft');
                    $('#about_me_right').addClass('animated slideInRight');
                    });
                $("#career").click(function(){
                    $("#index").fadeOut();
                    $("#career_scroll").fadeIn();
                    $('#career_left').addClass('animated slideInLeft');
                    $('#career_right').addClass('animated slideInRight');
                    });
                $("#contact_me").click(function(){
                    $("#index").fadeOut();
                    $("#contact_me_scroll").fadeIn();
                    $('#contact_me_left').addClass('animated slideInLeft');
                    $('#contact_me_right').addClass('animated slideInRight');
                    });
                
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});