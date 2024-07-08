import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LocalService } from '../../../../shared/service/local.service';
import { LayoutService } from '../../../../layout/service/layout.service';
import { UserService } from '../../../../Core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('UserName', { static: false }) emailElement: ElementRef | any;
  loginForm: FormGroup;
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public localService: LocalService,
    public layoutService: LayoutService,
    public messageService: MessageService,
    public userServiec: UserService,
  ) {
    this.loginForm = this.formBuilder.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  get form(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  ngAfterViewInit() {
    //this.emailElement.nativeElement.focus();
    this.userServiec.merchantId = '-1';
  }

  public onKeyDown(event: KeyboardEvent) {
    // switch (event.key) {
    //   case 'Escape':
    //     break;
    //   case 'Enter':
    //     this.onSubmit();
    //     break;
    //   case 'Tab':
    //     break;
    // }
  }

  async onSubmit() {
  //   try {
  //     console.log('Login Form : ', this.loginForm);

  //     this.loading = true;

  //     if (this.loginForm.invalid) {
  //       this.submitted = true;
  //       return;
  //     }

  //     await this.Save();
  //   } catch (exceptionVar) {
  //   } finally {
  //     this.loading = false;
  //   }
  // }

  // async Save() {
  //   var auth = {
  //     userName: this.loginForm.controls['UserName'].value,
  //     password: this.loginForm.controls['Password'].value,
  //   };

  //   const response = await this.authService.Auth(auth);

  //   console.log('authResponse : ', response);

  //   if (response.requestStatus == 200) {
  //     this.layoutService.showSuccess(
  //       this.messageService,
  //       'toast',
  //       true,
  //       response.requestMessage
  //     );

  //     const response_refresh = await this.authService.RefreshToken(
  //       response.token
  //     );

  //     this.userServiec.currentUser = {
  //       id: response.id,
  //       userName: response.userName,
  //       token: response_refresh.token,
  //       email: '',
  //       phone: '',
  //       isVerified: '',
  //       verificationCode: '',
  //       userType: '',
  //     };

  //     this.getLoggedInUser(response.id);

  //     this.localService.saveData(
  //       'currentUser',
  //       JSON.stringify(this.userServiec.currentUser)
  //     );

  //     this.localService.saveData('lang', JSON.stringify('en'));
  //     this.localService.saveData('dir', JSON.stringify('ltr'));

  //     this.router.navigateByUrl('merchants');
  //   } else {
  //     console.log('errrrror');

  //     this.layoutService.showError(
  //       this.messageService,
  //       'toast',
  //       true,
  //       response.requestMessage
  //     );
  //   }

  //   this.submitted = false;
  //   this.loading = false;

    //   var filter =
    //   {
    //     pageIndex: 1,
    //     userid: this.userService.currentUser.id
    //   }

    // const responseUserPermission = await this.userPermissionService.Get(filter);

    //console.log("Response From DataBase : ", responseUserPermission);

    //this.localservice.saveData("currentPermission", JSON.stringify(responseUserPermission.data))

    //this.userPermissionService.currentPermissionUser = responseUserPermission.data;

    //   this.router.navigateByUrl('admin');
    // }
    // else {
    //   this.layoutService.showError(this.messageService, 'toste', true, response.requestMessage);
    // }
  }

  async getLoggedInUser(id: string) {
    var search = {
      id: id,
    };
    const response = await this.userServiec.Search(search);

    console.log('getLoggedIn search User : ', response);

    if (response.requestStatus == 200) {
      this.userServiec.userResponse = response.data[0];
      console.log('response.data[0]', response.data[0]);
      // save the user type
      this.userServiec.currentUser.userType = response.data[0].type;
      this.localService.saveData(
        'currentUser',
        JSON.stringify(this.userServiec.currentUser)
      );
      // find merchant is if exist
      //this.getMerchant(response.data[0].type, response.data[0].id);
    } else {
      console.log('getLoggedInUser error');
    }
  }

 

  gotoForgetPassword() {
    (this.userServiec.currentUser.email =
      this.loginForm.controls['UserName'].value),
      this.router.navigate(['/auth/forget-password']);
  }

  goToSignUp() {
    this.router.navigate(['/auth/sign-up']);
  }
}
