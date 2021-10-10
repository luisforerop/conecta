const MyDescription = props => {
  const { phone, email, address, city } = props
  return(
    <>
      <div>
        Teléfono: {phone}
      </div>
      <div>
        Email: {email}
      </div>
      <div>
        Dirección: {address}
      </div>
      <div>
        Ciudad: {city}
      </div>
    </>
  )
}

export default MyDescription