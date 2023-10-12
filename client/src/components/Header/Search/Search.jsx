import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp"
const Search = ({ setShowSearch }) => {
    const [query, setQuery] = useState("");

    const onChange = (e) => {
        setQuery(e.target.value);
    };

    return (
        <div className="search-modal">
            <div className="form-field">
                <input
                    autoFocus
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                />
                <MdClose
                    className="close-btn"
                    onClick={() => setShowSearch(false)}
                />
            </div>
            <div className="search-result-content">
                
                    <div className="start-msg">
                        Start typing to see products you are looking for.
                    </div>
                
                <div className="search-results">
                        <div
                            className="search-result-item"
                            
                        >
                            <div className="image-container">
                                <img
                                    src={
                                       prod
                                    }
                                    alt=""
                                />
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                   earbuds
                                </span>
                                <span className="desc">
                                   So much description
                                </span>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Search;