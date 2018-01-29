import { Parameter } from './../../utils/Parameters';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MaterializeAction, toast } from 'angular2-materialize';
import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  modalActions: EventEmitter<string|MaterializeAction>;
  @Output() onUpdated: EventEmitter<boolean>;
  @Input() idTrainnerRemove?: number;
  @BlockUI() blockUI: NgBlockUI;

  constructor(private profileService: ProfileService) {
    this.modalActions = new EventEmitter<string|MaterializeAction>();
    this.onUpdated = new EventEmitter<boolean>();
  }

  ngOnInit() {
  }

  removeTrainner() {
    this.blockUI.start();
    this.profileService.deleteTrainner(this.idTrainnerRemove)
      .subscribe(result => {
        this.blockUI.stop();
        this.onUpdated.emit(true);
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

  showModal(show: boolean) {
    this.modalActions.emit({action: 'modal', params: [show ? 'open' : 'close']});
  }

}
