import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import TipoAtivo from './components/TipoAtivo';
import Footer from './components/Footer'

function App() {

  const tiposAtivo = [
    {
      nome: 'Ações',
      corPrimaria: '#C7F9CC',
      corSecundaria: ''
    },
    {
      nome: 'Fundos Imobiliários',
      corPrimaria: '#80ED99',
      corSecundaria: ''
    },
    {
      nome: 'Criptomoedas',
      corPrimaria: '#57CC99',
      corSecundaria: ''
    },
    {
      nome: 'Renda Fixa',
      corPrimaria: '#38A3A5',
      corSecundaria: '#22577A'
    },
    {
      nome: 'Tesouro Direto',
      corPrimaria: '#90BAAD',
      corSecundaria: ''
    },
    {
      nome: 'Ativos Internacionais',
      corPrimaria: '#8AA2A9',
      corSecundaria: ''
    },
    {
      nome: 'BDRs',
      corPrimaria: '#717C89',
      corSecundaria: ''
    }
  ]

  const [dados, setDados] = useState([])

  const dadoAdicionado = (dado) => {
    //debugger
    setDados([...dados, dado])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario ativos={tiposAtivo.map(tipoAtivo => tipoAtivo.nome)} dadosCadastro={dado => dadoAdicionado(dado)}/>
      
      {tiposAtivo.map( tipoAtivo => <TipoAtivo 
      key={tipoAtivo.nome} 
      nome={tipoAtivo.nome} 
      corPrimaria={tipoAtivo.corPrimaria} 
      corSecundaria={tipoAtivo.corSecundaria}
      dados={dados.filter(dado => dado.tipoAtivo === tipoAtivo.nome)}
      />)}

      <Footer></Footer>
    </div>
  );
}

export default App;
