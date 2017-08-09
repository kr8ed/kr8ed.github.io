//clubs in pretoria
var data = [{
        "id":0,
        "name":"VANITY",
        "type":"Club",
        "area":"Groenkloof",
        "details":"Sophisticated, unique, and effortlessly stylish, Vanity is the exceptional destination for glittering celebrations. The trailblazers behind super brands Taboo, Cocoon and the VIP Lounge have brought their distinctive flair for the glamorous high life to Pretoria.",
        "img": "https://pbs.twimg.com/profile_images/734686068952432640/9-IiD7Bw.jpg",
        "url":"http://www.danny.com",
        "tel":"09873736367",
        "age":21,
        "ambiance":"Hip hop",
        "hours":"modnay to friday 9pm-2am",
        "email": "mailto:avisgreene@handshake.com", 
        "address": "293 Dean Street, Dante, Oregon, 5864"
} ,{
       "id": 5,
       "name":"Arcade empire ",
       "type":"Club / Lounge",
       "area":"Sunnyside",
       "img": "arcade-empire.jpg",
       "url":"http://www.danny.com",
       "tel":"tel:09873736367",
       "email": "mailto:avisgreene@handshake.com",  
       "address": "293 Dean Street, Dante, Oregon, 5864"
},{
       "id": 1,
       "name":"Moloko",
       "type":"Club",
       "area":"hatfield",
       "img": "http://www.zkhiphani.co.za/wp-content/uploads/2016/09/Moloko.png",
       "url":"http://www.danny.com",
       "tel":"tel:09873736367",
       "email": "mailto:avisgreene@handshake.com",  
       "address": "293 Dean Street, Dante, Oregon, 5864",
       "map":"google.navigation:q=Pretoria Shop 22 Groenkloof Plaza c/o George Storrar Dr. & Bronkhorst Str",
}, {
       "id": 2,
       "name":"TopFlo",
       "type":"Club",
       "area":"hatfield",
       "img": "https://pbs.twimg.com/profile_images/582220432352419840/d2gfrERa.jpg",
       "url":"http://www.danny.com",
       "tel":"tel:09873736367",
       "email": "mailto:avisgreene@handshake.com",  
       "address": "293 Dean Street, Dante, Oregon, 5864"
} ,{
       "id": 3,
       "name":"Blue room",
       "type":"Club ",
       "area":"hatfield",
       "img": "http://www.blueroomhatfield.co.za/wp-content/themes/theme46021/images/logo.png",
       "url":"http://www.danny.com",
       "tel":"tel:09873736367",
       "email": "mailto:avisgreene@handshake.com",  
       "address": "293 Dean Street, Dante, Oregon, 5864"
},{
       "id": 4,
       "name":"Cubana",
       "type":"Club / Lounge",
       "area":"Sunnyside",
       "img": "https://pbs.twimg.com/profile_images/474200493456388097/9IDGYy1K_400x400.jpeg",
       "url":"http://www.danny.com",
       "tel":"tel:09873736367",
       "email": "mailto:avisgreene@handshake.com",  
       "address": "293 Dean Street, Dante, Oregon, 5864"
},{
       "id": 5,
       "name":"Arcade empire ",
       "type":"Club / Lounge",
       "area":"Sunnyside",
       "img": "arcade-empire.jpg",
       "url":"http://www.danny.com",
       "tel":"tel:09873736367",
       "email": "mailto:avisgreene@handshake.com",  
       "address": "293 Dean Street, Dante, Oregon, 5864"
}];


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$(document).on("pageinit", "#info-page", function () {


    //set up string for adding <li/>
    var li = "";
    
    //container for $li to be added
    $.each(data, function (i, data) {
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
        li  += '<li ><a href="#" id="' + i + '" class="info-go" data-transition="flip">' + '<img src="'+data.img+'" width="80" height="80" style="background-color:yellow;box-shadow:0px 1px 3px rgba(100,100,100,0.49);border-radius:40px"/>' + data.name + '<p>'+'<font color="red">'+data.type +" "+ data.area+'</font>'+'</p>'+'</a></li>';
        
 li  += '<li id="no-results"><center>'+"Search: no match found"+'</center></a></li>'
    });
 
    //append list to ul
    $("#thelist").append(li).promise().done(function () {
        //wait for append to finish - thats why you use a promise()
        //done() will run after append is done
        //add the click event for the redirection to happen to #details-page
        $(this).on("click", ".info-go", function (e) {
            e.preventDefault();
            //store the information in the next page's data
            $("#details-page").data("info", data[this.id]);
            //change the page # to second page. 
            //Now the URL in the address bar will read index.html#details-page
            //where #details-page is the "id" of the second page
            //we're gonna redirect to that now using changePage() method
            $.mobile.changePage("#details-page");
        });

        //refresh list to enhance its styling.
        $(this).listview("refresh");
    });
});
//use pagebeforeshow
//DONT USE PAGEINIT! 
//the reason is you want this to happen every single time
//pageinit will happen only once
$(document).on("pagebeforeshow", "#details-page", function () {
    //get from data - you put this here when the "a" wa clicked in the previous page
    var data = $(this).data("info");
    //string to put HTML in
    var info_view = "";

      
 info_view += '<div >'
                      +'<div class="ui-body" style="background:white; font-weight:normal;box-shadow:1px 3px 5px 0px rgba(100,100,100,0.49) ;   border-radius:0px; border-top:none !important;" >'
                       
                      +' <ul data-role="listview"  data-filter="true" data-icon="false" data-mini="true" data-input="#filterBasic-input" class="ui-nodisc-icon ui-alt-icon"  >'
                      + '<img src="'+data.img+'" width="80" height="80" style="background-color:yellow;box-shadow:0px 1px 7px rgba(100,100,100,0.49);border-radius:40px"/>'
                      +data.name+" "+data.type+" "+ data.area+'<br>'
                      +'</div>'+'<br>'
                     
                      +'</ul>' 
                       +'<div class="ui-body" style="background:white; font-weight:normal;box-shadow:1px 3px 5px 0px rgba(100,100,100,0.49) ;   border-radius:0px; border-top:none !important;" >'
                       +'<p style="opacity:0.7;">' 
                       +'<b>'+data.name+'</b>'+ " "+ data.details+'</p>' +'</br></br>'+'</div>'+'</br>'


                       +'<div class="ui-grid-c">'

                       //CALL
                       +'<div class="ui-block-d">'
                         + '<a href="tel:' + data.tel + '" class="ui-btn ui-icon-phone ui-btn-icon-left" style=";box-shadow:1px 3px 5px 0px rgba(100,100,100,0.49);width:10px;height:25px;border-radius:0px; background:#3b7a57">' + '</a>'+'<br>'
                        +'</div>'
                       //URL
                        +'<div class="ui-block-d">'
                         + '<a href="' +data.url+ '" class="ui-btn ui-icon-info ui-btn-icon-left" style="width:10px;height:25px;border-radius:30px; background:purple">'+  '</a>'+'<br>'
                        +'</div>'
                       //EMAIL
                       +'<div class="ui-block-d">'
                         + '<a href="' + data.email + '" class="ui-btn ui-icon-mail ui-btn-icon-left" style="width:10px;height:25px;border-radius:30px; background:blue">'+  '</a>'+'<br>'
                        +'</div>'
                       //Map
                        +'<div class="ui-block-d">'
                         + '<a href="' + data.map + '" class="ui-btn ui-icon-location ui-btn-icon-left" style="width:10px;height:25px;border-radius:30px; background:red">'+  '</a>'+'<br>'
                        +'</div>'

                      
                       +'<p >'+'<i style="color:purple">'+"Address: "+ '</i>'+data.address+'</p>'
                       +'<p >'+'<i style="color:purple">'+"type: "+ '</i>'+data.type+'</p>'
                       +'<p >'+'<i style="color:purple">'+"Ambiance: "+ '</i>'+data.ambiance+'</p>'
                       +'<p >'+'<i style="color:purple">'+"Hours: "+ '</i>'+data.hours+'</p>'
                       +'<p >'+'<i style="color:purple">'+"Age Resctriction: "+ '</i>'+data.age+'</p>'

              '</div>';
    //add this to html
       $(this).find("[data-role=content]").html(info_view);
});