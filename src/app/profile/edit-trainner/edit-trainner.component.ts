import { Parameter } from './../../utils/Parameters';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { MaterializeAction, toast } from 'angular2-materialize';
import { Trainner } from './../../models/Trainner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit-trainner',
  templateUrl: './edit-trainner.component.html',
  styleUrls: ['./edit-trainner.component.css']
})
export class EditTrainnerComponent implements OnInit {

  form: FormGroup;
  _trainner: Trainner;

  get trainner(): Trainner{
    return this._trainner;
  }

  @Input() set trainner(value: Trainner) {
    this._trainner = value;
    this.form.controls.name.setValue(this.trainner.name);
    this.form.controls.level.setValue(this.trainner.level);
  }

  modalActions: EventEmitter<string|MaterializeAction>;
  @Output() onUpdated = new EventEmitter<Trainner>();
  @BlockUI() blockUI: NgBlockUI;

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder) {
    this.modalActions = new EventEmitter<string|MaterializeAction>();
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      level: ['', Validators.compose([Validators.required, Validators.max(40), Validators.min(0)])]
    });
  }

  showModal(show: boolean) {
    this.modalActions.emit({action: 'modal', params: [show ? 'open' : 'close']});
  }

  addTrainner() {
    this.trainner.name = this.form.controls.name.value;
    this.trainner.level = this.form.controls.level.value;
    this.blockUI.start();
    this.profileService.editTrainner(this.trainner)
      .subscribe(result => {
        this.blockUI.stop();
        this.onUpdated.emit(result);
      }, error => {
        let toastMessage = '';
        if (error.status === 412) {
          toastMessage = Parameter.dataError;
        }else if (error.status === 0) {
          toastMessage = Parameter.connectBackendError;
        }
        this.blockUI.stop();
        toast(toastMessage, Parameter.toastTime, 'red');
      });
  }




}
