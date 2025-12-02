import Footer from "@/components/custom/footer";
import Header from "@/components/custom/header";
import NavBar from "@/components/custom/navbar";
import Main from "../../../components/custom/Main";

export default function Page() {
  return (
    <div className="mt-20">
      <Header />
      <NavBar />
      <Main />
      <Footer id="footer" />
    </div>
  );
}
