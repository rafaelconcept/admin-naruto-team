
import React from 'react';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import axios from 'axios';

const Blocked = (props) => {


    const[chave, setChave] = useState('');
    const[chaveCorreta, setChaveCorreta] = useState(props.chave);
    const[carregando, setCarregando] = useState(false);
    const[errado, setErrado] = useState(false);
    const[certo, setCerto] = useState(false);
    const[usuario, setUsuario] = useState('');



    async function handleButton(){
        setCerto(false) 
        setErrado(false)
       // console.log(chave)
        setCarregando(true)
        
        let resposta = await axios.get('https://api-team-na.herokuapp.com/check_token?token='+chave);
        setCarregando(false)

        if(resposta.data.valido){
            setCerto(true)
            setUsuario(resposta.data.nome)
            Cookies.set('chave', chave, { expires: 30, path: '' })
            await new Promise(r => setTimeout(r, 2000));
            setChaveCorreta(chave);
        }else{
            setErrado(true)
        }

        //console.log(resposta.data)

        
        
    }




    const blockScreen = {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor:"gray",
        paddingTop:"5px",
        paddingBottom:"5px",
        paddingLeft:"10px",
        paddingRight:"10px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center",
        zIndex:"10"
    }
    const show = {
     
        display: chaveCorreta==undefined?"block":"none",

    }
    const h1_admin = {
        color:"white",
        marginTop:"5px",
        marginBottom:"5px",
        fontSize:"25px"
    }
    const p_admin = {
        color:"white",
        marginTop:"0px",
        marginBottom:"5px",
        fontSize:"18px"
    }
    const chave_button = {
        width:"80px",
        height:"30px"
        
    }
    const box_chave = {
        width:"100%",
        marginTop:"10px",
        marginBottom:"15px",
        height: "25px",
    }
    const box_bloqueio = {
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        justifyContent:"center",
    }

    const botao_entrar = {
        height: "25px",
        width:"100%",
    }

    const carregando_box = {
        display:carregando==true?"flex":"none",
        flexDirection:"column",
        alignItems: "center",
        justifyContent:"center",
        marginTop:"10px",
        backgroundColor: "#262525",
        color: "white",
        width:"130px",
        height:"30px",
        borderRadius:"5px",
        textAlign:"center"
    }

    const falso_box = {
        display:errado==true?"flex":"none",
        flexDirection:"column",
        alignItems: "center",
        justifyContent:"center",
        marginTop:"10px",
        backgroundColor: "#931212",
        color: "white",
        width:"130px",
        height:"30px",
        borderRadius:"5px",
        textAlign:"center"
    }

    const verdadeiro_box = {
        display:certo==true?"flex":"none",
        flexDirection:"column",
        alignItems: "center",
        justifyContent:"center",
        marginTop:"10px",
        backgroundColor: "#2a6022",
        color: "white",
        width:"130px",
        height:"30px",
        borderRadius:"5px",
        textAlign:"center"
    }

    const bem_Vindo = {
        display:certo==true?"flex":"none",
        flexDirection:"column",
        alignItems: "center",
        justifyContent:"center",
        marginTop:"5px",
        backgroundColor: "#2a6022",
        color: "white",
        width:"130px",
 
        borderRadius:"5px",
        textAlign:"center"
    }

    return(

        <div id="page-block" style={show}>
            <div className="content">
                <main style={blockScreen}>
                    <div style={box_bloqueio}>
                        <h1 style={h1_admin}>Digite uma chave válida</h1>
                        <p style={p_admin}>Para acessar o painel você precisa de uma chave </p>
                        <input 
                            style={box_chave} 
                            id="caixa_key" 
                            placeholder="Digite sua chave" 
                            onChange={e => { setChave(e.target.value)}}
                        />
                        <button 
                            style={botao_entrar}
                            disabled={( chave && (chave.length<=0))?true:false}
                            onClick={(elemento)=>handleButton()}    
                        >Inserir</button>
                    </div>
                    
                    <div style={carregando_box}>
                        Carregando...
                    </div>
                    <div style={falso_box}>
                        Chave Incorreta.
                    </div>

                    <div style={verdadeiro_box}>
                        Chave Válida!
                    </div>
                    <div style={bem_Vindo}>
                        Bem vindo {usuario}
                    </div>
                </main>
            </div>
        </div>
    )

}

export default Blocked;