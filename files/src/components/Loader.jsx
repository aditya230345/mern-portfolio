const Loader = ({ hide }) => (
  <div className={`loader-overlay${hide ? ' hide' : ''}`}>
    <div className="loader-logo">AK.</div>
    <div className="loader-bar">
      <div className="loader-fill" />
    </div>
  </div>
);

export default Loader;
