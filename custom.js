$(document).ready(function() {



    function searchLyrics(event) {
        event.preventDefault(event);

        var artist = $('#artist').val();
        var title = $('#title').val();
        var newArr = title.split(" ");
        var newStr = newArr.join("%20");

        // for the address below, use backtick
        fetch(`https://api.lyrics.ovh/v1/${artist}/${newStr}`)
            .then(res => res.json())
            .then(data => {

                var lyrics = data.lyrics;
                $('#result').text("");
                console.log(lyrics);
                $('#result').append(`<p>${lyrics}</p>`);
            });
        //     for (var i = 0; i < data.length; i++) { 

        //         $(".p").append(data)
        //       }
    }



    $('.btn').click(function(event) {
        searchLyrics(event);
    });

    // new line
});