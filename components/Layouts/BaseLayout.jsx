import Header from "../Header/Header";

const BaseLayout = ({ children, className }) => {
     return (
        <>
        <Header />
        <div className="flex flex-col w-[100%] ">
          <main className="w-[100%] mx-auto relative flex flex-col flex-1 h-screen overflow-y-auto">
            {children}
          </main>
        </div>
      </>
     )
};

export default BaseLayout;