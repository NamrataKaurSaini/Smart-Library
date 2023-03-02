import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { MemberService } from 'app/memberService/member.service';
// import { Plans } from 'app/models/plan';
import { Firestore, collection, addDoc, collectionData, doc, updateDoc, deleteDoc, setDoc   } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Plans } from 'app/models/plan';



declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  public tableData1: TableData;
  // planForm: FormGroup
  userData!: Observable<any>;
  addView = false;
  updateMode = false;

   planForm = new FormGroup({
    planId : new FormControl(),
    plan : new FormControl(),
    bookIssueLimit : new FormControl(),
    bookReturnPeriod : new FormControl(),
    price : new FormControl()
  })

  // plansList: Plans[] = []
  // planObj: Plans = {
  //   id: '',
  //   plan: '',
  //   bookIssueLimit: '',
  //   bookReturnPeriod: '',
  //   price: ''
  // }
  // id: string = ''
  // plan: string = ''
  // bookIssueLimit: string = ''
  // bookReturnPeriod: string = ''
  // price: string = ''


  closeResult = '';
  display = "none";
  editdisplay = "none";
  adddisplay = "none";



  constructor( private fb: FormBuilder,
               private firestore: Firestore ) {     
  this.getData();
 }

 action: String = "";


  ngOnInit(): void {

    this.tableData1 = {
      headerRow: ['PLAN', 'BOOK ISSUE LIMIT', 'BOOK RETURN PERIOD', 'PRICE', 'ACTION'],
      dataRows: []
    };

    this.planForm = this.fb.group
      ({
        planId: [doc(collection(this.firestore, "plans")).id],
        plan: ["", Validators.required],
        bookIssueLimit: ["", Validators.required],
        bookReturnPeriod: ["", Validators.required],
        price: ["", Validators.required],

      })

      if(this.action == "update") {
        this.addView = true;
        this.updateMode = true;
        const sessionData = sessionStorage.getItem("plans");
        this.updateData = JSON.parse(sessionData!);

        this.planForm.patchValue(
          {
            plan: this.updateData.plan
            // id: this.updateData.id
            // bookIssueLimit: this.updateData.bookIssueLimit

          }
        );
      }

  }

  addData() {
    let value = { ...this.planForm.value };
    console.log(value);

    let docRef = doc(this.firestore, `plans/${value.planId}`);
    setDoc(docRef, { ...value })
      .then(() => {
        console.log("Saved");
        this.planForm.reset();

      }, (error) => {
        console.log(error);

      })
  }

  // addData(f:any){
  //   const collectionInstance = collection(this.firestore,'plans');
  //   addDoc(collectionInstance, f.value)
  //   .then(() => {
  //     console.log('Data Saved');
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  getData() {
    const collectionInstance = collection(this.firestore,'plans');
    collectionData(collectionInstance, { idField: 'id' })
    .subscribe(val => {
    //  console.log(val);
    })
    this.userData = collectionData(collectionInstance, { idField: 'id' });
  }

  updateData(id: any) {
    this.planForm = new FormGroup({
      planId : new FormControl(id.planId),
      plan : new FormControl(id.plan),
      bookIssueLimit : new FormControl(id.bookIssueLimit),
      bookReturnPeriod : new FormControl(id.bookReturnPeriod),
      price : new FormControl(id.price)
    })
   const docInstance = doc(this.firestore, 'plans', id);
   const updateData = this.planForm.value;
   updateDoc(docInstance, updateData)
   .then(() => {
     console.log('Data Update');
   })
   .catch((err) => {
     console.log(err);
   })
  }
  
  deleteData(id: string) {
   const docInstance = doc(this.firestore, 'plans', id);
   deleteDoc(docInstance)
   .then(() => {
     console.log('Data Deleted')
   })
  }
 

  editopenModal() {
    this.editdisplay = "block";
  }

  editonCloseHandled() {
    this.editdisplay = "none";
  }

  addopenModal() {
    this.adddisplay = "block";
  }

  addonCloseHandled() {
    this.adddisplay = "none";
  }



}
