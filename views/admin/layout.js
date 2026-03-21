// ADMIN LAYOUT
module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' />
        <link rel='stylesheet' href='/css/main.css' />
        <title>Ceapstow</title>
      </head>

      <body class="admin-body">

        <header class="admin-header">
          <nav class="admin-nav">
            <div class="nav-inner">
              <a href="/" class="nav-logo">
                <h3 class="logo">Ceapstow</h3>
              </a>

              <div class="nav-links">
                <a href="/" class="nav-link">Products</a>
              </div>
            </div>
          </nav>
        </header>

        <main class="admin-main">
          ${content}
        </main>

      </body>
    </html>
  `
}
