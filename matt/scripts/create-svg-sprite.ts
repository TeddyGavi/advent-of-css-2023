const fs = require('fs')
const path = require('path')
const readline = require('readline')
/**
 * takes in a folder and creates a svg spite filestructure
 * structure of sprite file is:
 *
 *
<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
  WHERE THE FOLLOWING IS THE ACTUALLY SVG
    <symbol id="calendar" viewBox="0 0 24 24">
      <title>calendar</title>
      <path d="M16.9933 2.88338C16.9355 2.38604 16.5128 2 16 2C15.4477 2 15 2.44772 15 3V4H9V3L8.99327 2.88338C8.93551 2.38604 8.51284 2 8 2C7.44772 2 7 2.44772 7 3V4H6C4.34315 4 3 5.34315 3 7V11V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V11V7C21 5.34315 19.6569 4 18 4H17V3L16.9933 2.88338ZM19 10V7C19 6.44772 18.5523 6 18 6H17V7C17 7.55228 16.5523 8 16 8C15.4872 8 15.0645 7.61396 15.0067 7.11662L15 7V6H9V7C9 7.55228 8.55228 8 8 8C7.48716 8 7.06449 7.61396 7.00673 7.11662L7 7V6H6C5.44772 6 5 6.44772 5 7V10H19ZM5 12H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V12ZM12.9933 14.8834C12.9977 14.9216 13 14.9606 13 15V18C13 18.5523 12.5523 19 12 19C11.4872 19 11.0645 18.614 11.0067 18.1166L11 18V16C10.4477 16 10 15.5523 10 15C10 14.4872 10.386 14.0645 10.8834 14.0067L11 14H12C12.5128 14 12.9355 14.386 12.9933 14.8834C12.9933 14.8834 12.9933 14.8834 12.9933 14.8834Z" />
    </symbol>
  </def>
</svg>

 */

const importSvgPath = path.resolve(__dirname, 'svg-icons')
const outputSvgPath = path.resolve(
  process.cwd(),
  'web',
  'public',
  'sprite-icon',
  'sprite.svg'
)

const svgFiles = fs.readdirSync(importSvgPath, (err, files) => {
  if (err) {
    console.error('Error reading directory', err)
    return
  }
  return files
})

const spriteContent = svgFiles
  .filter((file) => path.extname(file).toLowerCase() === '.svg')
  .map((file) => {
    const svgId = path.basename(file, '.svg')
    const svgContent = fs.readFileSync(path.join(importSvgPath, file), 'utf-8')
    const cleanedSvgContent = svgContent
      .replace(/<svg[^>]*>/, '')
      .replace(/<\/svg>/, '')
      .replace(/xmlns=".*?"/g, '')
      .replace(/fill-rule=".*?"/g, '')
      .replace(/clip-rule=".*?"/g, '')
      .replace(/fill=".*?"/g, '')

    return `<symbol id="${svgId}" viewBox="0 0 24 24"><title>${svgId}</title>${cleanedSvgContent}</symbol>`
  })
  .join('\n')

const svgSpriteContent = `<svg xmlns="http://www.w3.org/2000/svg"><defs>${spriteContent}</defs></svg>`

if (fs.existsSync(outputSvgPath)) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question(
    `File "${outputSvgPath}" already exists. Do you want to overwrite it? (y/n): `,
    (answer) => {
      if (answer.toLowerCase() === 'y') {
        fs.writeFileSync(outputSvgPath, svgSpriteContent, 'utf-8')
        console.log('SVG sprite file overwritten successfully:', outputSvgPath)
      } else {
        console.log('Operation aborted.')
      }

      rl.close()
    }
  )
} else {
  // File does not exist, create it
  fs.writeFileSync(outputSvgPath, svgSpriteContent, 'utf-8')
  console.log('SVG sprite file created successfully:', outputSvgPath)
}
