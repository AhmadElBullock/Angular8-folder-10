import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedBar = new EventEmitter<string>()
  
  onSelectBar(selection: string) {
    this.selectedBar.emit(selection);
  }
}
