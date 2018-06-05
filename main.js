const directories = [
    'butuan',
    'cebu',
    'dagupan',
    'quezon',
    'tacloban'
]

/**
 * Pads a string with zeros on the left.
 * 
 * @param {String} str String to pad
 * @param {Number} x Number of characters expected 
 */
const zeroPad = (str, x) => {
  const remaining = x - str.length
  return `${"0".repeat(remaining)}${str}`
}

const filesInDirectories = directories.map(d => {
  let i = 1
  return Array(30).fill(1).map(() => `/data/${d}-${zeroPad(`${i++}`, 2)}.jpg`)
})

const imageFilenames = filesInDirectories.reduce((files, lst) => {
  return [...lst, ...files]
}, [])

/**
 * Gets the image from the URL and constructs an Image object.
 * 
 * @param {String} src URL of image 
 */
const getImageFromUrl = async (src) => {
  const image = new Image(1700, 2800)
  image.src = src
  image.crossOrigin = "Anonymous"
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext("2d")

  return await new Promise((resolve, reject) => {
    image.onload = () => {
      canvas.width = image.width
      canvas.height = image.height
      ctx.drawImage(image, 0, 0)
      image.src = canvas.toDataURL("image/jpeg")
      resolve(image)
    }
  })
}

const getData = async () => {
  console.log("LOL")
  const imageObjects = await Promise.all(imageFilenames.map(filename => getImageFromUrl(filename)))
  console.log(imageObjects)
}

getData()