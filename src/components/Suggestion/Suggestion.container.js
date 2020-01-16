import { connect } from 'react-redux'
import SuggestionFunction from './Suggestion'
import { getProductListBySearch } from '../ProductList/ProductList.action'
import { getSearchTextAction } from '../SearchFunction/Search.action'

const mapStateToProps = (store) => ({

})

const mapDispatchToProps = {
    getProductListBySearch,
    getSearchTextAction
}


export default connect(mapStateToProps, mapDispatchToProps)(SuggestionFunction)