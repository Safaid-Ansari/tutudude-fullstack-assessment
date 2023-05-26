import React from "react";
import "../styles/WorkingDescription.css";
import friendsVector from "../images/friends.png";
import rupee from "../images/rupee.png";
import wallet from "../images/wallet.png";
import coursePurchase from "../images/coursePurchase.png";
import reward from "../images/reward.png";

function WorkingDescription() {
  return (
    <>
      <div className="container">
        <div className="how_works">How does it work ?</div>
        <div className="friends">
          <div className="friends_logo">
            <img src={friendsVector} alt="friendsVector"></img>
          </div>
          <div className="inviteFriends">Invite your Friends</div>
          <div className="description">
            Share the link tutedude.com with your friends
          </div>
        </div>
        <div className="rupee">
          <div className="rupee_logo">
            <img src={rupee} alt="friendsVector"></img>
          </div>
          <div className="rupee_friend">You get ₹ 200 as referral money</div>
          <div className="description">
            On total purchase the friend makes, into your wallet
          </div>
        </div>

        <div className="wallet">
          <div className="wallet_logo">
            <img src={wallet} alt="friendsVector"></img>
          </div>
          <div className="walletFriends">Transfer money from wallet</div>
          <div className="description">
            When the wallet balance reaches ₹200 or more, you can withdraw it
          </div>
        </div>

        <div className="coursePurchase">
          <div className="course_logo">
            <img src={coursePurchase} alt="friendsVector"></img>
          </div>
          <div className="courseFriends">Friend purchases any course</div>
          <div className="description">
            Using your REFERRAL CODE in the payments page
          </div>
        </div>

        <div className="reward">
          <div className="reward_logo">
            <img src={reward} alt="friendsVector"></img>
          </div>
          <div className="rewardFriends">Your Friend gets ₹ 200 Off</div>
          <div className="description">
            On his overall fee on successful purchase using your referral code
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkingDescription;
