import Cabecalho from '@/components/Cabecalho/Cabecalho';
import { FC } from 'react';
import Image from 'next/image'
 
const NotFound: FC = () => {
  return (
<div className='flex flex-col justify-center items-center h-full w-full'>
<Image src="/images/404.png"
      alt="Erro 404"
        width={400}
        height={200}
        />
<h1>404 - Página não encontrada!</h1>
<p>Oops! A página que você está olhando não existe.</p>
<Cabecalho/>
</div>
  );
};
 
export default NotFound;