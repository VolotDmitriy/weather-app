import React from "react";

interface ElementProps {
    location: string;
    weather_name: string;
    temperature: number;
    imgSrc: string;
}

const Element: React.FC<ElementProps> = ({location, weather_name, temperature, imgSrc}) => {
    return (
        <div className={"element " + location.toLowerCase().replace(" ", "-")}>
            <span className="element-city">{location}</span>
            <div className="element-weather">
                <span className="element-weather__name">{weather_name}</span>
                <span className="element-weather__value">{temperature}</span>
            </div>
            <img className="element-image" src={imgSrc} alt="image"/>
        </div>
    )
}
export default Element;