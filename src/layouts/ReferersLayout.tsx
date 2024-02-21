import RefererTable from "../components/RefererTable";
import BaseLayout from "./BaseLayout";

function ReferersLayout() {
  return (
    <BaseLayout>
      <div className="flex flex-col items-center mt-10 h-full">
        <RefererTable title={"Referers"} />
      </div>
    </BaseLayout>
  );
}

export default ReferersLayout;
