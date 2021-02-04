var place = [
    {
        'name':'Mount Everest',
        'long':	27.986065  ,
        'lat': 86.922623,
        'description':'world highest mountain.'
    },
    {
        'name':'United States',
        'long':38 ,
        'lat': -97 ,
        'description':'Powerful country'
    },
    {
        'name':'Canada',
        'long': 62.2270,
        'lat':-105.3809 ,
        'description':'cold country.'
    },
    {
        'name':'India',
        'long': 22,
        'lat': 77,
        'description':'crowded country'
    },
    {
        'name':'Japan',
        'long':34.669529 ,
        'lat': 135.497009,
        'description':'clean country.'
    }
]



var map = L.map('map').setView([51.505, -0.09], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var i;
for(i=0;i<place.length;i++)
{
    L.marker([place[i].long, place[i].lat]).addTo(map)
    .bindPopup(`<h1>${place[i].name}</h1><h3>${place[i].description}</h3>`)
    .openPopup();
}
console.log(place[0] )