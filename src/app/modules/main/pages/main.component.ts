import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/helpers/userData';
import Route from 'src/app/routes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  routes = Route;

  constructor(
    private userData: UserData,
    private router: Router
  ) { }


  navbarItems: any = [
    {
      label: "Parámetros",
      href: '',
      icon: '',
      hasChildren: true,
      children: [
        { label: 'Canales', href: Route.PARAMETROS_CANALES, icon: "", hasChildren: false },
        { label: 'Ordenes de compra mínimas', href: Route.PARAMETROS_ORDENES_COMPRA_MINIMA, icon: "", hasChildren: false },
        { label: 'Familias', href: Route.PARAMETROS_FAMILIAS, icon: "", hasChildren: false },
        { label: 'Unidades', href: Route.PARAMETROS_UNIDADES, icon: "", hasChildren: false },
        // { label: 'Agrupaciones', href: Route.PARAMETROS_AGRUPACIONES, icon: "", hasChildren: false }
      ]
    },
    {
      label: "Operación Comercial",
      href: '',
      icon: '',
      hasChildren: true,
      children: [
        { label: 'Destacados', href: Route.OPERACION_COMERCIAL_DESTACADOS, icon: "", hasChildren: false },
        { label: 'Asignación de precios', href: Route.OPERACION_COMERCIAL_ASIGNACION_PRECIOS, icon: "", hasChildren: false },
        { label: 'Vigencia de precios', href: Route.OPERACION_COMERCIAL_VIGENCIA_PRECIOS, icon: "", hasChildren: false },
        { label: 'Asignación de bonificaciones', href: Route.OPERACION_COMERCIAL_ASIGNACION_BONIFICACIONES, icon: "", hasChildren: false },
        { label: 'Vigencia de bonificaciones', href: Route.OPERACION_COMERCIAL_VIGENCIA_BONIFICACIONES, icon: "", hasChildren: false }
      ]
    },
    {
      label: "Consultas",
      href: '',
      icon: '',
      hasChildren: true,
      children: [
        { label: 'Artículos', href: Route.CONSULTAS_ARTICULOS, hasChildren: false },
        { label: 'Clientes', href: Route.CONSULTAS_CLIENTES, hasChildren: false },
        { label: 'Lista de Precios', href: Route.CONSULTAS_PRECIOS, hasChildren: false },
        { label: 'Listas de Bonificaciones', href: Route.CONSULTAS_BONIFICACIONES, hasChildren: false },
        { label: 'Órdenes de compra', href: Route.CONSULTAS_ORDENES, hasChildren: false },
        { label: 'Sucursales', href: Route.CONSULTAS_SUCURSALES, hasChildren: false },
        { label: 'Agrupaciones', href: Route.CONSULTAS_AGRUPACIONES, hasChildren: false },
        // { label: 'Lugares de entrega', href: Route.CONSULTAS_LUGARES_ENTREGA, hasChildren: false },
        // { label: 'Stock', href: Route.CONSUTAS_STOCK, hasChildren: false },
      ]
    },
    {
      label: "Ventas",
      href: '',
      icon: '',
      hasChildren: true,
      children: [
        { label: 'Nueva orden de compra', href: Route.VENTAS_NUEVA_OC, hasChildren: false },
        { label: 'Repetir o ver órdenes de compra', href: Route.VENTAS_REPETIR_OC, hasChildren: false },
        { label: 'Vender con plantilla', href: Route.VENTAS_VENDER_PLANTILLA, hasChildren: false },
        { label: 'Recuperar borradores', href: Route.VENTAS_BORRADORES, hasChildren: false },
      ]
    },
    {
      label: "Plantillas",
      href: '',
      icon: '',
      hasChildren: true,
      children: [
        { label: 'Generar plantilla', href: "#", hasChildren: false },
      ]
    },
    {
      label: "Vendedores",
      href: '',
      icon: '',
      hasChildren: true,
      children: [
        { label: 'Administración de vendedores', href: Route.VENDEDORES_ADMINISTRACION_VENDEDORES, hasChildren: false },
        { label: 'Asignación de clientes', href: Route.VENDEDORES_ASIGNACION_CLIENTES, hasChildren: false },
      ]
    },
    {
      label: "Venta rápida",
      href: '',
      icon: '',
      hasChildren: true,
      children: [
        { label: 'Nueva orden de compra', href: Route.VENTA_RAPIDA_NUEVA_OC, hasChildren: false },
        { label: 'Recuperar borradores', href: Route.VENTA_RAPIDA_BORRADORES, hasChildren: false },
        { label: 'Repetir o ver órdenes de compra', href: Route.VENTA_RAPIDA_REPETIR_OC, hasChildren: false },
      ]
    },
    {
      label: this.userData.getDecodedUser().email,
      href: () => this.logout(),
      icon: "fa-sign-out",
      hasChildren: false
    }
  ]


  pieChartData: any[] = [
    { value: 22, color: "#FF0000", text: "Ordenes de compra NO realizadas segun cantidad de empresas" },
    { value: 50, color: "#65B741", text: "Ordenes de compra realizadas por cantidad de empresas" },
  ];

  barChartData: any[][] = [
    [
      {
        label: "Argenchino 1", children: [
          { value: 24, color: "#65B741", tooltipText: "24 órdenes de compra" }]
      },
      {
        label: "Argenchino 2", children: [
          { value: 14, color: "#0000FF", tooltipText: "14 órdenes de compra" }]
      },
      {
        label: "Argenchino 3", children: [
          { value: 4, color: "#65B741", tooltipText: "4 órdenes de compra" }]
      },
      {
        label: "Argenchino 4", children: [
          { value: 30, color: "#0000FF", tooltipText: "30 órdenes de compra" }]
      },
      {
        label: "Argenchino 5", children: [
          { value: 33, color: "#65B741", tooltipText: "33 órdenes de compra" }]
      }
    ]];


  logout(){
    this.userData.clearUserToken();
    this.router.navigate([this.routes.LOGIN])
  }
}
