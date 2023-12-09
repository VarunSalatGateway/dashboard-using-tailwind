import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import UserOne from '../images/user/user-01.png';
import UserTwo from '../images/user/user-02.png';
import UserThree from '../images/user/user-03.png';
import UserFour from '../images/user/user-04.png';

const DropdownMessage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <li
      className="relative block md:hidden"
      x-data="{ dropdownOpen: false, notifying: true }"
    >
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
        to="#"
      >
        <svg
          className="fill-current duration-300 ease-in-out"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9937H9.3376C8.80322 12.9937 8.35322 13.4437 8.35322 13.9781V15.0187C3.6001 12.825 1.74385 10.8 1.74385 7.9312C1.74385 5.14683 4.10635 2.8687 7.03135 2.8687H10.9688C13.8657 2.8687 16.2563 5.14683 16.2563 7.9312C16.2563 10.7156 13.8657 12.9937 10.9688 12.9937Z"
            fill=""
          />
          <path
            d="M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z"
            fill=""
          />
          <path
            d="M9.00015 7.28442C8.63452 7.28442 8.35327 7.56567 8.35327 7.9313C8.35327 8.29692 8.63452 8.57817 9.00015 8.57817C9.33765 8.57817 9.64702 8.29692 9.64702 7.9313C9.64702 7.56567 9.33765 7.28442 9.00015 7.28442Z"
            fill=""
          />
          <path
            d="M12.5719 7.28442C12.2063 7.28442 11.925 7.56567 11.925 7.9313C11.925 8.29692 12.2063 8.57817 12.5719 8.57817C12.9375 8.57817 13.2188 8.29692 13.2188 7.9313C13.2188 7.56567 12.9094 7.28442 12.5719 7.28442Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-16 mt-2.5 flex h-50 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">Other Links</h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto">
          <li>
            <NavLink
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              to="/messages"
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
          </li>
          <li>
            <NavLink
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              to="/messages"
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
          </li>
          <li>
            <NavLink
              className="flex gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
              to="/messages"
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
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </li>
  );
};

export default DropdownMessage;
