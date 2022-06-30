import React from 'react';

const Nav = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">


            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-lg  lg:flex-grow">
                    <a href="#responsive-header" class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-8">
                        Completed Tasks
                    </a>
                    <a href="#responsive-header" class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-teal-100 hover:text-white mr-8">
                        To-Do
                    </a>
                    <a href="#responsive-header" class="block mt-4 font-semibold lg:inline-block lg:mt-0 text-teal-100 hover:text-white">
                        Calendar
                    </a>
                </div>

            </div>
        </nav>
    );
};

export default Nav;