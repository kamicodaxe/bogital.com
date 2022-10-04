
const Process: React.FC<{}> = ({ }) => {

    return (
        <section className="bg-white text-coolGray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div
                            className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-teal-400">
                            <h2 className="focus:outline-none xl:text-4xl md:text-2xl text-xl font-extrabold mb-5 pt-4">Process</h2>
                            {/* <span className="text-sm font-bold tracking-wider uppercase dark:text-coolGray-400">Vestibulum diam nunc</span> */}
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div
                            className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-coolGray-700">
                            <div
                                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                                <h3 className="text-xl font-semibold tracking-wide">Donec porta enim vel </h3>
                                <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">Dec 2020</time>
                                <p className="mt-3">
                                    The cost depends on many factors. These factors may include; the number of pages, technologies used in
                                    the backend, hosting, private emails, design complexity, client skills etc... Write to us directly from
                                    our rapid contact form or call us (696835158) directly.
                                </p>
                            </div>
                            <div
                                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                                <h3 className="text-xl font-semibold tracking-wide">Aliquam sit amet nunc ut</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">Jul 2019</time>
                                <p className="mt-3">Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt
                                    nec nec dui. Donec mollis turpis eget egestas sodales.</p>
                            </div>
                            <div
                                className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-teal-400">
                                <h3 className="text-xl font-semibold tracking-wide">Pellentesque habitant morbi</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-coolGray-400">Jan 2016</time>
                                <p className="mt-3">Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet
                                    condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Process