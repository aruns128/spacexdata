import React from 'react'

const Cards = ({ history, loading }) => {
    return (
        <React.Fragment>
            {loading ?
                <h2>Loading...</h2> :
                <div>
                    {history.map(data => (
                        <div className="card mb-3 mt-3 mr-3 ml-3" key={data.id}>
                            <div className="card-header">{data.title}</div>
                            <div className="card-body">
                                <p className="card-text">{data.details}</p>
                            </div>
                            <div className="card-footer">Date: {
                               data.event_date_utc.split('T')[0]
                            }</div>
                        </div>
                    ))}
                </div>
            }
        </React.Fragment>
    )
}

export default Cards;