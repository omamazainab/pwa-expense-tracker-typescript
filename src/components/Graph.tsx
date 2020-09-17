import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import '../assets/styles/Graph.css'

const Graph = () => {
  return (
    <div>
      <div
        className="transaction-history-container"
        data-toggle="collapse"
        data-target="#collapseGraph"
        aria-expanded="false"
        aria-controls="collapseGraph"
      >
        <p className="Trans-history-title"> Transaction Graph</p>
      </div>

      <div className="collapse" id="collapseGraph">
      <Doughnut data={{
                                labels: [
                                    'Income',
                                    'Expense',
                                    
                                ],
                                datasets: [{
                                    data: [100, 200 ],
                                    backgroundColor: [
                                    'green',
                                    'red'
                                    ],
                                   
                                    borderWidth: 0
                                }]
                            }} />
      </div>
    </div>
  )
}

export default Graph
