import { connect } from 'react-redux'
import SortFunction from './SortFunction'
import { getProductListBySort, getProductList } from '../ProductList/ProductList.action'


const mapStateToProps = (store) => ({
    data: store.ProductListReducer.data,
    metadata: store.ProductListReducer.metadata,
})

const mapDispatchToProps = {
    getProductListBySort,
    getProductList
}


export default connect(mapStateToProps, mapDispatchToProps)(SortFunction)