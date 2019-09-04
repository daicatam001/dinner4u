import { FormControl } from '@angular/forms';
import { ValidateService } from 'src/app/service/validate.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export class CustomValidator {
  static validUniqueRegisterUsername(validateService: ValidateService) {
    return (control: FormControl) => {
      return validateService.validateRegisterUsername(control.value).pipe(
        map(() => {
          return null;
        }),
        catchError(() => of({ validUnique: true }))
      );
    };
  }
  static validUniqueRegisterEmail(validateService: ValidateService) {
    return (control: FormControl) => {
      return validateService.validateRegisterEmail(control.value).pipe(
        map(() => {
          return null;
        }),
        catchError(() => of({ validUnique: true }))
      );
    };
  }
}
