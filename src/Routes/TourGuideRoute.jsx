import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import LoadingSpinner from '../Components/Shared/LoadingSpinner'
import useRole from '../Hook/useRole'
const TourGuideRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <LoadingSpinner />
  if (role.role === 'tour_guide') return children
  return <Navigate to='/dashboard' />
}

export default TourGuideRoute

TourGuideRoute.propTypes = {
  children: PropTypes.element,
}
