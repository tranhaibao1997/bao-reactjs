import { connect } from 'react-redux'
import ProductItem from './ProductItem';
import { getCartSuccess } from '../Cart/Cart.action'

const mapStateToProps = (store) => ({
    data: store.CartReducer.data
})

const mapDispatchToProps = {
    getCartSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);