import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from '@material-ui/core/Button'; 
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxSlider = () =>  {
  const [checked, setChecked] = React.useState(true);
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

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="App">
      <Slider {...settings}>
        <div>
          <Checkbox
            style={style}
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </div>
        <div>
          <FormControlLabel
            style={style}
            value="end"
            control={<Checkbox color="primary" />}
            label="End"
            labelPlacement="end"
          />
        </div>
      </Slider>
      <Button 
        style={{marginTop: 70}} 
        variant="outlined" 
        color="secondary" 
        href="https://material-ui.com/components/checkboxes/"
        target="_blank"
      >
        This items get!!
      </Button>
    </div>
  );
  }
 
  export default CheckboxSlider;