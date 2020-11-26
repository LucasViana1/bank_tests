import React from 'react'
import { render } from '@testing-library/react';
import Transacoes from './Transacoes';


describe('Componente de listagem de transações', ()=>{
  it('O snapshot do componente deve permanecer sempre o mesmo', ()=>{
    const transacoesProps = {
      transacoes:[
        {
          id: 1,
          tipo: 'deposito',
          valor: '1000.00',
          data: '01/11/2020',
        },
        {
          id:2,
          tipo: 'saque',
          valor: '200.00',
          data: '03/11/2020',
        },
      ]
    }

    const { container } = render(
      <Transacoes {...transacoesProps} />
    )

    expect(container.firstChild).toMatchSnapshot();
  })
})
