var listaFilmes = ['https://br.web.img3.acsta.net/pictures/22/09/20/15/51/1507365.jpg','https://m.media-amazon.com/images/I/91uTpZC8wKL.jpg','https://img.elo7.com.br/product/original/2679A20/big-poster-filme-matrix-lo03-tamanho-90x60-cm-geek.jpg','https://seuladogeek.com.br/wp-content/uploads/2022/02/Arremessando-alto-Filme.jpg','https://upload.wikimedia.org/wikipedia/pt/b/b3/Five_Feet_Apart_%282019%29_Film_Poster.png','https://br.web.img2.acsta.net/pictures/22/10/27/23/27/5626842.jpg', 'https://upload.wikimedia.org/wikipedia/pt/c/ca/17_Again_P%C3%B4ster.jpg','https://br.web.img3.acsta.net/pictures/15/08/28/11/39/069493.jpg'];

var titulos = ['Sorria','O Telefone Preto','Matrix','Arremessando Alto','A 5 Passos de Você','Depois do Universo','17 Outra Vez', 'A Garota Dinamarquesa'];

//Forma alternativa de listar os filmes

// listaFilmes[0] = 'https://m.media-amazon.com/images/I/91uTpZC8wKL.jpg';
// listaFilmes[1] = 'https://br.web.img2.acsta.net/pictures/22/10/27/23/27/5626842.jpg';
// listaFilmes[2] = 'https://upload.wikimedia.org/wikipedia/pt/c/ca/17_Again_P%C3%B4ster.jpg';

document.write('<div class="container_TodosFilmes">');

for(var i=0; i<listaFilmes.length; i++){
  document.write('<div class="container_Filmes">');
  document.write("<img src=" + listaFilmes[i] + ">");
  document.write('<p class="titulos">' + titulos[i] + "</p>");
  document.write("</div>");
}