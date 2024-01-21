import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  keyCloakJWTBearerToken: string = '';
  profile: any = {};
  accountId: number = 2000003;
  apiEndpoints: any = {};
  usrId: string = 'sprint_demo';
  ssoAttrValues: any = [];
  envConfig: any = {};

  constructor(
    private http: HttpClient,
    private keycloakAngular: KeycloakService,
    ) {

  }


  async keyCloakProfile() {
    let authenticationEnabled = JSON.parse(`${environment.authenticationEnabled}`);
    if (authenticationEnabled) {
      this.apiEndpoints = { rtPlannerAPIUrl: environment.apiUrl };
      this.keyCloakJWTBearerToken = await this.keycloakAngular.getToken();
      setInterval(async () => {
        this.keyCloakJWTBearerToken = await this.keycloakAngular.getToken();
      }, 270000);
      this.keycloakAngular.loadUserProfile().then((profile) => {
        this.profile = profile;
        this.accountId = parseInt(profile['attributes'].accountId[0]);
        this.setValues();
      });
    }
  }

  setValues() {
    this.usrId = this.keycloakAngular.getUsername();
    if (this.profile && this.profile['attributes']) {
      this.ssoAttrValues = this.profile['attributes'];
    }
  }

  async getEnvConfig() {
    let res = await this.getPromiseResponse(`${environment.apiUrl}/appUiConfigLut/rp`);
    this.envConfig = res.body;
    // this.spinner.removeSpinner();
    return res.body;
  }

}
