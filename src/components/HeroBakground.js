
function HeroBakground(props) {
    const { backgroundImage, title } = props;
  
    const divStyle = {
      backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    //   color: '#fff',
      height: '50vh'

      
    //   top: '-30px'
    };
  
    return (
      <div>
        <div className="HeroBackgroundTitle" style={divStyle}>
          <h1 className="class-hero">{title}</h1>
        </div>
      </div>
    );
  }
  
  export default HeroBakground;