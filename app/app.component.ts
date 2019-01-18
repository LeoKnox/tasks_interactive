import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    tasks: any = [];
    change: any = [];

    constructor(private _httpService: HttpService){}

    ngOnInit(){
      //this.getTasksFromService();
    }
    
    getTasksFromService(){
      this._httpService.getTasks().subscribe(data => {
        console.log("Got our tasks!", data);
        this.tasks = data;
      })
      /*this._httpService.getOne(id).subscribe(uno => {
        console.log("Got one task", uno);
        this.change = uno;
      })*/
    }
  runButton() {
    console.log('button pressed');
      this._httpService.getTasks().subscribe(data => {
        console.log("Got our tasks!", data);
        this.tasks = data;
      })
  }
  showButton(id: String) {
    this._httpService.getOne({task:id}).subscribe(uno => {
      this.change = uno;
    })
  }
}

