import CardFour from '../../components/CardFour.tsx';
import CardOne from '../../components/CardOne.tsx';
import CardThree from '../../components/CardThree.tsx';
import CardTwo from '../../components/CardTwo.tsx';
import TableTwoSecondStyle from '../../components/TableTwoSecondStyle.tsx';
import ChartOne from '../../components/ChartOne.tsx';
import ChartThree from '../../components/ChartThree.tsx';
import ChartTwo from '../../components/ChartTwo.tsx';
import ChatCard from '../../components/ChatCard.tsx';
import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/TableOne.tsx';
import TableTwo from '../../components/TableTwo.tsx';

const ECommerce = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <CardOne />
        <CardTwo />
        <CardThree />
        {/* <CardFour /> */}
      </div>
      <div className="flex flex-col rounded-2xl overflow-hidden gap-10 mt-8 relative">
        {/* <TableOne /> */}
        {/* <TableTwo /> */}
        {/* <TableTwoSecondStyle /> */}
        {/* <TableThree /> */}
      </div>

      {/* <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
        <ChatCard />
      </div> */}
    </>
  );
};

export default ECommerce;
