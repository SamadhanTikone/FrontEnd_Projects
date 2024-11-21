import { HashLoader } from 'react-spinners';

export default function Loading() {

  
  return (
    <div>
      <h1 className="flex justify-center items-start mt-48 h-screen "><HashLoader color={"#fff"} loading={true} size={75} />
      </h1>
    </div>
  )
}
