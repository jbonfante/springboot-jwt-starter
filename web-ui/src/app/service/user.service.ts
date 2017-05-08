import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ApiService } from './api.service';
import { ConfigService } from './config.service';

@Injectable()
export class UserService {

  currentUser;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { }

  initUser() {
    let promise = this.apiService.anonGet(this.config.whoami_url).toPromise()
    .then(user => {
      this.currentUser = user;
    })
    .catch(() => null);
    return promise;
  }

  getMyInfo() {
    return this.apiService.get(this.config.whoami_url);
  }

}
