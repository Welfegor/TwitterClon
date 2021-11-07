import PostReaction from './PostReaction';
import Comment from './Icons/Comment';
import Repost from './Icons/Repost';
import Like from './Icons/Like';
import Share from './Icons/Share';
import Dotsettings from './Icons/Dotsettings';
import './Post.css';

function Post(props) {
  return (
    <>
      <div className="Post-wrapper">
        <div className="Post-avatar">
          <a href="#" className="Post-avatar-link">
            <img src={props.avatar} className="Post-avatar-link-img" />
          </a>
        </div>
        <div className="Post-body">
          <div className="Post-body-header">
            <div className="Post-body-header-user">
              <div className="Post-body-header-user-info">
                <span className="Post-body-header-user-info-username">{props.username}</span>
                <span className="Post-body-header-user-info-usertag"> @{props.usertag}</span>
                <span className="Post-body-header-user-info-posttime"> · {props.posttime}</span>
              </div>
              <div className="Post-body-header-user-settings">
                <Dotsettings class="Post-body-header-user-settings-img" />
              </div>
            </div>
          </div>
          <div className="Post-body-main">
            {props.content}
            <img src={props.contentPhoto} className="Post-body-main-img" />
          </div>
          <div className="Post-interact">
            <PostReaction text={props.comments}>
              <Comment class="Post-interact-features-img" />
            </PostReaction>
            <PostReaction text={props.reposts}>
              <Repost class="Post-interact-features-img" />
            </PostReaction>
            <PostReaction text={props.likes}>
              <Like class="Post-interact-features-img" />
            </PostReaction>
            <PostReaction>
              <Share class="Post-interact-features-img" />
            </PostReaction>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post