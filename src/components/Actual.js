import ActualNews from './ActualNews';
import Settings from './Icons/Settings';
import './Actual.css';
import Dotsettings from './Icons/Dotsettings';

function Actual(props) {
  return (
    <>
      <div className="Actual-wrapper">
        <div className="Actual-header">
          <span className="Actual-header-title">Актуальные темы для вас</span>
          <Settings class="Actual-header-img" />
        </div>
        <div className="Actual-content">
          <ActualNews theme={props.actualTheme} themeName={props.actualThemeName} themeTweets={props.actualThemeTweets}>
            <Dotsettings class="Actual-content-topic-theme-img" />
          </ActualNews>
          <ActualNews theme={props.actualTheme} themeName={props.actualThemeName} themeTweets={props.actualThemeTweets}>
            <Dotsettings class="Actual-content-topic-theme-img" />
          </ActualNews>
          <ActualNews theme={props.actualTheme} themeName={props.actualThemeName} themeTweets={props.actualThemeTweets}>
            <Dotsettings class="Actual-content-topic-theme-img" />
          </ActualNews>
          <ActualNews theme={props.actualTheme} themeName={props.actualThemeName} themeTweets={props.actualThemeTweets}>
            <Dotsettings class="Actual-content-topic-theme-img" />
          </ActualNews>
        </div>
        <div className="Actual-more">
          <a href="#" className="Actual-more-text">Показать еще</a>
        </div>
      </div>
    </>
  );
}

export default Actual