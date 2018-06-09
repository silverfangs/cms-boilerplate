import React from 'react'
import PropTypes from 'prop-types'
import { SupportPage } from '../../templates/support-page'

const SupportPagePreview = ({ entry, widgetFor }) => (
  <SupportPage
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SupportPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SupportPagePreview
