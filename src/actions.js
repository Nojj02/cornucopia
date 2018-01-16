export const PURCHASEAMOUNT_CHANGE = 'PURCHASEAMOUNT_CHANGE';
export const WISHFORM_SUBMIT = 'WISHFORM_SUBMIT';
export const WISHFORM_ITEMNAMECHANGE = 'WISHFORM_ITEMNAMECHANGE';

export function purchaseAmountChange(value) {
    return {
        type : PURCHASEAMOUNT_CHANGE,
        value : value
    };
}

export function itemNameChange(itemName) {
    return {
        type : WISHFORM_ITEMNAMECHANGE,
        value : itemName
    }
}

export function wishFormSubmit(form) {
    return {
        type : WISHFORM_SUBMIT,
        form : form
    }
}