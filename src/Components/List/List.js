import React, { useEffect, useState } from 'react';
import "./List.css"
import cryptoList from '../../List.json'
import load from '../../assets/Images/giphy.gif'
import { useNavigate } from 'react-router-dom';

const List = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchData = async () => {
      try {
        // const options = {
        //   method: 'GET',
        //   url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/list',
        //   params: {
        //     edition_currency_id: '12',
        //     time_utc_offset: '28800',
        //     lang_ID: '1',
        //     sort: 'PERC1D_DN',
        //     page: '1'
        //   },
        //   headers: {
        //     'X-RapidAPI-Key': 'fbf36406a3msh9191e1526f0bc2fp16ee1bjsna0c14825d0c9',
        //     'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
        //   }
        // };


        // const response= await fetch(cryptoList);
        // console.log(response);
        const data = cryptoList.data[0].screen_data.crypto_data;
        // const data = response.data.data[0].screen_data.crypto_data;
        // const data = response.data[0].screen_data.crypto_data;

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

  // sort methode 
  const handleSort = (sortBy) => {
    setSortBy(sortBy);
  };

  //pass id to link
 const handleClick = (e) => {
  navigate(`/Trade/${e}`)

 }


  const sortCryptoData = (cryptoData) => {
    if (sortBy === 'point') {
      return cryptoData.sort((a, b) => b.circulating_supply - a.circulating_supply);
    } else if (sortBy === 'chg') {
      return cryptoData.sort((a, b) => parseFloat(b.change_percent_1d) - parseFloat(a.change_percent_1d));
    } else if (sortBy === 'price') {
      return cryptoData.sort((a, b) => parseFloat(b.country_id) - parseFloat(a.country_id));
    }
    return cryptoData;
  };
  

  const filteredCryptoData = cryptoData.filter((cryptoItem) =>
    cryptoItem.cross_rates_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedCryptoData = sortCryptoData(filteredCryptoData)

  return (
    <div className="row shadow-sm ">
      <div className="col-md-12 mx-auto">

        <div className="input-group m-auto" style={{ width: "90%" }}>
          <input
            className="form-control border-end-0 border rounded-pill"
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            style={{ paddingRight: "60px", backgroundColor: "#f5f3f0" }} // Add padding to accommodate the search icon
          />
          <span className="input-group-append" style={{ position: "absolute", zIndex: "10000", right: "5px", top: 0, bottom: "2px", display: "flex", alignItems: "center" }}>
            <button className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill" style={{
              width: "36px",
              height: "30px", display: "flex", alignItems: "center"
            }} type="button">
              <i className="fa fa-search" style={{ fontSize: "1.2em", marginLeft: "-3px" }}></i>
            </button>
          </span>
        </div>


        <div className="row" style={{ padding: "15px 50px 0 50px " }}>
          <h6 className='col-6'>Asset</h6>
          <div className="col-6 d-flex justify-content-between align-items-center">
            <h6 onClick={() => handleSort('Point')}style={{cursor: "pointer"}}>Point</h6>
            <h6 onClick={() => handleSort('chg')}  style={{cursor: "pointer"}}>chg%</h6>
            <h6 onClick={() => handleSort('Price')}style={{cursor: "pointer"}}>Price</h6>
          </div>
        </div>
        {loading ? (
          <img src={load} alt=''/>
        ) : (
          <div style={{ height: "72vh", overflowY: "scroll" }}>
            <ul className="list-group m-2" style={{ overflowX: 'hidden' }}>
              {sortedCryptoData.map((cryptoItem, index) => (

                // {cryptoData.map((cryptoItem, index) => (
                <li onClick={()=>{handleClick(cryptoItem.name)}} key={index} className="shadow m-auto row list-group-item mb-4 d-flex justify-content-between rounded align-items-center" style={{ width: "95%", height: "80px", cursor:"pointer" }}>
                  <div className='col-4 d-flex'>
                    <div className=' rounded-circle' style={{ height: "45px", width: "45px", border: "1px solid black" }}>
                      <img
                        src={cryptoItem.image} 
                        alt="Man"
                        width="35"
                        height="35"
                        className="rounded-circle m-1"
                      />
                      {/* <img src={man} alt="Logo" /> */}
                    </div>
                    <div className='d-flex mx-auto flex-column'>
                      <span className='mt-2 mt-xl-0 text-bold fw-bold'>SA</span>
                      <span className='d-none d-xl-block '>{cryptoItem.name}</span>
                    </div>
                  </div>
                  <div className='col-6 d-flex justify-content-between align-items-center'>
                    <span className=''>{cryptoItem.circulating_supply}</span>
                    <span className='' style={{ color: cryptoItem.change_percent_1d_color }}>{cryptoItem.change_percent_1d}</span>
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