import { KeycloakService } from 'keycloak-angular';
import { HttpService } from 'src/app/shared/services/http.service';
import { environment } from '../environments/environment';

export function initializer(keycloak: KeycloakService, http: HttpService): () => Promise<any> {
  let authenticationEnabled = JSON.parse(`${environment.authenticationEnabled}`);
  if (!authenticationEnabled) {
    return (): Promise<any> => {
      return new Promise(async (resolve, reject) => {
        resolve('');
      });
    };
  }
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      let res: any = await http.getEnvConfig();
      environment.keycloak = JSON.parse(res.keycloak);
      environment.wijmoKey = res.wijmo;
      environment.showAppList = res.show_app_list ? JSON.parse(res.show_app_list) : [];
      environment.apiUrl = res.api_url;
      environment.appUrl = res.app_url;
      environment.isTomtom = res.is_tom_tom;
      await keycloak.init({
        config: {
          url: environment.keycloak.issuer,
          realm: environment.keycloak.realm,
          clientId: environment.keycloak.clientId,
        },
        loadUserProfileAtStartUp: true,
        initOptions: {
          onLoad: 'login-required',
          checkLoginIframe: true,
        },
        bearerExcludedUrls: [],
      });
      await http.keyCloakProfile();
      // await http.getUIConfig();
      // await http.getAppList();
      // await http.getUserRoles();
      resolve('');
    });
  };
}
