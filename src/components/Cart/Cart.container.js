import { connect } from 'react-redux'
import Cart from './Cart'
import { getCartSuccess } from './Cart.action'

const mapStateToProps = (store) => ({

    data: store.CartReducer.data,

})

const mapDispatchToProps = {
    getCartSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);