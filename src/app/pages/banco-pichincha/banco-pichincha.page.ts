import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-banco-pichincha',
  templateUrl: './banco-pichincha.page.html',
  styleUrls: ['./banco-pichincha.page.scss'],
})
export class BancoPichinchaPage implements OnInit {

  API: string = "http://localhost:600/deposito";
  cedula:String;
  cedulae:String;
  cedulad:String;
  cantidad:number;
  retiro:number;
  dinero:any;
  cent:boolean=false;
  banco:string;

  urlFLS = "http://143.110.153.164:30000/"
  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
  };

  constructor( private http : HttpClient, private theInAppBrowser: InAppBrowser) { }

  ngOnInit() {
    
  }

  transferencia(){
    
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.http.post("http://localhost:8081/transferencia/pichincha/"+this.cedulae+"/"+this.cedulad+"/"+this.cantidad+"/"+this.banco,headers).subscribe((response)=>{
      console.log(response);
    });
    console.log(this.cantidad);

  }

  deposito(){
    
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.http.put("http://localhost:600/deposito/"+this.cedula+"/"+this.cantidad,headers).subscribe((response)=>{
      console.log(response);
    });
    console.log(this.cantidad);

  }

  retiroo(){
    
    let headers = new Headers({ 'Content-Type': 'application/json'});
    this.http.put("http://localhost:600/retiro/"+this.cedula+"/"+this.retiro,headers).subscribe((response)=>{
      console.log(response);
    });
    console.log(this.cantidad);

  }

  consulta(){
    this.http.get("http://localhost:600/consulta/"+this.cedula).subscribe((response)=>{
      this.dinero=response;
      if (this.dinero >=0){
        this.cent=true;
      }
    });
    console.log(this.cantidad);
  }

  resources() {
    let target = "_self";
    this.theInAppBrowser.create(this.urlFLS,target,this.options);
  }

}
