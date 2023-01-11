import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  username;
  constructor(private activeroute:ActivatedRoute) { 
    this.username=this.activeroute.snapshot.paramMap.get("name");
  }

  ngOnInit(): void {
  }

}
