import React, { useEffect, useState } from 'react'
import Proyecto from "./Proyecto";
import Paginacion from './Paginacion'
import { Proyectos as ProyectosLista } from '../helpers';
const Proyectos = () => {
    const [proyectosR,setProyectos] = useState(ProyectosLista);
    const [proyectosPag,setProyectosPag] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    let cant_por_pag = 3;
    const [cantPag,setCantPag] = useState(Math.ceil(proyectosR.length / cant_por_pag));
    

       

    function paginar (pag) {
        if(pag <= cantPag){
            --pag; //Ajustamos el número de página para que sea compatible con los índices del array
            const proy = proyectosR?.slice(pag * cant_por_pag,(pag + 1)* cant_por_pag);
            setProyectosPag(proy);
        }
    }
    useEffect(() => {
        paginar(currentPage);
    }, [])

    useEffect(() =>{
        paginar(currentPage);
    },[currentPage]);
    
    return (
        <>
            {proyectosPag?.map((proy,i) => (
                    <Proyecto 
                        proyecto={proy}
                        key={proy.id + i}
                    />
            ))}
            <Paginacion 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                cantPag={cantPag}
            />
        </>
    )
}

export default Proyectos


