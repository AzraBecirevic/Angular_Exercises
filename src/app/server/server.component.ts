import { Component } from '@angular/core';
//import { Component } from '@angular/core';

@Component({
    selector:'app-server',  // html tag koji dozvoljava da koristimo ovu komponentu u drugim komponentama
    templateUrl:'./server.component.html',
    styles: [`
       .online{
           color:white;
       }
    `]
})
export class ServerComponent{
      serverId:number = 10;
      serverStatus:string = 'offline'

      constructor(){

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';

      }

      getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus==='online'? 'green': 'red';
    }
}

