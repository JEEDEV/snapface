import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  constructor(private route:Router){}
  @Input() faceSnap!:FaceSnap;

  ngOnInit(): void {
  }

  onViewFaceSnap():void{
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
