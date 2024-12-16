const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send(`
    <div>
    <h1>Register</h1>
      <form method="POST">
        <input name="email" placeholder='email' />
        <input name="password" placeholder='password' />
        <input name="passwordConfirm" placeholder='confirm password' />
        <button>Register</button>
      </form>
    </div>
  `);
});

function bodyParser(req, res, next) {
  if (req.method === 'POST') {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk.toString(); // Convert Buffer to string
    });
    req.on('end', function() {
      var parsed = body.split('&');
      var formData = {};
      for (var i = 0; i < parsed.length; i++) {
        var pair = parsed[i].split('=');
        var key = pair[0];
        var value = decodeURIComponent(pair[1].replace(/\+/g, ' ')); // Decode URL-encoded characters
        formData[key] = value;
      }
      req.body = formData; // Assign parsed data to req.body
      next(); // Pass control to the next handler
    });
  } else {
    next(); // Pass control if not a POST request
  }
}

app.post('/', bodyParser, function(req, res) {
  console.log(req.body); // Access the parsed form data
  res.send('Account created');
});

app.listen(3000, function() {
  console.log('Listening on Port 3000');
});
