import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { propertyData } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  openPmForm:boolean = false;
  pmForm!: FormGroup;
  pmList:propertyData[] = [];
  title = 'pmapp';

  constructor(private fb:FormBuilder){
    this.pmForm = this.fb.group({
      name: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      size: new FormControl("",[Validators.required])
    })
  }

  addPmFrom() {
    const pmListLenth = this.pmList.length;
    this.pmList.push({...this.pmForm.value,id:pmListLenth + 1}); 
  }

  deletePmdata() {
    const isAnyItemChecked = this.pmList.some(item => item.isChecked)
    if(!isAnyItemChecked){
       alert("No pm data is selected to delete. Please select the pm data");
       return;
    }
    this.pmList = this.pmList.filter(item => !item.isChecked)
  }

  cancelPmFrom() {
    this.openPmForm = false;
    this.pmForm.reset();
  }
}
