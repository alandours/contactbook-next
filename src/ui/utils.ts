import ColorThief from 'colorthief'

const colorThief = new ColorThief()

export const getPalette = (
  img: HTMLImageElement,
  colorAmount: number,
  quality = 10
) => {
  try {
    const palette = colorThief.getPalette(img, colorAmount, quality)

    return palette?.map((color) => {
      const [red, green, blue] = color
      return `rgb(${red}, ${green}, ${blue})`
    })
  } catch {
    return
  }
}
export const getDominantColor = (img: HTMLImageElement, quality = 10) => {
  const color = colorThief.getColor(img, quality)
  const [red, green, blue] = color || []
  return `rgb(${red}, ${green}, ${blue})`
}
