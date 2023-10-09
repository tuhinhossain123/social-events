const Reviews = () => {
  return (
    <div className="mt-10 mb-20">
      <h2 className="text-3xl font-serif font-semibold">Clients Review</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        <div className="bg-gray-100 p-5 rounded">
          <h3>
            Thank you so much for the beautiful arrangement! It's absolutely
            stunning and brightened up my day.
          </h3>
          <div className="flex items-center gap-4 pt-5">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src="https://i.ibb.co/9Y0Rrkh/img1-2.jpg"
              alt=""
            />
            <div>
              <h1 className="text-xl font-mono">Jenifa</h1>
              <h5 className="font-semibold text-xs">coustomer</h5>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded">
          <h3>
            Thank you so much for the beautiful arrangement! It's absolutely
            stunning and brightened up my day.
          </h3>
          <div className="flex items-center gap-4 pt-5">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src="https://i.ibb.co/BBpMTTm/img5.jpg"
              alt=""
            />
            <div>
              <h1 className="text-xl font-mono">joney</h1>
              <h5 className="font-semibold text-xs">coustomer</h5>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-5 rounded">
          <h3>
            Thank you so much for the beautiful arrangement! It's absolutely
            stunning and brightened up my day.
          </h3>
          <div className="flex items-center gap-4 pt-5">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src="https://i.ibb.co/Y8L9LMH/img4.jpg"
              alt=""
            />
            <div>
              <h1 className="text-xl font-mono">Jack</h1>
              <h5 className="font-semibold text-xs">coustomer</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
