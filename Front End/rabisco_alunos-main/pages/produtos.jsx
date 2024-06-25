import CardList from '@/components/CardList'
import Headerb from '../components/Headerb'
import Titulo from '../components/Titulo'
import { useState, useEffect } from 'react'
import { getProdutos } from '@/services/apiRabisco'

export default function Produtos() { // Capitalize the component name
    const [produtos, setProdutos] = useState([]) // Correct the useState syntax

    async function buscaProdutos() {
        try {
            const data = await getProdutos()
            console.log(data)
            setProdutos(data)
        } catch (error) {
            console.error('Erro ao buscar produtos:', error)
        }
    }

    useEffect(() => {
        buscaProdutos()
        const atualiza = setInterval(buscaProdutos, 5000)
        return function() {
            clearInterval(atualiza)
        }
    }, [])

    return (
        <>
            <Headerb />
            <Titulo texto="Conheça nossos produtos!" />
            <CardList produtos={produtos} /> {/* Correct the prop syntax */}
        </>
    )
}
