import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  value = '';

  @Output() searchEvent:EventEmitter<string>  = new EventEmitter<string>();

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {}

  search() {
    this.emitEvent();
  }
  clear(){
    this.value = '';
    this.emitEvent();
  }
  emitEvent(){
    this.searchEvent.emit(this.value);
  }
}
