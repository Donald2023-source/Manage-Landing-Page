const Footer =() => {

    const myStyle = {
        backgroundColor: 'hsl(233, 12%, 13%)',
        color: 'white'
    } 

    return(
        <>
        <div className="grid grid-cols-1 place-items-center gap-8 lg:flex lg:justify-around p-20 h-fit lg:h-[17rem]" style={myStyle}>
            <div>

                <span className="flex mt-12 gap-4">
                    <img src="src/images/icon-facebook.svg" alt="" />
                    <img src="src/images/icon-youtube.svg" alt="" />
                    <img src="src/images/icon-twitter.svg" alt="" />
                    <img src="src/images/icon-pinterest.svg" alt="" />
                    <img src="src/images/icon-instagram.svg" alt="" />
                </span>
            </div>

            <div className="flex items-center gap-[7rem]">
                <span>
                <ul>
                    <li className="py-3"><a href="">Home</a></li>
                    <li className="py-3"><a href="">Pricing</a></li>
                    <li className="py-3"><a href="">Products</a></li>
                    <li className="py-3"><a href="">About Us</a></li>
                </ul>
                </span>

                <span> 
                    <ul className="no-underline list-none"> 
                        <li className="py-3"><a href="">Careers</a></li>
                        <li className="py-3"><a href="">Community</a></li>
                        <li className="py-3"><a href="">Privacy Policy</a></li>
                    </ul >
                </span>
            </div>

            <div className="flex gap-8 lg:flex items-center lg:gap-8">
                <input className="bg-white p-4 rounded-2xl" type="text" placeholder="Upadates in your inbox"/>
                <button className="p-4 bg-orange-600 rounded-[40%] w-16">Go</button>
            </div>
        </div>
        </>
    )
}
export default Footer