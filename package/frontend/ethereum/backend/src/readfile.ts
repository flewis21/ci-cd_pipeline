import ejs from 'ejs';

// the renderFile method in action.
ejs.renderFile(
  // first I give it a path to an *.ejs file.
  '../frontend/views/pages/first.ejs',

  // Some data to use when rendering.
  {
    layout: '../frontend/views/pages/_base-layout.ejs',
    title: 'reading a file from ejs!',
    numbers: [7, 8, 9],
  },

  // Callback with html, or an error.
  function (err, html) {
    if (err != null) {
      // reject if an error happens.
      console.log(err);
    }

    // Resolve with  the  html.
    console.log(html);
  }
);
