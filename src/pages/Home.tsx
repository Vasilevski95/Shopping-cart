import Testimonials from "../components/Testimonials";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

const style = { fontSize: "1.5rem", marginBottom: "3px" };

const Home = () => {
  return (
    <div>
      <h1>Welcome to our store!</h1>
      <p>
        We sell a variety of items, including clothing, accessories,
        electronics, and more. Take a look around and see what catches your eye!
      </p>
      <p>
        You can follow us on instagram{" "}
        <a
          style={{ textDecoration: "none", color: "#d62976" }}
          href="https://www.instagram.com/vasilevski50/"
          target="_blank"
        >
          <AiOutlineInstagram style={style} />
        </a>
      </p>
      <p>
        Also on twitter{" "}
        <a
          style={{ textDecoration: "none", color: "#00acee" }}
          href="https://twitter.com/DjoleV95"
          target="_blank"
        >
          <BsTwitter style={style} />
        </a>
      </p>
      <p>
        Maybe github{" "}
        <a
          style={{ textDecoration: "none", color: "#171515" }}
          href="https://github.com/Vasilevski95"
          target="_blank"
        >
          <AiFillGithub style={style} />
        </a>
      </p>
      <p>
        And on linkedin{" "}
        <a
          style={{ textDecoration: "none", color: "#0077b5" }}
          href="https://www.linkedin.com/in/djordje-vasilevski-3a0082240/"
          target="_blank"
        >
          <AiFillLinkedin style={style} />
        </a>
      </p>
      <Testimonials />
    </div>
  );
};

export default Home;
//
