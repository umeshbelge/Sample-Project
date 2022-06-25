import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedApiService {
  
  constructor(private http: HttpClient) { }
  getApi(url: any, param: any): any {
      return this.http
          .get(url, { params: param, observe: 'response', withCredentials: true })
          .toPromise()
          .then(response => {
              return response;
          })
          .catch(error => {
              return error;
          });
  }

  putApi(url: any, param: any) {
      return this.http
          .put(url, param, { observe: 'response', withCredentials: true })
          .toPromise()
          .then(response => {
              return response
          })
          .catch(error => {
              return error;
          });
  }
  putApiWithParam(url: any, param: any, body: any) {
      return this.http.put(url, body, { observe: 'response', withCredentials: true, params: param })
          .toPromise()
          .then(response => {
              return response
          })
          .catch(error => {
              return error;
          });
  }
  saveApi(url: any, param: any) {
      return this.http
          .post(url, param, { observe: 'response', withCredentials: true })
          .toPromise()
          .then(response => {
              return response
          })
          .catch(error => {
              return error;
          });
  }

  saveApiWithParam(url: any, param: any, body: any) {
      return this.http
          .post(url, body, { observe: 'response', withCredentials: true, params: param })
          .toPromise()
          .then(response => {
              return response
          })
          .catch(error => {
              return error;
          });
  }

  deleteApi(url: any, param: any) {
      return this.http
          .delete(url, { params: param, observe: 'response', withCredentials: true })
          .toPromise()
          .then(response => {
              return response
          })
          .catch(error => {
              return error;
          });
  }

}