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
import {
  ModalConfig,
  ModalData
} from 'src/app/shared/components/modal/modal.config';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {
  @ViewChildren(TabComponent) tabs: QueryList<TabComponent>;
  selectedTab;
  constructor(
    private changeDetectorDef: ChangeDetectorRef,
    private modalData: ModalData,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.changeDetectorDef.detectChanges();
  }
  ngAfterViewInit() {
    if (!this.selectedTab && this.tabs.length) {
      this.selectedTab = this.modalData.data.isLogin
        ? this.tabs.first
        : this.tabs.last;
      this.selectedTab.selected = true;
    }
    this.changeDetectorDef.detectChanges();
  }
  selectTab(selectedTab: TabComponent) {
    this.tabs.map(tab => (tab.selected = false));
    selectedTab.selected = true;
  }
  closeModal() {
    this.modalService.close();
  }
}
