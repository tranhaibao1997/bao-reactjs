import { connect } from 'react-redux'
import Checkout2 from './Checkout-step2'
import { getCartSuccess } from '../Cart/Cart.action'

const mapStateToProps = (store) => ({

    data: store.CartReducer.data,

})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout2);