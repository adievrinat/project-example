$(function () {
    $('.b-map').each(function () {
        let component = $(this),
            points = component.data('points'),
            mapContainer = $('.js-map', component),
            markers = [];
        console.log(123);

        var mymap = L.map('map').setView([51.505, -0.09], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'your.mapbox.access.token'
        }).addTo(mymap);


        mymap.on('zoom', function () {
           alert(123);
        });

        // let map = new google.maps.Map(mapContainer.get(0), {
        //     center: {lat: 70, lng: 88},
        //     styles:
        //
        //         [
        //             {
        //                 "featureType": "administrative",
        //                 "elementType": "labels.text.stroke",
        //                 "stylers": [
        //                     {
        //                         "visibility": "off"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "administrative",
        //                 "elementType": "all",
        //                 "stylers": [
        //                     {
        //                         "saturation": "-100"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "administrative.country",
        //                 "elementType": "labels.text.fill",
        //                 "stylers": [
        //                     {
        //                         "color": "#ffffff"
        //                     },
        //                     {
        //                         "visibility": "on"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "administrative.country",
        //                 "elementType": "labels.text.stroke",
        //                 "stylers": [
        //                     {
        //                         "color": "#ffffff"
        //                     },
        //                     {
        //                         "visibility": "off"
        //                     }
        //                 ]
        //             },
        //
        //
        //             {
        //                 "featureType": "administrative.province",
        //                 "elementType": "all",
        //                 "stylers": [
        //                     {
        //                         "visibility": "off"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "administrative.province",
        //                 "elementType": "labels.text.stroke",
        //                 "stylers": [
        //                     {
        //                         "visibility": "off"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "administrative.locality",
        //                 "elementType": "all",
        //                 "stylers": [
        //                     {
        //                         "visibility": "off"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "administrative.locality",
        //                 "elementType": "labels.text.stroke",
        //                 "stylers": [
        //                     {
        //                         "visibility": "off"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "landscape",
        //                 "elementType": "all",
        //                 "stylers": [
        //                     {
        //                         "saturation": -100
        //                     },
        //                     {
        //                         "lightness": 65
        //                     },
        //                     {
        //                         "visibility": "on"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "landscape",
        //                 "elementType": "geometry.fill",
        //                 "stylers": [
        //                     {
        //                         "color": "#1c3251"gu
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "landscape.natural",
        //                 "stylers": [
        //                     {
        //                         "color": "#1c3251"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "landscape.man_made",
        //                 "elementType": "geometry.fill",
        //                 "stylers": [
        //                     {
        //                         "color": "#244375"
        //                     },
        //                     {
        //                         "visibility": "on"
        //                     }
        //                 ]
        //             },
        //             // {
        //             //     "featureType": "landscape.man_made",
        //             //     "elementType": "geometry.fill",
        //             //     "stylers": [
        //             //         {
        //             //             "color": "#c762d9"
        //             //         }
        //             //     ]
        //             // },
        //
        //
        //             {
        //                 "featureType": "administrative.locality",
        //                 "elementType": "labels.text",
        //                 "stylers": [
        //                     {
        //                         "color": "#fdfff8"
        //                     },
        //                     {
        //                         "weight": 1
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "poi",
        //                 "stylers": [
        //                     {
        //                         "color": "#244375"
        //                     },
        //                     {
        //                         "weight": 0.5
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "poi",
        //                 "elementType": "labels.text",
        //                 "stylers": [
        //                     {
        //                         "color": "#ffffff"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "poi.government",
        //                 "elementType": "labels.text",
        //                 "stylers": [
        //                     {
        //                         "color": "#ffffff"
        //                     }
        //                 ]
        //             },
        //             // {
        //             //     "featureType": "poi.park",
        //             //     "stylers": [
        //             //         {
        //             //             "color": "#ffeb3b"
        //             //         }
        //             //     ]
        //             // },
        //
        //
        //             // {
        //             //     "featureType": "poi",
        //             //     "elementType": "all",
        //             //     "stylers": [
        //             //         {
        //             //             "saturation": -100
        //             //         },
        //             //         {
        //             //             "lightness": "50"
        //             //         },
        //             //         {
        //             //             "visibility": "simplified"
        //             //         }
        //             //     ]
        //             // },
        //             // {
        //             //     "featureType": "poi",
        //             //     "elementType": "labels",
        //             //     "stylers": [
        //             //         {
        //             //             "visibility": "off"
        //             //         }
        //             //     ]
        //             // },
        //             // {
        //             //     "featureType": "poi",
        //             //     "elementType": "geometry.fill",
        //             //     "stylers": [
        //             //         {
        //             //             "color": "#1c3251"
        //             //         }
        //             //     ]
        //             // },
        //             // {
        //             //     "elementType": "geometry.fill",
        //             //     "stylers": [
        //             //         {
        //             //             "color": "#1c3251"
        //             //         },
        //             //         {
        //             //             "weight": 0.5
        //             //         }
        //             //     ]
        //             // },
        //             {
        //                 "featureType": "road",
        //                 "stylers": [
        //                     {
        //                         "weight": 1
        //                     },
        //                     {
        //                         "color": "#3d639d"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "transit",
        //                 "elementType": "labels.text",
        //                 "stylers": [
        //                     {
        //                         "color": "#ffffff"
        //                     },
        //                     {
        //                         "weight": 1
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "road.highway",
        //                 "elementType": "all",
        //                 "stylers": [
        //                     {
        //                         "visibility": "simplified"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "road.arterial",
        //                 "elementType": "all",
        //                 "stylers": [
        //                     {
        //                         "lightness": "30"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "road.local",
        //                 "elementType": "all",
        //                 "stylers": [
        //                     {
        //                         "lightness": "40"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "road",
        //                 "elementType": "labels.text.fill",
        //                 "stylers": [
        //                     {
        //                         "color": "#000000"
        //                     }
        //                 ]
        //             },
        //             {
        //                 "featureType": "water",
        //                 "stylers": [
        //                     {
        //                         "color": "#244375"
        //                     }
        //                 ]
        //             }
        //         ]
        // });
        //
        // let latlngbounds = new google.maps.LatLngBounds();
        //
        // $.each(points, function (i, point) {
        //
        //     let position = {lat: parseFloat(point.lat), lng: parseFloat(point.lng)};
        //
        //     let marker = new google.maps.Marker({
        //             position: position,
        //             map: map,
        //             icon: point.icon
        //         }
        //     );
        //
        //     latlngbounds.extend(position);
        //
        //     if (point.type === 'partner') {
        //         markers.push(marker);
        //     }
        //     let contentString = '<div class="content-marker">' +
        //         '<h2 class="title">' + point.title + '</h2>' + '</div>' +
        //         '<div class="item">' +
        //         '<div class="value">' + point.address + '</div>' + '<div class="value">' + point.phone + '</div>' + '<div class="value">' + point.email + '</div>' +
        //         '<a href="#" class="link">Узнать больше</a>' +
        //         '</div>' + '<button class="close-info-window js-close-info"></button>';
        //
        //     let infowindow = new google.maps.InfoWindow({
        //         content: contentString
        //     });
        //
        //     google.maps.event.addListener(marker, 'click', function () {
        //         map.setZoom(16);
        //         map.setCenter(marker.getPosition());
        //         infowindow.open(map, marker); // открываем окно информации маркера
        //     });
        //
        //     google.maps.event.addListener(infowindow, 'closeclick', function (event) {
        //         // map.setZoom(6);
        //         // map.setCenter(marker.getPosition());
        //     });
        //
        //     //закрытие инфо окна при клике на карте
        //     google.maps.event.addListener(map, 'click', function () {
        //         infowindow.close();
        //     });
        // });
        //
        // new MarkerClusterer(map, markers, {
        //     styles: [{
        //         width: 40,
        //         height: 40,
        //         url: 'images/map-blue-oval.svg',
        //         fontFamily: "MuseoSansCyrl",
        //         textSize: 24,
        //         fontWeight: '500',
        //         textColor: "white",
        //     }],
        // });
        //
        // map.setCenter(latlngbounds.getCenter(), map.fitBounds(latlngbounds));
        //
        // $('.js-open-marker', document.body).on('click', function (e) {
        //     e.preventDefault();
        //
        //     google.maps.event.trigger(markers[$(this).data('markerid')], 'click');
        // });
    });
});