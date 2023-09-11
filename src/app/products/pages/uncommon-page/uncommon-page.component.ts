import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  // Usualmente serian propiedades publicas, luego privadas,
  // , constructor Luego public and private methods
  public name: string = 'Cristian';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male:'invitarlo',
    female:'invitarla',
  }

  public changeClient():void{
    this.name = 'Vanessa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Mario','Pedro','Fernando','Sara','Juan','Vanessa','Viviana']
  public clientsMap = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando',
  }

  public deleteClient():void{
    this.clients.shift();
  }

  //keyValue Pipe

  public person = {
    name: 'Cristian',
    age: '38',
    address: 'Medellin, Colombia'
  }

  //asyncPipe
  // Observable
  // Crea un observable que emite valores cada cieto tiempo
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log( 'tap', value ) )
  );

    // Promise
    public promiseValue: Promise<string> = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Tenemos data en la promesa'),
        console.log('Tenemos data en la promesa')
      }, 3500);
    })

}
function resolve(arg0: string): void {
  throw new Error('Function not implemented.');
}

