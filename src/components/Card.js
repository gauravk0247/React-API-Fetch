import React, { useEffect, useState } from 'react';

const Card = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('Class.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((myjson) => {
            setData(myjson);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h1 className='center'>Classes</h1>
            <p className='center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, animi error dicta voluptates quod, veniam placeat ullam sed voluptate vero dolorem fugiat dolor optio!</p>
            <div className="container d-flex justify-content-center flex-wrap">
                {data && data.length > 0 && data.map((val, index) => {
                    return (
                        <div className="card m-4" style={{ width: '18rem' }} key={index}>
                            <img src={val.ImageUrl} className="card-img-top" alt="Add Image" />
                            <div className="card-body">
                                <h5 className="card-title">{val.ID}</h5>
                                <p className="card-text">{val.ShortDesc}</p>
                                <a href="/" className="btn">View</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Card;
