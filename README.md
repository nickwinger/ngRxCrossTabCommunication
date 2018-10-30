# @angular/ngrxcrosstabcommunication

## Installation

To install this library, run:

```bash
$ npm install @angular/ngrxcrosstabcommunication --save
```

## Including in angular

inside your Angular-Module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import CrossTabCommunication library
import { NgRxCrossTabCommunicationModule } from '@angular/ngrxcrosstabcommunication';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    NgRxCrossTabCommunicationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the service like this:

```typescript
import {Component} from '@angular/core';
import { CrossTabService } from '@angular/ngrxcrosstabcommunication';

@Component() {}
export class MyComponent {
    constructor(crossTabService: CrossTabService) {
        crossTabService.messages.subscribe(msg => {
           console.log('Received message: ' + msg.message); 
        });
        
        crossTabService.sendMessage({ message: 'Test message', data: {foo: 'bar'}});
    }
}
```

## License

MIT © [Nick Winger](mailto:nick@bit4bit.at)
