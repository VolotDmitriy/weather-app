import "./ElementsContainer.scss"
import Element from "./Element.tsx";
import {useEffect, useState} from "react";
import axios from "axios";

export interface ElementProps {
    location: string;
    weather_name: string;
    temperature: number;
    imgSrc: string;
}


const ElementsContainer = () => {
    const [weatherElements, setWeatherElements] = useState<ElementProps[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/weather-elements")
            .then(response => {
                setWeatherElements(response.data);
            })
            .catch(error => {
                console.error("Error fetching weather elements:", error);
            });
    }, []);

    return (
        <div className="elements-container">
            {weatherElements.map(value => (
                <Element
                    location={value.location}
                    weather_name={value.weather_name}
                    temperature={value.temperature}
                    imgSrc={value.imgSrc}/>
            ))}

        </div>
    );
}
export default ElementsContainer;