// src/app/auth/msal-config.service.ts

import { Injectable } from '@angular/core';
import { IPublicClientApplication, PublicClientApplication, InteractionType, BrowserCacheLocation } from '@azure/msal-browser';

@Injectable({
  providedIn: 'root'
})
export class MsalConfigService {
  tenantName = 'aidasplanexware';
  signUpSignInPolicy = 'B2C_1_SignupSignin_Edimarket';
  clientId = '5878c7b9-b208-4f5e-9e60-079541fcbdb2';
  redirectUri = 'http://localhost:4200/';
  isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

  createMSALInstance(): IPublicClientApplication {
    return new PublicClientApplication({
      auth: {
        clientId: this.clientId,
        authority: `https://${this.tenantName}.b2clogin.com/${this.tenantName}.onmicrosoft.com/${this.signUpSignInPolicy}`,
        redirectUri: this.redirectUri,
        knownAuthorities: [`${this.tenantName}.b2clogin.com`]
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: this.isIE
      }
    });
  }
}
