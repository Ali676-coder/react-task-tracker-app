import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  // ------------------------------------------
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  // ------------------------------------------
  return (
    <div className="home">
      {error && <h2>{error}</h2>}
      {isPending && <h2 style={{ fontSize: "40px" }}>loading...</h2>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
  // -------------------------------------------
};

export default Home;
