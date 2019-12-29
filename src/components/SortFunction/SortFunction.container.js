import { connect } from 'react-redux'
import SortFunction from './SortFunction'
import { getProductListBySort } from '../ProductList/ProductList.action'


const mapStateToProps = (store) => ({
    data: store.ProductListReducer.data,
})

const mapDispatchToProps = {
    getProductListBySort
}


export default connect(mapStateToProps, mapDispatchToProps)(SortFunction)