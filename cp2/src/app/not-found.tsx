import Cabecalho from '@/components/Cabecalho/Cabecalho';
import { FC } from 'react';
 
const NotFound: FC = () => {
  return (
<div style={{ textAlign: 'center', marginTop: '50px' }}>
<h1>404 - Página não encontrada!</h1>
<p>Oops! A página que você está olhando não existe.</p>
<Cabecalho/>
</div>
  );
};
 
export default NotFound;