import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

// const INFO: string=
// "https://newsapi.org/v2/everything?q=apple&from=2018-08-01&to=2018-08-01&sortBy=popularity&apiKey=2f07303040f94806b92f1930a5c4b109";


const INF: string = "https://newsapi.org/v2/top-headlines?sources=news24&apiKey=0c4e410cf98d47ea8c328ac2b8481c0e";
const spt="https://newsapi.org/v2/top-headlines?sources=bbc-sport&apiKey=2f07303040f94806b92f1930a5c4b109";
const nat="https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=2f07303040f94806b92f1930a5c4b109";
const tech="https://newsapi.org/v2/top-headlines?sources=wired&apiKey=2f07303040f94806b92f1930a5c4b109";
@Injectable()
export class DatabaseProvider {

  
  constructor(public http: HttpClient) {
    console.log('Hello DatabaseProvider Provider');
  }
 getNews(){
 return this.http.get(INF);
 }

 getSPT(){
  return this.http.get(spt);
 }

 getTECH(){
  return this.http.get(tech);
 }

 getNAT(){
  return this.http.get(nat);
 }
}
