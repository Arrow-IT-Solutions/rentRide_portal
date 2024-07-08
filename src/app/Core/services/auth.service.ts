import { Injectable } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/layout.service';
import { LocalService } from 'src/app/shared/service/local.service';
import Axios from 'axios';
import { environment } from 'src/environments/environment';
import { UserResponse } from 'src/app/modules/auth/auth.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userResponse: UserResponse;
  constructor(
    public layoutService: LayoutService,
    public localService: LocalService
  ) {}

  async Auth(auth: any) {
    const config = {
      headers: { 'Accept-Language': this.layoutService.config.lang },
    };

    console.log(1);

    return await Axios.post(
      `${this.layoutService.baseApiUrl}/auth`,
      auth,
      config
    )
      .then((res) => {
        console.log(2, res.data);

        return res.data;
      })
      .catch((error) => {
        console.log(3, error.response.data);

        return error.response.data;
      });
  }

  async RefreshToken(token: any) {
    const config = {
      headers: { 'Accept-Language': this.layoutService.config.lang },
    };

    const response = await Axios.post(
      `${this.layoutService.baseApiUrl}/refreshToken`,
      { token: token },
      config
    );
    return response.data;
  }

  public isAuthenticated(): boolean {
    const user = this.localService.getData('currentUser');

    console.log('User : ', user);

    if (user != null) {
      return true;
    } else {
      return false;
    }
  }
}
