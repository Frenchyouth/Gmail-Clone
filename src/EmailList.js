import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title="Apple"
          subject="Try these products"
          description="New mac books on sale!"
          time="8 am"
        />
        <EmailRow
          title="Chrome"
          subject="New updates availble to download"
          description="Stay updated with the your browser"
          time="9 pm"
        />
        <EmailRow
          title="Ebay"
          subject="Lots of products on sale"
          description="TView products on sale!"
          time="9 pm"
        />
        <EmailRow
          title="Indeed"
          subject="New developer jobs just posted"
          description="Senior React developers needed"
          time="9 pm"
        />{" "}
        <EmailRow
          title="Walmart"
          subject="Walmart weekend sale"
          description="Come while we are still on sale"
          time="9 pm"
        />
        <EmailRow
          title="Medical Inc"
          subject="Your test reslts"
          description="Your results are looking good"
          time="11 pm"
        />{" "}
        <EmailRow
          title="Car Insurance"
          subject="Get covered"
          description="Need car insurance? sign up today"
          time="11 pm"
        />
        <EmailRow
          title="Wells Fargo"
          subject="Low loan interest rates"
          description="memorial day low interest rates"
          time="11 pm"
        />{" "}
        <EmailRow
          title="Fitness Inc"
          subject="Start your fitness today"
          description="Need to lose weight?"
          time="11 pm"
        />
        <EmailRow
          title="Shoe carnival"
          subject="New sneakers"
          description="Nike, Puma , Adidas, Jordan and much more"
          time="11 pm"
        />{" "}
        <EmailRow
          title="Street Concert"
          subject="Enter fora chance to win"
          description="$5000 winning prize"
          time="11 pm"
        />
        <EmailRow
          title="Netflix"
          subject="New trending movies"
          description="Trending movies for this week"
          time="11 pm"
        />{" "}
        <EmailRow
          title="HBO"
          subject="Please subcribe to start watching movies"
          description="Watch thousands of movies after signing up"
          time="11 pm"
        />
        <EmailRow
          title="ESPN"
          subject="Watch Manchester City vs PSG"
          description="Semi finals"
          time="11 pm"
        />{" "}
        <EmailRow
          title="Smootie King"
          subject="Please give a feedback from your visit"
          description="How was your smootie today?"
          time="11 pm"
        />
        <EmailRow
          title="Doordash"
          subject="How would you rate your delivery today?"
          description="TWould you recommend us?"
          time="11 pm"
        />{" "}
        <EmailRow
          title="Amazon"
          subject="New arrivals you should see"
          description="Try these!"
          time="11 pm"
        />
     <EmailRow
          title="Apple"
          subject="New gadgets in town"
          description="Lastest apple products"
          time="11 pm"
        />
        <EmailRow
          title="Google"
          subject="Your May timeline"
          description="These are the places you traveled in MAy"
          time="12 pm"
        />
        <EmailRow
          title="Ebay"
          subject="Low prices, quality products"
          description="Place a bid to enter"
          time="12 pm"
        />
        <EmailRow
          title="Indeed"
          subject="New NodeJs developers needed"
          description="Starting at $90,000 per year"
          time="12 pm"
        />{" "}
        <EmailRow
          title="Walmart"
          subject="New arrivals"
          description="Be the first to try these new products"
          time="12 pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
