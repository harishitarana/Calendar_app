import React from "react";
import '../Home/home.css';
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import BasicM from "../modal/modal2.js";
import { Button } from "@mui/material";





export default function Home() {
  const [visible, setVisible] = React.useState(false);

  function click(e) {
    e.preventDefault();
    setVisible(true);
  }
  const [date, setDate] = useState(new Date());
  const [meeting, setmeeting] = useState();

  return (
    <>
      <Header />
      <div className='app'>
        <h1 className='text-center'>Schedule Meetings</h1>
        <div className='calendar-container'>

          <Button onClick={(e) => {
            click(e);
            setVisible(true);
          }}>ADD
            {visible && (
              <BasicM />
            )
            }
          </Button>

        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
      <Footer />

    </>);

}