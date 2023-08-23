import { useRouteLoaderData } from "react-router-dom";

function CardPage() {
  const strikesList = useRouteLoaderData("root");
  console.log("strikesList from Card View: ", strikesList);

  return (
    <div>
      <h1>CardPage</h1>
      <h3 className="mt-4 font-bold uppercase">Cards View</h3>
    </div>
  );
}

export default CardPage;
