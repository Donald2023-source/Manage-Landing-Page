import Ali from '../assets/avatar-ali.png'
const Testimonial2 = () => {
    return(
        <>
        
        <div>  
                <div className="card bg-gray-100 w-96 flex flex-col items-center gap-7 px-5">
                   <img className="w-16" src={Ali} alt="" />
                   <h4 className="font-bold">Ali Bravo</h4>

                   <div>
                    <p className="text-center">
                        We have been able to cancel all other subscription since using manage. There is no more cross-channel confusion and everyone is much more confused
                    </p>
                   </div>
                </div>
        </div>

        </>
    )
}
export default Testimonial2