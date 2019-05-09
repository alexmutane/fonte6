import { Injectable } from '@angular/core';

import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BibliaService {

  constructor(
    private http: HttpClient
  ) { 
    http.get('../assets/data/nt_books.json', {}).subscribe(res => {
      console.log(res);
    })
  }
}
