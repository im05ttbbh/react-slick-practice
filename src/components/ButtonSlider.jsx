import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles((theme) => ({
  root: {
    // '& > *': {
    //   // margin: theme.spacing(1),
    // },
  },
}));

const ButtonSlider = () =>  {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const style = {
    marginTop: 250,
    marginBottom: 30,
  };  
  return (
    <div className="App">
      <Slider {...settings}>
        <div>
          <Button style={style} variant="contained">Default</Button>
        </div>
        <div>
          <Button style={style} color="secondary">Secondary</Button>
        </div>
      </Slider>
      <Button 
        style={{marginTop: 70}} 
        variant="outlined" 
        color="secondary" 
        href="https://material-ui.com/components/buttons/#text-buttons"
        target="_blank"
      >
        This items get!!
      </Button>
    </div>
  );
  }
 
  export default ButtonSlider;