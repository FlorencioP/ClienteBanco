import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
@Component({
  selector: 'app-coppjep',
  templateUrl: './coppjep.page.html',
  styleUrls: ['./coppjep.page.scss'],
})
export class CoppjepPage implements OnInit {

  
  API: string = "http://localhost:600/deposito";
  cedula:String;
  cedulae:String;
  cedulad:String;
  cantidad:number;
  retiro:number;
  dinero:any;
  cent:boolean=false;
  banco:string;
  constructor( private http : HttpClient) { }

  ngOnInit() {
    
  }

  transferencia(){
    
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.http.post("http://localhost:8081/transferencia/coop/"+this.cedulae+"/"+this.cedulad+"/"+this.cantidad+"/"+this.banco,headers).subscribe((response)=>{
      console.log(response);
    });
    console.log(this.cantidad);

  }

  deposito(){
    
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.http.put("http://localhost:800/deposito/"+this.cedula+"/"+this.cantidad,headers).subscribe((response)=>{
      console.log(response);
    });
    console.log(this.cantidad);

  }

  retiroo(){
    
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.http.put("http://localhost:800/retiro/"+this.cedula+"/"+this.retiro,headers).subscribe((response)=>{
      console.log(response);
    });
    console.log(this.cantidad);

  }

  consulta(){
    this.http.get("http://localhost:800/consulta/"+this.cedula).subscribe((response)=>{
      this.dinero=response;
      if (this.dinero >=0){
        this.cent=true;
      }
    });
    console.log(this.cantidad);
  }

}
