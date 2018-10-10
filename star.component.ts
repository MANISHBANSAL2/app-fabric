import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

//import { Component } from '@angular/core';


@Component({
    selector: 'cp-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']

})

// export class StarComponent{
//    rating: number = 3;
//     //@Input() rating: number = 4;
//     starWidth: number;

    

// }

export class StarComponent implements OnChanges{
   //rating: number = 4;
    @Input() rating: number;
    starWidth: number;
    @Output() 
    notify: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {

       this.starWidth = this.rating * 86/5;
    }

    onClick(): void {

        //console.log(`The rating ${this.rating} was clicked!`)
        this.notify.emit(`the rating ${this.rating} was clicked!`);
    }

}


