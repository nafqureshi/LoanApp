import { Component, OnInit } from '@angular/core';
import { LoanDetailService } from '../shared/loan-detail.service';
import { LoanDetail } from '../shared/loan-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styles: [
  ]
})
export class LoanDetailsComponent implements OnInit {

  constructor(public service: LoanDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: LoanDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

}
