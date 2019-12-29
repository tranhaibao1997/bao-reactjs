import { connect } from 'react-redux'
import SearchFunction from './SearchFunction'
import { getProductListBySearch } from '../ProductList/ProductList.action'

const mapStateToProps = (store) => ({

})

const mapDispatchToProps = {
    getProductListBySearch
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchFunction)