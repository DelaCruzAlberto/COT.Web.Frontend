import { Component } from '@angular/core';
import Route from 'src/app/routes';
import { LoginService } from './services/login.service';
import { Usuario } from './models/Usuario';
import { Router } from '@angular/router';
import { NotificationsHelper, message, type } from 'src/app/helpers/notificationsHelper';
import { UserData } from 'src/app/helpers/userData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  routes = Route;
  user: Usuario = {
    nombreEmpresa: '',
    nombreUsuario: '',
    contraseña: '',
  };

  isLoading: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private notificationsHelper: NotificationsHelper,
    private userData: UserData
  ) { }

  ngOnInit(): void {
  }

  async postLogin() {
    this.isLoading = true;

    try {
      const login = await this.loginService.postIniciarSesion(this.user);
      this.handleIniciarSesion(login);
    }
    catch (error: any) {
      if (!this.user.nombreEmpresa || !this.user.nombreUsuario || !this.user.contraseña) {
        this.notificationsHelper.notification(message.MISSING_MANDATORY_FIELDS, type.DANGER)
      } else {
        this.notificationsHelper.notification(message.WRONG_FIELDS, type.DANGER)
      }
    }
    this.isLoading = false;

  }

  handleEnterpriseChange(value: string) {
    this.user.nombreEmpresa = value;
  }

  handleUsernameChange(value: string) {
    this.user.nombreUsuario = value;
  }

  handlePasswordChange(value: string) {
    this.user.contraseña = value;
  }

  handleIniciarSesion(result: any) {
    this.userData.setUserToken(result);
    this.router.navigate([this.routes.HOME])
  }
}
