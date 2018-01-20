export const PURCHASEAMOUNT_CHANGE = 'PURCHASEAMOUNT_CHANGE';
export const WISHFORM_SUBMIT = 'WISHFORM_SUBMIT';
export const WISHFORM_FIELDCHANGE = 'WISHFORM_FIELDCHANGE';

export function purchaseAmountChange(value) {
    return {
        type : PURCHASEAMOUNT_CHANGE,
        value : value
    };
}

export function wishFormFieldChange(fieldName, value) {
    return {
        type : WISHFORM_FIELDCHANGE,
        fieldName : fieldName,
        value : value
    }
}

export function wishFormSubmit(form) {
    return {
        type : WISHFORM_SUBMIT,
        form : form
    }
}