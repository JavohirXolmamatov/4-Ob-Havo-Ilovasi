//styel
import "./MainPage.css";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
function MainPage() {
  const apiKey = "f9cb98bb7b174972a6395502240210";
  const [city, setCity] = useState("Qarshi");
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // URL ni faqat bir marta o'rnatish
    if (city && apiKey) {
      setUrl(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
      );
    }
  }, [city]); // Faqat city o'zgarganda qayta ishga tushadi

  const { data: data, ispending } = useFetch(url);
  useEffect(() => {
    if (data) {
      console.log("Fetched Data:", data); // Faqat haqiqiy ma'lumotlar
    }
  }, [data]);

  const HundleSubmit = (e) => {
    e.preventDefault();
    console.log("Form yuborildi!");
  };

  const HandleValue = (e) => {
    console.log("Input qiymati:", e.target.value);
    setCity(e.target.value); // Yangi shahar nomini o'rnatadi
  };

  {
    ispending && (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      {data && (
        <div className="weather-container">
          <header className="weather-header">
            <h1>Weather in {data.location.name}</h1>
            <p>
              {data.location.region}, {data.location.country}
            </p>
          </header>
          <main className="weather-main">
            <div className="weather-icon">
              <img
                src={data.current.condition.icon}
                alt={data.current.condition.text}
              />
            </div>
            <div className="weather-info">
              <h2>{data.current.temp_c}°C</h2>
              <p>{data.current.condition.text}</p>
            </div>
          </main>
          <footer className="weather-footer">
            <p>Humidity: {data.current.humidity}%</p>
            <p>
              Wind: {data.current.wind_kph} kph ({data.current.wind_dir})
            </p>
            <p>Visibility: {data.current.vis_km} km</p>
          </footer>
          <form
            className="form"
            onSubmit={(e) => {
              HundleSubmit(e);
            }}
          >
            <label>
              <input
                type="text"
                onChange={(e) => {
                  HandleValue(e);
                }}
              />
            </label>
          </form>
        </div>
      )}
    </>
  );
}
export default MainPage;
