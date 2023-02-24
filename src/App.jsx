import { Card } from "./components/Card";
import { produtos } from './data/Catalogo'

console.log(produtos[0])
function App() {
  return (
    <div className="wrapper">
      <h1>Produtos</h1>
      {
        produtos.map((producto, index) => (
          <Card key={index}
            imgSrc={producto.image}
            precio={producto.preco}
            title={producto.nome} />

        ))
      }
    </div>
  );
}

export default App;
