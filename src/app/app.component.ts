import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'mock-proj';
  constructor(private apiService:ApiService){

  }
  ngOnInit(): void {
    this.apiService.getHeroes().subscribe((data:any)=>{
      console.log(data);
    })
  }
}
