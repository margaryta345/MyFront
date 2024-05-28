import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
const Page404 = () => {
  return (
    <div>
      <p>Сторінка не дійсна</p>
      <Link to="/">Back to main page</Link>
      <Footer />
    </div>
  );
};
export default Page404;
