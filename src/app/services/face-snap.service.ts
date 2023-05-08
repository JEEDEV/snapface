import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
   faceSnaps: FaceSnap[] = [
    {
      title:'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate:new Date(),
      location:'Paris',
      snaps:255
    },
    {
      title:'Three Rock Mountain',
      description:'Un endroit magnifique pour les rendonnées',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1920px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate:new Date(),
      snaps:0
    },
    {
      title:'Un bon repas',
      description:'Mmmh que c\'est bon !',
      imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate:new Date(),
      snaps:0
    }
  ]; 
}