import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

interface Menu {
  route: string
  name: string
  icon: string
  goTo?: string
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  public menu: boolean = false;
  public scrollFlag: string = '';
  private scrollListener: boolean = true;
  public menuOptions: Menu[] = [
    {
      route:'/',
      name: 'Inicio',
      icon:'home',
      goTo: 'home'
    },
    {
      route:'/',
      name: 'Nosotros',
      icon:'people',
      goTo: 'about-us'
    },
    {
      route:'/',
      name: 'Servicios',
      icon:'info',
      goTo: 'services'
    },
    {
      route:'/',
      name: 'Valor agregado',
      icon:'card_membership',
      goTo: 'value-added'
    },
    {
      route:'/',
      name: 'Contacto',
      icon:'contact_support',
      goTo: 'contact'
    },
  ];
  public menuIcon: string = '';
  public showLogo: string = ''

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

  ngOnInit(): void {
    this.menuIcon = 'assets/icons/hamburguer.png'
    this.scrollListener = true;
    this.renderer.listen('window', 'scroll', (e) => {
      if (this.scrollListener){
        this.menuIcon = e.target.scrollingElement.scrollTop > 100 ? 'assets/icons/hamburguer-white.png' : 'assets/icons/hamburguer.png';
        this.showLogo = e.target.scrollingElement.scrollTop > 100 ? "show-logo" : ""; 
        this.scrollFlag = e.target.scrollingElement.scrollTop > 100 ? "blue-nav" : "";
      }
    });
  }

  goTo(path: any, event?: any) {
    
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        // const elementList = document.querySelectorAll('#' + path);
        // const element = elementList[0] as HTMLElement;
        // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        let element = document.querySelector('#' + path) as HTMLElement
        let topOfElement = element.offsetTop - 60
        window.scroll({top: topOfElement, behavior: 'smooth'})
      }, 200);
    }
  }

  public toggleMenu() {
    this.menu = !this.menu;
    let html = this.renderer.selectRootElement('html', true);
    let body = this.renderer.selectRootElement('body', true);
    if (this.menu == true) {
      this.renderer.setAttribute(body, 'style', 'overflow:hidden;');
      // this.renderer.setAttribute(html, 'style', 'overflow:hidden;' );
      return;
    }
    // this.renderer.setAttribute(html, 'style', 'overflow:vissible;');
    this.renderer.setAttribute(body, 'style', 'overflow:vissible;');
  }
}
