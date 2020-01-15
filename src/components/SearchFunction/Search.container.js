import { connect } from 'react-redux'
import SearchFunction from './SearchFunction'
import { getProductList, getProductListBySearch } from '../ProductList/ProductList.action'
import { getSearchTextAction } from './Search.action'

const mapStateToProps = (store) => ({

})

const mapDispatchToProps = {
    getProductList,
    getProductListBySearch,
    getSearchTextAction
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchFunction)