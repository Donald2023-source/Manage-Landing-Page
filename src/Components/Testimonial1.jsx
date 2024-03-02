import Anisha from '../assets/avatar-anisha.png'
const Testimonial1 = () => {
    return(
        <>
        
        <div>  
                <div className="card bg-gray-100 w-96 flex flex-col items-center gap-7 px-5">
                   <img className="w-16" src={Anisha} alt="" />
                   <h4 className="font-bold">Anisha Li</h4>

                   <div>
                    <p className="text-center">
                    Manage has superchanged our team work flow. It helps maintain visibility on larger milestone at all times and keeps everyone motivated
                    </p>
                   </div>
                </div>
        </div>

        </>
    )
}
export default Testimonial1