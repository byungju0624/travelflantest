import React from "react";
import "./pageData.scss";
const PageData = ({ data, loading }) => {
  console.log(data);
  return (
    <>
      {loading && <div>Loading!!!</div>}
      <ul className="pageData_container">
        {data?.map((item) => (
          <div className="pageData_Album">
            <div>
              <a href="https://placeholder.com">
                <img
                  src={`https://via.placeholder.com/150.png?text=${item.title}`}
                />
              </a>
            </div>
            <li key={item.id} className="pageData_Title">
              {item.title}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default PageData;
