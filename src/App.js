import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    render() {

        const characters = [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Motolani',
                job: 'Banker',
            },
            {
                name: 'Iskilu',
                job: 'Artist',
            },
            {
                name: 'Buhari',
                job: 'Failure',
            },
        ]

        return (
            <div className="container">
                
                <Table characterData={characters} />
               
            </div>
        )
    }
}

export default App
