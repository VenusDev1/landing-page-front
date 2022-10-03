import Header from "../Header/Header";

const BaseLayout = ({ children, className, namePage }) => {
     return (
      <>
        <Header namePage={namePage} />
        <section className="flex flex-col w-[100%] ">
          <div className="w-[100%] mx-auto relative flex flex-col flex-1 h-screen overflow-y-auto">
            {children}
          </div>
        </section>
      </>
     )
};

export default BaseLayout;