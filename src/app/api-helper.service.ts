import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  private DelhiveryURL ='https://dlv-web-api.delhivery.com/v2/track?waybillId=';
  
  constructor(private httpClient: HttpClient) { }

  getStatus(companyName,trackingId){
    
    return this.httpClient.get(this.DelhiveryURL+trackingId);
  }
}
