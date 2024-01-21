export interface env {
  production: boolean;
  isTomtom?: boolean;
  showAppList?: string[];
  wijmoKey?: string;
  apiUrl: string;
  appUrl?: string;
  authenticationEnabled: boolean;
  keycloak?: {
    // Url of the Identity Provider
    issuer: string;
    // Realm
    realm: string;
    // The SPA's id.
    // The SPA is registerd with this id at the auth-serverß
    clientId: string;
  };
}
