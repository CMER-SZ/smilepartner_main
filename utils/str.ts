// capitalize each word in a string
export function capitalize(str: string): string {
  return str.replace(/\w\S*/g, (txt) => {
    // console.log('text', txt)

    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
