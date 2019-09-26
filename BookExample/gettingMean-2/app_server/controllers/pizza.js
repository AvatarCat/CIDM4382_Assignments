const pizzaPlaces = (req, res) => {
    res.render('pizza-locations-list',
      {
        title: 'Pizza Places in Canyon/Amarillo',
        pageHeader: {
          title: 'Pizza Places',
          strapLine: 'Find places to eat good pizza!'
        },
        locations: [
          {
            name: 'Dominoes ',
            address: '301 N 23rd St Ste B, Canyon, TX 79015',
            rating: 3,
            facilities: ['Great Pizza', 'Delivery', 'Wifi'],
            distance: '.5 mi'
          },
          {
            name: 'Pizza Hut ',
            address: '110 23rd St, Canyon, TX 79015',
            rating: 2,
            facilities: ['Buffet Table', 'Delivery', 'Wifi'],
            distance: '.2 mi'
          },
          {
            name: '575 Pizzeria ',
            address: '7710 Hillside Rd Suite 700, Amarillo TX 79119',
            rating: 5,
            facilities: ['Gourmet Pizza', 'Wifi'],
            distance: '13.7 mi'
          }
        ]
      }
    );
  };

  const pizzaLocationInfo = (req, res) => {
    res.render('pizza-location-info',
      {
        title: 'Dominoes',
         pageHeader: {
          title: 'Pizza Places',
        },
        sidebar: {
          context: 'is on Pizza Places because it has good pizza and a good environment to sit down with your family/friends to catch up or hang out .',
          callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
          name: 'Dominoes',
          address: '301 N 23rd St Ste B, Canyon, TX 79015',
          rating: 5,
          facilities: ['Great Pizza', 'Delivery', 'Wifi'],
          coords: {lat: 34.9852, lng: -101.9199},
          openingTimes: [
            {
              days: 'Sunday - Thursday',
              opening: '10:30am',
              closing: '12:00am',
              closed: false
            },
            {
              days: 'Friday-Saturday',
              opening: '10:30am',
              closing: '1:00am',
              closed: false
            },
          ],
          reviews: [
            {
              author: 'Simon Holmes',
              rating: 5,
              timestamp: '16 July 2013',
              reviewText: 'What a great place. I can\'t say enough good things about it.'
            },
            {
              author: 'Charlie Chaplin',
              rating: 2,
              timestamp: '16 June 2013',
              reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }
          ]
        }
      }
    );
  };

  const addReview = (req, res) => {
    res.render('location-review-form',
      {
        title: 'Review Dominoes on Loc8r' ,
        pageHeader: { title: 'Review Dominoes' }
      }
    );
  };
  
  module.exports = {
    pizzaPlaces,
    pizzaLocationInfo,
    addReview
  };

  