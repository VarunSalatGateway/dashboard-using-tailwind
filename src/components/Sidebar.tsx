import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo.svg';
import LogoDarkTheme from '../images/logo/logo-dark.svg';

import SidebarLinkGroup from './SidebarLinkGroup';
import { useContext } from 'react';
import { themeContext } from '../context/theme';
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  const { theme } = useContext(themeContext);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-60 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-1 px-5 lg:py-5">
        <NavLink to="/">
          {theme == 'dark' ? (
            <img src={LogoDarkTheme} alt="Logo" />
          ) : (
            <img src={Logo} alt="Logo" />
          )}
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-4 py-4 px-4 lg:mt-7 lg:px-4">
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-2">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/"
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out dark:text-bodydark1 hover:bg-primary group hover:text-white dark:hover:bg-meta-4 ${
                    (pathname === '/' || pathname.includes('dashboard')) &&
                    'bg-primary text-white dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z"
                      fill=""
                    />
                    <path
                      d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z"
                      fill=""
                    />
                    <path
                      d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z"
                      fill=""
                    />
                    <path
                      d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z"
                      fill=""
                    />
                  </svg>
                  Dashboard
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}
              <li>
                <NavLink
                  to="/calendar"
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out hover:bg-primary group hover:text-white dark:hover:bg-meta-4 dark:text-bodydark1 ${
                    pathname.includes('calendar') &&
                    'bg-primary text-white dark:bg-meta-4'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 23 25"
                    fill="none"
                    className="fill-current"
                  >
                    <path
                      d="M14.106 0.584961C13.3105 0.218262 12.4331 0 11.5 0C8.87842 0 6.6416 1.61768 5.71338 3.90625H9.67773L14.106 0.584961ZM17.2866 3.90625C16.9009 2.95557 16.2773 2.13867 15.5049 1.48828L12.2808 3.90625H17.2866ZM11.5 12.5C14.9517 12.5 17.75 9.70166 17.75 6.25C17.75 5.98242 17.7036 5.72754 17.6714 5.46875H5.32861C5.2959 5.72754 5.25 5.98242 5.25 6.25C5.25 9.70166 8.04834 12.5 11.5 12.5ZM4.46875 14.6338V25H10.7314L5.92432 14.1836C5.42313 14.276 4.93457 14.4271 4.46875 14.6338ZM0.5625 22.6562C0.5625 23.9507 1.61182 25 2.90625 25V15.6367C1.48437 16.8403 0.5625 18.6162 0.5625 20.625V22.6562ZM13.0625 20.3125H10.3584L12.4419 25H13.0625C14.355 25 15.4062 23.9487 15.4062 22.6562C15.4062 21.3638 14.355 20.3125 13.0625 20.3125ZM15.875 14.0625H15.0591C13.9731 14.5596 12.77 14.8438 11.5 14.8438C10.23 14.8438 9.02686 14.5596 7.94092 14.0625H7.58106L9.66455 18.75H13.0625C15.2163 18.75 16.9688 20.5024 16.9688 22.6562C16.9688 23.5391 16.6631 24.3452 16.1675 25H20.0938C21.3882 25 22.4375 23.9507 22.4375 22.6562V20.625C22.4375 17.0005 19.4995 14.0625 15.875 14.0625Z"
                      fill=""
                    />
                  </svg>
                  Patients
                </NavLink>
              </li>
              {/* <!-- Menu Item Calendar --> */}

              {/* <!-- Menu Item Profile --> */}
              <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out hover:bg-primary group hover:text-white dark:hover:bg-meta-4 dark:text-bodydark1 ${
                    pathname.includes('profile') &&
                    'bg-primary text-white dark:bg-meta-4'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-current"
                  >
                    <path
                      d="M19.7266 4.6875C20.0501 4.6875 20.3125 4.42515 20.3125 4.10156V2.14844C20.3125 1.82485 20.0501 1.5625 19.7266 1.5625H5.27344C4.94985 1.5625 4.6875 1.82485 4.6875 2.14844V4.3334C4.6875 4.65698 4.94985 4.91934 5.27344 4.91934H9.4375C10.7709 4.91934 11.794 5.40557 12.4146 6.25H5.27344C4.94985 6.25 4.6875 6.51235 4.6875 6.83594V8.78906C4.6875 9.11265 4.94985 9.375 5.27344 9.375H13.0252C12.7217 11.137 11.4158 12.2379 9.375 12.2379H5.27344C4.94985 12.2379 4.6875 12.5002 4.6875 12.8238V15.4123C4.6875 15.5758 4.75586 15.7319 4.87603 15.8429L12.9352 23.2821C13.0434 23.382 13.1853 23.4375 13.3326 23.4375H17.364C17.8974 23.4375 18.1533 22.7828 17.7614 22.421L10.3941 15.6204C14.1294 15.5062 16.7976 13.0132 17.1479 9.375H19.7266C20.0501 9.375 20.3125 9.11265 20.3125 8.78906V6.83594C20.3125 6.51235 20.0501 6.25 19.7266 6.25H16.8608C16.6906 5.68647 16.4565 5.16377 16.1649 4.6875H19.7266Z"
                      fill=""
                    />
                  </svg>
                  Revenue
                </NavLink>
              </li>
              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Tables --> */}
              <li>
                <NavLink
                  to="/tables"
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out hover:bg-primary group hover:text-white dark:hover:bg-meta-4 dark:text-bodydark1 ${
                    pathname.includes('tables') &&
                    'bg-primary text-white dark:bg-meta-4'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-current"
                  >
                    <g clip-path="url(#clip0_562_2073)">
                      <path
                        d="M21.8311 5.46874C20.1611 5.49316 18.7891 6.85546 18.7549 8.52538C18.7305 9.71191 19.3652 10.7519 20.3174 11.2988V16.7969C20.3174 19.5947 17.8662 21.875 14.8486 21.875C11.9189 21.875 9.5166 19.7217 9.38477 17.0312C12.9395 16.2988 15.625 13.1445 15.625 9.37499V1.7871C15.625 1.23046 15.2295 0.747064 14.6826 0.639642L11.6113 0.0244078C10.9766 -0.102545 10.3613 0.307611 10.2344 0.942376L10.0781 1.70898C9.95117 2.34374 10.3613 2.95898 10.9961 3.08593L12.4951 3.38378V9.31152C12.4951 11.8945 10.4346 14.0332 7.85156 14.0576C5.24414 14.082 3.12012 11.9726 3.12012 9.37011V3.38867L4.61914 3.09081C5.25391 2.96386 5.66406 2.34863 5.53711 1.71386L5.38574 0.947259C5.25879 0.312494 4.64355 -0.0976625 4.00879 0.0292906L0.942383 0.634759C0.395508 0.747064 0 1.22558 0 1.7871V9.37499C0 13.1494 2.69043 16.3086 6.25488 17.0312C6.38184 21.4453 10.1855 25 14.8438 25C19.5801 25 23.4375 21.3184 23.4375 16.7969V11.2988C24.3701 10.7568 25 9.75097 25 8.59374C25 6.85058 23.5742 5.44433 21.8311 5.46874ZM21.875 9.37499C21.4453 9.37499 21.0938 9.02343 21.0938 8.59374C21.0938 8.16406 21.4453 7.81249 21.875 7.81249C22.3047 7.81249 22.6562 8.16406 22.6562 8.59374C22.6562 9.02343 22.3047 9.37499 21.875 9.37499Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_562_2073">
                        <rect width="25" height="25" fill="" />
                      </clipPath>
                    </defs>
                  </svg>
                  Fellow Doctors
                </NavLink>
              </li>
              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <NavLink
                  to="/settings"
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out hover:bg-primary group hover:text-white dark:hover:bg-meta-4 dark:text-bodydark1 ${
                    pathname.includes('settings') &&
                    'bg-primary text-white dark:bg-meta-4'
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 25 25"
                    fill="none"
                    className="fill-current"
                  >
                    <g clip-path="url(#clip0_562_2077)">
                      <path
                        d="M21.0938 15.625H19.5312C19.324 15.625 19.1253 15.7073 18.9788 15.8538C18.8323 16.0003 18.75 16.199 18.75 16.4062V21.875H3.125V6.25H10.1562C10.3635 6.25 10.5622 6.16769 10.7087 6.02118C10.8552 5.87466 10.9375 5.67595 10.9375 5.46875V3.90625C10.9375 3.69905 10.8552 3.50034 10.7087 3.35382C10.5622 3.20731 10.3635 3.125 10.1562 3.125H2.34375C1.72215 3.125 1.12601 3.37193 0.686468 3.81147C0.24693 4.25101 0 4.84715 0 5.46875L0 22.6562C0 23.2779 0.24693 23.874 0.686468 24.3135C1.12601 24.7531 1.72215 25 2.34375 25H19.5312C20.1529 25 20.749 24.7531 21.1885 24.3135C21.6281 23.874 21.875 23.2779 21.875 22.6562V16.4062C21.875 16.199 21.7927 16.0003 21.6462 15.8538C21.4997 15.7073 21.301 15.625 21.0938 15.625ZM23.8281 0H17.5781C16.5347 0 16.0132 1.26514 16.748 2.00195L18.4927 3.74658L6.5918 15.6431C6.48255 15.7519 6.39586 15.8813 6.33672 16.0237C6.27757 16.1662 6.24712 16.3189 6.24712 16.4731C6.24712 16.6274 6.27757 16.7801 6.33672 16.9225C6.39586 17.065 6.48255 17.1944 6.5918 17.3032L7.69873 18.4082C7.8076 18.5175 7.93697 18.6041 8.07941 18.6633C8.22186 18.7224 8.37457 18.7529 8.52881 18.7529C8.68304 18.7529 8.83576 18.7224 8.9782 18.6633C9.12065 18.6041 9.25002 18.5175 9.35889 18.4082L21.2539 6.50977L22.998 8.25195C23.7305 8.98438 25 8.47168 25 7.42188V1.17188C25 0.861074 24.8765 0.563003 24.6568 0.343234C24.437 0.123465 24.1389 0 23.8281 0Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_562_2077">
                        <rect width="25" height="25" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Request Feature
                </NavLink>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              ANALYTICS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              {/* <!-- Menu Item Chart --> */}
              <li>
                <NavLink
                  to="/chart"
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out hover:bg-primary group hover:text-white dark:hover:bg-meta-4 dark:text-bodydark1 ${
                    pathname.includes('chart') &&
                    'bg-primary text-white dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_130_9801)">
                      <path
                        d="M10.8563 0.55835C10.5188 0.55835 10.2095 0.8396 10.2095 1.20522V6.83022C10.2095 7.16773 10.4907 7.4771 10.8563 7.4771H16.8751C17.0438 7.4771 17.2126 7.39272 17.3251 7.28022C17.4376 7.1396 17.4938 6.97085 17.4938 6.8021C17.2688 3.28647 14.3438 0.55835 10.8563 0.55835ZM11.4751 6.15522V1.8521C13.8095 2.13335 15.6938 3.8771 16.1438 6.18335H11.4751V6.15522Z"
                        fill=""
                      />
                      <path
                        d="M15.3845 8.7427H9.1126V2.69582C9.1126 2.35832 8.83135 2.07707 8.49385 2.07707C8.40947 2.07707 8.3251 2.07707 8.24072 2.07707C3.96572 2.04895 0.506348 5.53645 0.506348 9.81145C0.506348 14.0864 3.99385 17.5739 8.26885 17.5739C12.5438 17.5739 16.0313 14.0864 16.0313 9.81145C16.0313 9.6427 16.0313 9.47395 16.0032 9.33332C16.0032 8.99582 15.722 8.7427 15.3845 8.7427ZM8.26885 16.3083C4.66885 16.3083 1.77197 13.4114 1.77197 9.81145C1.77197 6.3802 4.47197 3.53957 7.8751 3.3427V9.36145C7.8751 9.69895 8.15635 10.0083 8.52197 10.0083H14.7938C14.6813 13.4958 11.7845 16.3083 8.26885 16.3083Z"
                        fill=""
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_130_9801">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0 0.052124)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Chart
                </NavLink>
              </li>
              {/* <!-- Menu Item Chart --> */}

              {/* <!-- Menu Item Ui Elements --> */}
              <SidebarLinkGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out hover:bg-primary group hover:text-white dark:hover:bg-meta-4 dark:text-bodydark1 ${
                          (pathname === '/ui' || pathname.includes('ui')) &&
                          'bg-primary text-white dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_130_9807)">
                            <path
                              d="M15.7501 0.55835H2.2501C1.29385 0.55835 0.506348 1.34585 0.506348 2.3021V7.53335C0.506348 8.4896 1.29385 9.2771 2.2501 9.2771H15.7501C16.7063 9.2771 17.4938 8.4896 17.4938 7.53335V2.3021C17.4938 1.34585 16.7063 0.55835 15.7501 0.55835ZM16.2563 7.53335C16.2563 7.8146 16.0313 8.0396 15.7501 8.0396H2.2501C1.96885 8.0396 1.74385 7.8146 1.74385 7.53335V2.3021C1.74385 2.02085 1.96885 1.79585 2.2501 1.79585H15.7501C16.0313 1.79585 16.2563 2.02085 16.2563 2.3021V7.53335Z"
                              fill=""
                            />
                            <path
                              d="M6.13135 10.9646H2.2501C1.29385 10.9646 0.506348 11.7521 0.506348 12.7083V15.8021C0.506348 16.7583 1.29385 17.5458 2.2501 17.5458H6.13135C7.0876 17.5458 7.8751 16.7583 7.8751 15.8021V12.7083C7.90322 11.7521 7.11572 10.9646 6.13135 10.9646ZM6.6376 15.8021C6.6376 16.0833 6.4126 16.3083 6.13135 16.3083H2.2501C1.96885 16.3083 1.74385 16.0833 1.74385 15.8021V12.7083C1.74385 12.4271 1.96885 12.2021 2.2501 12.2021H6.13135C6.4126 12.2021 6.6376 12.4271 6.6376 12.7083V15.8021Z"
                              fill=""
                            />
                            <path
                              d="M15.75 10.9646H11.8688C10.9125 10.9646 10.125 11.7521 10.125 12.7083V15.8021C10.125 16.7583 10.9125 17.5458 11.8688 17.5458H15.75C16.7063 17.5458 17.4938 16.7583 17.4938 15.8021V12.7083C17.4938 11.7521 16.7063 10.9646 15.75 10.9646ZM16.2562 15.8021C16.2562 16.0833 16.0312 16.3083 15.75 16.3083H11.8688C11.5875 16.3083 11.3625 16.0833 11.3625 15.8021V12.7083C11.3625 12.4271 11.5875 12.2021 11.8688 12.2021H15.75C16.0312 12.2021 16.2562 12.4271 16.2562 12.7083V15.8021Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_130_9807">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        UI Elements
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/ui/alerts"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Alerts
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/ui/buttons"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Buttons
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Ui Elements --> */}

              {/* <!-- Menu Item Auth Pages --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to="#"
                        className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out hover:bg-primary group hover:text-white dark:hover:bg-meta-4 dark:text-bodydark1 ${
                          (pathname === '/auth' || pathname.includes('auth')) &&
                          'bg-primary text-white dark:bg-meta-4'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <svg
                          className="fill-current"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_130_9814)">
                            <path
                              d="M12.7127 0.55835H9.53457C8.80332 0.55835 8.18457 1.1771 8.18457 1.90835V3.84897C8.18457 4.18647 8.46582 4.46772 8.80332 4.46772C9.14082 4.46772 9.45019 4.18647 9.45019 3.84897V1.88022C9.45019 1.82397 9.47832 1.79585 9.53457 1.79585H12.7127C13.3877 1.79585 13.9221 2.33022 13.9221 3.00522V15.0709C13.9221 15.7459 13.3877 16.2802 12.7127 16.2802H9.53457C9.47832 16.2802 9.45019 16.2521 9.45019 16.1959V14.2552C9.45019 13.9177 9.16894 13.6365 8.80332 13.6365C8.43769 13.6365 8.18457 13.9177 8.18457 14.2552V16.1959C8.18457 16.9271 8.80332 17.5459 9.53457 17.5459H12.7127C14.0908 17.5459 15.1877 16.4209 15.1877 15.0709V3.03335C15.1877 1.65522 14.0627 0.55835 12.7127 0.55835Z"
                              fill=""
                            />
                            <path
                              d="M10.4346 8.60205L7.62207 5.7333C7.36895 5.48018 6.97519 5.48018 6.72207 5.7333C6.46895 5.98643 6.46895 6.38018 6.72207 6.6333L8.46582 8.40518H3.45957C3.12207 8.40518 2.84082 8.68643 2.84082 9.02393C2.84082 9.36143 3.12207 9.64268 3.45957 9.64268H8.49395L6.72207 11.4427C6.46895 11.6958 6.46895 12.0896 6.72207 12.3427C6.83457 12.4552 7.00332 12.5114 7.17207 12.5114C7.34082 12.5114 7.50957 12.4552 7.62207 12.3145L10.4346 9.4458C10.6877 9.24893 10.6877 8.85518 10.4346 8.60205Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_130_9814">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.052124)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        Authentication
                        <svg
                          className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                            open && 'rotate-180'
                          }`}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                            fill=""
                          />
                        </svg>
                      </NavLink>
                      {/* <!-- Dropdown Menu Start --> */}
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && 'hidden'
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li>
                            <NavLink
                              to="/auth/signin"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Sign In
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/auth/signup"
                              className={({ isActive }) =>
                                'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
                                (isActive && '!text-white')
                              }
                            >
                              Sign Up
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      {/* <!-- Dropdown Menu End --> */}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Auth Pages --> */}

              {/* <!-- Menu Item Calendar --> */}
              {/* <li>
                <NavLink
                  to="/"
                  className={`group relative flex items-center gap-2.5 rounded-md py-2 px-4 three-mili-sec-trans font-medium text-body duration-300 ease-in-out hover:bg-primary group hover:text-white dark:hover:bg-meta-4 dark:text-bodydark1 ${
                    pathname.includes('calendar') &&
                    'bg-primary text-white dark:bg-meta-4'
                  }`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7499 2.9812H14.2874V2.36245C14.2874 2.02495 14.0062 1.71558 13.6405 1.71558C13.2749 1.71558 12.9937 1.99683 12.9937 2.36245V2.9812H4.97803V2.36245C4.97803 2.02495 4.69678 1.71558 4.33115 1.71558C3.96553 1.71558 3.68428 1.99683 3.68428 2.36245V2.9812H2.2499C1.29365 2.9812 0.478027 3.7687 0.478027 4.75308V14.5406C0.478027 15.4968 1.26553 16.3125 2.2499 16.3125H15.7499C16.7062 16.3125 17.5218 15.525 17.5218 14.5406V4.72495C17.5218 3.7687 16.7062 2.9812 15.7499 2.9812ZM1.77178 8.21245H4.1624V10.9968H1.77178V8.21245ZM5.42803 8.21245H8.38115V10.9968H5.42803V8.21245ZM8.38115 12.2625V15.0187H5.42803V12.2625H8.38115ZM9.64678 12.2625H12.5999V15.0187H9.64678V12.2625ZM9.64678 10.9968V8.21245H12.5999V10.9968H9.64678ZM13.8374 8.21245H16.228V10.9968H13.8374V8.21245ZM2.2499 4.24683H3.7124V4.83745C3.7124 5.17495 3.99365 5.48433 4.35928 5.48433C4.7249 5.48433 5.00615 5.20308 5.00615 4.83745V4.24683H13.0499V4.83745C13.0499 5.17495 13.3312 5.48433 13.6968 5.48433C14.0624 5.48433 14.3437 5.20308 14.3437 4.83745V4.24683H15.7499C16.0312 4.24683 16.2562 4.47183 16.2562 4.75308V6.94683H1.77178V4.75308C1.77178 4.47183 1.96865 4.24683 2.2499 4.24683ZM1.77178 14.5125V12.2343H4.1624V14.9906H2.2499C1.96865 15.0187 1.77178 14.7937 1.77178 14.5125ZM15.7499 15.0187H13.8374V12.2625H16.228V14.5406C16.2562 14.7937 16.0312 15.0187 15.7499 15.0187Z"
                      fill=""
                    />
                  </svg>
                  Calendar
                </NavLink>
              </li> */}
              {/* <!-- Menu Item Calendar --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
