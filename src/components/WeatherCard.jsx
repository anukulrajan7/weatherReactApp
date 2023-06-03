import celcius from "../image/celsius.png";
import windy from "../image/windy.png";
import globe from "../image/globe.png";
import humidity from "../image/humidity.png";
import meter from "../image/meter.png";
import greens from "../image/greens.png";
function WeatherCard({ data }) {
  return (
    <div className="flex flex-col gap-2  py-7 items-center px-2 shadow-xl rounded-lg bg-purple-700 shadow-purple-700 w-[100%] my-9 md:w-[50%] mx-auto">
      <div className="flex flex-col justify-center gap-2 bg-contain bg-no-repeat text-white">
        <div className="w-fit flex flex-col gap-3 mx-auto items-center justify-center py-3 text-purple-700">
          <h1 className="flex md:flex-row flex-col w-fit mx-auto gap-2 font-bold font-serif text-center text-3xl text-white text-centers ">
            <img src={greens} alt="" className="w-10" />
            {data.location.name}, {data.location.country}
          </h1>
          <div className="flex gap-2 text-white">
            <h2>Cordinates</h2>
            <img src={globe} alt="" className="w-10" />
            <span>
              {data.location.lon}, {data.location.lat}
            </span>
          </div>
        </div>
        <div className="flex flex-col mx-auto w-fit bg-transparent text-2xl font-bold font-serif ">
          <h1 className="order-2">{data.current.condition.text}</h1>
          <img src={`${data.current.condition.icon}`} alt=""  className="w-[100px]"/>
        </div>
        <div>
          <div className="flex gap-2 font-bold text-2xl font-serif w-fit mx-auto my-3">
            <h2 className="text-white">{data.current.temp_c}</h2>
            <img src={celcius} alt="" className="w-6 h-6" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3  gap-3 items-center justify-center">
            <div className="w-full justify-center items-center flex-col rounded-lg h-fit px-2 py-4 flex bg-white text-purple-700 font-bold shadow-yellow-400 shadow-lg gap-2 hover:bg-transparent hover:shadow-purple-900 ">
              <img src={meter} alt="" className="w-12" />
              <span className="text-bold font-serif  text-xl">
                {data.current.pressure_mb} hpa
              </span>
            </div>
            <div className="w-full justify-center items-center flex-col rounded-lg h-fit px-2 py-4 flex bg-white text-purple-700 font-bold shadow-yellow-400 shadow-lg gap-2 hover:bg-transparent hover:shadow-purple-900 ">
              <img src={humidity} alt="" className="w-12" />
              <span>{data.current.humidity} %</span>
            </div>
            <div className="w-full justify-center items-center flex-col rounded-lg h-fit px-2 py-4 flex bg-white text-purple-700 font-bold shadow-yellow-400 shadow-lg gap-2 hover:bg-transparent hover:shadow-purple-900 ">
              <img src={windy} alt="" className="w-12" />
              <span>{data.current.wind_kph}km/h</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
