import Footer from "@/components/custom/footer";
import NavBar from "@/components/custom/navbar";
import UserHeader from "@/components/custom/user_header";
import Main from "../../../components/custom/Main";

export default function Page() {
  return (
    <div className="mt-20">
      <UserHeader />
      <NavBar />
      <Main />
      <Footer id="footer" />
    </div>
  );
}
