import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-ng-mat-select',
  template: `
    <div class="select">
        <select (change)="onChange($event)">
          <option *ngFor="let item of options">{{item}}</option>
        </select>
    </div>
  `,
  styleUrls: ['./ng-mat-select.component.scss']
})
export class NgMatSelectComponent implements OnInit {

  @Input() options:any=[];
  @Output() onSelected: EventEmitter<boolean> = new EventEmitter();

  constructor() {

    console.log("construction options", this.options)
  }

  ngOnInit(): void {

  }

  onChange(deviceValue:any) {
    this.onSelected.emit(deviceValue.target.value);
    console.log(deviceValue.target.value);
}

}
