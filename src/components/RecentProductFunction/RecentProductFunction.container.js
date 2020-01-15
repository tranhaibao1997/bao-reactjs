import { connect } from 'react-redux'
import RecentProductFunction from './RecentProductFunction'
import { getProductListBySort, getProductList, } from '../ProductList/ProductList.action'

const mapStateToProps = (store) => ({


    data: store.ProductListReducer.data,

})

const mapDispatchToProps = {
    getProductListBySort,
    getProductList

}


export default connect(mapStateToProps, mapDispatchToProps)(RecentProductFunction);