"use client";
import Link from "next/link";


const Navbar  = () => {

    return (
        <header className="w-full sticky bg-white top-0 left-0 z-50">
            <section className="border-b border-gray bg-black text-white">
                <div className="contain flex justify-between items-center text-sm py-1 font-medium">
                    {/* Currency Change */}
                    <div className="flex items-center gap-4">
                        <div>NGN</div>
                        <p>Customer Care</p>
                    </div>
                    {/* Register/Login */}
                    <div className="underline flex gap-2 items-center cursor-pointer w-max font-semibold">
                        <svg className="size-4" fill="#000000" viewBox="0 0 30 30" id="_03_-_Account" data-name="03 - Account" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="Path_217" data-name="Path 217" d="M16,1a8,8,0,1,0,8,8A8,8,0,0,0,16,1Zm0,2a6,6,0,1,1-6,6A6,6,0,0,1,16,3Z" transform="translate(-1 -1)" fill-rule="evenodd"></path> <path id="Path_218" data-name="Path 218" d="M16,19.2c-5.657,0-10.558,1.175-13,2.82A3.865,3.865,0,0,0,1,25.1a3.865,3.865,0,0,0,2,3.08C5.442,29.825,10.343,31,16,31s10.558-1.175,13-2.82a3.865,3.865,0,0,0,2-3.08,3.865,3.865,0,0,0-2-3.08C26.558,20.375,21.657,19.2,16,19.2Zm0,2a26.973,26.973,0,0,1,10.867,1.909,5.8,5.8,0,0,1,1.694,1.132,1.06,1.06,0,0,1,0,1.718,5.8,5.8,0,0,1-1.694,1.132A26.973,26.973,0,0,1,16,29,26.973,26.973,0,0,1,5.133,27.091a5.8,5.8,0,0,1-1.694-1.132,1.06,1.06,0,0,1,0-1.718,5.8,5.8,0,0,1,1.694-1.132A26.973,26.973,0,0,1,16,21.2Z" transform="translate(-1 -1)" fill-rule="evenodd"></path> </g></svg>
                        <p>REGISTER / LOGIN</p>
                    </div>
                </div>
            </section>
            <section className="border-b border-gray py-2">
                <div className="contain grid grid-cols-3 items-center">
                    <div>
                        <div className="border border-gray rounded-md bg-transparent flex gap-4 items-center w-max p-1">
                            <svg className="size-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#A9A9A9" fill-rule="evenodd" d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z"></path> </g></svg>
                            <input className="bg-transparent outline-none border-none placeholder-shown:text-sm placeholder-shown:text-gray" placeholder="Search" type="text" name="search" id="search" />
                        </div>
                    </div>
                    <h2 className="font-primary font-semibold text-2xl text-center md:text-3xl">AMURE</h2>
                    <section className="justify-end flex items-center gap-8">
                        {/* Favorites */}
                        <svg className="size-5" fill="#000000" height="200px" width="200px" version="1.1" id="XMLID_298_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="favorite"> <path d="M12,23.2l-0.6-0.5C8.7,20.7,0,13.5,0,7.3C0,3.8,2.9,1,6.5,1c2.2,0,4.3,1.1,5.5,2.9l0,0l0,0C13.2,2.1,15.3,1,17.5,1 C21.1,1,24,3.8,24,7.3c0,6.3-8.7,13.4-11.4,15.5L12,23.2z M6.5,2.9C4,2.9,2,4.8,2,7.2c0,4.1,5.1,9.5,10,13.4 c4.9-3.9,10-9.3,10-13.4c0-2.4-2-4.3-4.5-4.3c-1.6,0-3,0.8-3.8,2L12,7.6L10.3,5C9.5,3.7,8.1,2.9,6.5,2.9z"></path> </g> </g></svg>
                        {/* Cart */}
                        <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C10.3432 3 9.00005 4.34315 9.00005 6H15C15 4.34315 13.6569 3 12 3ZM7.00005 6C7.00005 3.23858 9.23863 1 12 1C14.7615 1 17 3.23858 17 6H16.3441C16.7794 6.00005 17.1599 6.0013 17.4791 6.026C17.8369 6.05369 18.1919 6.11475 18.5417 6.27628C19.0471 6.50961 19.4776 6.87893 19.785 7.34294C19.9979 7.66418 20.1122 8.00569 20.194 8.35514C20.2709 8.68375 20.3324 9.08359 20.4031 9.54318L20.8541 12.4751C21.0468 13.7273 21.2014 14.7319 21.2546 15.5469C21.3091 16.3818 21.2669 17.1241 20.9938 17.8221C20.5817 18.8752 19.8247 19.7575 18.8465 20.325C18.1981 20.7011 17.4709 20.8556 16.6375 20.9287C15.8239 21 14.8074 21 13.5406 21H10.4595C9.19267 21 8.17621 21 7.36265 20.9287C6.52917 20.8556 5.80196 20.7011 5.15361 20.325C4.17539 19.7575 3.41842 18.8752 3.00631 17.8221C2.73317 17.1241 2.69104 16.3818 2.74554 15.5469C2.79873 14.732 2.9533 13.7273 3.14594 12.4752L3.59703 9.54315C3.66772 9.08358 3.72921 8.68375 3.80611 8.35514C3.88789 8.00569 4.0022 7.66418 4.21506 7.34294C4.52251 6.87893 4.953 6.50961 5.45837 6.27628C5.80824 6.11475 6.16316 6.05369 6.52098 6.026C6.84022 6.0013 7.22073 6.00005 7.656 6H7.00005ZM6.67528 8.02004C6.43801 8.0384 6.34578 8.06944 6.29671 8.09209C6.12826 8.16987 5.98476 8.29298 5.88228 8.44765C5.85243 8.4927 5.80772 8.57914 5.7535 8.81085C5.69635 9.05506 5.64603 9.3776 5.56836 9.88243L5.12984 12.7328C4.9284 14.0422 4.7881 14.9601 4.74129 15.6772C4.69513 16.3844 4.74974 16.789 4.86878 17.0932C5.11605 17.7251 5.57023 18.2545 6.15717 18.595C6.43973 18.7589 6.83136 18.8744 7.53736 18.9363C8.25323 18.9991 9.18181 19 10.5066 19H13.4935C14.8183 19 15.7469 18.9991 16.4627 18.9363C17.1687 18.8744 17.5604 18.7589 17.8429 18.595C18.4299 18.2545 18.884 17.7251 19.1313 17.0932C19.2504 16.789 19.305 16.3844 19.2588 15.6772C19.212 14.9601 19.0717 14.0422 18.8703 12.7328L18.4317 9.88243C18.3541 9.37761 18.3037 9.05507 18.2466 8.81085C18.1924 8.57914 18.1477 8.4927 18.1178 8.44765C18.0153 8.29298 17.8718 8.16987 17.7034 8.09209C17.6543 8.06944 17.5621 8.0384 17.3248 8.02004C17.0748 8.00069 16.7483 8 16.2376 8H7.76255C7.25178 8 6.92534 8.00069 6.67528 8.02004Z" fill="#0F1729"></path> </g></svg>
                    </section>
                </div>
            </section>
            {/* discount advertisement/ Informations  */}
            <section className="bg-secondary text-white text-sm p-1">
                <p className="text-center">Informations and Discounts Annoucements or sales</p>
            </section>
            <section className=" bg-white border-b border-gray py-2">
                <nav className="contain">
                    <ul className="font-semibold text-xs uppercase flex items-center justify-center gap-4">
                        <li><Link href={'/'}> New Arrival </Link></li>
                        <li><Link href={'/'}> Clothing </Link></li>
                        <li><Link href={'/'}> Best Sellers </Link></li>
                        <li><Link href={'/'}> Shoes </Link></li>
                        <li><Link href={'/'}> Bags </Link></li>
                        <li><Link href={'/'}> Sales </Link></li>
                        <li><Link href={'/'}> Other Categories </Link></li>
                        <li><Link href={'/'}> Reviews </Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}

export default Navbar;