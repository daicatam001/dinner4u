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
  errorMessage: string;
  form: FormGroup;
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
    this.menu = { dishes: [] };
    this.form = this.formBuilder.group({
      dish: ['', Validators.required]
    });
  }
  ngAfterViewInit() {
    this._onCloseObs = this.alertMessage.onClose.subscribe(() => {
      this.errorMessage = null;
    });
  }
  ngOnDestroy() {
    this._onCloseObs.unsubscribe();
  }
  addDish() {
    if (this.form.invalid) {
      return;
    }
    this.menu.dishes.push(this.form.get('dish').value);
    this.form.reset();
  }
  createMenu() {
    this.loadingButton.loading(true);
    this.form.disable();
    this.menuService
      .create(this.menu)
      .pipe(
        catchError(err => {
          this.loadingButton.loading(false);
          this.form.enable();
          this.alertMessage.showFailAlert();
          this.errorMessage = err.error.message;
          return throwError(this.errorMessage);
        })
      )
      .subscribe(() => {
        this.loadingButton.loading(false);
        this.form.enable();
        this.alertMessage.showSuccessAlert();
        this.menu.dishes = [];
        this.form.reset();
      });
  }
}
