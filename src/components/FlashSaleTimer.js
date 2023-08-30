import "./FlashSaleTimer.css";
const FlashSaleTimer = () => {
  return (
    <div className="flash-sale-timer">
      <div className="days-parent">
        <div className="days">Days</div>
        <b className="b">03</b>
      </div>
      <div className="hours-parent">
        <div className="hours">Hours</div>
        <b className="b1">23</b>
      </div>
      <div className="minutes-parent">
        <div className="minutes">Minutes</div>
        <b className="b2">19</b>
      </div>
      <div className="seconds-parent">
        <div className="seconds">Seconds</div>
        <b className="b1">56</b>
      </div>
      <div className="semiclone">
        <div className="semiclone-child" />
        <div className="semiclone-child" />
      </div>
      <div className="semiclone1">
        <div className="semiclone-child" />
        <div className="semiclone-child" />
      </div>
      <div className="semiclone2">
        <div className="semiclone-child" />
        <div className="semiclone-child" />
      </div>
    </div>
  );
};

export default FlashSaleTimer;
