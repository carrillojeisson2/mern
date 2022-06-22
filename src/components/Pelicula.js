const Pelicula = (props) => {
  
  const {  pelicula, marcarFavorita, indice } = props;
  
    const marcar = () => {
      marcarFavorita(pelicula, indice)
    }
  return (
    <article className="article-item" id="article-template">
      <div className="image-wrap">
        <img src={pelicula.image} alt={pelicula.titulo} />|
      </div>

      <h2>{pelicula.titulo}</h2>
      <span className="date">hace 5 minutos</span>
      <a href="#/">Leer mas</a>

      <button onClick={marcar}>
        Marcar como favorita
      </button>

      <div className="clearfix"></div>
    </article>
  );
};

export default Pelicula;
