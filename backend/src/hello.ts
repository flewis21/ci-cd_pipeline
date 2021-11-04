import ejs from 'ejs';

const html = ejs.render('<p> hello <%= name %> </p>', {name: 'ejs'});

console.log(html); // <p> hello ejs </p>
