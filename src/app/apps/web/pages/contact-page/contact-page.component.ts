import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import { fromLonLat } from 'ol/proj';
import { Zoom, defaults as defaultControls } from 'ol/control';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source';
import {Icon} from 'ol/style';
import { GlobalService } from '../../../../services/global/global.service';


@Component({
  selector: 'beat-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})

export class ContactPageComponent implements AfterViewInit{

  constructor(private globalService: GlobalService){}
  public map?: Map;



  ngAfterViewInit(): void {
    this.assignMap();

  }

  assignMap(): void{
    const controls = defaultControls({
      zoom: false,
      rotate:false,
      attribution: false // deshabilita el control de zoom predeterminado,

    });

    this.map = new Map({
      target: 'map',

      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: controls,
      view: new View({
        center: fromLonLat([ -97.774614,18.705795]), // Coordenadas de Xochitlan Todos Santos
        zoom: 16
      }),

    });

    const marker = new Feature({
      geometry: new Point(fromLonLat([-97.774614,18.705795])) // Coordenadas de Xochitlan Todos Santos
    });

    marker.setStyle();

    const vectorLayer = new VectorLayer({
        source: new VectorSource({
            features: [marker]
        })
    });

    this.map.addLayer(vectorLayer);




  }

  public submitEmail(): void {
    this.globalService.methodNotImplemented();
  }

}
