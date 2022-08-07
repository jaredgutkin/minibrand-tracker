import { Link } from "react-router-dom";
import { FaBug, FaFish, FaQuestionCircle } from "react-icons/fa";
import Mbs4List from "./mbs4/mbs4ListComponent";


export default function Home() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <Link to="/bug">
                <div className="jumbotron jumbotron-fluid bg-success text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaBug /> Mini Brands! Series 1
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/fish">
                <div className="jumbotron jumbotron-fluid bg-primary text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaFish /> Mini Brands! Series 2
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6">
              <Link to="/bug">
                <div className="jumbotron jumbotron-fluid bg-success text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaBug /> Mini Brands! Series 3
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link to="/mbs4">
                <div className="jumbotron jumbotron-fluid bg-primary text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaFish /> Mini Brands! Series 4
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          
          <div className="row">
            <div className="col-sm-12">
              <Link to="/about">
                <div className="jumbotron jumbotron-fluid bg-secondary
                  text-white">
                  <div className="container">
                    <h1 className="display-4 text-center">
                      <FaQuestionCircle /> About
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )
}
