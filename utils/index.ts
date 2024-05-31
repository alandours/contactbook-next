export const isArrayNotEmpty = (arr: Array<unknown>) =>
  !!(arr instanceof Array && arr.length)

export const isObjectNotEmpty = (obj: Record<any, unknown>) =>
  !obj || !!(obj.constructor === Object && Object.keys(obj).length)

export const sanitizeString = (str: string, wsReplace = "-") => {
  let string = str.toLowerCase()

  string = string.replace(/[\[\]\(\)\-\{\}\^\,]/g, "")
  string = string.replace(/[àáâãäåª]/g, "a")
  string = string.replace(/[éèëê]/g, "e")
  string = string.replace(/[íìïî]/g, "i")
  string = string.replace(/[óòöô]/g, "o")
  string = string.replace(/[úùüû]/g, "u")
  string = string.replace(/[ñ]/g, "n")
  string = string.replace(/[ç]/g, "c")
  string = string.replace(/ /g, wsReplace)

  return string
}

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)

const devices = {
  mobileXs: () => "320",
  mobile: () => "360",
  tablet: () => "768",
  laptop: () => "1024",
  desktop: () => "1270",
  custom: (custom?: string) => custom,
}

export const isMedia = (media: keyof typeof devices, custom?: string) => {
  return window.matchMedia(`(min-width: ${Number(devices[media](custom))}px)`)
    .matches
}