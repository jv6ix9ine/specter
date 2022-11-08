import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface Response {
  code: number,
  message: string,
  data?: any
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private URL: string = `${environment.URL_API}/mail/contact`

  constructor(private http: HttpClient) { }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }


  async sendContactMail(contactData: any){
    try {
      let response = await this.http.post<Response>( this.URL, contactData ).toPromise();
      console.log(response);
      return response
    } catch (error) {
      console.log(error);
      throw error
    }
  }
}
