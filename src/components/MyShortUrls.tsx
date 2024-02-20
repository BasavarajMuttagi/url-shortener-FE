import ShortUrlTable from "./ShortUrlTable";

function MyShortUrls({ data = [], title }: any) {

  console.log(data)
  return <ShortUrlTable data={data} title={title} />;
}

export default MyShortUrls;
