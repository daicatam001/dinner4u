import { Component, OnInit, ContentChild, ViewChild } from '@angular/core';
import { Menu } from 'src/app/core/model/menu.model';
import { MenuService } from 'src/app/service/menu.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoadingButtonComponent } from 'src/app/shared/components/loading-button/loading-button.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'menu-create',
  templateUrl: './menu-create.component.html',
  styleUrls: ['./menu-create.component.scss']
})
export class MenuCreateComponent implements OnInit {
  menu: Menu;
  error;
  form: FormGroup;
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
  addDish() {
    if (this.form.invalid) {
      return;
    }
    this.menu.dishes.push(this.form.get('dish').value);
    this.form.reset();
  }
  createMenu() {
    this.loadingButton.loading(true);
    this.menuService
      .createMenu(this.menu)
      .pipe(
        catchError(err => {
          this.showError(err.error);
          this.loadingButton.loading(false);
          return throwError(err.error.message);
        })
      )
      .subscribe(val => {
        this.loadingButton.loading(false);
        this.menu.dishes = [];
        this.form.reset();
      });
  }
  showError(error) {
    this.error = error;
  }
}
