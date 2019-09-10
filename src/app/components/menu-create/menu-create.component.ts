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
export class MenuCreateComponent implements OnInit, AfterViewInit {
  // menu: Menu;
  dishes: Array<string>;
  tags: Array<string>;
  formDish: FormGroup;
  formTag: FormGroup;
  isShowAlert;
  @ViewChild(AlertMessageComponent, { static: false })
  alertMessage: AlertMessageComponent;
  @ViewChild(LoadingButtonComponent, { static: false })
  loadingButton: LoadingButtonComponent;
  constructor(
    private menuService: MenuService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    // this.menu = { dishes: [], tags: [] };
    this.dishes = [];
    this.tags = [];
    this.formDish = this.formBuilder.group({
      dish: ['', Validators.required]
    });
    this.formTag = this.formBuilder.group({
      tag: ['', Validators.required]
    });
  }
  ngAfterViewInit() {}
  addDish() {
    if (this.formDish.invalid) {
      return;
    }
    const dish = this.formDish.get('dish').value;
    const duplicateDish = this.dishes.filter(item => item === dish);
    if (duplicateDish.length === 0) {
      this.dishes.push(dish);
    }
    this.formDish.reset();
  }
  addTag() {
    if (this.formTag.invalid) {
      return;
    }
    const tag = this.formTag.get('tag').value;
    const duplicateTag = this.tags.filter(item => item === tag);
    if (duplicateTag.length === 0) {
      this.tags.push(tag);
    }

    this.formTag.reset();
  }
  removeTag(index: number) {
    this.tags = this.tags.filter((item, i) => i !== index);
  }
  createMenu() {
    this.loadingState(true);
    this.menuService.createNew(this.dishes, this.tags).subscribe(
      () => {
        this.loadingState(false);
        this.alertMessage.showSuccessAlert();
        this.dishes = [];
        this.tags = [];
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
}
