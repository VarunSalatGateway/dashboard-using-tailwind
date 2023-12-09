import { Link } from 'react-router-dom';
import MobileDashboardBtn from './MobileDashboardBtn';

const TableTwoSecondStyle = () => {
  return (
    <div className="rounded-md border h-[550px] pt-32 w-full overflow-x-hidden table-scrollbar border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-2 absolute top-0 flex justify-between  w-full px-4 md:px-6 xl:px-7.5  bg-white   dark:bg-boxdark">
        <div>
          <p className="text-sm  text-body dark:text-white">
            Latest Appointments
          </p>
          <h4 className="text-xl font-semibold text-black mt-1 dark:text-white">
            Today’s Appointment List
          </h4>
        </div>
        <div className="block md:hidden">
          <MobileDashboardBtn />
        </div>
        <div className="py-[6px] hidden md:flex  gap-4">
          <button
            className="flex whitespace-nowrap h-fit  gap-2 rounded-md bg-gray px-3 py-2  font-medium text-black-2 group hover:bg-primary three-mili-sec-trans hover:text-white dark:bg-graydark dark:text-white"
            style={{ alignItems: 'center' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 25 26"
              fill="none"
              className="fill-current"
            >
              <path
                d="M24.8489 12.3663C22.4952 7.77388 17.8355 4.66667 12.5 4.66667C7.16447 4.66667 2.50345 7.77605 0.151018 12.3668C0.0517306 12.5632 0 12.7802 0 13.0002C0 13.2203 0.0517306 13.4373 0.151018 13.6337C2.50475 18.2261 7.16447 21.3333 12.5 21.3333C17.8355 21.3333 22.4965 18.224 24.8489 13.6333C24.9482 13.4368 25 13.2199 25 12.9998C25 12.7797 24.9482 12.5627 24.8489 12.3663ZM12.5 19.25C11.2638 19.25 10.0555 18.8834 9.02766 18.1967C7.99985 17.5099 7.19878 16.5338 6.72573 15.3918C6.25268 14.2497 6.12891 12.9931 6.37007 11.7807C6.61123 10.5683 7.20648 9.45467 8.08056 8.58059C8.95464 7.70651 10.0683 7.11125 11.2807 6.8701C12.493 6.62894 13.7497 6.75271 14.8917 7.22576C16.0338 7.69881 17.0099 8.49988 17.6967 9.52769C18.3834 10.5555 18.75 11.7639 18.75 13C18.7504 13.8209 18.589 14.6338 18.275 15.3922C17.9611 16.1507 17.5007 16.8399 16.9203 17.4203C16.3398 18.0008 15.6507 18.4611 14.8922 18.7751C14.1338 19.089 13.3208 19.2504 12.5 19.25ZM12.5 8.83334C12.1281 8.83854 11.7586 8.89387 11.4015 8.99783C11.6958 9.39787 11.8371 9.89015 11.7996 10.3854C11.7621 10.8806 11.5484 11.3461 11.1972 11.6973C10.846 12.0485 10.3806 12.2622 9.88537 12.2996C9.39012 12.3371 8.89784 12.1958 8.49781 11.9015C8.27001 12.7407 8.31113 13.6302 8.61538 14.4449C8.91962 15.2595 9.47167 15.9582 10.1938 16.4427C10.916 16.9271 11.7719 17.1729 12.641 17.1455C13.5102 17.118 14.3489 16.8187 15.039 16.2896C15.7291 15.7606 16.236 15.0284 16.4882 14.1962C16.7404 13.364 16.7253 12.4736 16.445 11.6504C16.1647 10.8272 15.6333 10.1127 14.9256 9.60734C14.2179 9.10199 13.3696 8.83129 12.5 8.83334Z"
                fill=""
              />
            </svg>
            Upcoming Appointments
          </button>
          <button
            className="flex whitespace-nowrap h-fit  gap-2 rounded-md  px-3 py-2 font-medium text-gray"
            style={{ alignItems: 'center' }}
            title="Refresh"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 25 26"
              fill="none"
              className="fill-body"
            >
              <g clip-path="url(#clip0_252_391)">
                <path
                  d="M18.1016 7.00781C16.5751 5.57852 14.5941 4.79502 12.4926 4.79688C8.71045 4.8002 5.44531 7.39346 4.5438 10.9907C4.47817 11.2526 4.24487 11.4375 3.9749 11.4375H1.1769C0.810791 11.4375 0.532666 11.1051 0.600391 10.7453C1.65688 5.13496 6.58267 0.890625 12.5 0.890625C15.7445 0.890625 18.691 2.1668 20.865 4.24438L22.6089 2.50049C23.3471 1.76226 24.6094 2.28511 24.6094 3.32915V9.875C24.6094 10.5222 24.0847 11.0469 23.4375 11.0469H16.8917C15.8476 11.0469 15.3248 9.78462 16.063 9.04634L18.1016 7.00781ZM1.5625 14.9531H8.10835C9.15239 14.9531 9.67524 16.2154 8.93701 16.9537L6.89844 18.9922C8.4249 20.4216 10.406 21.2051 12.5076 21.2032C16.2878 21.1998 19.5542 18.6083 20.4562 15.0094C20.5218 14.7475 20.7551 14.5626 21.0251 14.5626H23.8231C24.1893 14.5626 24.4674 14.895 24.3997 15.2548C23.3431 20.865 18.4173 25.1094 12.5 25.1094C9.25547 25.1094 6.30903 23.8332 4.13501 21.7556L2.39111 23.4995C1.65288 24.2377 0.390625 23.7149 0.390625 22.6708V16.125C0.390625 15.4778 0.915283 14.9531 1.5625 14.9531Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_252_391">
                  <rect
                    width="25"
                    height="25"
                    fill=""
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>

      <div className="grid absolute w-full bg-white top-[68px] grid-cols-3 border-t border-stroke py-4.5 px-4  md:grid-cols-8 md:px-6 2xl:px-7.5 dark:border-strokedark dark:bg-boxdark">
        <div className="col-span-1 md:col-span-1 hidden md:flex items-center">
          <p className="font-medium">No</p>
        </div>
        <div className="col-span-1 md:col-span-2 flex items-center">
          <p className="font-medium">Patient Name</p>
        </div>
        <div className="col-span-1 hidden items-center md:flex">
          <p className="font-medium">Time</p>
        </div>
        <div className="col-span-1 hidden md:flex items-center">
          <p className="font-medium">Date</p>
        </div>
        <div className="col-span-1 flex justify-center md:justify-start items-center">
          <p className="font-medium">Last visit</p>
        </div>
        <div className="col-span-1 hidden md:flex items-center">
          <p className="font-medium">Total visit</p>
        </div>
        <div className="col-span-1 flex justify-center md:justify-start items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {Array.from({ length: 10 }).map((_item, index) => (
        <div className="grid grid-cols-3 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:grid-cols-8 md:px-6 2xl:px-7.5">
          <div className="col-span-1  md:col-span-1 hidden md:flex items-center">
            <p className="font-medium">{index + 1}</p>
          </div>
          <div className="col-span-1 md:col-span-2  items-center">
            <h4 className="text-md font-medium">Shreeji Patel</h4>
            <p className="text-sm">Old Case</p>
          </div>
          <div className="col-span-1 hidden items-center sm:flex">
            <p className="font-medium">12:00 PM</p>
          </div>
          <div className="col-span-1 hidden md:flex items-center">
            <p className="font-medium">02-04-2023</p>
          </div>
          <div className="col-span-1 hidden md:flex items-center">
            <p className="font-medium">2 Days ago</p>
          </div>
          <div className="col-span-1 flex justify-center md:justify-start  items-center">
            <p className="font-medium">2 Times</p>
          </div>
          <div className="col-span-1 flex justify-end md:justify-start items-center">
            {index === 0 ? (
              <Link
                to="/"
                className="border-2 three-mili-sec-trans rounded-md py-1 px-4 border-success hover:bg-success hover:text-white text-xl text-black-2 dark:text-white "
              >
                Active
              </Link>
            ) : (
              <Link
                to="/"
                className="border-2 rounded-md three-mili-sec-trans hover:bg-body hover:text-white py-1 px-4 text-xl border-body text-body "
              >
                View
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwoSecondStyle;
