import Header from '../components/header'
import Blocked from '../components/blocked'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
const personagens =JSON.parse(httpGet('https://api-team-na.herokuapp.com/json_chars'));

function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
  


function Home() {

    const[lista, setLista] = useState(personagens);
    const[listaEquipes, setlistaEquipes] = useState({"token":"tetetoken",equipes:[]});

    const [atual, setAtual] = useState();
    const[pesquisa, setPesquisa] = useState('');

    const[escolhido, setEscolhido] = useState([null,null,null])
    const[escolhidoFoto, setEscolhidoFoto] = useState([null,null,null])
    const[atualizar, setAtualizar] = useState('')
    const[descricao, setDescricao] = useState('')
    const[player, setPlayer] = useState('')

    const[chave, setChave] = useState(Cookies.get('chave')!='undefined'?Cookies.get('chave'):'')



    useEffect(()=> {
       
      console.log(descricao)
    })
 
 

    async function handleSelecionado(element){
        if(element.target.className=="selecao"){
            element.target.id==atual?setAtual(null):setAtual(element.target.id)
        }
    }


    async function handleImagens(dados){
        
        var time = escolhido;
        let timeFoto = escolhidoFoto;
   
        timeFoto[atual] = dados.foto
        time[atual]=dados.nome

        setEscolhido(time);
        setEscolhidoFoto(timeFoto);
       // setAtual();
        atualizar=='b'?setAtualizar(''):setAtualizar('b');
        
        
         
    }

    async function handleInserir(){
        console.log('inserindo')
        let times = listaEquipes
        
        let time = {
            "OBJETIVO": "MISSÕES  ",
            "CHAR 1": escolhido[0],
            "CHAR 2": escolhido[1],
            "CHAR 3": escolhido[2],
            "ESTRATEGIA": descricao,
            "RECOMENDADO": player
        }

        times.equipes.push(time)
        
        setlistaEquipes(times)


        setAtual()
        setPesquisa('')
        setEscolhido([null,null,null])
        setEscolhidoFoto([null,null,null])
        setDescricao('')
        setPlayer('')
        setPesquisa('')
        
        atualizar=='b'?setAtualizar(''):setAtualizar('b');
    }

    async function handleEnviar(){
        console.log(listaEquipes)
        let listaAux = listaEquipes
         setlistaEquipes({"token":"tetetoken",equipes:[]});
        let enviado = await axios.put('https://api-team-na.herokuapp.com/add_chars', listaAux);

    }




    //estilos
    const body_all = {
        display:"flex",
        position: "fixed",
        top: "68px",
        left: "0",
        bottom: "0",
        right: "0",
    


    }
    const central = {
        width:"80%",
        height: "100%",
        backgroundColor:"#1114",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
    const lista_equipes = {
        overflow:"auto",
        backgroundColor:"#1119",
        width:"20%",
//        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        paddingTop:"10px",
      //  height:"500px"
    }
    const caixa_selecionado = {
        width:"60px",
        height: "60px",
        backgroundColor:"grey"
    }
    const caixa_selecionado_clicado = {
        width:"60px",
        height: "60px",
        border:"2px solid blue"
    }
    const foto_char = {
        height:"50px",
        width:"50px",
        marginLeft:"3px"
    }
    const caixa_chars = {
        overflow:"auto",
        height:"200px",
        width:"500px",
        border:"2px solid black",
        paddingTop:"5px",
        display: atual!=null?"block":"none"
    }

    const foto_individual0 = {
        height:"60px",
        width:"60px",
        backgroundImage: `url(${escolhidoFoto[0]})`,
        backgroundSize:"cover",
        border:atual==0?"2px solid blue":""
    }

    const foto_individual1 = {
        height:"60px",
        width:"60px",
        backgroundImage: `url(${escolhidoFoto[1]})`,
        backgroundSize:"cover",
        border:atual==1?"2px solid blue":""
    }

    const foto_individual2 = {
        height:"60px",
        width:"60px",
        backgroundImage: `url(${escolhidoFoto[2]})`,
        backgroundSize:"cover",
        border:atual==2?"2px solid blue":""
    }
    const imagme_lateral = {
        height:"40px",
        
    }


    return (
        <>  
            <Blocked chave={chave}/>
            <Header />
            <div style={body_all}>
                <div style={central}>
                    <div onClick={(elemento)=>handleSelecionado(elemento)} style={{marginTop:"20px", display:"flex",width:"200px", justifyContent:"space-between",marginBottom:"10px"}}>
                        <div id='0' className="selecao" style={escolhidoFoto[0]!=null?foto_individual0:atual==0?caixa_selecionado_clicado:caixa_selecionado}></div>
                        <div id='1' className="selecao" style={escolhidoFoto[1]!=null?foto_individual1:atual==1?caixa_selecionado_clicado:caixa_selecionado}></div>
                        <div id='2' className="selecao" style={escolhidoFoto[2]!=null?foto_individual2:atual==2?caixa_selecionado_clicado:caixa_selecionado}></div>                       
                    </div>
                    <input
                        id="caixa_busca"
                        value={pesquisa} 
                        placeholder="Digite o nome do personagem"
                        onChange={e => { setPesquisa(e.target.value)}}
                        style={{marginBottom:"20px",width:"300px"}}></input>
                    <div style={caixa_chars}>
                       {lista.filter(char => char.nome.toLowerCase().includes(pesquisa.toLowerCase())).map(x=>(
                          

                            <img
                                onClick={(elemento)=>handleImagens(x)} 
                                style={foto_char} src={x.foto}/>
                        ))}
                        
             
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                        Estrategia:
                        <textarea value={descricao} onChange={e => { setDescricao(e.target.value)}} style={{width:"500px",height:"100px",marginTop:"10px"}}></textarea>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center", marginTop:"10px"}}>
                        recomendado por :
                        <input 
                            placeholder="Nome do player"
                            value={player}
                            onChange={e => {setPlayer(e.target.value)}}
                            style={{marginBottom:"20px",width:"200px",marginTop:"10px"}}></input>
                    </div>
                    <button
                        disabled={((escolhido[0] && escolhido[1] && escolhido[2])!=null)&&(descricao!="" && player!="")?false:true}
                        style={{marginBottom:"40px"}} onClick={(elemento)=>handleInserir()} >Inserir</button>
                </div>




                <div style={lista_equipes}>
                    {console.log('ok')}
                    {listaEquipes.equipes.map((x, index)=>(
                        <div key={index} style={{backgroundColor:"rgb(162 157 157)", height:"40px", width:"120px", marginBottom:"10px"}}>
                            <img style={imagme_lateral} src={lista.filter(char=>char.nome.toLowerCase() == x["CHAR 1"].toLowerCase())[0].foto}/>
                            <img style={imagme_lateral} src={lista.filter(char=>char.nome.toLowerCase() == x["CHAR 2"].toLowerCase())[0].foto}/>
                            <img style={imagme_lateral} src={lista.filter(char=>char.nome.toLowerCase() == x["CHAR 3"].toLowerCase())[0].foto}/>
                        </div>
                    ))}
                    
                        <button
                              disabled={(listaEquipes.equipes.length<=0)?true:false}
                              onClick={(elemento)=>handleEnviar()}
                        >Enviar</button>
                
                    
                </div>
            </div>
        </>
    );
}

export default Home;
