import { Component } from '@angular/core';
import { StyleService } from 'src/app/style.service';

@Component({
  selector: 'app-theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {

  constructor(private styleService: StyleService) { }

  onSubmit(form) {
    this.styleService.configStyle(form.value);
  }

}