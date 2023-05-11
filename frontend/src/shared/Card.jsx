


const Card = ({hotel}) => {
    const { photo } = hotel

    return (
        <div className='tour__img'>
          <img src={photo} alt='' />
        </div>
    )
}

export default Card