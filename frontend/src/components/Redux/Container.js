import { connect } from 'react-redux'
import { addUser } from '../Redux/Actions'
import Login from '../Partials/login'

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    addUserHandler: data => dispatch(addUser(data))
})

export default connect(mapDispatchToProps,mapStateToProps)(Login)
