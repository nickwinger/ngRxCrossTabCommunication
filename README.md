# ngrxcrosstabcommunication

Just a simple cross tab communication service für angular2+ using localstorage and rxjs

## Installation

To install this library, run:

```bash
$ npm install ngrxcrosstabcommunication --save
```

## Including in angular

inside your Angular-Module:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import CrossTabCommunication library
import { NgRxCrossTabCommunicationModule } from 'ngrxcrosstabcommunication';

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
import { CrossTabService } from 'ngrxcrosstabcommunication';

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

## Usage / API

The message objects contains simply a message string and optional data of any type:
```typescript
interface CrossTabMessage {
    message: string;
    data?: any;
}
```

Import the CrossTabService and subscribe to messages
```typescript
    crossTabService.messages.subscribe((msg: CrossTabMessage) => {
        
    });    
```

Import the CrossTabService and send messages
```typescript
    const messageSentToOtherTabs = {
        message: 'Test', data: { foo: 'bar'}
    };
    crossTabService.sendMessage(messageSentToOtherTabs);
        
    const messageSentToAllTabs = { // including the current tab
        message: 'Test', data: 'bar'}
    };
    crossTabService.sendMessage(messageSentToAllTabs, true);
```

## Feedback / Issues / Wishes
If you need a feature that is not yet implemented, please just tell me.


## License

MIT © [Nick Winger](mailto:nick@bit4bit.at)
