import Image from "next/image"
import ReadMore from "../read-more"



function MyFooter() {

    return (
        <>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

                <div className="w-full p-2 border-t mt-60 cursor-pointer">
                    <ReadMore/>
                </div>

            </footer>
        </>
    )
}


export default MyFooter