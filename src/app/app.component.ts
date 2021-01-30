import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiHelperService} from './api-helper.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courierApp';
  courierCompanyList :any = [
    {name:  'Delhivery'},
    {name:  'asdasd'},
    {name:  'asdasd'}
  ]
  courierStatusData: any;

  constructor(private toastr: ToastrService, private ApiHelperService:ApiHelperService) {}

  
  ngOnInit() {

   
  }

  getStatus(compnyName,trackingId){
   
    if(isNaN(trackingId) === true) {
      // this.toastr.success('everything is broken', 'Major Error', {
      //   timeOut: 2000,
      // });
      alert('kindly enter valid tracking id!')
    } else {
      console.log(trackingId);

      this.ApiHelperService.getStatus('delhivery',trackingId).subscribe((data: any)=>{
       
        this.courierStatusData = data.data[0];
        console.log(this.courierStatusData);
        $('')
      })  
    }
  }
}
