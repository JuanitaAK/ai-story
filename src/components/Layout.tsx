import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-white shadow  min-h-full min-w-full place-items-center ">
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
