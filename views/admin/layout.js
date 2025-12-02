module.exports = ({ content }) => {
  return `
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css' integrity='sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==' crossorigin='anonymous' referrerpolicy='no-referrer' />
        <link rel='stylesheet' href='/css/main.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'></link>  
        <title>Ceapstow</title>
      </head>
      <body class='admin'>
        <header>
          <nav class='navbar navbar-bottom'>
            <div class='container navbar-container'>
              <div>
                <a href='/admin'>
                <h3 class='logo'>Ceapstow</h3>
                </a>
              </div>
              <div class='navbar-item'>
                <div class='navbar-buttons'>
                  <div class='navbar-item'>
                    <a
                      class='main-btn'
                      href='/admin'>
                      Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div class='container'>
          ${content}       
        </div>
      </body>
    </html>
  `
}