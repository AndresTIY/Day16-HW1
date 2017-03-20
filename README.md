## Day 16 Etsy Search Page

### Explorer Mode
- recreate an etsy Page
- create own API token
- create a function that makes an AJAX request to the Etsy API using whatever search term I want
- create a data handler function to handle the data when it (asynchronously) returns from the API. Use this data to populate my webpage
- recreate etsy search results page, styled as closely as possible to actual site
  - most important thing is the actual search results. do header and footer styles after i have the search results rendering to the DOM
  - link items to their proper Etsy product pages
  - allowed to omit "Top Categories" section
  - form elements DO NOT need to work

### After Reading
- step 1, create API token, DONE
  - APP NAME: API Dres
  - Keystring: p58fg5dzzpm5wi3gtudtfa53
  - Shared Secret: wsnwx0vu7a
  - not sure if any of this is necessary

  https://api.etsy.com/v2/listings/active.js?api_key=p58fg5dzzpm5wi3gtudtfa53&keywords="glass"&includes=Images,Shop
  - Keystring is not a string so do not put in quotes!

### HTML Structure
- ignore header and footer for now
- All Categories section
  - Top Bar, Left, "All categories > "search.term" (# results) "
  - Top Bar, Right, "Sort by: Relevancy"
  - Full Page: 4 images across
    - images are 478 x 472 pixels, prob an exact square so 478 x 478
      - 16px = 1rem, so 480 = 30rem, make image card 30x30 rems
      - 38px btwn images horizontally, 2.375 rems
      - 42px btwn images vertically, 2.625 rems
    - color
      - main bg #FAF9F5
      - card bg #FFFFFF
      - main font #444444
      - bottom font color of card #9A9A9A
      - font seems to be a sans-serif, actually graphik font from Commercial Type. Cost $700. Sans Serif it is!
    - hover has an outer glow type effect on image cards

### Filling the page
- do I have to manually set up the cards or will the api populate the page with it?
- API accessed. Which API items are we looking for?
  - image => item.images
    - images[{
      url_75x75: "url goes here",
      url_170x135: "url goes here",
      url_570xN: "url goes here",
      url_fullxfull: "url goes here",
      full_height: 1000,
      full_width: 1500,
      }]
  - title => item.title
  - shop name =>
  - price => item.price
