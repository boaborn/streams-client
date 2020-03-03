import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions/index'
import StreamFrom from './StreamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }
  onSubmit = formValues => {
    console.log(formValues)
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    console.log('this.props >', this.props)
    if (!this.props.stream) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>Edit a stream</h3>
        <StreamFrom
          initialValues={ _.pick(this.props.stream, 'title', 'description') }
          onSubmit={ this.onSubmit }/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit)
