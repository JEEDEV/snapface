export class FaceSnap {
  id!:number;
  title!:string;
  description!:string;
  imageUrl!:string;
  createdDate!:Date;
  snaps!:number;
  //Vous pouvez ajouter des propriétés optionnelles à une classe en y ajoutant un point d'interrogation  ?
  location?: string;
}