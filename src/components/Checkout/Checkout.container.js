import { connect } from 'react-redux'
import Checkout from './Checkout'
import { getCartSuccess, getCartAfterCouponSuccess, getCartTotalSuccess } from '../Cart/Cart.action'

const mapStateToProps = (store) => ({

    data: store.CartReducer.data,
    coupon: store.CartReducer.coupon,
    total: store.CartReducer.total

})

const mapDispatchToProps = {
    getCartSuccess,
    getCartAfterCouponSuccess,
    getCartTotalSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);