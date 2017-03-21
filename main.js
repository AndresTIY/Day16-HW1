var apiKey = '?api_key=p58fg5dzzpm5wi3gtudtfa53';
// var succSearch = 'https://api.etsy.com/v2/listings/active.js?api_key=p58fg5dzzpm5wi3gtudtfa53&keywords=%22succulents%22&includes=Images,Shop';
//------------------KEYWORD ATTEMPT------------------


var keyword = "cats";
var searchPartial = '&keywords=%22';
var searchPartial2 = '%22&includes=Images,Shop';
var search = searchPartial + keyword + searchPartial2;
var apiUrl = 'https://api.etsy.com/v2/listings/active.js';
// url: 'https://api.etsy.com/v2/listings/active.js' + apiKey + keyword,
// keyword stuff not working rn, it works now!
//---------------------------------------------------
//--------------------Search Click--------------------

$('#submit').on('click', function(item, i, arr){
  keyword = $('#search').val();
})





var settings = {
  type: 'GET',
  url: apiUrl + apiKey + search,
  // url: succSearch,
  dataType: 'jsonp',
  success: function(data, status, xhr){
    var results = data.results;
    results.forEach(function(item, i, arr){
      var images = item.Images[0].url_170x135;
      var shop = item.Shop.shop_name;
      // var $title = $('<p class="title">'+item.title+'</p>');
      // var $price = $('<span class="price">'+item.price+'</span>');
      // var $price = item.price;
      // var $shopName = $('<span class="shop">'+ shop +'</span>');
      // var $image = $('<div class="image-container"><img src="'+ images +'"></div>');
      var test = $('<div class="card"><div class="image-container"><img src="'+ images +'"></div><p class="title">'+item.title+'</p><p><span class="shop">'+ shop +'</span><span class="price">$'+item.price+'</span></p></div>');
      $('.container').append(test);
    })
  }
};
$.ajax(settings);


// $.ajax(settings);








//success in settings is the almost the same as .then() method
// $.ajax(settings).then(function(data, status, xhr){

//------------------EXAMPLE FROM NOTES---------

// var $h3 = $('<h3>');
// $h3.text(username);
// $('#container').append($h3);

//------------------HOW TO RETRIEVE FROM OBJ----------
// success: function(data, status, xhr){
//   console.log(data);  gives js response in obj
//   console.log(status); 'success' if successful
//   console.log(xhr); xhr request in obj
// &keywords=%22succulents%22&includes=Images,Shop
// data = ({
//   "count": 50100, retrieved with data.count
//   "results": [, retrieved with data.results, brings up 25 objects in an array
        // { "listing_id": 286130293, retrieved with data.results[0].listing_id


// })
//  $.ajax(settings).then(function(data, status, xhr){
//   data.results.forEach(function(item, index, arr){
//     console.log(item.listing_id); this lists all listing ids!
//   })
// });
//---------------------------------------------------
