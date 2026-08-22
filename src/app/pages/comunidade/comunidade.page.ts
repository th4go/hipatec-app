import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonSpinner
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.page.html',
  styleUrls: ['./comunidade.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonSpinner
  ]
})
export class ComunidadePage implements OnInit {
  // Lembre-se de colocar a URL pública do seu WordPress no Azure
  private wpCommunityUrl: string = 'https://hipatec-comunidade-cchrgwduc2cng0hd.southafricanorth-01.azurewebsites.net/portal/';
  
  public safeCommunityUrl!: SafeResourceUrl;
  public isLoading: boolean = true;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeCommunityUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.wpCommunityUrl);
  }

  onIframeLoad() {
    this.isLoading = false;
  }
}