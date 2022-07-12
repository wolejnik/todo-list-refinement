import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-switcher',
  templateUrl: './lang-switcher.component.html',
  styleUrls: ['./lang-switcher.component.scss'],
})
export class LangSwitcherComponent implements OnInit {
  public currentLang!: string;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.onLangChange.subscribe((data) => {
      if (data) {
        this.currentLang = data?.lang;
      }
    });
  }

  public useLanguage(language: string): void {
    this.translate.use(language);
  }
}
