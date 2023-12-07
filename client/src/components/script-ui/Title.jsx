import PropType from "prop-types"

const Title = ({children, styles}) => {
  return (
    <h1 className={`font-bold text-xl ${styles}`}>
        {children}
    </h1>
  )
}

Title.propTypes = {
    children: PropType.string,
    styles: PropType.string
}

export default Title