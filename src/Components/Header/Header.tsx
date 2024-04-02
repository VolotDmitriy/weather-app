import "./Header.scss"
import React from "react";

interface HeaderDataProps{
    data: string
}
const Header: React.FC<HeaderDataProps> = ({data}) => {
    return (
        <div className="header">
            <span className="today-string">TODAY</span>
            <span className="today-data">{data}</span>
        </div>
    );
}

export default Header;