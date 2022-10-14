
const CTA: React.FC<{}> = ({ }) => {

    return (
        <div className="w-full bg-coolGray-500 bg-[url('https://source.unsplash.com/xkArbdUcUeE/640x480')] bg-center bg-cover bg-blend-multiply">
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h2 className="focus:outline-none xl:text-4xl md:text-2xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4">
                    Dévis Gratuit
                </h2>

                <div className="py-4"></div>
                <button type="button"
                    className="px-8 py-3 m-2 text-lg border rounded text-white bg-teal-400 border-teal-400 hover:bg-teal-500 hover:border-teal-500  text-coolGray-50 border-coolGray-700">
                    Demandez un devis
                </button>
            </div>
        </div>
    )
}


export default CTA