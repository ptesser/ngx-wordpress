import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { WpRequestOptions } from '../../models/WpRequestOptions';

declare var Window: {
  [key: string]: any; // missing index defintion
  prototype: Window;
  new(): Window;
};

@Injectable({
  providedIn: 'root',
})
export class WpNetwork {
  private baseUrl = 'http://localhost:8001/'; // FIXME: Allow to configure it
  private nonce = '';

  constructor(
    private readonly http: HttpClient,
  ) {
    if (typeof window !== 'undefined' && (window as any).wpApiSettings) {
      this.nonce = (window as any).wpApiSettings.nonce;
    }
  }

  get<T>(url: string, params?: any, options?: WpRequestOptions): Observable<any> {
    if (options && options.withCredentials) {
      if (!params) {
        params = {};
      }
      params._wpnonce = this.nonce;
    }
    return this.http.get<T>(this.resolveUrl(url), {
      withCredentials: options && options.withCredentials,
      params,
    });
  }

  post<T>(url: string, body: any, options?: WpRequestOptions): Observable<any> {
    const params = {
      _wpnonce: ''
    };
    if (options && options.withCredentials) {
      params._wpnonce = this.nonce;
    }
    return this.http.post<T>(this.resolveUrl(url), body, {
      withCredentials: options && options.withCredentials,
      params,
    });
  }

  delete<T>(url: string, params?: any, options?: WpRequestOptions): Observable<any> {
    if (options && options.withCredentials) {
      params._wpnonce = this.nonce;
    }
    return this.http.delete<T>(this.resolveUrl(url), {
      withCredentials: options && options.withCredentials,
      params,
    });
  }

  resolveUrl(url: string): string {
    return this.baseUrl + 'wp-json/wp/v2/' + url;
  }

  filter(object: any, filter: string[]) {
    return Object.keys(object)
      .filter(key => filter.indexOf(key) === -1)
      .reduce((obj, key) => {
        (obj as any)[key] = object[key];
        return obj;
      }, {});
  }
}