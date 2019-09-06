import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { Menu } from 'src/app/core/model/menu.model';
import { MenuService } from 'src/app/service/menu.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoadingButtonComponent } from 'src/app/shared/components/loading-button/loading-button.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertMessageComponent } from 'src/app/shared/components/alert-message/alert-message.component';
@Component({
  selector: 'menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss']
})
export class MenuCreateComponent implements OnInit, AfterViewInit, OnDestroy {
  menu: Menu;
  formDish: FormGroup;
  formTag: FormGroup;
  isShowAlert;
  _onCloseObs;
  @ViewChild(AlertMessageComponent, { static: false })
  alertMessage: AlertMessageComponent;
  @ViewChild(LoadingButtonComponent, { static: false })
  loadingButton: LoadingButtonComponent;
  constructor(
    private menuService: MenuService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.menu = { dishes: [], tags: [] };
    this.formDish = this.formBuilder.group({
      dish: ['', Validators.required]
    });
    this.formTag = this.formBuilder.group({
      tag: ['', Validators.required]
    });
  }
  ngAfterViewInit() {}
  ngOnDestroy() {
    this._onCloseObs.unsubscribe();
  }
  addDish() {
    if (this.formDish.invalid) {
      return;
    }
    const dish = this.formDish.get('dish').value;
    const duplicateDish = this.menu.dishes.filter(item => item === dish);
    if (duplicateDish.length === 0) {
      this.menu.dishes.push(dish);
    }
    this.formDish.reset();
  }
  createMenu() {
    this.loadingState(true);
    this.menuService.create(this.menu).subscribe(
      () => {
        this.loadingState(false);
        this.alertMessage.showSuccessAlert();
        this.menu.dishes = [];
        // For fade effect
        this.formDish.reset();
      },
      err => {
        this.loadingState(false);
        this.alertMessage.showFailAlert(err.error.message);
        return throwError(err.error.message);
      }
    );
  }
  loadingState(state) {
    // Disable form when loading
    state ? this.formDish.disable() : this.formDish.enable();
    this.loadingButton.loading(state);
  }

  addTag() {
    if (this.formTag.invalid) {
      return;
    }
    const tag = this.formTag.get('tag').value;
    const duplicateTag = this.menu.tags.filter(item => item === tag);
    if (duplicateTag.length === 0) {
      this.menu.tags.push(tag);
    }

    this.formTag.reset();
  }
  removeTag(index: number) {
    this.menu.tags = this.menu.tags.filter((item, i) => i !== index);
  }
}
