import { connect } from 'react-redux'
import Index from '@components/Index'
import { incrementCount, decrementCount } from '@actions'

const mapStateToProps = state => state.counter
const mapDispatchToProps = {
    incrementCount,
    decrementCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
