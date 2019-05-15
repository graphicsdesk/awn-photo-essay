import React, { Component } from 'react';
import { Scrollama, Step } from 'react-scrollama';
import injectSheet from 'react-jss';

const SCROLLAMA_OFFSET = window.innerWidth > 575 ? 0.5 : 0.8;

const imgStyles = {
  position: 'absolute',
  maxWidth: '95%',
  maxHeight: '93%',
  transitionDuration: '.6s',
  boxShadow: '-1px 3px 10px -1px rgba(0,0,0,0.75)',
};

const styles = {
  main: {
    padding: '0 15px',
    marginBottom: '2rem',
    fontFamily: 'Helvetica',
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
    flexBasis: '35%',
    padding: '70vh 0 20vh 0',
  },
  step: {
    margin: '0 auto',
    maxWidth: '500px',
    padding: '10px',
    marginBottom: '80vh',
  },
  artistName: {
    fontFamily: 'Merriweather',
    fontSize: '1.1rem',
    fontWeight: 700,
    margin: '0',
  },
  text: {
    fontFamily: 'Merriweather',
    fontSize: '1.05rem',
    margin: '1.2rem 0 1rem 0',
    lineHeight: '1.7',
  },
  credit: {
    color: '#aaa',
    fontSize: '0.8rem',
    margin: '0 2rem 1rem 0',
    borderTop: '0.8px solid #ddd',
    paddingTop: '0.8rem',
    fontWeight: '20px',
    fontFamily: 'Open Sans',
  },

  '@media (max-width: 575px)': {
    main: {
      flexDirection: 'column',
    },
    scroller: {
      paddingTop: 0,
      zIndex: '1',
    },
    step: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    credit: {
      color: 'black',
      borderTop: '0.8px solid #ddd',
      borderColor: 'black',
      fontSize: '0.6rem',
    },
    text: {
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: '1rem',
    },
    artistName: {
      textAlign: 'center',
      paddingTop: '1rem',
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
              {value.split('[NEWLINE]').map(text => (
                <p className={classes.text} key={text}>
                  {text.trim()}
                </p>
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
        <div className={classes.graphic}>
          {this.images.map(src => (
            <img
              key={src}
              className={
                image === src ? classes.img : classes.hideImg
              }
              src={src}
            />
          ))}
        </div>
        <div className={classes.scroller}>
          <Scrollama
            offset={SCROLLAMA_OFFSET}
            onStepEnter={this.onStepEnter}
          >
            {this.steps}
          </Scrollama>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(Graphic);
