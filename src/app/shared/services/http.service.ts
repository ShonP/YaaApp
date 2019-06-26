import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { functions, controllers, url } from '../models';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {}
  get(controller: controllers, func: functions, params?: Array<string>) {
    const funct = func === functions.index ? '' : '/' + func;
    return this._http.get(
      url + '/' + controller + funct + this._getParams(params)
    );
  }
  post(
    controller: controllers,
    func: functions,
    obj: any,
    params?: Array<string>
  ) {
    return this._http.post(
      url + '/' + controller + '/' + func + this._getParams(params),
      obj
    );
  }
  update(
    controller: controllers,
    func: functions,
    obj: any,
    params?: Array<string>
  ) {
    return this._http.put(
      url + '/' + controller + '/' + func + this._getParams(params),
      obj
    );
  }
  delete(
    controller: controllers,
    func: functions,
    obj: any,
    params?: Array<string>
  ) {
    return this._http.delete(
      url + '/' + controller + '/' + func + this._getParams(params),
      obj
    );
  }
  _getParams(params) {
    if (!params) {
      return '';
    }
    let param = '';
    params.forEach(x => {
      param += '/' + x;
    });
    return param;
  }
  // Uses http.get() to load data from a single API endpoint
}
