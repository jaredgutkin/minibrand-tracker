import { Link } from "react-router-dom";
import { FaBug, FaFish, FaQuestionCircle } from "react-icons/fa";
import Mbs4List from "./mbs4/mbs4ListComponent";


export default function Home() {
    return (
      < Mbs4List />
        // <div className="container">
        //   <div className="row">
        //     <div className="col-sm-6">
        //       <Link to="/bug">
        //         <div className="jumbotron jumbotron-fluid bg-success text-white">
        //           <div className="container">
        //             <h1 className="display-4 text-center">
        //               <FaBug /> Bug
        //             </h1>
        //           </div>
        //         </div>
        //       </Link>
        //     </div>
        //     <div className="col-sm-6">
        //       <Link to="/fish">
        //         <div className="jumbotron jumbotron-fluid bg-primary text-white">
        //           <div className="container">
        //             <h1 className="display-4 text-center">
        //               <FaFish /> Fish
        //             </h1>
        //           </div>
        //         </div>
        //       </Link>
        //     </div>
        //   </div>
        //   <div className="row">
        //     <div className="col-sm-12">
        //       <Link to="/about">
        //         <div className="jumbotron jumbotron-fluid bg-secondary
        //           text-white">
        //           <div className="container">
        //             <h1 className="display-4 text-center">
        //               <FaQuestionCircle /> About
        //             </h1>
        //           </div>
        //         </div>
        //       </Link>
        //     </div>
        //   </div>
        // </div>
      )
}
