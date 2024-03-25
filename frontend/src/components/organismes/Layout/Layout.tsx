import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
