import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = (store) => ({
    cartdata: store.CartReducer.data,
    favoritedata: store.FavoriteReducer.data
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Header);