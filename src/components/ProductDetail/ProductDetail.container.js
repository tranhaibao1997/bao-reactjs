import { connect } from 'react-redux'
import ProductDetail from './ProductDetail'
import { getProductDetailById, getProductDetailEmpty } from './ProductDetail.action'
import { getCartSuccess } from '../Cart/Cart.action'
import { getFavoriteSuccess } from '../Favorite/Favorite.action'

const mapStateToProps = (store) => ({
    load: store.ProductDetailReducer.load,
    data: store.ProductDetailReducer.data,
    error: store.ProductDetailReducer.error,
    cartdata: store.CartReducer.data,
    favoritedata: store.FavoriteReducer.data,
    related: store.ProductDetailReducer.related
})

const mapDispatchToProps = {
    getProductDetailById,
    getCartSuccess,
    getFavoriteSuccess,
    getProductDetailEmpty

}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);