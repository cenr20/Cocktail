var backgrounds = ['Drinks_1', 'Drinks_2', 'Drinks_3']

$( document ).ready(function(){
    $('h1').on('click', function () {

      var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
      var imageUrl = "url('./images/" + randomBackground + ".jpg')"

  $('body').css('background', imageUrl)
  $('span').text(randomBackground)


  })
})
