import { Component, OnInit } from '@angular/core';
import { LoanDetailService } from 'src/app/shared/loan-detail.service';
import { NgForm } from '@angular/forms';
import { LoanDetail } from 'src/app/shared/loan-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-loan-detail-form',
  templateUrl: './loan-detail-form.component.html',
  styles: [
  ]
})
export class LoanDetailFormComponent implements OnInit {

  constructor(public service: LoanDetailService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.studentId == 0 && this.service.formData.institutionId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postLoanDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Loan Detail inserted')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putLoanDetail().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Loan Detail updated')
      },
      err => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new LoanDetail();
  }

}
