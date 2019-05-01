import { connect } from 'react-redux'
import Index from '@components/Index'
import { decrementCount, incrementCount } from '@actions'
import { AppState } from '@reducers'

const mapStateToProps = (state: AppState) => state.counter
const mapDispatchToProps = {
    decrementCount,
    incrementCount,
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
