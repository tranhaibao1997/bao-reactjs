import { connect } from 'react-redux'
import ProductList from './ProductList'
import { getProductList } from './ProductList.action'

const mapStateToProps = (store) => ({
    load: store.ProductListReducer.load,
    data: store.ProductListReducer.data,
    error: store.ProductListReducer.error
})

const mapDispatchToProps = {
    getProductList
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);