import { Fragment } from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';

const Loader = ({ text }) => {
  return (
    <Fragment>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        <div className="relative w-64 h-64 text-center">
          <div className="flex items-center justify-center">
            <HiOutlineRefresh className="animate-spin w-6 h-6 mr-2" />
            <span className="text-xl">{text}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Loader;
