import { Component } from '@angular/core';
//import { Component } from '@angular/core';

@Component({
    selector:'app-server',  // html tag koji dozvoljava da koristimo ovu komponentu u drugim komponentama
    templateUrl:'./server.component.html'
})
export class ServerComponent{
      serverId:number = 10;
      serverStatus:string = 'offline'

      getServerStatus(){
        return this.serverStatus;
    }
}

