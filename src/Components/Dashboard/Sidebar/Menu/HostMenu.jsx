
import {MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from './MenuItem'
const HostMenu = () => {
  return (
    <>
      <MenuItem
        icon={MdOutlineManageHistory}
        label='My Assigned Tours'
        address='manage-bookings'
      />
    </>
  )
}

export default HostMenu
