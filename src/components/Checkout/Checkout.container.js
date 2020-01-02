import { connect } from 'react-redux'
import Checkout from './Checkout'
import { getCartSuccess } from '../Cart/Cart.action'

const mapStateToProps = (store) => ({

    data: store.CartReducer.data,

})

const mapDispatchToProps = {
    getCartSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout);