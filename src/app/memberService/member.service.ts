import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore, doc, collection, setDoc, query, where, Timestamp, onSnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(   private firestore: Firestore,
                 private router: Router, 
                //  private firebase: AngularFireDatabase 
                 ) { }

    form = new FormGroup({
    $key: new FormControl(null),
    plan: new FormControl('',Validators.required),
    bookIssueLimit: new FormControl('',Validators.required),
    bookReturnPeriod: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required)
  });
  
  

}
