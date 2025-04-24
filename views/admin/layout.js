module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="styles.css">
      </head>
      <body>
        ${content}
      </body>
    </html>  
  `
}