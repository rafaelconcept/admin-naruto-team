
import React from 'react';

const Header = () => {
    const main = {
        backgroundColor:"gray",
        paddingTop:"5px",
        paddingBottom:"5px",
        paddingLeft:"10px",
        paddingRight:"10px",
        display:"flex",
        justifyContent:"space-between"
    }
    const h1_admin = {
        color:"white",
        marginTop:"5px",
        marginBottom:"5px",
        fontSize:"20px"
    }
    const p_admin = {
        color:"white",
        marginTop:"0px",
        marginBottom:"5px",
        fontSize:"12px"
    }
    const chave_button = {
        width:"80px",
        height:"30px"
        
    }
    const box_chave = {
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
    return(

        <div id="page-home">
            <div className="content">
                <main style={main}>
                    <div>
                        <h1 style={h1_admin}>Painel Administrativo</h1>
                        <p style={p_admin}>Adicione abaixo equipes para o site, não esqueça do nome de quem recomendou</p>
                    </div>
                    <div style={box_chave}>
                        <p style={{marginBottom:"2px",fontSize:"15px",marginTop:"2px"}}>Precisa adicionar uma chave</p>
                        <button style={chave_button}>Chave</button>
                    </div>
                </main>
            </div>
        </div>
    )

}

export default Header;