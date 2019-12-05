var backgrounds = ['Inspiration1', 'Inspiration2', 'Inspiration3']

$( document ).ready(function(){
    $('h1').on('click', function () {

      var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      var imageUrl = "url('./Images/" + randomBackground + ".jpg')"

  $('body').css('background', imageUrl)
  $('span').text(randomBackground)


  })
})
