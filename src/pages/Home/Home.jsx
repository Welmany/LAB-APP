import React, { useEffect, useState } from "react";
import LeftSide from '../../components/LeftSide/LeftSide'
import Button from '../../components/Button/Button';
import axios from 'axios'
import './home.css';
import { toast } from "react-toastify";
import TableItem from "../../components/TableItem/TableItem";

function Home() {
  const [salaTeorica, setSalaTeorica] = useState(1);
  const [designacao, setDesignacao] = useState('');
  const [id, setId] = useState(0);
  const [data, setData] = useState([])
  const [allowUpdates, setAllowUpdates] = useState(false);
  const [aux, setAux] = useState(1)
  const [teoricafunc, setTeoricaFun] = useState(0)
  const [teoricaNaofunc, setTeoricaNaoFun] = useState(0)

  useEffect(() => {
    axios.get('http://localhost:8081/getalldata')
    .then(res => {console.log(res.data); 
      setSalaTeorica(res.data[0].numero_total);
      setDesignacao(res.data[0].designacao);
      setId(res.data[0].id);
      setTeoricaFun(res.data[0].funcionais);
      setTeoricaNaoFun(res.data[0].nao_funcionais);
      setData(res.data);
    })
    .catch(err => {console.log(err)})
  }, [])


  const handleChange = (event) => {
    const value = event.target.value;
    const regex = /^[0-9]+$/;
    setSalaTeorica(value)
    
    if(value >= 1 && regex.test(value)) {
      setAux(value);
    } else {
      toast.error('Digite número inteiro positivo', {
        position: 'bottom-right',
      });
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.put('http://localhost:8081/salateorica', { aux, id })
    .then(res => {
      console.log(res)
      toast.success('Dados actualizados', {
        position: 'bottom-right',
      });
      setAllowUpdates(true);
    })
    .catch(err => {
      console.log(err)
      toast.error('Dados não actualizados', {
        position: 'bottom-right',
      });
      setAllowUpdates(true);
    });
    
  }

  const handleDataChange = (itemId, func, naoFunc) => {
    console.log(`Updated data for item ${itemId}:`, { func, naoFunc });

    if (allowUpdates) {
      axios.put('http://localhost:8081/updateitem', {func, naoFunc, itemId})
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }else {
      console.log('Updates are not allowed');
      return;
    }
  }

  return(
    <div className="home__division">
      <div className="home__leftSide">
        <LeftSide />
      </div>

      <div className="home__rightSide">
        <div className="rightSide__content">
          <h1>Editar [Designação da Escola]</h1>

          <form className="home__container" onSubmit={handleSubmit}>
            <table className="home__table">
              <tr>
                <th className="home__table-title">Designação</th>
                <th className="home__table-title">Funcionais</th>
                <th className="home__table-title">Não Funcionais</th>
                <th className="home__table-title">Número total</th>
              </tr>
              <tr>
                <th className="home__table-item">{designacao}</th>
                <td className="home__table-item"><input className="input" type="number" value={teoricafunc} disabled/></td>
                <td className="home__table-item"><input className="input" type="number"  value={teoricaNaofunc} disabled/></td>
                <td className="home__table-item"><input className="input" type="number" min='1' value={salaTeorica} onChange={handleChange}/></td>
              </tr>
              {
                data.map((item) => {
                  if (item.designacao === 'Salas de Aula Teóricas') return null
                  return(
                    <TableItem 
                      key={item.id}
                      itemId={item.id} 
                      designacao={item.designacao} 
                      func={item.funcionais} 
                      naoFunc={item.nao_funcionais}
                      numeroTotal={item.numero_total}
                      onDataChange={handleDataChange} 
                    />)
                })
              }
            </table>

            <div className="move_btn">
              <Button text='Actualizar'/>
            </div>

          </form>
        </div>
      </div>
    </div>
  ) 
}

export default Home
