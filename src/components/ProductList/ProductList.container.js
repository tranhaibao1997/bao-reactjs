import { connect } from 'react-redux'
import ProductList from './ProductList'
import { getProductList, getProductListBySearch } from './ProductList.action'

const mapStateToProps = (store) => ({
    load: store.ProductListReducer.load,
    metadata: store.ProductListReducer.metadata,
    data: store.ProductListReducer.data,
    error: store.ProductListReducer.error
})

const mapDispatchToProps = {
    getProductList,

}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);