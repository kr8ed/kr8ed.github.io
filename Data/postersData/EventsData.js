var data = [{
        "url": "images30.jpg",
        "img": "images30.jpg",
    },
    {

        "url": "",
        "img": "images31.jpg",
    },
    {

        "url": "",
        "img": "images32.jpg",
    },
    {

        "url": "",
        "img": "images41.jpg",
    },
    {

        "url": "",
        "img": "images42.jpg",
    },
    {

        "url": "",
        "img": "images44.jpg",
    },
    {

        "url": "",
        "img": "images36.jpg",
    },
    {

        "url": "",
        "img": "images37.jpg",
    },
    {

        "url": "",
        "img": "images40.jpg",
    }
];
localStorage.setItem('data', data);
// this will make the list ascending from a -z 
//data.sort(function(a, b){return a.img.localeCompare(b.img);});

//data.sort(function(a, b){return Math.random()- 0.4});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
$(document).on("pageinit", "#events", function() {


    //set up string for adding <li/>
    var li = "";

    //container for $li to be added
    $.each(data, function(i, data) {
        //add the <li> to "li" variable
        //note the use of += in the variable
        //meaning I'm adding to the existing data. not replacing it.
        //store index value in array as id of the <a> tag
        li += '<a href="posters/' + data.img + '"><img src="posters/' + data.img + '"  width="33%" height="200"/>' + '</a>'
    });

    //append list to ul
    $("#thelist").append(li).promise().done(function() {
        //refresh list to enhance its styling.
        $(this).listview("refresh");
    });
});