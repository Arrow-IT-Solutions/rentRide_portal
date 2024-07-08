import { Injectable } from '@angular/core';
import { LayoutService } from '../../layout/service/layout.service';
import { LocalService } from '../../shared/service/local.service';
import Axios from 'axios';
import {
  UserRequest,
  UserResponse,
  UserSearchRequest,
  resetPasswordRequest,
} from '../../modules/auth/auth.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userResponse: UserResponse;
  merchantId: string;
  currentUser = {
    id: '',
    userName: '',
    token: '',
    email: '',
    phone: '',
    isVerified: '-1',
    verificationCode: '',
    userType: '',
  };
  isgetStartedfterSecurity: boolean = true;

  constructor(public layoutService: LayoutService) {}

  async Search(filter: UserSearchRequest) {
    const config = {
      headers: {
        'Accept-Language': this.layoutService.config.lang,
        Authorization: 'Bearer ' + this.currentUser.token,
      },
    };

    const apiUrl = `${
      this.layoutService.baseApiUrl
    }/api/user/search?${this.layoutService.Filter(filter)}`;

    return Axios.get(apiUrl, config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  async resetPassword(value: any) {
    const config = {
      headers: {
        'Accept-Language': this.layoutService.config.lang,
        Authorization: 'Bearer ' + this.currentUser.token,
      },
    };

    const apiUrl = `${this.layoutService.baseApiUrl}/api/user/ResetPassword`;

    return Axios.post<UserResponse>(apiUrl, value, config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  async isVerified(value: any) {
    //    {
    //   "userNameType": "2",
    //   "userName": "string",
    //   "code": "string"
    // }
    const config = {
      headers: {
        'Accept-Language': this.layoutService.config.lang,
        Authorization: 'Bearer ' + this.currentUser.token,
      },
    };

    return await Axios.post(
      `${this.layoutService.baseApiUrl}/api/user/IsVerified`,
      value,
      config
    )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  async reSendOTP(value: any) {
    //     {
    //   "userNameType": "2",
    //   "userName": "string"
    // }
    const config = {
      headers: {
        'Accept-Language': this.layoutService.config.lang,
        Authorization: 'Bearer ' + this.currentUser.token,
      },
    };

    return await Axios.post(
      `${this.layoutService.baseApiUrl}/api/user/ReSendOTP`,
      value,
      config
    )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  async updateUser(value: any) {
    const config = {
      headers: { 'Accept-Language': this.layoutService.config.lang },
      Authorization: 'Bearer ' + this.currentUser.token,
    };

    return await Axios.put(
      `${this.layoutService.baseApiUrl}/api/user`,
      value,
      config
    )
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  async addUser(data: UserRequest) {
    const config = {
      headers: {
        'Accept-Language': this.layoutService.config.lang,
        Authorization: 'Bearer ' + this.currentUser.token,
      },
    };

    const apiUrl = `${this.layoutService.baseApiUrl}/api/user`;

    return Axios.post<UserResponse>(apiUrl, data, config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
  }

  async GetLoggedInUser(id: string) {
    var search = {
      id: id,
    };
    const response = await this.Search(search);

    console.log('getLoggedIn search User : ', response);

    if (response.requestStatus == 200) {
      return await response.data[0];
      console.log('response.data[0]', response.data[0]);
    } else {
      console.log('getLoggedInUser error');
    }
  }

  // async Add( data: any) {
  //   const config = {
  //     headers: { 'Accept-Language': this.layoutService.config.lang, 'Authorization': 'Bearer ' + this.currentUser.token },
  //   };

  //   const response = await Axios.post(`${this.layoutService.baseApiUrl}/api/user`,data, config)as any;
  //   return response.data;
  // }

  // async Update(date: any) {
  //   const config = {
  //     headers: {
  //       'Accept-Language': this.layoutService.config.lang,
  //       Authorization: 'Bearer ' + this.currentUser.token,
  //     },
  //   };

  //   let data = await Axios.put(
  //     `${this.layoutService.baseApiUrl}/api/user`,
  //     date,
  //     config
  //   );

  //   return data.data;
  // }

  // async Delete(id: number) {
  //   const config = {
  //     headers: {
  //       'Accept-Language': this.layoutService.config.lang,
  //       Authorization: 'Bearer ' + this.currentUser.token,
  //     },
  //   };
  //   const response = await Axios.delete(
  //     `${this.layoutService.baseApiUrl}/api/user/${id}`,
  //     config
  //   );
  //   return response.data;
  // }

  // async Search(filter: any) {
  //   const config = {
  //     headers: {
  //       'Accept-Language': this.layoutService.config.lang,
  //       Authorization: 'Bearer ' + this.currentUser.token,
  //     },
  //   };
  //   const response = await Axios.get(
  //     `${
  //       this.layoutService.baseApiUrl
  //     }/api/user/search?${this.layoutService.Filter(filter)}`,
  //     config
  //   );
  //   return response.data;
  // }
}
