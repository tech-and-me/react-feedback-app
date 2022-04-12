import PropTypes from 'prop-types';

const Header = ({text,bgColor,textColor}) => {
    const headerStyles = {
        background:bgColor,
        color:textColor
    }

  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text : 'Feedback UI',
    bgColor: '#0f0f3e',
    textColor : 'pink'
}


Header.prototype = {
    text:PropTypes.string,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}

export default Header