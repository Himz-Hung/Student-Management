import "bootstrap/dist/css/bootstrap.css";
import './Home.css';
import Header from "../../component/header/Header"
import Content1 from "../../component/Content1";
import Content2 from "../../component/Content2";
import Footer from "../../component/footer/Footer";
import Content4 from "../../component/Content4";
import Content9 from "../../component/Content9";
import Content6 from "../../component/Content6";
import Content3 from "../../component/Content3";

function Home() {
  return (
    <>
    <div className="row sticky-top reset" id="header">
    <Header />
    </div>
    <div className="container">
    <div className="row" id="content1">
    <Content1 />
    </div>
    <div className="row" id='content2'>
      <Content2 />
    </div>
    <div className="row" id='content3'>
      <Content3 />
    </div>
    <div className="row" id="content4">
      <Content4 />
    </div>
    <div className="row" id="content4">
      <Content4 case={true}/>
    </div>
    <div className="row" id="content6">
      <Content6 />
    </div>
    </div>
    <div className="row reset" id="content9">
      <Content9 />
    </div>
    <div className="row reset" id="footer">
      <Footer />
    </div>
    </>
  );
}

export default Home;
