import React from 'react'

const NewsLetter = () => {
    return (
        <div className=" " >
            <h3 className=" text-[#9F9F9F] font-medium mb-3 lg:mb-10">Newsletter</h3>
            <form className="flex max-lg:flex-col gap-2">
                <input
                    type="email"
                    required
                    placeholder="Enter Your Email Address"
                    className="border-b border-gray-400 outline-none flex-1 py-1 text-sm"
                />
                <button
                    type="submit"
                    className="text-sm font-bold border-b w-fit border-black hover:text-main transition"
                >
                    SUBSCRIBE
                </button>
            </form>
        </ div>
    )
}

export default NewsLetter