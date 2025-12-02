import Footer from "@/components/custom/footer";
import HostHeader from "@/components/custom/host_header";
import NavBar from "@/components/custom/navbar";
import Main from "../../../components/custom/Main";

export default function Page() {
  return (
    <div className="mt-20">
      <HostHeader />
      <NavBar />
      <Main />
      <Footer id="footer" />
    </div>
  );
}
