import { Component, OnInit } from '@angular/core';

//let's add a type to use in pages
export class Host {
  _id: string;
  name: string;
  url: string;
};


@Component({
  selector: 'app-host-list',
  templateUrl: './host-list.component.html',
  styleUrls: ['./host-list.component.css']
})
export class HostListComponent implements OnInit {

  constructor() { }

  //hosts = ["apple.com", "google.com", "amazon.com"];
  hosts: Host[] = [
    {
      _id: '0',
      name: "Amazon",
      url: "https://amazon.com",
    },{
      _id: '1',
      name: 'Google',
      url: 'https://google.com'
    },{
      _id: '2',
      name: 'Apple',
      url: 'https://apple.com'
    }
  ];

  ngOnInit() {
  }

}
