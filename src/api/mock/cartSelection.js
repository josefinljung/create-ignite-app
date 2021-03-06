import cartItems from './cartItems'
import paymentMethods from './paymentMethods'
import shippingMethods from './shippingMethods'

export default {
  language: null,
  currency: 'SEK',
  paymentMethod: paymentMethods[0].paymentMethod,
  paymentMethodName: paymentMethods[0].name,
  shippingMethod: shippingMethods[0].shippingMethod,
  shippingMethodName: shippingMethods[0].name,
  items: cartItems,
  discounts: {
    anyDiscount: true,
    discount: '100.00 SEK',
    discountAsNumber: 100,
    vouchers: [
      {
        description: 'test 10%',
        priceOff: '-1 810.00 SEK',
        priceOffAsNumber: -1810,
        type: 'code',
        voucher: 'familyandfriends',
      },
    ],
    automaticDiscounts: [],
  },
  totals: {
    itemsTotalPrice: '7 800.00 SEK',
    itemsTotalPriceAsNumber: 7800,
    totalDiscountPrice: false,
    totalDiscountPriceAsNumber: false,
    shippingPrice: '0.00 SEK',
    shippingPriceAsNumber: 0,
    handlingCostPrice: '0.00 SEK',
    handlingCostPriceAsNumber: 0,
    totalQuantity: cartItems.length,
    taxDeducted: false,
    taxDeductedAsNumber: false,
    taxAdded: false,
    taxAddedAsNumber: false,
    taxPercent: 25,
    grandTotalPrice: '7 800.00 SEK',
    grandTotalPriceAsNumber: 7800,
    grandTotalPriceTax: '780.00 SEK',
    grandTotalPriceTaxAsNumber: 780,
  },
  vatExempt: false,
  address: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
    vatNumber: '',
  },
  shippingAddress: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    address1: '',
    address2: '',
    zipCode: '',
    city: '',
    state: '',
    country: '',
  },
  additionalNotes: '',
  currencyFormat: {
    currency: 'SEK',
    name: 'SEK',
    prefix: '',
    suffix: ' SEK',
    decimalPoint: '.',
    decimalDigits: '2',
    thousandsSeparator: ' ',
    denominator: 100,
    uri: 'sek',
  },
}
