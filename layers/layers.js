var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Raul_Ortomosaico_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Raul_Ortomosaico",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Raul_Ortomosaico_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-10090391.090277, 1658102.108385, -10089953.273378, 1658515.176572]
                            })
                        });
var format_Poligono_2 = new ol.format.GeoJSON();
var features_Poligono_2 = format_Poligono_2.readFeatures(json_Poligono_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poligono_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poligono_2.addFeatures(features_Poligono_2);
var lyr_Poligono_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poligono_2, 
                style: style_Poligono_2,
                interactive: true,
                title: '<img src="styles/legend/Poligono_2.png" /> Poligono'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Raul_Ortomosaico_1.setVisible(true);lyr_Poligono_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Raul_Ortomosaico_1,lyr_Poligono_2];
lyr_Poligono_2.set('fieldAliases', {'id': 'id', });
lyr_Poligono_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Poligono_2.set('fieldLabels', {'id': 'no label', });
lyr_Poligono_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});