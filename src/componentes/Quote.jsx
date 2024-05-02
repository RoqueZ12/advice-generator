import '../sass/quote.scss'
const ListQuote = ({apis}) =>
{
  return(
    <div>
      {
       apis.map((api)=>(
        <div key={api.id} className='quote'>
          <div className='quote-top'>
            <span>ADVICE  #{api.id}</span>
          </div>
          <div className='quote-mid'>
            <p>"{api.advice}"</p>
          </div>         
        </div>
       ))
      
      }
    </div>
  )
}

const NoList = ()=>{
  return(
    <p>No hay Data</p>
  )
}

const Quote = ({ apis, isLoading }) => {
  if (isLoading) {
    return <p>Cargando...</p>;
  }

  const hasData = apis !== null && typeof apis === "object";

  return (
    <>
      {hasData ? (
        <ListQuote apis={[apis]} />
      ) : (
        <NoList />
      )}
    </>
  );
};


export {Quote}