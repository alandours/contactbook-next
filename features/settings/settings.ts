export enum Settings {
  FILTER_FAVORITES = "filterFavorites",
  SHOW_AGE = "showAge",
  SHOW_FAVORITE_ICON = "showFavoriteIcon",
  SHOW_PHOTO = "showPhoto",
  SORT_BY_LAST_NAME = "sortByLastName",
}

export const getLocalSettings = () => ({
  [Settings.FILTER_FAVORITES]: !!localStorage?.getItem(
    Settings.FILTER_FAVORITES
  ),
  [Settings.SHOW_AGE]: !!localStorage?.getItem(Settings.SHOW_AGE),
  [Settings.SHOW_FAVORITE_ICON]: !!localStorage?.getItem(
    Settings.SHOW_FAVORITE_ICON
  ),
  [Settings.SHOW_PHOTO]: !!localStorage?.getItem(Settings.SHOW_PHOTO),
  [Settings.SORT_BY_LAST_NAME]: !!localStorage?.getItem(
    Settings.SORT_BY_LAST_NAME
  ),
})
