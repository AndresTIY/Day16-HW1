var apiKey = '?api_key=p58fg5dzzpm5wi3gtudtfa53';
var succSearch = 'https://api.etsy.com/v2/listings/active.js?api_key=p58fg5dzzpm5wi3gtudtfa53&keywords=%22succulents%22&includes=Images,Shop';
//------------------KEYWORD ATTEMPT------------------
// var keyword = 'glass';
// var searchPartial = '&keywords=%22';
// var searchPartial2 = '%22&includes=Images,Shop';
// var search = searchPartial + keyword + searchPartial2
// url: 'https://api.etsy.com/v2/listings/active.js' + apiKey + keyword,
// keyword stuff not working rn
//---------------------------------------------------



var settings = {
  type: 'GET',
  url: succSearch,
  dataType: 'jsonp',
  success: function(data, status, xhr){
    var results = data.results;
    results.forEach(function(item, i, arr){
      console.log(item.title);

      console.log(item.price);

      console.log(item.Shop.shop_name);

      console.log(item.Images[0].url_fullxfull);

    })
  }
};






$.ajax(settings);





//success in settings is the almost the same as .then() method
// $.ajax(settings).then(function(data, status, xhr){
//
//   var results = data.results;
//   var title = results.forEach(function(item, i, arr){
//     console.log(item.title);
//   });
//   var price = results.forEach(function(item, i, arr){
//     console.log(item.price);
//   });
//   var shopName = results.forEach(function(item, i, arr){
//     var shops = item.Shop;
//     console.log(shops.shop_name);
//   });
//   var images = results.forEach(function(item, i, arr){
//     var image = item.Images;
//     var imgUrl = image.forEach(function(item, i, arr){
//       console.log(item.url_75x75);
//     });
//   });
//
//
//
// });

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
