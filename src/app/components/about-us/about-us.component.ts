import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})

export class AboutUsComponent implements OnInit {
  
  @HostListener('window:resize', ['$event'])
  myfunction(){
    let elem = document.getElementById('exp');
    let rect = elem!.getBoundingClientRect();
    // console.log("x: "+ rect.left);
    // console.log("y: "+ rect.y);
  }
  
  constructor() { 
  }
  
  
  ngOnInit(): void {
    this.myfunction()
  }

}
