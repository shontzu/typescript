// PSEUDOCODE:
// loop through array of colors
// get the indexOf each color by comparing with ColorArr
// concat the two indexOf.toString()
// parseInt and return

export function decodedValue([col1, col2]: any): number {
  const ColorArr: string[] = [
    `black`,
    `brown`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `blue`,
    `violet`,
    `grey`,
    `white`,
  ]

  return parseInt(ColorArr.indexOf(col1).toString() + ColorArr.indexOf(col2).toString())
}
