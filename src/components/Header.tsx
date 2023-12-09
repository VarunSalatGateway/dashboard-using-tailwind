import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo/logo-icon.svg';
import LogoDarkTheme from '../images/logo/logo-dark.svg';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={Logo} className="w-10" alt="Logo" />
          </Link>
        </div>
        <div className="block xl:hidden"></div>
        <div className="hidden xl:block">
          <div className="flex gap-6">
            <NavLink
              to="/"
              className="flex group align-middle three-mili-sec-trans hover:text-black-2 dark:hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 25 25"
                fill="none"
                className="fill-[#D2D2D2] mt-[3px] mr-1 three-mili-sec-trans group-hover:fill-black-2 dark:group-hover:fill-white"
              >
                <path
                  d="M1.5625 22.6562C1.5625 23.9502 2.6123 25 3.90625 25H21.0938C22.3877 25 23.4375 23.9502 23.4375 22.6562V9.375H1.5625V22.6562ZM17.1875 13.0859C17.1875 12.7637 17.4512 12.5 17.7734 12.5H19.7266C20.0488 12.5 20.3125 12.7637 20.3125 13.0859V15.0391C20.3125 15.3613 20.0488 15.625 19.7266 15.625H17.7734C17.4512 15.625 17.1875 15.3613 17.1875 15.0391V13.0859ZM17.1875 19.3359C17.1875 19.0137 17.4512 18.75 17.7734 18.75H19.7266C20.0488 18.75 20.3125 19.0137 20.3125 19.3359V21.2891C20.3125 21.6113 20.0488 21.875 19.7266 21.875H17.7734C17.4512 21.875 17.1875 21.6113 17.1875 21.2891V19.3359ZM10.9375 13.0859C10.9375 12.7637 11.2012 12.5 11.5234 12.5H13.4766C13.7988 12.5 14.0625 12.7637 14.0625 13.0859V15.0391C14.0625 15.3613 13.7988 15.625 13.4766 15.625H11.5234C11.2012 15.625 10.9375 15.3613 10.9375 15.0391V13.0859ZM10.9375 19.3359C10.9375 19.0137 11.2012 18.75 11.5234 18.75H13.4766C13.7988 18.75 14.0625 19.0137 14.0625 19.3359V21.2891C14.0625 21.6113 13.7988 21.875 13.4766 21.875H11.5234C11.2012 21.875 10.9375 21.6113 10.9375 21.2891V19.3359ZM4.6875 13.0859C4.6875 12.7637 4.95117 12.5 5.27344 12.5H7.22656C7.54883 12.5 7.8125 12.7637 7.8125 13.0859V15.0391C7.8125 15.3613 7.54883 15.625 7.22656 15.625H5.27344C4.95117 15.625 4.6875 15.3613 4.6875 15.0391V13.0859ZM4.6875 19.3359C4.6875 19.0137 4.95117 18.75 5.27344 18.75H7.22656C7.54883 18.75 7.8125 19.0137 7.8125 19.3359V21.2891C7.8125 21.6113 7.54883 21.875 7.22656 21.875H5.27344C4.95117 21.875 4.6875 21.6113 4.6875 21.2891V19.3359ZM21.0938 3.125H18.75V0.78125C18.75 0.351562 18.3984 0 17.9688 0H16.4062C15.9766 0 15.625 0.351562 15.625 0.78125V3.125H9.375V0.78125C9.375 0.351562 9.02344 0 8.59375 0H7.03125C6.60156 0 6.25 0.351562 6.25 0.78125V3.125H3.90625C2.6123 3.125 1.5625 4.1748 1.5625 5.46875V7.8125H23.4375V5.46875C23.4375 4.1748 22.3877 3.125 21.0938 3.125Z"
                  fill=""
                />
              </svg>
              Appointments
            </NavLink>
            <NavLink
              to="/"
              className="flex group align-middle three-mili-sec-trans dark:hover:text-white hover:text-black-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 25 25"
                fill="none"
                className="fill-[#D2D2D2] three-mili-sec-trans dark:group-hover:fill-white mt-[3px] mr-1 group-hover:fill-black-2"
              >
                <path
                  d="M24.8489 11.8663C22.4952 7.27389 17.8355 4.16669 12.5 4.16669C7.16447 4.16669 2.50345 7.27606 0.151018 11.8668C0.0517306 12.0632 0 12.2802 0 12.5002C0 12.7203 0.0517306 12.9373 0.151018 13.1337C2.50475 17.7261 7.16447 20.8334 12.5 20.8334C17.8355 20.8334 22.4965 17.724 24.8489 13.1333C24.9482 12.9369 25 12.7199 25 12.4998C25 12.2797 24.9482 12.0627 24.8489 11.8663ZM12.5 18.75C11.2638 18.75 10.0555 18.3835 9.02766 17.6967C7.99985 17.0099 7.19878 16.0338 6.72573 14.8918C6.25268 13.7498 6.12891 12.4931 6.37007 11.2807C6.61123 10.0683 7.20648 8.95468 8.08056 8.0806C8.95464 7.20652 10.0683 6.61127 11.2807 6.37011C12.493 6.12895 13.7497 6.25273 14.8917 6.72577C16.0338 7.19882 17.0099 7.9999 17.6967 9.02771C18.3834 10.0555 18.75 11.2639 18.75 12.5C18.7504 13.3209 18.589 14.1338 18.275 14.8923C17.9611 15.6507 17.5007 16.3399 16.9203 16.9203C16.3398 17.5008 15.6507 17.9611 14.8922 18.2751C14.1338 18.589 13.3208 18.7504 12.5 18.75ZM12.5 8.33335C12.1281 8.33855 11.7586 8.39388 11.4015 8.49785C11.6958 8.89788 11.8371 9.39016 11.7996 9.88541C11.7621 10.3807 11.5484 10.8461 11.1972 11.1973C10.846 11.5485 10.3806 11.7622 9.88537 11.7997C9.39012 11.8371 8.89784 11.6959 8.49781 11.4015C8.27001 12.2407 8.31113 13.1303 8.61538 13.9449C8.91962 14.7595 9.47167 15.4583 10.1938 15.9427C10.916 16.4272 11.7719 16.673 12.641 16.6455C13.5102 16.618 14.3489 16.3187 15.039 15.7897C15.7291 15.2606 16.236 14.5284 16.4882 13.6962C16.7404 12.864 16.7253 11.9736 16.445 11.1504C16.1647 10.3273 15.6333 9.61271 14.9256 9.10736C14.2179 8.60201 13.3696 8.33131 12.5 8.33335Z"
                  fill=""
                />
              </svg>
              View Consultations
            </NavLink>
            <NavLink
              to="/"
              className="flex group align-middle three-mili-sec-trans dark:hover:text-white hover:text-black-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 25 25"
                fill="none"
                className="fill-[#D2D2D2] three-mili-sec-trans dark:hover:text-white mt-[3px] mr-1 group-hover:fill-black-2 dark:group-hover:fill-white"
              >
                <path
                  d="M21.0938 1.5625H3.90625C2.6123 1.5625 1.5625 2.6123 1.5625 3.90625V21.0938C1.5625 22.3877 2.6123 23.4375 3.90625 23.4375H21.0938C22.3877 23.4375 23.4375 22.3877 23.4375 21.0938V3.90625C23.4375 2.6123 22.3877 1.5625 21.0938 1.5625ZM19.5312 13.8672C19.5312 14.1895 19.2676 14.4531 18.9453 14.4531H14.4531V18.9453C14.4531 19.2676 14.1895 19.5312 13.8672 19.5312H11.1328C10.8105 19.5312 10.5469 19.2676 10.5469 18.9453V14.4531H6.05469C5.73242 14.4531 5.46875 14.1895 5.46875 13.8672V11.1328C5.46875 10.8105 5.73242 10.5469 6.05469 10.5469H10.5469V6.05469C10.5469 5.73242 10.8105 5.46875 11.1328 5.46875H13.8672C14.1895 5.46875 14.4531 5.73242 14.4531 6.05469V10.5469H18.9453C19.2676 10.5469 19.5312 10.8105 19.5312 11.1328V13.8672Z"
                  fill=""
                />
              </svg>
              Create Consultations
            </NavLink>
          </div>
          {/* <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <button className="absolute top-1/2 left-0 -translate-y-1/2">
                <svg
                  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                    fill=""
                  />
                </svg>
              </button>

              <input
                type="text"
                placeholder="Type to search..."
                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
              />
            </div>
          </form> */}
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            <DarkModeSwitcher />
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
