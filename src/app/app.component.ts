import { OverlayContainer } from '@angular/cdk/overlay';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemingService } from './theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewChecked {
  title = 'nowhere';
  themingSubscription: Subscription;
  isSafari = false;
  @HostBinding('class') public cssClass: string;
  data = {
    card: {
      unique_id: "1", show: false, type: "audio", userId: "@monkey504564", title: "Billie Eilish Contemplates Distraction, and 10 More New Songs. Listen one now!and don't judge me for my actions.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore etc.Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquipex ea commodo consequat."
    }
  };
  constructor(private overlayContainer: OverlayContainer,
    private themingService: ThemingService,
    private elementRef: ElementRef,
  ) {
  }

  ngAfterViewChecked(): void {
    if (this.themingService.theme.value !== 'light-theme') {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#0B0B0B";
    } else {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#D6CCC1";
    }
  }
  ngOnDestroy() {
    this.themingSubscription.unsubscribe();
  }
  ngOnInit() {
    this.themingSubscription = this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
      this.themingService.applyThemeOnOverlays(this.overlayContainer, this.themingService, this.cssClass);
    });
    if (this.getBrowserName() === 'safari') {
      this.isSafari = true;
    }
  }
  public getBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edge') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }
}
