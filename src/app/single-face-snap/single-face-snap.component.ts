import { Component} from '@angular/core';
import { FaceSnapService } from '../services/face-snap.service';
import { FaceSnap } from '../models/face-snap.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  constructor(private faceSnapService:FaceSnapService, private route:ActivatedRoute){}
 faceSnap!:FaceSnap;
  buttonText!:string;

  ngOnInit(): void {
    this.buttonText='Oh Snap!';
    //les paramètres route sont de type String pour pouvoir utiliser id comme number 
    // + -> type cast
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
   
   if(this.buttonText ==='Oh Snap!'){
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.buttonText = 'Ooops, UnSnap'
   }else {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.buttonText='Oh Snap!'; 
   }
  }
}
