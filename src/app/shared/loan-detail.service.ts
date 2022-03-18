import { Injectable } from '@angular/core';
import { LoanDetail } from './loan-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoanDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'https://loanapiabdun.azurewebsites.net/api/Loan'//'http://localhost:61236/api/LoanDetail'
  formData: LoanDetail = new LoanDetail();
  list: LoanDetail[];

  postLoanDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putLoanDetail() {
    return this.http.put(`${this.baseURL}/studentId/${this.formData.studentId}/institutionId/${this.formData.institutionId}`, this.formData);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as LoanDetail[]);
  }


}
