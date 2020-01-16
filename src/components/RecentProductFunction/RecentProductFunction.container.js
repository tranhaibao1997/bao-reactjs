import { connect } from 'react-redux'
import RecentProductFunction from './RecentProductFunction'
import { getProductListBySort, getProductList, } from '../ProductList/ProductList.action'

const mapStateToProps = (store) => ({



    metadata: store.ProductListReducer.metadata,

})

const mapDispatchToProps = {
    getProductListBySort,
    getProductList

}


export default connect(mapStateToProps, mapDispatchToProps)(RecentProductFunction);