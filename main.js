const directories = [
    'butuan',
    'cebu',
    'dagupan',
    'quezon',
    'tacloban'
]

const filesInDirectories = directories.map(d => {
  let i = 1
  return Array(30).fill(1).map(() => `${d}-${zeroPad(`${i++}`, 2)}.jpg`)
})

const imageFiles = filesInDirectories.reduce((files, lst) => {
  return [...lst, ...files]
}, [])

console.log(imageFiles)

/**
 * Pad string with zeros on the left.
 * 
 * @param {String} str String to pad
 * @param {Number} x Number of characters expected 
 */
function zeroPad(str, x) {
  const remaining = x - str.length
  return `${"0".repeat(remaining)}${str}`
}