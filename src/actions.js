export const PURCHASEAMOUNT_CHANGE = 'PURCHASEAMOUNT_CHANGE';

export function purchaseAmountChange(value) {
    return {
        type : PURCHASEAMOUNT_CHANGE,
        value : value
    };
}