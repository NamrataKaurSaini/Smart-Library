import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { collection, doc, Firestore, setDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';


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
    planForm!: FormGroup ;
    // idxx: any;
    closeResult = '';
    display = "none";
   

  constructor( private modalService: NgbModal ,
 
               private fb : FormBuilder,
               private firestore: Firestore,
               private route: ActivatedRoute
               ) { }

  submitted: boolean;
  showSuccessMessage: boolean;

  ngOnInit(): void {
    
       this.tableData1 = {
           headerRow: ['PLAN', 'BOOK ISSUE LIMIT', 'BOOK RETURN PERIOD','PRICE', 'ACTION'],
           dataRows: []
      };
      

      this.planForm = this.fb.group
    ({ 
      planId:[doc(collection(this.firestore, "plans")).id],
      plan:["",Validators.required],
      bookIssueLimit:["",Validators.required],
      bookReturnPeriod:["", Validators.required ],
      price:["", Validators.required],
      
    })
      

      
  }

  saveUserInFirestore() 
    {
    let value = { ...this.planForm.value };
    console.log(value);
    
    let docRef = doc(this.firestore, `plans/${value.planId}`);
    setDoc(docRef, { ...value })
      .then(() => {
        console.log("Saved");
        let ref = document.getElementById('cancel');
        this.planForm.reset();
        
      }, (error) => {
        console.log(error);
        
      })
    }


 openModal() {
  this.display = "block";
  }
  onCloseHandled() {
  this.display = "none";
  }

  getAllPlan(){
    
  }

}
