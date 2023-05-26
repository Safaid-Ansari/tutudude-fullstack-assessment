import "./App.css";
import Header from "./components/Header";
import ReferAndEarn from "./components/ReferAndEarn";
import WithdrawCard from "./components/WithdrawCard";
import ReferralCode from "./components/ReferralCode";
import WorkingDescription from "./components/WorkingDescription";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Header></Header>
      <ReferAndEarn></ReferAndEarn>
      <WithdrawCard></WithdrawCard>
      <ReferralCode></ReferralCode>
      <WorkingDescription></WorkingDescription>
      <Footer></Footer>
    </div>
  );
}

export default App;
