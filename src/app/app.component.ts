import { Component, ViewChild } from '@angular/core';
import { AdhostDirective } from './Core/directive/adhost.directive';
import { DynamicDilogComponent } from './layout/component/dynamic-dilog/dynamic-dilog.component';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './Core/services/user.service';

import { LayoutService } from './layout/service/layout.service';
import { Direction } from '@angular/cdk/bidi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PadelMe-Club';

  constructor(
    public translate: TranslateService,
    public userService: UserService,
    public layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    console.log('app ts ngoninit');

    // this.getLoggedInUser(this.userService.currentUser.id);
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  // async getLoggedInUser(id: string) {
  //   var search = {
  //     id: id,
  //   };
  //   const response = await this.userService.Search(search);

  //   console.log('getLoggedIn search User : ', response);

  //   if (response.requestStatus == 200) {
  //     this.userService.userResponse = response.data[0];
  //     console.log('response.data[0]', response.data[0]);

  //     this.getMerchant(response.data[0].type, response.data[0].id);
  //   } else {
  //     console.log('getLoggedInUser error');
  //   }
  // }

  // async getMerchant(type: string, id: string) {
  //   console.log('call the request for merchant id');

  //   if (type == '1') {
  //     //merchant
  //     const response = await this.merchantService.Search({ userIDFK: id });

  //     if (response.requestStatus == 200) {
  //       this.userService.merchantId = response.data[0].id;
  //       console.log('merchantId : ', this.userService.merchantId);
  //     } else {
  //       console.log('merchant not found');
  //     }
  //   }

  //   if (type == '2') {
  //     //merchant user
  //     const response = await this.merchantUserService.Search({ userIDFK: id });

  //     if (response.requestStatus == 200) {
  //       this.userService.merchantId = response.data[0].merchantIDFK;
  //       console.log('merchantId : ', this.userService.merchantId);
  //     } else {
  //       console.log('merchant user not found');
  //     }
  //   }
  // }

  getDirection(): Direction | 'auto' {
    return this.layoutService.config.lang == 'ar' ? 'rtl' : 'ltr';
  }
}
