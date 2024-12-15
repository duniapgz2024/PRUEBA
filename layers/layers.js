var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Encuesta_insectos_tratamientos_2022_2 = new ol.format.GeoJSON();
var features_Encuesta_insectos_tratamientos_2022_2 = format_Encuesta_insectos_tratamientos_2022_2.readFeatures(json_Encuesta_insectos_tratamientos_2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Encuesta_insectos_tratamientos_2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Encuesta_insectos_tratamientos_2022_2.addFeatures(features_Encuesta_insectos_tratamientos_2022_2);
var lyr_Encuesta_insectos_tratamientos_2022_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Encuesta_insectos_tratamientos_2022_2, 
                style: style_Encuesta_insectos_tratamientos_2022_2,
                interactive: true,
    title: 'Encuesta_insectos_tratamientos_2022<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_0.png" /> alaquez<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_1.png" /> carrillo<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_2.png" /> chan<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_3.png" /> guaytacama<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_4.png" /> la merced<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_5.png" /> locoa<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_6.png" /> niño loma<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_7.png" /> tigua<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_8.png" /> yugshiloma<br />\
    <img src="styles/legend/Encuesta_insectos_tratamientos_2022_2_9.png" /> <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Encuesta_insectos_tratamientos_2022_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,lyr_Encuesta_insectos_tratamientos_2022_2];
lyr_Encuesta_insectos_tratamientos_2022_2.set('fieldAliases', {'Canton': 'Canton', 'comunidad': 'comunidad', 'agricultor': 'agricultor', 'codigo_cam': 'codigo_cam', 'tratamient': 'tratamient', 'area_campo': 'area_campo', 'altitud': 'altitud', 'latitud': 'latitud', 'longitud': 'longitud', 'fecha_siem': 'fecha_siem', 'Uso_de_Hel': 'Uso_de_Hel', 'semilla_lb': 'semilla_lb', 'numero_tra': 'numero_tra', 'rendimient': 'rendimient', 'helada': 'helada', 'numero_ins': 'numero_ins', 'ingredient': 'ingredient', 'nombre_ins': 'nombre_ins', 'ingredie_1': 'ingredie_1', 'nombre_i_1': 'nombre_i_1', 'ingredie_2': 'ingredie_2', 'nombre_i_2': 'nombre_i_2', 'tratamie_1': 'tratamie_1', 'tratamie_2': 'tratamie_2', 'tratamie_3': 'tratamie_3', 'tratamie_4': 'tratamie_4', });
lyr_Encuesta_insectos_tratamientos_2022_2.set('fieldImages', {'Canton': 'TextEdit', 'comunidad': 'TextEdit', 'agricultor': 'TextEdit', 'codigo_cam': 'TextEdit', 'tratamient': 'TextEdit', 'area_campo': 'TextEdit', 'altitud': 'TextEdit', 'latitud': 'TextEdit', 'longitud': 'TextEdit', 'fecha_siem': 'DateTime', 'Uso_de_Hel': 'TextEdit', 'semilla_lb': 'TextEdit', 'numero_tra': 'TextEdit', 'rendimient': 'TextEdit', 'helada': 'TextEdit', 'numero_ins': 'TextEdit', 'ingredient': 'TextEdit', 'nombre_ins': 'TextEdit', 'ingredie_1': 'TextEdit', 'nombre_i_1': 'TextEdit', 'ingredie_2': 'TextEdit', 'nombre_i_2': 'TextEdit', 'tratamie_1': 'TextEdit', 'tratamie_2': 'TextEdit', 'tratamie_3': 'TextEdit', 'tratamie_4': 'TextEdit', });
lyr_Encuesta_insectos_tratamientos_2022_2.set('fieldLabels', {'Canton': 'inline label', 'comunidad': 'inline label', 'agricultor': 'inline label', 'codigo_cam': 'inline label', 'tratamient': 'inline label', 'area_campo': 'inline label', 'altitud': 'inline label', 'latitud': 'no label', 'longitud': 'no label', 'fecha_siem': 'no label', 'Uso_de_Hel': 'no label', 'semilla_lb': 'no label', 'numero_tra': 'no label', 'rendimient': 'no label', 'helada': 'no label', 'numero_ins': 'no label', 'ingredient': 'no label', 'nombre_ins': 'no label', 'ingredie_1': 'no label', 'nombre_i_1': 'no label', 'ingredie_2': 'no label', 'nombre_i_2': 'no label', 'tratamie_1': 'no label', 'tratamie_2': 'no label', 'tratamie_3': 'no label', 'tratamie_4': 'no label', });
lyr_Encuesta_insectos_tratamientos_2022_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});