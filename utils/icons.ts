// Replaced react-icons with @react-icons/all-files to decrease RAM usage and bundle size
// https://github.com/react-icons/react-icons/issues/786
// https://github.com/react-icons/react-icons/issues/544

import { MdModeEdit } from "@react-icons/all-files/md/MdModeEdit"
import { MdCake } from "@react-icons/all-files/md/MdCake"
import { IoHomeSharp } from "@react-icons/all-files/io5/IoHomeSharp"
import { GoPlus } from "@react-icons/all-files/go/GoPlus"
import { FaCalendarAlt } from "@react-icons/all-files/fa/FaCalendarAlt"
import { ImCog } from "@react-icons/all-files/im/ImCog"
import { MdSmartphone } from "@react-icons/all-files/md/MdSmartphone"
import { MdEmail } from "@react-icons/all-files/md/MdEmail"
import { FaShareAlt } from "@react-icons/all-files/fa/FaShareAlt"
import { FaRegStickyNote } from "@react-icons/all-files/fa/FaRegStickyNote"
import { FaRegAddressCard } from "@react-icons/all-files/fa/FaRegAddressCard"
import { FaTrashAlt } from "@react-icons/all-files/fa/FaTrashAlt"
import { FaHeart } from "@react-icons/all-files/fa/FaHeart"
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart"
import { FaUserFriends } from "@react-icons/all-files/fa/FaUserFriends"
import { FaHeartBroken } from "@react-icons/all-files/fa/FaHeartBroken"
import { FaSearch } from "@react-icons/all-files/fa/FaSearch"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"
import { FaSpinner } from "@react-icons/all-files/fa/FaSpinner"
import { IoMdMenu } from "@react-icons/all-files/io/IoMdMenu"
import { MdCheckBox } from "@react-icons/all-files/md/MdCheckBox"
import { MdCheckBoxOutlineBlank } from "@react-icons/all-files/md/MdCheckBoxOutlineBlank"
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown"

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
  times,
}

export const icons = {
  [Icons.alias]: FaRegAddressCard,
  [Icons.cake]: MdCake,
  [Icons.calendar]: FaCalendarAlt,
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
  [Icons.phone]: MdSmartphone,
  [Icons.plus]: GoPlus,
  [Icons.search]: FaSearch,
  [Icons.social]: FaShareAlt,
  [Icons.spinner]: FaSpinner,
  [Icons.times]: FaTimes,
}
