// Replaced react-icons with @react-icons/all-files to decrease RAM usage and bundle size
// https://github.com/react-icons/react-icons/issues/786
// https://github.com/react-icons/react-icons/issues/544

import { BiLoaderAlt } from '@react-icons/all-files/bi/BiLoaderAlt'
import { FaBirthdayCake } from '@react-icons/all-files/fa/FaBirthdayCake'
import { FaCalendarCheck } from '@react-icons/all-files/fa/FaCalendarCheck'
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown'
import { FaHeart } from '@react-icons/all-files/fa/FaHeart'
import { FaHeartBroken } from '@react-icons/all-files/fa/FaHeartBroken'
import { FaIdCard } from '@react-icons/all-files/fa/FaIdCard'
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt'
import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart'
import { FaRegStickyNote } from '@react-icons/all-files/fa/FaRegStickyNote'
import { FaSearch } from '@react-icons/all-files/fa/FaSearch'
import { FaShareAlt } from '@react-icons/all-files/fa/FaShareAlt'
import { FaTag } from '@react-icons/all-files/fa/FaTag'
import { FaTimes } from '@react-icons/all-files/fa/FaTimes'
import { FaTrashAlt } from '@react-icons/all-files/fa/FaTrashAlt'
import { FaUserFriends } from '@react-icons/all-files/fa/FaUserFriends'
import { GoPlus } from '@react-icons/all-files/go/GoPlus'
import { ImCog } from '@react-icons/all-files/im/ImCog'
import { IoHomeSharp } from '@react-icons/all-files/io5/IoHomeSharp'
import { IoMdMenu } from '@react-icons/all-files/io/IoMdMenu'
import { MdCheckBox } from '@react-icons/all-files/md/MdCheckBox'
import { MdCheckBoxOutlineBlank } from '@react-icons/all-files/md/MdCheckBoxOutlineBlank'
import { MdEmail } from '@react-icons/all-files/md/MdEmail'
import { MdModeEdit } from '@react-icons/all-files/md/MdModeEdit'

export enum Icons {
  alias = 1,
  cake,
  calendar,
  checkbox,
  checkboxActive,
  chevronDown,
  cog,
  contacts,
  delete,
  email,
  heart,
  heartBroken,
  heartFull,
  home,
  menu,
  notes,
  pen,
  phone,
  plus,
  search,
  social,
  spinner,
  tag,
  times,
}

export const icons = {
  [Icons.alias]: FaIdCard,
  [Icons.cake]: FaBirthdayCake,
  [Icons.calendar]: FaCalendarCheck,
  [Icons.checkbox]: MdCheckBoxOutlineBlank,
  [Icons.checkboxActive]: MdCheckBox,
  [Icons.chevronDown]: FaChevronDown,
  [Icons.cog]: ImCog,
  [Icons.contacts]: FaUserFriends,
  [Icons.delete]: FaTrashAlt,
  [Icons.email]: MdEmail,
  [Icons.heart]: FaRegHeart,
  [Icons.heartBroken]: FaHeartBroken,
  [Icons.heartFull]: FaHeart,
  [Icons.home]: IoHomeSharp,
  [Icons.menu]: IoMdMenu,
  [Icons.notes]: FaRegStickyNote,
  [Icons.pen]: MdModeEdit,
  [Icons.phone]: FaPhoneAlt,
  [Icons.plus]: GoPlus,
  [Icons.search]: FaSearch,
  [Icons.social]: FaShareAlt,
  [Icons.spinner]: BiLoaderAlt,
  [Icons.tag]: FaTag,
  [Icons.times]: FaTimes,
}
