import React, { useEffect, useState } from 'react';
import "./List.css"
import axios from 'axios';

const List = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list',
          params: {
            edition_currency_id: '12',
            time_utc_offset: '28800',
            lang_ID: '1',
            sort: 'PERC1D_DN',
            page: '1'
          },
          headers: {
            'X-RapidAPI-Key': 'fef87bc577mshe009dba416d1ca1p191f14jsnd4ad23e4a8d4',
            'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
          }
        };

        const response = await axios.request(options);
        const data = response.data.data[0].screen_data.crypto_data;
        // console.log(data)
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCryptoData = cryptoData.filter((cryptoItem) =>
    cryptoItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="row shadow-sm">
      <div className="col-md-12 mx-auto">
        <div className="input-group m-auto" style={{width:"90%"}}>
          <input
            className="form-control border-end-0 border rounded-pill"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <span className="input-group-append">
            <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill" type="button">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
        <div className="row" style={{padding:"15px 50px 0 50px "}}>
            <h6 className='col-6'>Asset</h6>
          <div className="col-6 d-flex justify-content-between align-items-center">
            <h6>Point</h6>
            <h6>chg%</h6>
            <h6>Price</h6>
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={{height:"75vh", overflowY: "scroll"}}>
          <ul className="list-group m-2" style={{overflowX:'hidden'}}>
          {filteredCryptoData.map((cryptoItem, index) => (

            // {cryptoData.map((cryptoItem, index) => (
              <li key={index} className="shadow m-auto row list-group-item mb-4 d-flex justify-content-between rounded align-items-center" style={{width:"95%",height:"100px"}}>
                <div className='col-4 d-flex'>
                  <div className=' rounded-circle' style={{height:"40px", width:"40px", border:"1px solid black"}}>
                <img
                  src={cryptoItem.logo_url}
                  alt={cryptoItem.name}
                  width="30"
                  height="30"
                  className="rounded-circle m-1"
                />
                </div>
                <span className='m-2 d-none d-lg-block'>{cryptoItem.cross_rates_name}</span>
                </div>
                <div className='col-6 d-flex justify-content-between align-items-center'>
                <span className=''>{cryptoItem.pair_change_percent_numeric}</span>
                <span className='' style={{color:cryptoItem.change_percent_1d_color}}>{cryptoItem.change_percent_1d}</span>
                <span className=''>{cryptoItem.country_id}</span>
                </div>
              </li>
            // ))}
            ))}
          </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default List;