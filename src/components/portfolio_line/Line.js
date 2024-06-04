import DesktopImg from '../../assets/images/Desktop.png';
import SmartphoneImg from "../../assets/images/Smartphone.png";
import './Line.css';
import { dataportfolio } from '../../content_option';

export function PortfolioLine () {
  return (
    <>
    <div className="Line">
      {dataportfolio.map((data, index) => (
        <div className="Line-desktop" key={index}>
          <a href={data.link} className='portfolio-link'>
            <img className="desktop" src={DesktopImg} alt="Desktop" />
            <img className="capture-desktop" src={data.captureDesktop} alt="Capture d'écran" />
            <p className='descrition'>{data.description}</p>
            <img className="smartphone" src={SmartphoneImg} alt="Smartphone" />
            <img className="capture-smartphone" src={data.captureSmartphone} alt="Capture d'écran" />
          </a>
          
        </div>
      ))}
    </div>
    </>
  );
}