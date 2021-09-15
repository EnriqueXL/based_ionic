import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listado: Object;
  
  constructor(private http: HttpClient) {
    
    this.http.get("http://localhost/ionic_estudiantes/consultados.php").subscribe(snap=>{
      console.log(snap);
      this.listado=snap;
      
    });
  }

}
