const CardOne = () => {
  return (
    <div className="rounded-3xl overflow-hidden border relative  border-stroke cursor-pointer bg-white py-6 px-9 shadow-default  before:absolute before:w-full before:h-1 before:bg-primary before:bottom-0 before:left-0 dark:border-strokedark dark:bg-boxdark">
      <div className="flex  w-11.5 h-11.5 items-center justify-center rounded-full  bg-[#DEEDFC] dark:bg-meta-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          className="fill-primary dark:fill-white"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M24.1695 0.935937C22.8969 0.349219 21.493 0 20 0C15.8055 0 12.2266 2.58828 10.7414 6.25H17.0844L24.1695 0.935937ZM29.2586 6.25C28.6414 4.72891 27.6437 3.42188 26.4078 2.38125L21.2492 6.25H29.2586ZM20 20C25.5227 20 30 15.5227 30 10C30 9.57187 29.9258 9.16406 29.8742 8.75H10.1258C10.0734 9.16406 10 9.57187 10 10C10 15.5227 14.4773 20 20 20ZM8.75 23.4141V40H18.7703L11.0789 22.6938C10.277 22.8415 9.49531 23.0833 8.75 23.4141ZM2.5 36.25C2.5 38.3211 4.17891 40 6.25 40V25.0187C3.975 26.9445 2.5 29.7859 2.5 33V36.25ZM22.5 32.5H18.1734L21.507 40H22.5C24.568 40 26.25 38.318 26.25 36.25C26.25 34.182 24.568 32.5 22.5 32.5ZM27 22.5H25.6945C23.957 23.2953 22.032 23.75 20 23.75C17.968 23.75 16.043 23.2953 14.3055 22.5H13.7297L17.0633 30H22.5C25.9461 30 28.75 32.8039 28.75 36.25C28.75 37.6625 28.2609 38.9523 27.468 40H33.75C35.8211 40 37.5 38.3211 37.5 36.25V33C37.5 27.2008 32.7992 22.5 27 22.5Z"
            fill=""
          />
        </svg>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            46
          </h4>
          <span className="text-sm font-medium">Total Patients</span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-meta-3">
          0.43%
          <svg
            className="fill-meta-3"
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
              fill=""
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default CardOne;
