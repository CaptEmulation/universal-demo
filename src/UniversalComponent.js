import React from 'react'
import PropTypes from 'prop-types'
import universal from 'react-universal-component'
import Loading from './components/Loading'
import NotFound from './components/NotFound'

const determineHowToLoad = props =>
  typeof props.page !== 'string'
    ? () => props.page()
    : import(`./${props.page}`)

/**
 *
 * @type {universal.UniversalComponent<any>}
 * @param props - the props from the JSX component, these will be passed into the component as well
 * props on the JSX component can include any of the universal components props as well, like onLoad, onError, error, timeout...
 */
const UniversalComponent = universal(determineHowToLoad, {
  onError: error => {
    throw error
  },
  minDelay: 1200,
  loading: Loading,
  error: NotFound
})

UniversalComponent.propTypes = {
  loading: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.bool
  ]),
  error: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.bool
  ]),
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  timeout: PropTypes.number,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  minDelay: PropTypes.number,
  alwaysDelay: PropTypes.bool,
  loadingTransition: PropTypes.bool
}

const loadComponent = file => universal(determineHowToLoad({ component: file }))
export default UniversalComponent
export { loadComponent, universal }
