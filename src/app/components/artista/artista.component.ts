import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "app/services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  id:string;
  artista:any;
  pistas:any[];

  constructor(private _spotifyService:SpotifyService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    //Recuperamos el parametro que veine por url
    this._activatedRoute.params.subscribe( params => {
        this.id = params["id"];

        console.log("Artista - " + this.id);
        this._spotifyService.getArtista( params["id"] )
          .subscribe( data => this.artista = data);

        this._spotifyService.getTop( params["id"] )
          .subscribe( data => this.pistas = data);
        
    } )

  }



  verArtista(id:string){
    this._router.navigate( ['/artista',id] );
  }

}
