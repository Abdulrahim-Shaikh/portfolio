import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title: string = 'App'
  nationalityDialogVisible: boolean = false;
  ageDialogVisible: boolean = false;
  phoneDialogVisible: boolean = false;
  emailDialogVisible: boolean = false;
  date: Date | undefined = new Date('2001-09-01');



  constructor(private messageService: MessageService) {}




  showNationalityDialog() {
    this.nationalityDialogVisible = true;
  }
  showAgeDialog() {
    this.ageDialogVisible = true;
  }
  showEmailDialog() {
    this.emailDialogVisible = true;
  }
  showPhoneDialog() {
    this.phoneDialogVisible = true;
  }

  copyIndiaNumber() {
    const selBox = document.createElement('textarea');
    selBox.value = '+919370260050'
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'India Phone Number Copied' });
  }
  copySaudiNumber() {
    const selBox = document.createElement('textarea');
    selBox.value = '+966594951370'
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Saudi Arabia Phone Number Copied' });
  }
}
