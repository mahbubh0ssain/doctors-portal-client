import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointBanner = ({ date, setDate }) => {
  return (
    <section
      className="my-5"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
          <img
            src={chair}
            className="lg:w-1/2   sm:w-full rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div>
            <DayPicker
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={{ before: new Date() }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointBanner;
