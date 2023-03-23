import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit{
  cruds:any;
  constructor(private http:HttpClient) {

  }

  ngOnInit(): void {
    let response = this.http.get("http://localhost:8080/api/users");
    response.subscribe((data)=>this.cruds=data);
  }

}
