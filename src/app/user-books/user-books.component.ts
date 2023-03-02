import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { collection, doc, Firestore, setDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss']
})
export class UserBooksComponent implements OnInit {
  public tableData1: TableData;
  addbookform!: FormGroup;
  closeResult = '';
  display = "none";
  path:string

  constructor( private modalService: NgbModal ,
    private ab : FormBuilder,
    private firestore: Firestore, 
    private route: ActivatedRoute, ) { }

  ngOnInit() {

    this.tableData1 = {
      headerRow: ['TITLE','AUTHOR','TAGS','PRICE','AVAILABLE',''],
      dataRows: [
      ]
  };
  
  this.addbookform = this.ab.group({ 
    bookId:[doc(collection(this.firestore, "userBooks")).id],
    title:[],
    author:[],
    isbn:[], 
    quantity:[], 
    price:[], 
    tags:[]
  })   

  }

  savedataInFirestore() 
  {
  let value = { ...this.addbookform.value };
  console.log(value);
  
  let docRef = doc(this.firestore, `books/${value.bookId}`);
  setDoc(docRef, { ...value })
    .then(() => {
      console.log("Saved");
      let ref = document.getElementById('cancel');
      this.addbookform.reset();
      
    }, (error) => {
      console.log(error);  
    })
  }
  
       openModal1() {
      this.display = "block";
      }
      onCloseHandled() {
      this.display = "none";
      } 
  
     upload($event){
      this.path = $event.target.files[0]
     }

}









