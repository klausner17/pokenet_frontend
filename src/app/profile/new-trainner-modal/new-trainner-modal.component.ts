import { MaterializeAction, toast } from 'angular2-materialize';
import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Trainner } from '../../models/Trainner';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../profile.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Parameter } from '../../utils/Parameters';

@Component({
  selector: 'app-new-trainner-modal',
  templateUrl: './new-trainner-modal.component.html',
  styleUrls: ['./new-trainner-modal.component.css']
})
export class NewTrainnerModalComponent implements OnInit {

  form: FormGroup;
  trainner: Trainner;
  modalActions: EventEmitter<string|MaterializeAction>;
  @Output() onUpdated = new EventEmitter<Trainner>();
  @BlockUI() blockUI: NgBlockUI;

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

  showModal(show: boolean) {
    this.modalActions.emit({action: 'modal', params: [show ? 'open' : 'close']});
  }

  addTrainner() {
    this.trainner = this.form.value;
    this.blockUI.start();
    this.profileService.addTrainner(this.trainner)
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
