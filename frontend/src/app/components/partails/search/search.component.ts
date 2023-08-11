import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm ='';
  constructor(activatedRoute:ActivatedRoute,private router:Router){
    activatedRoute.params.subscribe(params=>{
      if(params['searchTerm']) this.searchTerm = params['searchTerm'];
    })
  }
  ngOnInit():void{

  }
  search(trem:string):void{
    if(trem)
      this.router.navigateByUrl('/search/' + trem);
  }
}
