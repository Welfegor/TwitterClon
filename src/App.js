import './App.css';
import Layout from './components/Layout';
import Post from './components/Post';

function App(props) {
  return (
    <>
      <Layout>
        <Post avatar="https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg" comments="2" reposts="3" likes="4" username="Marat" usertag="welfegor" posttime="23 окт." content="Climate Scientist Peter Kalmus speaking at GAI 2021, explains what everyday people like you and me can do to decrease our carbon footprint." contentPhoto="https://pbs.twimg.com/card_img/1456788815377436676/7DbXtRkR?format=jpg&name=small" />  
        <Post avatar="https://pbs.twimg.com/profile_images/1370716927430123520/WsuycOFN_400x400.jpg" comments="2" reposts="3" likes="4" username="Marat" usertag="welfegor" posttime="23 окт." content="not me watching another sand cutting video " contentPhoto="https://pbs.twimg.com/card_img/1456769721466904579/Usu_9Tod?format=jpg&name=small" />  
      </Layout>
    </>
  )
}

export default App;
