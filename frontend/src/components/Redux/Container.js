import { connect } from 'react-redux'
import { addUser } from '../Redux/Actions'
import Login from '../Partials/login'

const mapStateToProps = state =>({

})

const mapDispatchToProps = dispath =>({
    addUserHandler: data => dispath(addUser(data))
})

export default connect(mapDispatchToProps,mapStateToProps)(Login)
