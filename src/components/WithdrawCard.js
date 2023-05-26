import React from "react";
import "../styles/WithdrawCard.css";
function WithdrawCard() {
  return (
    <>
      <div className="Card">
        <div className="referral_earning">
          <h5>Referral Earning</h5>
          <h4>₹ 2,500</h4>
        </div>
        <div className="total_earning">
          <h5>Total Referrals</h5>
          <h4>7</h4>
        </div>
        <div className="wallet_balance">
          <h5>Wallet Balance</h5>
          <h4>₹ 500</h4>
        </div>
        <div className="withdraw_balance">
          <h4>Withdraw Balance</h4>
        </div>
      </div>
    </>
  );
}

export default WithdrawCard;
