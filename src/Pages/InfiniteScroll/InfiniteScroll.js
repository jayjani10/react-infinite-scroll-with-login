import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function InfiniteScroll() {
  const [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData(page);
  }, []);

  function fetchData(page) {
    fetch(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((res) => {
        if (res.ok) {
          setLoader(true);
          return res.json();
        }
        return Promise.reject({
          status: res.status,
          statusText: res.statusText
        });
      })
      .then((res) => {
        if (page > 1) {
          let resultAr = [...data, ...res.results];
          setData(resultAr);
        } else {
          setData(res.results);
        }
        setLoader(false);
      })
      .catch((err) => console.error("Error : ", err.statusText));
  }

  function loadMoreHandle(e) {
    let bottom =
      e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 1;
    if (bottom) {
      let page_ = page + 1;
      fetchData(page_);
      setLoader(true);
      setPage(page_);
    }
  }

  return (
    <div onScroll={loadMoreHandle} className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">
              <button type="submit">
                <Link to="/">Logout</Link>
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>
                  <img src={item.picture["thumbnail"]} alt="img" />
                </td>
                <td>{item.name["first"]}</td>
              </tr>
            );
          })}

          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </tbody>
      </table>
    </div>
  );
}

export default InfiniteScroll;
