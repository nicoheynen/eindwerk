import { GeneralOfferInfo } from "app/gen-offer-info/general-offer-info";
import { Products } from "app/products/products";

export const GENERALINFO: GeneralOfferInfo = {
    taxPercent: 6,
    notice : '',
    offerGoal : '',
    date : '',
    reference: '',
    factureReference: '',
    factureGoal: '',
    products: <Products[]>Array()
}