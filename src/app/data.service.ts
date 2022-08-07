import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {environment} from '../environments/environment';

export interface warData{
  title: string,
  year: string,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  warApiUrl = environment.warUrl;

  constructor(private _http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // 클라이언트나 네트워크 문제로 발생한 에러.
      alert('An error occurred: ' + error.error.message);
    } else {
      // 백엔드에서 실패한 것으로 보낸 에러.
      // 요청으로 받은 에러 객체를 확인하면 원인을 확인할 수 있습니다.
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
      if (error.error.message === undefined) {
        alert('Something bad happened. please try again later.')
      } else {
        alert(error.error.message)
      }
    }
    // 사용자가 이해할 수 있는 에러 메시지를 반환합니다.
    return throwError(
      `${error.error.message}`);
  }

  getData() {
    return this._http.get(`${this.warApiUrl}`).pipe(
      catchError(this.handleError)
    );
  }


}
