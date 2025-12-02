import Footer from "@/components/custom/footer";
import Header2 from "@/components/custom/header2";
import NavBar from "@/components/custom/navbar";
import Main from "../../../components/custom/Main";

export default function Page() {
  return (
    <div className="mt-20">
      <Header2 />
      <NavBar />
      <Main />
      <Footer id="footer" />
    </div>
  );
}
