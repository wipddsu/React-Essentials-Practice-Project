export default function UserInput() {
  return (
    <main>
      <div id="user-input" className="input-group">
        <div>
          <label htmlFor="initial">initial investment</label>
          <input type="number" name="" id="initial" />
        </div>
        <div>
          <label htmlFor="annual">annual investment</label>
          <input type="number" name="" id="annual" />
        </div>
        <div>
          <label htmlFor="expected">expected return</label>
          <input type="number" name="" id="expected" />
        </div>
        <div>
          <label htmlFor="duration">duration</label>
          <input type="number" name="" id="duration" />
        </div>
      </div>
    </main>
  );
}
