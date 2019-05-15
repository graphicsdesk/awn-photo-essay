import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';
import stickybits from 'stickybits';

import Navbar from './Navbar';
import Header from './Header';

const STICKY_ID = 'make-me-rad-n-sticky';
stickybits('#' + STICKY_ID);
const SCROLLAMA_OFFSET = window.innerWidth > 575 ? 0.5 : 0.8;

const imgStyles = {
  position: 'absolute',
  maxWidth: '95%',
  maxHeight: '93%',
  transitionDuration: '.6s',
  // boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.75)',
};

const styles = {
  main: {
    padding: '0 15px',
    fontFamily: 'Minion Pro',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  graphic: {
    transform: 'translate3d(0, 0, 0)',
    flexBasis: '60%',
    position: 'sticky',
    width: '100%',
    height: '100vh',
    top: 0,
    alignSelf: 'flex-start',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    ...imgStyles,
    visibility: 'visible',
    opacity: 1,
  },
  hideImg: {
    ...imgStyles,
    visibility: 'hidden',
    opacity: 0,
  },
  scroller: {
    flexBasis: '40%',
    position: 'relative',
  },
  step: {
    margin: '0 auto',
    maxWidth: '420px',
    padding: '17px',
    marginBottom: '80vh',
  },
  text: {
    fontFamily: 'Minion Pro',
    fontSize: '1.15rem',
    margin: '1.2rem 0 1rem 0',
    lineHeight: '1.8',
  },

  '@media (max-width: 767px)': {
    main: {
      display: 'block',
    },
    scroller: {
      paddingTop: 0,
      zIndex: '1',
      transform: 'translateY(-100vh)',
    },
    step: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    hideImg: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
    text: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '1rem',
    },
  },
};

class Graphic extends Component {
  constructor(props) {
    super(props);
    const { classes, slides } = props;

    this.images = [];

    let currentImg = null;
    this.steps = slides.reduce((acc, { type, value }) => {
      if (type === 'image') {
        this.images.push((currentImg = value));
      } else if (type === 'text') {
        acc.push(
          <Step data={currentImg} key={value}>
            <div className={classes.step}>
              {value
                .split('[NEWLINE]')
                .map(text => (
                  <p
                    className={classes.text}
                    key={text}
                    dangerouslySetInnerHTML={{ __html: text.trim() }}
                  />
                ))}
            </div>
          </Step>,
        );
      }
      return acc;
    }, []);

    this.state = {
      image: this.images[0],
    };
  }

  onStepEnter = ({ data: image }) => {
    this.setState({ image });
  };

  render() {
    const { image } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <Navbar />
        <div className={classes.graphic}>
          {this.images.map(src => (
            <img
              key={src}
              className={image === src ? classes.img : classes.hideImg}
              src={src}
            />
          ))}
        </div>
        <div className={classes.scroller}>
          <Header />
          <Scrollama offset={SCROLLAMA_OFFSET} onStepEnter={this.onStepEnter}>
            {this.steps}
          </Scrollama>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Graphic);
