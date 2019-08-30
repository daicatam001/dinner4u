import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
  ContentChildren,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import { TabComponent } from 'src/app/shared/components/tab/tab.component';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {
  @ViewChildren(TabComponent) tabs: QueryList<TabComponent>;
  selectedTab;
  constructor(private changeDetectorDef: ChangeDetectorRef) {}

  ngOnInit() {}
  ngAfterViewInit() {
    if (!this.selectedTab && this.tabs.length) {
      this.selectedTab = this.tabs.first;
      this.selectedTab.selected = true;
    }
    this.changeDetectorDef.detectChanges();
  }
  selectTab(selectedTab: TabComponent) {
    this.tabs.map(tab => (tab.selected = false));
    selectedTab.selected = true;
  }
}
