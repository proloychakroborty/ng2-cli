import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'language-list',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.css']
})
export class I18nComponent implements OnInit {
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};

  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "es"]);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
    let browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  changeLang(e, lang) {
    this.translate.use(lang);
    e.preventDefault();
  }

  ngOnInit() {
    
  }

}
