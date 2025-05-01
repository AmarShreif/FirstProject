import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoolesheetService {

  private scriptURL = "https://script.google.com/macros/s/AKfycbxe7GV4uTMU7YF9u1_nVTmQYgHeJhwzUMQ8ivpu0wE9eSJ7EtcVwUW503luVsQWubZ3/exec"; // ضع رابط Google App Script هنا

  constructor(private http: HttpClient) {}

  sendData(formData: FormData): Observable<any> {
    return this.http.post(this.scriptURL, formData, { responseType: 'text' });
}}
