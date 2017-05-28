import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "app/services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  termino:string = "";

  constructor(private _spotifyService:SpotifyService,
              private _router:Router) { }

  ngOnInit() { }

  buscarArtista(){
    console.log(this.termino);
    this._spotifyService.getArtistas( this.termino )
          .subscribe();
  }

  verArtista(id:string){
    this._router.navigate( ['/artista',id] );
  }




}
