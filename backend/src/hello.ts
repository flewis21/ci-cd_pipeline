import ejs from 'ejs';

let html = ejs.render('<p> hello <%= name %> </p>', {name: 'ejs'});

console.log(html); // <p> hello ejs </p>
