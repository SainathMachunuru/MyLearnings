import { Injectable } from "../../node_modules/@angular/core";
import { HtmlAstPath } from "../../node_modules/@angular/compiler";
import { Http, Headers } from "../../node_modules/@angular/http";
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators'; 
import { throwError } from 'rxjs'; 

@Injectable()
export class ServersService{
    constructor(private http:Http){}

    storeServers(servers:any[]){
        const headers = new Headers({'Content-Type':'applications/json'});
    //    return  this.http.post('https://fir-ng-http-19a87.firebaseio.com/data.json',
    //                            servers,
    //                             {headers:headers});
        return  this.http.put('https://fir-ng-http-19a87.firebaseio.com/data.json',
                               servers,
                                {headers:headers});                         

    }
    getServers(){
        return this.http.get('https://fir-ng-http-19a87.firebaseio.com/data.json')
            .pipe(map(
                (response:Response) =>{
                    const data = response.json();
                    return data;
                }
            )).pipe(
                catchError(error => {
                    return throwError('something went wrong');
                }
            )
            );
    }
    getAppName(){
        return this.http.get('https://fir-ng-http-19a87.firebaseio.com/data/appName.json')
        .pipe(map((response:Response)=>{
            const data = response.json();
            return data;
        }));
    }

}