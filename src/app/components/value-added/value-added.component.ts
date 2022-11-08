import { Component, OnInit } from '@angular/core';

interface AddedValues {
  title: string
  description: string
  image: string
  class?: string
}

@Component({
  selector: 'app-value-added',
  templateUrl: './value-added.component.html',
  styleUrls: ['./value-added.component.scss']
})
export class ValueAddedComponent implements OnInit {
  public addedValues: AddedValues[] = [
    {
      class: 'left',
      title: 'Certiﬁcación', 
      description: 'Lorem ipsum dolor sit amet, consectetuer ',
      image: 'assets/images/added-values/certification.png'
    },
    {
      class: 'right',
      title: 'Premiación', 
      description: 'Lorem ipsum dolor sit amet, consectetuer ',
      image: 'assets/images/added-values/award.png'
    },
    {
      class: 'left',
      title: 'Alianzas', 
      description: 'Lorem ipsum dolor sit amet, consectetuer ',
      image: 'assets/images/added-values/alliance.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
