fetch("https://api.jikan.moe/v3")
.then(function(response){
    return response.json();
})
.then(function(data) {
    console.log(data)
    document.querySelector('#a').innerHTML = 'Nom d Auteur : ' + data.Author  ;
    document.querySelector('#b').innerHTML = 'Discord : ' + data.Discord;
    document.querySelector('#c').innerHTML = 'Version : ' + data.Version;
})