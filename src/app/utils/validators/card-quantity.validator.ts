import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";

const validateCardQuantity = (): ValidatorFn => {
    return (control: AbstractControl) => {
        if (!Array.isArray(control.value)) Validators.required

        const value = control.value as any[]

        if (value.length === 0) {
            return Validators.required
        }

        if (value.length < 24) {
            return Validators.minLength(24)
        }

        if (value.length > 60) {
            return Validators.maxLength(60)
        }

        return null;
    }
}

export { validateCardQuantity };
