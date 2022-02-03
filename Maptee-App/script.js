'use strict'


// Using the Geolocation API is called an API because it is in fact, a browser API 
/*getCurrentPosition() function here takes as an input to Callback functions. And the first one is to Callback function
that will be called on success. So whenever the browser successfully got the coordinates of the current position of the user
and to second callback is the Error Callback which is the one that is gonna be called when there happened an error
while getting the coordinates.*/
/*Success Callback. is actually called with a parameter, which we call the Position Parameter.
we will get postion object, we want to get latitude and longitude from that object, both are inside coords object

They are certainly not 100% accurate but we should be able to work with them. with this coordinates
will be to load the map and then center that map on this position.*/


navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    /*Google maps */
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords=[latitude, longitude];// for setView and marker methods

    const map = L.map('map').setView(coords,13);
    /* L here this is basically the main function that Leaflet gives us as an entry point. */
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    /*map special object with a couple of methods and properties on it.
    on method that we are now using basically as an event listener. */
    map.on('click', function(mapevenet){
        // console.log(mapevenet);
        const coords2 = mapevenet.latlng;
        L.marker(coords2)
        .addTo(map)
        .bindPopup(L.popup({
            maxWidth:250,
            minWidth:100,
            autoClose:false,
            closeOnClick:false,
            className:'running-popup'
        })).setPopupContent('🧍 I am here')
        .openPopup();
    })
}, function () {
    alert('could not get your current position, please allow access your location');
})
/*Displaying a Map Using Leaflet Library is a third party library called Leaflet
an open-source JavaScript library for mobile-friendly interactive maps*/
/* simply include a hosted version that is on a CDN.*/
/*Displaying a Map Marker:
display a marker wherever we click on the map. simply attach an event listener to  whole map element  we cannot simply use the add event listener method
that we have been using all the time. Instead, we can use something similar that is actually available 
on Leaflet in the leaflet library.
on() method here is not coming from JavaScript itself. It is instead of coming from the leaflet library.
*/