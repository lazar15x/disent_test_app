import React from 'react'
import { useLoaderData } from 'react-router-dom'

const FullInfo = () => {
    const fullData = useLoaderData()
    console.log('fullData', fullData)

    return (
        <div>
            {fullData.map((it, i) => (
                <div key={i}>
                    <img src={it.flags.svg} alt={it.name.common} width={500} />
                    <h1 className="h3">
                        <div>Name: {it.name.common}</div>
                        <div>Official: {it.name.official}</div>
                    </h1>
                    <div className="h5">Continents: {it.continents}</div>
                    <div className="h5">Population: {it.population}</div>
                    <div className="h5">
                        Capital:{' '}
                        {it.capital.map((it, i) => (
                            <span key={i}>{it}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FullInfo
