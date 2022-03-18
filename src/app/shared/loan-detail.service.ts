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
    fetch(`${this.baseURL}/studentId/${this.formData.studentId}/institutionId/${this.formData.institutionId}`, {
          method: "PUT",
          body: JSON.stringify(this.formData),
          headers: {
            "content-type": "application/json",
          },
        }).then((res) => {
          res.json().then((data) => {
            if(data)
              return data;
          });
        });

    //var headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    //return this.http.put(`${this.baseURL}/studentId/${this.formData.studentId}/institutionId/${this.formData.institutionId}`, this.formData, {headers});
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as LoanDetail[]);
  }


}
