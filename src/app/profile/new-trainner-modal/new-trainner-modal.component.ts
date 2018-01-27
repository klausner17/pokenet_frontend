import { MaterializeAction } from 'angular2-materialize';
import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Trainner } from '../../models/Trainner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-new-trainner-modal',
  templateUrl: './new-trainner-modal.component.html',
  styleUrls: ['./new-trainner-modal.component.css']
})
export class NewTrainnerModalComponent implements OnInit {

  form: FormGroup;
  trainner: Trainner;
  modalActions: EventEmitter<string|MaterializeAction>;
  @Output() afterAdd: EventEmitter<Error|Trainner>;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService ) {
    this.modalActions = new EventEmitter<string|MaterializeAction>();
  }

  ngOnInit() {
    this.trainner = new Trainner();
    this.createForm();
  }

  private createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      level: ['', Validators.compose([Validators.required, Validators.max(40), Validators.min(0)])]
    });
  }

  adicionar() {
    this.trainner =
    this.trainner = this.form.value;
    this.profileService.addTrainner(this.trainner)
      .subscribe(result => {
        this.trainner = new Trainner();
        this.afterAdd = n
      });
  }

}
