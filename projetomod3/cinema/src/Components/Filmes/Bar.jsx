function Bar() {
  const bar = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#000000',
    padding: '30px 10%',
    marginTop: '40px'
  }
  return (
    <div>
      <h3 style={bar}>Filmes em cartaz:</h3>
    </div>
  )
}

export default Bar
