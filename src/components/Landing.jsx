import React from 'react'
import '../components/Landing.css'
// import Header from './Header'
import LogoS2 from '../assets/img/logo layout 2.png'
import Arrow from '../assets/img/arrow.svg'
import Insight from '../assets/img/insight-sonda.png'
import Alison from '../assets/img/alison-foto.jpeg'
import Alvaro from '../assets/img/alvaro-foto.jpeg'
import Jessica from '../assets/img/jessica-foto.jpeg'
import Vanessa from '../assets/img/vanessa-foto.jpeg'
import Thierry from '../assets/img/thierry-foto.jpeg'


export default function Landing() {
    return(
        <div className='landing-page'>
            {/* <Header /> */}
            <div id='home' 
                className='div-landing home'>
                    <img
                        className='logo' 
                        src={LogoS2} 
                        alt="Logo do Space to Space"/>
                
                    <button className='btn-div-home'>DOWLOAD APP</button>
                    <button className='btn-div-home'>LOGIN</button>
                    <a href="#s2s">
                        <img src={Arrow} 
                            className='down-arrow'
                            alt="Seta Desce landing Page"/>
                    </a>
            </div>
            
            <div id='s2s'
                className='div-landing projeto'>

                <h3 className='s2s-h3'>Às vezes, o efeito colateral é uma boa ideia</h3>
                <ul className='lista-bons-efeitos'>
                    <li className='item-lista-efeitos'>
                        <h4>ACESSO</h4>
                        <p className='p-item-lista-be'>Ser meio para prover acesso a toda a sociedade, independentemente de onde esteja ou de infraestrutura.</p>
                    </li>
                    <li className='item-lista-efeitos'>
                        <h4>PESQUISA</h4>
                        <p className='p-item-lista-be'>Fonte primária de informaçãopara centros de pesquisase universidades, com implantação a baixo custo.</p>
                    </li>
                    <li className='item-lista-efeitos'>
                        <h4>EDUCAÇÃO</h4>
                        <p className='p-item-lista-be'>Utilização no ensino de ciências, permitindo aos alunos (inclusive em vulnerabilidade social) acesso a informações de primeira linha.</p>
                    </li>
                    <li className='item-lista-efeitos'>
                        <h4>MERCADO</h4>
                        <p className='p-item-lista-be'>A NASA pode ter um retorno rentável e ser soocialmente impactante na Terra, na lua ou em Marte</p>
                    </li>
                </ul>

                <a href="#s2s-2">
                    <img src={Arrow} 
                    className='down-arrow'
                    alt="Seta Desce landing Page"/>
                </a>
            </div>
            
            <div id='s2s-2' 
                className='div-landing projeto2'>
                <ul className='fizemos'>
                    <li>
                        <h2>O QUE FIZEMOS?</h2>
                    </li>
                    <li>
                        <p>
                            Não criamos um dispositivo, mas sim um sistema que é uma forma de explorar o problema da comunicação entre a Terra e Marte.
                        </p>
                    </li>
                    <li>
                        <img className='sonda-insight' src={Insight} alt=""/>
                    </li>
                </ul>
                <a href="#about-us">
                    <img src={Arrow} 
                    className='down-arrow'
                    alt="Seta Desce landing Page"/>
                </a>
            </div>
            
            <div id='about-us' 
                className='about-us'>
                <h2 className='about-h2'>ORBICOM TEAM</h2>
                <ul className='list-about-us'>
                   <li className='about-us-item'>
                       <img  className='foto-list'src={Alison} alt=""/>
                       <h4 className='about-h4'>Alison Clayton</h4>
                       <p className='about-us-p'>Web Developer | Product Owner</p>
                   </li> 
                   <li className='about-us-item'>
                       <img className='foto-list' src={Alvaro} alt=""/>
                       <h4 className='about-h4'>Álvaro Vieira</h4>
                       <p className='about-us-p'>UX Designer</p>
                   </li> 
                   <li className='about-us-item'>
                       <img className='foto-list' src={Jessica} alt=""/>
                       <h4 className='about-h4'>Jéssica Aparecida Barbosa Lima</h4>
                       <p className='about-us-p'>UX Designer | Psychologist</p>
                   </li> 
                   <li className='about-us-item'>
                       <img className='foto-list' src={Vanessa} alt=""/>
                       <h4 className='about-h4'>Vanessa Lopes</h4>
                       <p className='about-us-p'>Head of Social Impact</p>
                   </li> 
                   <li className='about-us-item'>
                       <img className='foto-list' src={Thierry} alt=""/>
                       <h4 className='about-h4'>Thierry</h4>
                       <p className='about-us-p'>Head of Business Innovation</p>
                   </li> 
                </ul>
                <a href="#footer-div">
                    <img src={Arrow} 
                    className='down-arrow'
                    alt="Seta Desce landing Page"/>
                </a>
            </div>
            
            <div id='footer-div'
                className='footer-landing'>
                    footer
                </div>
        </div>
    )
}