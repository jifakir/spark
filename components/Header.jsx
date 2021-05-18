import React, {useEffect, useRef, useState} from 'react';


const Header = () => {
    

    return (
        <div id="header" className="container relative min-h-screen py-32 px-10 flex justify-evenly items-center ">
            <div className="w-1/2 relative">
                <h2 className="sub-head uppercase text-sm">aceleramos negocios</h2>
                <h1 className="w-full text-5xl tracking-wide font-bold text-gray-700 ">criando</h1>
                <h1 className="w-full text-5xl tracking-wide font-bold text-gray-700">experiencias que</h1>
                <h1 className="w-full text-5xl tracking-wide font-bold text-gray-700">as pessoas amam</h1>
                <h3 className="w-full pt-2">Auxiliamos empresas e executivos 
                a transformar suas organizacoes, projetando novas maneiras
                de trevalhar em um mercado digital e em constante evalucoo
                </h3>
                <span className="yellow-bar absolute left-0 h-3/5 rounded bg-red-500"></span>
            </div>
            <div className="w-1/2 h-96 bg-gray-500"></div>
            <style jsx>{`
                .yellow-bar{
                    width: 2px;
                    top: 115%;
                }
            `}</style>
        </div>
    )
};

export default Header;