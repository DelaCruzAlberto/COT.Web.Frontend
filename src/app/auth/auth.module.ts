// src/app/auth/auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalModule, MSAL_INSTANCE, MSAL_GUARD_CONFIG, MsalService, MsalGuard, MsalBroadcastService, MsalInterceptor,} from '@azure/msal-angular';
import { PublicClientApplication, InteractionType, IPublicClientApplication, BrowserCacheLocation, LogLevel } from '@azure/msal-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

const tenantName = 'ADIDAS';
const signUpSignInPolicy = 'B2C_1_SignupSignin_COT';
const clientId = '5878c7b9-b208-4f5e-9e60-079541fcbdb2'; // Cliente ID de la aplicación
const redirectUri = 'http://localhost:4200/';
const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;


export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: clientId,
      authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${signUpSignInPolicy}`,
      redirectUri: redirectUri,
      knownAuthorities: [`${tenantName}.b2clogin.com`]
    },
    cache: {
      cacheLocation: BrowserCacheLocation.LocalStorage,
      storeAuthStateInCookie: false, // Cambiar a true si es necesario para soporte IE
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case LogLevel.Error:
              console.error(message);
              return;
            case LogLevel.Info:
              console.info(message);
              return;
            case LogLevel.Verbose:
              console.debug(message);
              return;
            case LogLevel.Warning:
              console.warn(message);
              return;
          }
        }
      }
    }
  });
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: clientId,
        authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${signUpSignInPolicy}`,
        redirectUri: redirectUri
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE, // Determina si es necesario para soporte IE
      }
    }), {
      interactionType: InteractionType.Redirect,
      authRequest: {
        scopes: ['openid']
      }
    }, {
      protectedResourceMap: new Map([
        // Añade aquí las rutas de acceso y ámbitos de tus APIs
      ]),
      interactionType: InteractionType.Redirect
    })
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: MSAL_GUARD_CONFIG,
      useValue: {
        interactionType: InteractionType.Popup,
        authRequest: {
          scopes: ['openid']
        }
      }
    },
    MsalService,
    MsalGuard,
    MsalBroadcastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
  ]
})
export class AuthModule { }
