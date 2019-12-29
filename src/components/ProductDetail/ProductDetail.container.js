import { connect } from 'react-redux'
import ProductDetail from './ProductDetail'
import { getProductDetailById } from './ProductDetail.action'

const mapStateToProps = (store) => ({
    load: store.ProductDetailReducer.load,
    data: store.ProductDetailReducer.data,
    error: store.ProductDetailReducer.error
})

const mapDispatchToProps = {
    getProductDetailById
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);