import { connect } from 'react-redux'
import Favorite from './Favorite'
import { getFavoriteSuccess } from './Favorite.action'

const mapStateToProps = (store) => ({

    data: store.FavoriteReducer.data,

})

const mapDispatchToProps = {
    getFavoriteSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorite);