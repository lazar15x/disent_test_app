import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import CountryService from '../../services/Country.service'
import { CountryContext } from '../../App'

const Home = () => {
    const { value, setValue } = useContext(CountryContext)
    async function fetchCountries() {
        const res = await CountryService.getAll()
        const sorted = [...res].sort((a, b) =>
            a.name.common.localeCompare(b.name.common, 'en', {
                sensitivity: 'base',
            })
        )
        setValue(sorted)

    }
    useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <div>
            <h1>All Countries:</h1>
            {value ? (
                <div>
                    {value.map((c) => (
                        <div key={c.name.common}>
                            <Link
                                className="link-primary link-offset-2 link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                                to={`country/${c.name.common}`}
                            >
                                {c.name.common}
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <h2>No countries.</h2>
            )}
        </div>
    )
}

export default Home
