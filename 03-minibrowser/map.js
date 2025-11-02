
// TDD - Test Driven Development
var novoMapa = new Map();

// 11/11/2011 as 11 da noite
novoMapa.set('11/11/2011 - 23:30 - URL', { title: 'Titulo do Site', url: 'url sozinha'});
novoMapa.set('11/11/2011 - 23:30 - URL', {});
novoMapa.set('11/11/2011 - 23:30 - URL', {});
novoMapa.set('11/11/2011 - 23:31 - URL', {});
novoMapa.set('11/11/2011 - 23:31 - URL', {});

var resultado = novoMapa;
console.log(resultado)