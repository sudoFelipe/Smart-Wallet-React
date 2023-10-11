import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import TipoAtivo from './components/TipoAtivo';
import Footer from './components/Footer'

function App() {

  const tiposAtivo = [
    {
      nome: 'Ações',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Fundos Imobiliários',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Criptomoedas',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Renda Fixa',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Tesouro Direto',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Ativos Internacionais',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'BDRs',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
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
