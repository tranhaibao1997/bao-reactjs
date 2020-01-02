import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = (store) => ({
    data: store.CartReducer.data
})

const mapDispatchToProps = {

}


export default connect(mapStateToProps, mapDispatchToProps)(Header);