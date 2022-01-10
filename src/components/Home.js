//import "..stylesheet/App"
//import "./stylesheet/pages/home.scss";
import SocialMedia from "./SocialMedia";

//import "../stylesheet/App.scss";

//import mainPic from "./images/foto.png";

const Home = () => {
  return (
    <>
      <main className="main main_landing">
        <SocialMedia />
        <div className="text-wrapper">
          <h2 className="main_text">
            <span className="main_text_span greeting">Hi there, I'm María</span>
            <span className="main_text_span job">a Frontend Developer</span>
          </h2>
        </div>
        <div className="image-wrapper" style={{backgroundImage:"url(./images/foto.png)"}}>
        </div>
      </main>
    </>
  );
};
export default Home;

//<img src={mainPic} alt="profile" />
