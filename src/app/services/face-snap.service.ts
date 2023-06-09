import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";
// Créer un service est aussi simple qu'ajouter le décorateur  @Injectable()  à une classe.
@Injectable({
    providedIn: 'root'
})
export class FaceSnapService{
   faceSnaps: FaceSnap[] = [
    {
      id:1,  
      title:'Archibald',
      description:'Mon meilleur ami depuis tout petit !',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate:new Date(),
      location:'Paris',
      snaps:255
    },
    {
      id:2,  
      title:'Three Rock Mountain',
      description:'Un endroit magnifique pour les rendonnées',
      imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/1920px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate:new Date(),
      snaps:110
    },
    {
      id:3, 
      title:'Un bon repas',
      description:'Mmmh que c\'est bon !',
      imageUrl:'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate:new Date(),
      snaps:20
    }
  ]; 

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }
 
  //Les literal types permettent de créer rapidement des types personnalisés, 
 //souvent utilisés pour limiter les choix pour un argument de méthode, par exemple : fileType: 'image' | 'video'
  
 snapFaceSnapById(faceSnapId:number, snapType:'snap'|'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType ==='snap'? faceSnap.snaps++ : faceSnap.snaps--;
  }

  getFaceSnapById(faceSnapId:number):FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap=> faceSnap.id === faceSnapId);
    if(faceSnap){
        return faceSnap;
    }
    else{
        throw new Error('Face Snap not found !');
    }
  }
}