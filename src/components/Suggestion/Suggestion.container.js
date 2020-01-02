import { connect } from 'react-redux'
import SuggestionFunction from './Suggestion'
import { getProductListBySearch } from '../ProductList/ProductList.action'

const mapStateToProps = (store) => ({

})

const mapDispatchToProps = {
    getProductListBySearch
}


export default connect(mapStateToProps, mapDispatchToProps)(SuggestionFunction)