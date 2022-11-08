import { Component, OnInit } from '@angular/core';

interface Services {
  class: string
  title: string
  image: string
  description: string
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services: Services[] =  [
    {
      class: 'accounting',
      title: 'Contabilidad',
      image: '/assets/images/services/accounting.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
    {
      class: 'management',
      title: 'Administración',
      image: '/assets/images/services/management.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
    {
      class: 'fiscal',
      title: 'Fiscal',
      image: '/assets/images/services/fiscal.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
    {
      class: 'deliverable',
      title: 'Entregables',
      image: '/assets/images/services/deliverable.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
    {
      class: 'discipline',
      title: 'Disciplina Financiera',
      image: '/assets/images/services/discipline.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
    {
      class: 'building',
      title: 'Construcción Inmobiliaria',
      image: '/assets/images/services/building.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
    {
      class: 'payroll',
      title: 'Nóminas',
      image: '/assets/images/services/payroll.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
    {
      class: 'defense',
      title: 'Defensa Legal',
      image: '/assets/images/services/defense.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
    {
      class: 'training',
      title: 'Capacitación Empresarial y Cursos',
      image: '/assets/images/services/training.png',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
