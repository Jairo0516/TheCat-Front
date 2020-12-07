import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {NotificationsService} from 'src/app/services/notifications.service';

@Injectable({
  providedIn: 'root'
})
export class CatsServices {

  private url: string = environment.apiUrl;

  private httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
    })
  };

  constructor(public http: HttpClient, public _notificationsService: NotificationsService) {
  }

  getAllBreed() {
    return this.http.get<any>(this.url + 'gatos/razas')
      .pipe(
        catchError(this.handleError)
      )
  }

  getAll() {
    return this.http.get<any>(this.url + 'gatos')
      .pipe(
        catchError(this.handleError)
      )
  }


  get(id) {
    return this.http.get<any>(`${this.url}gatos/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }


  create(data: any) {
    let response = new Promise(async (resolve, reject) => {
      try {
        this.http.post<any>(`${this.url}gatos`, data)
          .subscribe(async res => {
            if (res.error) {
              this._notificationsService.error(res.message)
            } else {
              this._notificationsService.success(res.message)
            }
            resolve(res);
          }, err => {
            this._notificationsService.error('error al procesar la solicitud')
            reject(err)
          })
      } catch (err) {
        this._notificationsService.error('error al procesar la solicitud')
        reject(err);
      }
    });
    return response
  }

  update(data: any, id: string) {
    let response = new Promise(async (resolve, reject) => {
      try {
        this.http.put<any>(`${this.url}gatos/${id}`, data)
          .subscribe(async res => {
            if (res.error) {
              this._notificationsService.error(res.message)
            } else {
              this._notificationsService.success(res.message)
            }
            resolve(res);
          }, err => {
            this._notificationsService.error('error al procesar la solicitud')
            reject(err)
          })
      } catch (err) {
        this._notificationsService.error('error al procesar la solicitud')
        reject(err);
      }
    });
    return response
  }

  delete(id) {
    return this.http.delete<any>(`${this.url}gatos/${id}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      throw error;
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(error);
  }

}
