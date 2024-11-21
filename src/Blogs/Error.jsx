import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center m-auto mt-56">Error 404 !!!</h1>
      <p className="text-center pt-3 text-lg">This page does not exists or you may given wrong input</p>
      <Link to="/"><p className='text-center font-semibold text-xl mt-20 text-blue-500 underline'>Go back to the Home Page...</p></Link>
    </div>
  )
}
