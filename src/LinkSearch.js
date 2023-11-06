function LinkSearch(props) {
  return (
    <div className="link-search">
      <input
        type="text"
        placeholder="Search"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
      <button onClick={() => props.setSearch('')}>Clear</button>
    </div>
  );
};

export { LinkSearch };