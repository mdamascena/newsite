import React, { useState } from 'react';
import { InputSearch } from './STYLES';
import ModalidadesFAQ from './ModalidadesFAQ';
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

export default function MainFAQ() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
    };

    return (
        <main>
            <div className='bgMainPrincipal select-none'>
                <div className='text-white lg:py-44 py-36 px-4 lg:px-44 text-center'>
                    <h1 className='font-semibold tracking-tighter text-4xl lg:text-5xl'>
                        Ajuda <span className='font-thin'>| Valoreal</span>
                    </h1>
                    <h2 className='lg:text-2xl text-lg mt-5 font-thin'>Qual é a sua dúvida?</h2>
                    <form className='my-5'>
                        <div className='relative flex items-center justify-center'>
                            <div className='flex justify-end items-center'>
                                {inputValue ? (
                                    <IoCloseOutline className='absolute text-4xl mr-3 cursor-pointer' onClick={clearInput}/>
                                ) : (
                                    <CiSearch className='absolute text-4xl mr-3 cursor-pointer'/>
                                )}
                                <InputSearch 
                                    type='text' 
                                    name='search' 
                                    autoComplete='off' 
                                    placeholder='Digite aqui sua dúvida' 
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ModalidadesFAQ/>
        </main>
    );
}
