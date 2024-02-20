

import Footer from "../components/Footer";



function BaseLayout({children}:any) {

  return (
    <div className="w-full space-y-10 overflow-y-scroll">
       {children}
      <Footer />
    </div>
  );
}

export default BaseLayout;