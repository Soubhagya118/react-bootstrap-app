import React from 'react';
import classes from './Home.module.css';
import Generic from '../Generic/Generic';
import { Card,Button } from 'react-bootstrap';


const Home = () => {
  return (
    <>
  <Generic>
  <button className={classes.latestAlbum}>Get our Latest Album</button>
  <button className={classes.playBtn}>►</button>
  </Generic>

{/* ===============================Home Body====================================== */}
<section id={classes.tour}>
<h2 className={classes.tourTitle}>TOUR</h2>
<div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>JUL16</span>
                <span className={classes.tourPlace}>DETROIT, MI</span>
                <span className={classes.tourSpecPlace}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>JUL19</span>
                <span className={classes.tourPlace}>TORONTO,ON</span>
                <span className={classes.tourSpecPlace}>BUDWEISER STAGE</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>JUL 22</span>
                <span className={classes.tourPlace}> BRISTOW, VA</span>
                <span className={classes.tourSpecPlace}>JIGGY LUBE LIVE</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>JUL 29</span>
                <span className={classes.tourPlace}>PHOENIX, AZ</span>
                <span className={classes.tourSpecPlace}> AK-CHIN PAVILION</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>AUG 2</span>
                <span className={classes.tourPlace}>LAS VEGAS, NV</span>
                <span className={classes.tourSpecPlace}>T-MOBILE ARENA</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
            <div className={classes.tourItem}>
                <span className={classes.tourDate}>AUG 7</span>
                <span className={classes.tourPlace}>CONCORD, CA</span>
                <span className={classes.tourSpecPlace}> CONCORD PAVILION</span>
                <button className={classes.buyBtn}>BUY TICKETS</button>
            </div>
        </div></section>
    </>
  )
}

export default Home
