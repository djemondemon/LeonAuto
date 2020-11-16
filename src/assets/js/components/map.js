ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [43.247546074524585, 76.95588549999998],
        zoom: 16,
        // Также доступны наборы 'default' и 'largeMapDefaultSet'
        // Элементы управления в наборах подобраны оптимальным образом
        // для карт маленького, среднего и крупного размеров.
        controls: []
    });

    let myPlacemark2 = new ymaps.Placemark([43.247546074524585, 76.95588549999998], {
        hintContent: 'Narsharab'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/map-icon.svg',
        iconImageSize: [45, 41],
        iconImageOffset: [-3, -42]
    });

    myMap.geoObjects.add(myPlacemark2);
});