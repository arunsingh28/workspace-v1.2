import { connect } from 'react-redux'
import { addUser } from './Actions'
import Login from '../Partials/login'

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispatch =>({
    addUserHandler: data => dispatch(addUser(data))
})

export default connect(mapDispatchToProps,mapStateToProps)(Login)
