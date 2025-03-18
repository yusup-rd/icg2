const GameGroupSelector = () => {
  return (
    <>
      {/* Game Devs Select Desktop */}
      <div className="hidden w-0 flex-1 overflow-x-auto pb-3 xl:block">
        <div className="bg-primary/10 flex w-fit gap-1 rounded-2xl p-1 text-lg text-nowrap">
          <div className="bg-primary hover:bg-primary/80 cursor-pointer rounded-xl px-7 py-2.5 font-bold text-white duration-200">
            All
          </div>
          <div className="hover:bg-primary/20 text-primary/60 cursor-pointer rounded-xl px-7 py-2.5 duration-200">
            KAGAMING
          </div>
          <div className="hover:bg-primary/20 text-primary/60 cursor-pointer rounded-xl px-7 py-2.5 duration-200">
            CQ9
          </div>
          <div className="hover:bg-primary/20 text-primary/60 cursor-pointer rounded-xl px-7 py-2.5 duration-200">
            FC
          </div>
          <div className="hover:bg-primary/20 text-primary/60 cursor-pointer rounded-xl px-7 py-2.5 duration-200">
            JILI
          </div>
          <div className="hover:bg-primary/20 text-primary/60 cursor-pointer rounded-xl px-7 py-2.5 duration-200">
            PLAYSTAR
          </div>
          <div className="hover:bg-primary/20 text-primary/60 cursor-pointer rounded-xl px-7 py-2.5 duration-200">
            LIVE22
          </div>
          <div className="hover:bg-primary/20 text-primary/60 cursor-pointer rounded-xl px-7 py-2.5 duration-200">
            JDB
          </div>
        </div>
      </div>

      {/* Game Devs Select Small */}
      <div className="flex xl:hidden">
        <div className="w-0 flex-1 overflow-x-auto pb-3">
          <div className="flex items-center gap-3 text-sm text-nowrap">
            <div className="bg-primary hover:bg-primary/80 cursor-pointer rounded-full px-7 py-2.5 font-bold text-white duration-200">
              All
            </div>
            <div className="hover:bg-primary/20 text-primary/60 bg-secondary cursor-pointer rounded-full px-7 py-2.5 duration-200">
              KAGAMING
            </div>
            <div className="hover:bg-primary/20 text-primary/60 bg-secondary cursor-pointer rounded-full px-7 py-2.5 duration-200">
              CQ9
            </div>
            <div className="hover:bg-primary/20 text-primary/60 bg-secondary cursor-pointer rounded-full px-7 py-2.5 duration-200">
              FC
            </div>
            <div className="hover:bg-primary/20 text-primary/60 bg-secondary cursor-pointer rounded-full px-7 py-2.5 duration-200">
              JILI
            </div>
            <div className="hover:bg-primary/20 text-primary/60 bg-secondary cursor-pointer rounded-full px-7 py-2.5 duration-200">
              PLAYSTAR
            </div>
            <div className="hover:bg-primary/20 text-primary/60 bg-secondary cursor-pointer rounded-full px-7 py-2.5 duration-200">
              LIVE22
            </div>
            <div className="hover:bg-primary/20 text-primary/60 bg-secondary cursor-pointer rounded-full px-7 py-2.5 duration-200">
              JDB
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameGroupSelector;
