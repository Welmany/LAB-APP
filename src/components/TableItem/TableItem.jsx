import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const TableItem = ({ itemId, designacao, func, naoFunc, numeroTotal, onDataChange }) => {
    const [funcionais, setFuncionais] = useState(func);
    const [naoFuncionais, setNaoFuncionais] = useState(naoFunc);

    const handleFuncChange = (event) => {
        const regex = /^[0-9]+$/;
        const newFunc = event.target.value;
        setFuncionais(newFunc);
    
        if (funcionais >= 1 && regex.test(newFunc)) {
            return;
         } else {
            toast.error('Digite número inteiro positivo', {
              position: 'bottom-right',
            });
        }
    };

    const handleNaoFuncChange = (e) => {
        const regex = /^[0-9]+$/;
        const newNaoFunc = e.target.value;
        setNaoFuncionais(newNaoFunc);

        if (naoFuncionais >= 1 && regex.test(newNaoFunc)) {
            return;
         } else {
            toast.error('Digite número inteiro positivo', {
              position: 'bottom-right',
            });
        }
    };

    useEffect(() => {
        onDataChange(itemId, funcionais, naoFuncionais);
    }, [funcionais, naoFuncionais, onDataChange, itemId]);
    
    return (
        <tr key={itemId}>
            <th className={itemId !== 18 ? "home__table-item" : "home__table-item none"}>{designacao}</th>
            <td className={itemId !== 18 ? "home__table-item" : "home__table-item none"}>
                <input className="input" type="number" min='1' name='funcionais' value={funcionais} onChange={handleFuncChange}/>
            </td>
            <td className={itemId !== 18 ? "home__table-item" : "home__table-item none"}>
                <input className="input" type="number" min='1' name='naoFuncionais' value={naoFuncionais} onChange={handleNaoFuncChange}/>
            </td>
            <td className={itemId !== 18 ? "home__table-item" : "home__table-item none"}>
                <input className="input" type="number" min='1' value={numeroTotal} disabled/>
            </td>
        </tr>
    )
}

export default TableItem;