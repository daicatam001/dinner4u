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
      // For fade effect
      setTimeout(() => {
        this.errorMessage = null;
      }, 500);
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
    this.loadingState(true);
    this.menuService.create(this.menu).subscribe(
      () => {
        this.loadingState(false);
        this.alertMessage.showSuccessAlert();
        this.menu.dishes = [];
        // For fade effect
        setTimeout(() => {
          this.errorMessage = null;
        }, 500);
        this.form.reset();
      },
      err => {
        this.loadingState(false);
        this.alertMessage.showFailAlert();
        this.errorMessage = err.error.message;
        return throwError(this.errorMessage);
      }
    );
  }
  loadingState(state) {
    // Disable form when loading
    state ? this.form.disable() : this.form.enable();
    this.loadingButton.loading(state);
  }
}
