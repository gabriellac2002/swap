import  Link  from 'next/link'; 
import React from 'react';


//css
import style from './styles.module.css';

//image
import Image from 'next/image';
import image from '../../../public/img/imagemTeste.svg';



export default function InitialPage() {


  return (
    <>
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.logo_frase}>
                    <div className={style.logo}>
                        <Image
                            src={image}
                        />
                    </div>
                    <div className={style.frase}>Frase pra chamar atenção</div>
                </div>
                <div className={style.container_bottons}>
                    <div className={style.botton}>Logar</div>
                    <div className={style.botton}>Cadastrar</div>
                </div>
            </div>
        </div>
    </>
  )
}