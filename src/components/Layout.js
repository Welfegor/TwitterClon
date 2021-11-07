import PopularTweets from './Icons/Populartweets';
import './Layout.css';
import SideMenu from './SideMenu';
import CreatePost from './CreatePost';
import SearchForm from './SearchForm'
import Actual from './Actual'
import Profile from './Profile'

function Layout(props) {
  return (
    <>
        <div className="Layout-wrapper">
            <div className="Layout-left">
                <SideMenu />
            </div>
            <div className="Layout-right">
                <div className="Layout-right-feed">
                    <div className="Layout-right-feed-title">
                        <span className="Layout-right-feed-title-text">Главная</span>
                        <PopularTweets class="Layout-right-feed-title-img" />
                    </div>
                    <div className="Layout-right-feed-createpost">
                        <CreatePost avatar="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" />
                    </div>
                    {props.children}
                </div>
                <div className="Layout-right-sidebar">
                    <SearchForm />
                    <Actual actualTheme="Актуальные темы: Россия" actualThemeName="Спутник" actualThemeTweets="Твитов: 3 183" />
                </div>
            </div>
        </div>


        <div className="Layout-wrapper">
            <div className="Layout-left">
                <SideMenu />
            </div>
            <div className="Layout-right">
                <div className="Layout-right-feed">
                    <div className="Layout-right-feed-profile">
                        <Profile profileBg="https://pbs.twimg.com/profile_banners/1115874631/1586016045/600x200" profileImg="https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg" username="Ведомости" usertag="vedomosti" userdesc="Какие-то новости" location="Russia" regdate="февраль 2009 г." link="vedomosti.ru" follows="31" subs="32432" crossfriends="Нет в читаемых у пользователей, которых читаете вы" />
                    </div>
                    {props.children}
                </div>
                <div className="Layout-right-sidebar">
                    <SearchForm />
                    <Actual actualTheme="Актуальные темы: Россия" actualThemeName="Спутник" actualThemeTweets="Твитов: 3 183" />
                </div>
            </div>
        </div>


    </>
  );
}

export default Layout