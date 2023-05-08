import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  constructor(private faceSnapService:FaceSnapService){}
  @Input() faceSnap!:FaceSnap;
  buttonText!:string;

  ngOnInit(): void {
    this.buttonText='Oh Snap!';
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
